/** Inline icons ported from the approved mockup. */
export function ic(path: string, color = "#c4b5fd", size = 16): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

export const P_DROP = '<path d="M12 3s6 7 6 11a6 6 0 01-12 0c0-4 6-11 6-11z"/>';
export const P_QR =
  '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="M14 14h2v2h-2zM18 18h2v2h-2zM18 14h2M14 18v2"/>';
export const P_PIN =
  '<path d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>';
export const P_CHART = '<path d="M4 19V10M10 19V5M16 19v-6M22 19H2"/>';
export const P_SPARK =
  '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>';
export const P_BOLT = '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>';
export const P_USERS =
  '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M16 5a3 3 0 010 6M18 15c2 .6 3 2.3 3 5"/>';
export const P_BOX = '<path d="M4 8l8-4 8 4-8 4zM4 12l8 4 8-4M4 16l8 4 8-4"/>';
export const P_TRUCK =
  '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>';
export const P_HOME = '<path d="M4 11l8-7 8 7v9H4z"/>';
export const P_CART =
  '<path d="M6 6h15l-2 9H8zM6 6L5 3H2"/><circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/>';
export const P_LOOP =
  '<path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3M18 3v4h-4M6 21v-4h4"/>';
export const P_BELL = '<path d="M6 16V11a6 6 0 1112 0v5l2 2H4zM10 21h4"/>';
export const P_CHECK = '<path d="M5 12l4 4 10-10"/>';
export const P_LOCK = '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>';
export const P_SEARCH = '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/>';

export const QR_SVG =
  '<svg viewBox="0 0 21 21" width="100%" height="100%" shape-rendering="crispEdges"><path fill="#0b0c24" d="M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2zM14 0h7v7h-7zM15 1v5h5V1zM16 2h3v3h-3zM0 14h7v7H0zM1 15v5h5v-5zM2 16h3v3H2zM8 0h1v2H8zM10 1h2v1h-2zM9 3h2v2H9zM12 3h1v3h-1zM8 6h1v2H8zM10 7h3v1h-3zM0 8h2v1H0zM3 8h3v1H3zM14 8h2v2h-2zM17 8h4v1h-4zM8 9h2v2H8zM11 9h2v3h-2zM2 10h3v1H2zM18 10h2v2h-2zM0 11h1v2H0zM6 10h1v3H6zM14 11h3v1h-3zM3 12h2v1H3zM8 12h2v1H8zM13 13h2v2h-2zM16 13h5v1h-5zM8 14h1v3H8zM10 14h2v1h-2zM17 15h2v2h-2zM10 16h3v1h-3zM14 16h2v3h-2zM20 16h1v5h-1zM8 18h2v3H8zM11 18h2v1h-2zM17 18h2v1h-2zM11 20h5v1h-5z"/></svg>';

export const APPLE =
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.9-.8-3.1-.8C6.8 7.3 5.3 8.2 4.5 9.7c-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.8c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7 0 0-2.6-1-2.7-4.1zM14.1 5.8c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.4z"/></svg>';

export const PLAY =
  '<svg width="20" height="22" viewBox="0 0 24 26"><path d="M1 1l13 12L1 25c-.4-.3-.6-.8-.6-1.4V2.4C.4 1.8.6 1.3 1 1z" fill="#2dd4bf"/><path d="M14 13l4-4 5 2.8c1.2.7 1.2 1.8 0 2.4L18 17z" fill="#fcd34d"/><path d="M1 1c.4-.3 1-.3 1.6 0L18 9l-4 4z" fill="#34d399"/><path d="M14 13l4 4-15.4 8.8c-.6.3-1.2.3-1.6 0z" fill="#f87171"/></svg>';
