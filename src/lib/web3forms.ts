type Web3FormsResponse = {
  message?: string;
  success?: boolean;
};

type SubmitWeb3FormsResult = {
  message: string;
  success: boolean;
};

function isWeb3FormsResponse(value: unknown): value is Web3FormsResponse {
  return typeof value === 'object' && value !== null;
}

/** Submits an enquiry to Web3Forms. */
export async function submitWeb3Forms(props: {
  accessKey: string;
  formData: FormData;
}): Promise<SubmitWeb3FormsResult> {
  props.formData.append('access_key', props.accessKey);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: props.formData,
      signal: AbortSignal.timeout(15_000),
    });
    const body: unknown = await response.json();

    if (isWeb3FormsResponse(body) && response.ok && body.success) {
      return { success: true, message: body.message ?? '' };
    }

    return {
      success: false,
      message: isWeb3FormsResponse(body) ? (body.message ?? 'Unable to send your enquiry.') : 'Unable to send your enquiry.',
    };
  } catch {
    return { success: false, message: 'Unable to send your enquiry. Please try again shortly.' };
  }
}
