import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}
