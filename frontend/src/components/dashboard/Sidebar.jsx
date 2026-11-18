
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, UserRound, LogOut } from "lucide-react";

import { getCurrentUser, logoutUser } from "../../utils/auth";

const Sidebar = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  const navigation = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: UserRound,
    },
  ];

  const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <aside className="flex h-full w-full flex-col bg-deep-teal px-5 py-6 text-white">
      {/* Logo */}
      <div className="mb-10">
        <div className="font-heading text-2xl font-extrabold">
          Feed<span className="text-mint">Board.</span>
        </div>

        <p className="mt-1 text-xs text-white/50">
          Listen. Prioritize. Build Better.
        </p>
      </div>

      <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
        Workspace
      </p>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-mint text-deep-teal"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Current user */}
      <div className="border-t border-white/10 pt-5">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-red-500/15 hover:text-red-200"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;


