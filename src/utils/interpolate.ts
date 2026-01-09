/**
 * Interpolates placeholders in a string with values from a record.
 * Placeholders use the format {key}.
 *
 * @example
 * interpolate("{count} items left", { count: 5 }) // "5 items left"
 */
export function interpolate(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(values[key] ?? `{${key}}`)
  );
}
