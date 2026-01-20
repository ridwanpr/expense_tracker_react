import type { ZodError } from "zod";

export function formatZodErrors(error: ZodError): Record<string, string[]> {
  return error.issues.reduce(
    (acc, issue) => {
      const field = issue.path.join(".") || "root";
      acc[field] = [...(acc[field] || []), issue.message];
      return acc;
    },
    {} as Record<string, string[]>,
  );
}
