import { Download, MessageSquare, PencilLine, type LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    icon: Download,
    title: "Baixe e instale o CriaFácil Hub",
    description: "Ele prepara tudo sozinho. Você só precisa clicar em “Avançar”.",
  },
  {
    icon: PencilLine,
    title: "Dê um nome ao seu novo aplicativo",
    description: "Escolha um nome do seu jeito. O Hub cria o projeto e o endereço na internet.",
  },
  {
    icon: MessageSquare,
    title: "Diga para a IA o que você quer ver na tela",
    description: "Escreva como se estivesse conversando com alguém. A IA monta e publica para você.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 border-t border-white/5 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-emerald-400">Como funciona</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Três passos simples. Nenhum código.
          </h2>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-zinc-600">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-zinc-100">{title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-400">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
