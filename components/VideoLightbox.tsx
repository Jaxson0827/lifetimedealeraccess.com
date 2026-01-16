"use client";

import { useEffect, useMemo, useState } from "react";

type VideoLightboxProps = {
  videoId: string;
  label?: string;
};

const defaultLabel = "Watch our story";

export default function VideoLightbox({
  videoId,
  label = defaultLabel,
}: VideoLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const embedSrc = useMemo(
    () =>
      `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`,
    [videoId]
  );

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 flex items-center justify-center text-white"
        aria-label={label}
      >
        <span className="absolute inset-0 bg-black/25 transition-colors duration-200 hover:bg-black/35" />
        <span className="relative flex flex-col items-center gap-2 sm:gap-3 transition-transform duration-200 hover:scale-[1.04]">
          <span className="relative inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gold/20 ring-1 ring-gold/50 backdrop-blur-sm shadow-[0_18px_35px_-10px_rgba(0,0,0,0.65)]">
            <span className="absolute -inset-2 rounded-full bg-gold/10 blur-md" />
            <span className="absolute inset-0 rounded-full ring-2 ring-gold/35" />
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="relative z-10 h-5 w-5 sm:h-6 sm:w-6 translate-x-0.5 fill-white"
            >
              <path d="M8 5.14v13.72c0 .72.78 1.17 1.39.8l10.26-6.86a1 1 0 0 0 0-1.66L9.39 4.34A1 1 0 0 0 8 5.14z" />
            </svg>
          </span>
          <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold tracking-wide text-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {label}
          </span>
        </span>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-8">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close video"
          />
          <div className="relative z-10 w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/15">
              <div className="aspect-video w-full">
                <iframe
                  title="Lifetime Auto Sales video"
                  src={embedSrc}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[12px] font-semibold text-white ring-1 ring-white/20 transition hover:bg-black/80"
                aria-label="Close"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
