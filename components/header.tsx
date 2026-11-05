import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5 font-semibold text-zinc-100">
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 text-zinc-950">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          CriaFácil
        </a>
        <nav className="flex items-center gap-1 text-sm text-zinc-400">
          <a href="#como-funciona" className="hidden rounded-md px-3 py-2 transition-colors hover:text-zinc-100 sm:inline-block">
            Como funciona
          </a>
          <a href="#recursos" className="hidden rounded-md px-3 py-2 transition-colors hover:text-zinc-100 sm:inline-block">
            Recursos
          </a>
          <a
            href="#baixar"
            className="ml-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2 font-medium text-zinc-100 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
          >
            Baixar
          </a>
        </nav>
      </div>
    </header>
  );
}
