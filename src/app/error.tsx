"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary-blue mb-4">Oops!</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">Something went wrong</h2>
        <p className="text-foreground/70 mb-8">
          We're sorry for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center space-x-2 bg-primary-blue text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-all hover:shadow-xl"
        >
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
}
