import type { SVGProps } from "react";

/** Logotipo do Windows (lucide-react não inclui marcas). */
export function WindowsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3 5.1 10.4 4v7.1H3V5.1Zm0 13.8 7.4 1.1v-7.1H3v6Zm8.3 1.2L21 21.5v-8.6h-9.7v7.2Zm0-16.2v7.2H21V2.5l-9.7 1.4Z" />
    </svg>
  );
}
