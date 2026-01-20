import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userStore = create(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (token: string) => set({ token }),
    }),
    {
      name: "user-store",
    },
  ),
);
