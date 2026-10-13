'use client';

import { useState } from 'react';
import { submitWeb3Forms } from '@/lib/web3forms';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

type FormStatus = 'error' | 'idle' | 'submitting' | 'success';

const MAX_SUBMISSIONS_PER_HOUR = 3;
const SUBMISSION_WINDOW_MS = 60 * 60 * 1000;
const SUBMISSION_TIMES_STORAGE_KEY = 'adbuzz-contact-submission-times';
const MINIMUM_COMPLETION_TIME_MS = 3_000;

function getRecentSubmissionTimes() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedTimes: unknown = JSON.parse(window.localStorage.getItem(SUBMISSION_TIMES_STORAGE_KEY) ?? '[]');
    const windowStart = Date.now() - SUBMISSION_WINDOW_MS;

    return Array.isArray(storedTimes)
      ? storedTimes.filter((timestamp): timestamp is number => typeof timestamp === 'number' && timestamp > windowStart)
      : [];
  } catch {
    return [];
  }
}

function recordSubmission() {
  const submissionTimes = [...getRecentSubmissionTimes(), Date.now()];
  window.localStorage.setItem(SUBMISSION_TIMES_STORAGE_KEY, JSON.stringify(submissionTimes));
}

/** Collects and submits project enquiries. */
export function ContactForm(props: {
  accessKey?: string;
  budgetOptions: readonly string[];
  serviceOptions: readonly string[];
  timelineOptions: readonly string[];
}) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [startedAt] = useState(() => Date.now());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('website') || Date.now() - startedAt < MINIMUM_COMPLETION_TIME_MS) {
      setMessage('Unable to send your enquiry. Please try again shortly.');
      setStatus('error');
      return;
    }

    if (!props.accessKey) {
      setMessage('Enquiry delivery is unavailable.');
      setStatus('error');
      return;
    }

    if (getRecentSubmissionTimes().length >= MAX_SUBMISSIONS_PER_HOUR) {
      setMessage('You have reached the enquiry limit. Please try again in an hour.');
      setIsRateLimited(true);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    const result = await submitWeb3Forms({
      accessKey: props.accessKey,
      formData,
    });

    if (result.success) {
      form.reset();
      recordSubmission();
      setMessage('Your enquiry has been sent. Our team will contact you shortly.');
      setStatus('success');
      return;
    }

    setMessage(result.message);
    setStatus('error');
  }

  if (status === 'success') {
    return (
      <div className="bg-card p-8 text-center ring-1 ring-border" role="status">
        <p className="text-xs font-bold tracking-[0.2em] text-primary">ENQUIRY SENT</p>
        <h3 className="mt-4 text-2xl font-black tracking-[-0.04em]">Thank you for reaching out.</h3>
        <p className="mx-auto mt-3 max-w-md leading-7 text-muted-foreground">{message}</p>
      </div>
    );
  }

  return (
    <form className="bg-card p-6 ring-1 ring-border" aria-describedby="form-note" onSubmit={handleSubmit}>
      <div
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <FieldGroup>
        <FieldGroup className="md:grid md:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input id="name" name="name" autoComplete="name" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="business">Business / brand name</FieldLabel>
            <Input id="business" name="business" autoComplete="organization" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Phone or WhatsApp number</FieldLabel>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email address</FieldLabel>
            <Input id="email" name="email" type="email" autoComplete="email" required />
          </Field>
        </FieldGroup>
        <Field>
          <FieldLabel htmlFor="service">Service needed</FieldLabel>
          <Select name="service" required>
            <SelectTrigger id="service">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {props.serviceOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="project">Tell us about your project</FieldLabel>
          <Textarea id="project" name="project" rows={5} required />
        </Field>
        <FieldGroup className="md:grid md:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="timeline">
              Preferred timeline <span className="font-normal text-muted-foreground">(optional)</span>
            </FieldLabel>
            <Select name="timeline">
              <SelectTrigger id="timeline">
                <SelectValue placeholder="Select a timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {props.timelineOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="budget">
              Estimated budget <span className="font-normal text-muted-foreground">(optional)</span>
            </FieldLabel>
            <Select name="budget">
              <SelectTrigger id="budget">
                <SelectValue placeholder="Select a budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {props.budgetOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
        <Field orientation="horizontal">
          <Checkbox id="consent" name="consent" required />
          <FieldContent>
            <FieldLabel htmlFor="consent">I agree to be contacted about my enquiry.</FieldLabel>
            <FieldDescription>Your details are used only to respond to this enquiry.</FieldDescription>
          </FieldContent>
        </Field>
        <p
          id="form-note"
          className={status === 'error' ? 'text-sm text-destructive' : 'text-sm text-muted-foreground'}
          role={status === 'idle' ? undefined : 'status'}
        >
          {status === 'idle' ? 'Our team will respond to your enquiry by email or phone.' : message}
        </p>
        <Button
          type="submit"
          disabled={status === 'submitting' || isRateLimited}
          className="w-full rounded-none"
        >
          {status === 'submitting' ? 'Sending enquiry…' : 'Send Project Enquiry'}
        </Button>
      </FieldGroup>
    </form>
  );
}
