import { FolderInput, Rocket, ShieldCheck, Terminal, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Terminal,
    title: "Zero Terminal",
    description: "Instalação e verificação de ferramentas com um clique.",
  },
  {
    icon: Rocket,
    title: "Deploy em Tempo Real",
    description: "Seu aplicativo ganha link seguro para abrir no celular.",
  },
  {
    icon: ShieldCheck,
    title: "Fotos e Dados Seguros",
    description: "Armazenamento integrado na nuvem sem precisar configurar banco.",
  },
  {
    icon: FolderInput,
    title: "Migração Fácil",
    description: "Permite importar projetos e arquivos antigos com facilidade.",
  },
];

export function Features() {
  return (
    <section id="recursos" className="scroll-mt-20 border-t border-white/5 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-emerald-400">Infraestrutura invisível</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Toda a parte difícil acontece por trás das cortinas.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Repositório, publicação e banco de dados são configurados automaticamente. Você só
            pensa no que quer criar.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group bg-zinc-950 p-7 transition-colors hover:bg-zinc-900/60 sm:p-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-zinc-100">{title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
