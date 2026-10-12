'use client';

import { useEffect, useRef } from 'react';

const videoSource = '/brand/hero-brand-light-loop.mp4';
const maxCanvasDimension = 480;

export function HeroBrandVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    let frameId = 0;
    let lastFrameTime = 0;
    const isDarkTheme = () => document.documentElement.classList.contains('dark');
    const drawFrame = (timestamp: number) => {
      if (!isDarkTheme()) {
        frameId = 0;
        return;
      }
      if (timestamp - lastFrameTime < 33) {
        frameId = requestAnimationFrame(drawFrame);
        return;
      }
      lastFrameTime = timestamp;
      if (video.videoWidth && video.videoHeight) {
        const scale = Math.min(1, maxCanvasDimension / Math.max(video.videoWidth, video.videoHeight));
        const width = Math.round(video.videoWidth * scale);
        const height = Math.round(video.videoHeight * scale);
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }
        context.clearRect(0, 0, width, height);
        context.drawImage(video, 0, 0, width, height);
        const frame = context.getImageData(0, 0, width, height);
        for (let index = 0; index < frame.data.length; index += 4) {
          const red = frame.data[index] ?? 0;
          const green = frame.data[index + 1] ?? 0;
          const blue = frame.data[index + 2] ?? 0;
          const brightest = Math.max(red, green, blue);
          const darkest = Math.min(red, green, blue);
          if (brightest - darkest < 85 && darkest > 140) frame.data[index + 3] = 0;
        }
        context.putImageData(frame, 0, 0);
      }
      frameId = requestAnimationFrame(drawFrame);
    };
    const startCanvas = () => {
      if (isDarkTheme() && !frameId) frameId = requestAnimationFrame(drawFrame);
    };
    const observeTheme = new MutationObserver(startCanvas);
    observeTheme.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    video.addEventListener('canplay', startCanvas, { once: true });
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) startCanvas();

    return () => {
      cancelAnimationFrame(frameId);
      observeTheme.disconnect();
      video.removeEventListener('canplay', startCanvas);
    };
  }, []);

  return <div className="overflow-hidden"><video ref={videoRef} data-brand-hero-video className="aspect-square w-full object-cover dark:hidden" autoPlay loop muted playsInline preload="metadata" aria-label="AdBuzz Digital light-theme brand animation"><source src={videoSource} type="video/mp4" />Your browser does not support the brand video.</video><canvas ref={canvasRef} className="hidden aspect-square w-full object-cover dark:block" aria-label="AdBuzz Digital dark-theme brand animation" /></div>;
}
