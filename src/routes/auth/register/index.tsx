import { Link } from "react-router";
import { InputGroup } from "../../../components/ui/input-group";
import { useRegister } from "./use-register";
import { useState } from "react";
import { RegisterInputSchema } from "./register-schema";
import { formatZodErrors } from "../../../utils/format-zod-errors";

export default function Register() {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const registerMutation = useRegister();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const validatedFormData = RegisterInputSchema.safeParse(formData);

    if (!validatedFormData.success) {
      setErrors(formatZodErrors(validatedFormData.error));
      return;
    }

    registerMutation.mutate({
      name: formData.name,
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
          <h1 className="text-2xl font-bold">Create New Account</h1>
          <p className="text-md">Please enter your information</p>
        </div>
        <hr className="border-gray-200 border" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <InputGroup
              type="text"
              id="name"
              label="Name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name[0]}</p>
            )}
          </div>

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
              Sign Up
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 font-semibold hover:text-blue-300"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
