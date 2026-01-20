import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./routes/layouts/app-layout.tsx";
import LandingLayout from "./routes/layouts/landing-layout.tsx";
import AuthLayout from "./routes/auth/auth-layout.tsx";
import Login from "./routes/auth/login/index.tsx";
import Register from "./routes/auth/register/index.tsx";
import Dashboard from "./routes/dashboard/index.tsx";
import Home from "./routes/home/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
          <Route element={<LandingLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
