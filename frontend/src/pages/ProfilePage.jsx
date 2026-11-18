import { getCurrentUser } from "../utils/auth";

const ProfilePage = () => {
  const user = getCurrentUser();

  const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-heading text-2xl font-bold text-deep-teal">
        My Profile
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        View your account information.
      </p>

      <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pale-mint text-xl font-bold text-deep-teal">
            {firstLetter}
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-deep-teal">
              {user?.name}
            </h2>

            <p className="text-sm text-slate-500">
              {user?.email}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Account details
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <p className="text-xs text-slate-400">Full Name</p>
              <p className="mt-1 text-sm font-medium text-app-text">
                {user?.name}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Email Address</p>
              <p className="mt-1 text-sm font-medium text-app-text">
                {user?.email}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Account Type</p>
              <p className="mt-1 text-sm font-medium text-app-text">
                Community Member
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;