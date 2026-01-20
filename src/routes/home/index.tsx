import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-blue-500 text-blue-50 px-4 py-2 rounded font-semibold"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 text-green-50 px-4 py-2 rounded font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
