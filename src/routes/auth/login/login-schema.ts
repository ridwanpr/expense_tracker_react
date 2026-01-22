import * as z from "zod";

export const LoginInputSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6).max(250),
});
