/** Use in-page hashes on the homepage and root-relative hashes everywhere else. */
export function samePageHref(href: string, pathname: string): string {
  const path = pathname.replace(/\/$/, "") || "/";
  if (href.startsWith("/#") && path === "/") return href.slice(1);
  return href;
}

export function isExternal(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
