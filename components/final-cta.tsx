import { DownloadButton } from "./download-button";

export function FinalCta() {
  return (
    <section className="border-t border-white/5 px-5 py-24 sm:px-8">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]"
        />
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-zinc-100 sm:text-4xl">
          Sua próxima ideia pode estar no ar ainda hoje.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
          Baixe o CriaFácil Hub e comece a criar conversando.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <DownloadButton />
          <p className="text-sm text-zinc-500">Requer Windows 10 ou 11 • Gratuito para a família</p>
        </div>
      </div>
    </section>
  );
}
