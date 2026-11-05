/**
 * URL do instalador oficial do CriaFácil Hub.
 * Configure via variável de ambiente NEXT_PUBLIC_DOWNLOAD_URL (inlined no build).
 * Enquanto não estiver definida, o botão de download mostra um aviso de "em breve".
 */
export const DOWNLOAD_URL: string = process.env.NEXT_PUBLIC_DOWNLOAD_URL || "#";

export const IS_DOWNLOAD_AVAILABLE = DOWNLOAD_URL !== "#";

export const API_STATUS_URL = "https://api-criafacil.goes.dev.br/up";

export const SITE_URL = "https://criafacil.goes.dev.br";
