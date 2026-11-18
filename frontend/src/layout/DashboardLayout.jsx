
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-app-bg lg:h-screen lg:overflow-hidden">
      <div className="grid min-h-screen lg:h-full lg:grid-cols-[245px_minmax(0,1fr)]">
        {/* Sidebar */}
        <div className="h-auto lg:h-full">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex min-w-0 flex-col lg:h-full lg:overflow-hidden">
          <DashboardHeader />

          <main className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
