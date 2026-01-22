import { apiClient } from "../lib/api-client";
import type {
  LoginInput,
  LoginResponse,
  RegisterInput,
  RegisterResponse,
} from "../types/auth";

export async function registerUser(request: RegisterInput) {
  const response = await apiClient.post<RegisterResponse>(
    "/auth/register",
    request,
  );
  return response.data;
}

export async function loginUser(request: LoginInput) {
  const response = await apiClient.post<LoginResponse>("/auth/login", request);
  return response.data;
}
