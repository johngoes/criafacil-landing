import type { ReactNode } from "react";
import { ArrowRight, CircleCheck, ExternalLink, Globe, Sparkles } from "lucide-react";

const TOOLS = ["Node.js", "Git", "GitHub", "Vercel", "Banco de dados", "Claude Code"];

function Screen({ step, title, children }: { step: number; title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-950/80 p-5">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex size-6 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold text-zinc-300">
          {step}
        </span>
        <span className="text-sm font-medium text-zinc-300">{title}</span>
      </div>
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}

export function AppPreview() {
  return (
    <section aria-label="Prévia do CriaFácil Hub" className="px-5 pb-24 sm:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div
          aria-hidden="true"
          className="absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_65%)] blur-2xl"
        />

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-2xl shadow-black/60 backdrop-blur">
          {/* Barra de título da janela */}
          <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-3 rounded-full bg-zinc-700" />
              <span className="size-3 rounded-full bg-zinc-700" />
              <span className="size-3 rounded-full bg-zinc-700" />
            </div>
            <span className="flex-1 text-center text-xs font-medium text-zinc-500">CriaFácil Hub</span>
            <span className="w-12" aria-hidden="true" />
          </div>

          <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-3">
            {/* 1. Nome do app */}
            <Screen step={1} title="Dê um nome ao app">
              <p className="text-lg font-semibold text-zinc-100">Como vai se chamar o seu aplicativo?</p>
              <div className="mt-4 flex items-center rounded-lg border border-emerald-500/40 bg-zinc-900 px-3.5 py-3 ring-4 ring-emerald-500/10">
                <span className="text-zinc-100">Receitas da Vovó</span>
                <span className="caret ml-0.5 h-5 w-px bg-emerald-400" aria-hidden="true" />
              </div>
              <p className="mt-2 text-xs text-zinc-500">Endereço: receitas-da-vovo</p>
              <div className="mt-auto pt-6">
                <div className="flex items-center justify-center gap-2 rounded-lg bg-white py-2.5 text-sm font-semibold text-zinc-950">
                  Criar meu app <ArrowRight className="size-4" aria-hidden="true" />
                </div>
              </div>
            </Screen>

            {/* 2. Ferramentas prontas */}
            <Screen step={2} title="Tudo pronto para você">
              <ul className="space-y-2">
                {TOOLS.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-center justify-between rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-3 py-2"
                  >
                    <span className="text-sm text-zinc-300">{tool}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20">
                      <CircleCheck className="size-3" aria-hidden="true" />
                      Pronto
                    </span>
                  </li>
                ))}
              </ul>
            </Screen>

            {/* 3. App publicado + Claude Code */}
            <Screen step={3} title="Seu app está no ar!">
              <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2.5">
                <Globe className="size-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span className="truncate font-mono text-sm text-zinc-200">receitas-da-vovo.vercel.app</span>
                <ExternalLink className="ml-auto size-3.5 shrink-0 text-zinc-500" aria-hidden="true" />
              </div>

              <div className="mt-4 flex flex-1 flex-col rounded-lg border border-zinc-800 bg-black/40 p-3">
                <div className="mb-3 flex items-center gap-2 text-xs text-zinc-400">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  Claude Code rodando
                </div>
                <div className="space-y-2.5 text-sm">
                  <p className="ml-auto w-fit max-w-[85%] rounded-lg rounded-br-sm bg-zinc-800 px-3 py-2 text-zinc-200">
                    Quero uma tela com as receitas e uma foto de cada prato.
                  </p>
                  <div className="flex max-w-[90%] gap-2">
                    <Sparkles className="mt-1 size-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
                    <p className="text-zinc-400">
                      Prontinho! Criei a tela de receitas com espaço para fotos. Já está publicada no
                      seu link.
                    </p>
                  </div>
                </div>
              </div>
            </Screen>
          </div>
        </div>
      </div>
    </section>
  );
}
