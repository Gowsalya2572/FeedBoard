
import { Bell, Search } from "lucide-react";
import { getCurrentUser } from "../../utils/auth";

const DashboardHeader = () => {
    const user =getCurrentUser();
      const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "U";
  return (
    <header className="flex flex-col gap-4 border-b border-slate-100 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div>
        
        <h1 className="mt-1 font-heading text-xl font-bold text-deep-teal sm:text-2xl">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <button
          type="button"
          aria-label="Search"
          className="rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-pale-mint hover:text-deep-teal"
        >
          <Search size={18} />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-pale-mint hover:text-deep-teal"
        >
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-mint" />
        </button>

        <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pale-mint font-bold text-deep-teal">
            {firstLetter} 
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-app-text">
              {user?.name || "User"}
            </p>
           <p className="text-xs">
              {user?.email || ""}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
