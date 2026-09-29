/** A visible placeholder chip is any value still wrapped in square brackets. */
export function isPlaceholder(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.startsWith("[") && trimmed.endsWith("]");
}

export function imageAlt(label: string, alt = ""): string {
  if (alt.trim()) return alt.trim();
  return isPlaceholder(label) ? "" : label;
}
