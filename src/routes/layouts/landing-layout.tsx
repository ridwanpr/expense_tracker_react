import { Outlet } from "react-router";

export default function LandingLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flow-root">
      <div className="container mx-auto min-h-screen p-8">
        <Outlet />
      </div>
    </div>
  );
}
