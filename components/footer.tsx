import { Activity } from "lucide-react";
import { API_STATUS_URL } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>CriaFácil by Goes • Feito para dar autonomia a quem cria.</p>
        <a
          href={API_STATUS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-zinc-600 transition-colors hover:text-zinc-300"
        >
          <Activity className="size-3.5" aria-hidden="true" />
          Status da API
        </a>
      </div>
    </footer>
  );
}
