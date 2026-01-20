import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../../api/auth";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      alert("Registration successful. Please log in to continue.");
      navigate("/login");
    },
    onError: () => {},
  });
};
