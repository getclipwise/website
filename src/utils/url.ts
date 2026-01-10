/** Remove trailing slash from a pathname, preserving root "/". */
export function removeTrailingSlash(path: string): string {
  return path === "/" ? path : path.replace(/\/$/, "");
}
