import { apiClient } from "../lib/api-client";
import type { RegisterInput, RegisterResponse } from "../types/auth";

export async function registerUser(request: RegisterInput) {
  const response = await apiClient.post<RegisterResponse>(
    "/auth/register",
    request,
  );
  return response.data;
}
