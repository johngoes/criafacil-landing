"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { Download, Info, X } from "lucide-react";
import { DOWNLOAD_URL, IS_DOWNLOAD_AVAILABLE } from "@/lib/config";
import { WindowsIcon } from "./windows-icon";

type DownloadButtonProps = {
  className?: string;
};

export function DownloadButton({ className = "" }: DownloadButtonProps) {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (!showNotice) return;
    const timer = window.setTimeout(() => setShowNotice(false), 5000);
    return () => window.clearTimeout(timer);
  }, [showNotice]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!IS_DOWNLOAD_AVAILABLE) {
      event.preventDefault();
      setShowNotice(true);
    }
  }

  return (
    <>
      <a
        href={DOWNLOAD_URL}
        onClick={handleClick}
        {...(IS_DOWNLOAD_AVAILABLE ? { download: true } : {})}
        className={`group relative inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-white px-7 text-base font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_40px_-8px_rgba(16,185,129,0.45)] transition-all hover:bg-zinc-100 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_8px_50px_-6px_rgba(16,185,129,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 active:scale-[0.98] ${className}`}
      >
        <WindowsIcon className="size-5" />
        <span>Baixar para Windows (.exe)</span>
        <Download
          className="size-5 text-zinc-500 transition-transform group-hover:translate-y-0.5"
          aria-hidden="true"
        />
      </a>

      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
      >
        {showNotice && (
          <div className="toast-in pointer-events-auto flex w-full max-w-md items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/95 p-4 text-left shadow-2xl shadow-black/50 backdrop-blur">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              <Info className="size-4" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-zinc-100">Quase lá!</p>
              <p className="mt-0.5 text-sm text-zinc-400">
                O instalador oficial estará disponível para download em breve.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowNotice(false)}
              className="rounded-md p-1 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-200"
              aria-label="Fechar aviso"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
