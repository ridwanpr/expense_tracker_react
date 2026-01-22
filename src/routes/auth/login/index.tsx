import { Link } from "react-router";
import { InputGroup } from "../../../components/ui/input-group";
import { useState } from "react";
import { LoginInputSchema } from "./login-schema";
import { formatZodErrors } from "../../../utils/format-zod-errors";
import { useLogin } from "./use-login";

export default function Login() {
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  const loginMutation = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const validatedFormData = LoginInputSchema.safeParse(formData);
    if (!validatedFormData.success) {
      setErrors(formatZodErrors(validatedFormData.error));
      return;
    }

    loginMutation.mutate({
      username: formData.username,
      password: formData.password,
    });
  };

  return (
    <>
      <div className="bg-white min-w-md p-8 rounded-lg shadow-md flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center">
          <Link to="/" className="font-bold text-md text-blue-800">
            Expense Tracker
          </Link>
          <h1 className="text-2xl font-bold">Login to Your Account</h1>
          <p className="text-md">Please enter your information</p>
        </div>
        <hr className="border-gray-200 border" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <InputGroup
              type="text"
              id="username"
              label="Username"
              name="username"
              placeholder="Your Username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username[0]}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <InputGroup
              type="password"
              id="password"
              label="Password"
              name="password"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password[0]}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <button
              type="submit"
              className="bg-blue-500 text-blue-50 font-semibold w-full px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-400"
            >
              Sign In
            </button>
            <p className="text-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 font-semibold hover:text-blue-300"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
