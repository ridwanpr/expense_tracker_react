import { Link } from "react-router";
import { InputGroup } from "../../../components/ui/input-group";

export default function Login() {
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
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <InputGroup
              type="text"
              id="username"
              label="Username"
              name="username"
              placeholder="Your Username"
            />
          </div>
          <div className="flex flex-col gap-1">
            <InputGroup
              type="password"
              id="password"
              label="Password"
              name="password"
              placeholder="******"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <button className="bg-blue-500 text-blue-50 font-semibold w-full px-4 py-2 rounded">
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
