import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { loginUser } from "../../../api/auth";
import { useUserStore } from "../../../store/user-store";

export const useLogin = () => {
  const navigate = useNavigate();
  const setAccessToken = useUserStore((state) => state.setAccessToken);

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      navigate("/dashboard");
    },
  });
};
