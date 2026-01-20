import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flow-root">
      <Outlet />
    </div>
  );
}
