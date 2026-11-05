import { DownloadButton } from "./download-button";

export function Hero() {
  return (
    <section id="baixar" className="relative scroll-mt-20 px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-xs font-medium text-zinc-300 sm:text-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          CriaFácil Hub • Versão Desktop para Windows
        </span>

        <h1 className="mt-7 text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-6xl">
          <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Crie seus próprios aplicativos.
          </span>{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
            A gente cuida de todo o resto.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-zinc-400 sm:text-xl">
          Converse com a inteligência artificial para desenhar as suas telas e botões. O CriaFácil
          automatiza o banco de dados, repositórios e publica seu app na internet em minutos.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <DownloadButton />
          <p className="text-sm text-zinc-500">Requer Windows 10 ou 11 • Gratuito para a família</p>
        </div>
      </div>
    </section>
  );
}
