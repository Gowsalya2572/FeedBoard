

import { Link, Outlet } from "react-router-dom";
import AuthIllustration from "../components/auth/AuthIllustration";


const AuthLayout = () => {
  return (
    <main className=" bg-[#F0FDFA] px-4 py-6 sm:px-6 lg:flex lg:items-center lg:justify-center">

      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-teal-900/10 lg:min-h-[700px] lg:grid-cols-2">

        {/* Left illustration */}
        <div className="hidden lg:block">
          <AuthIllustration />
        </div>

        {/* Right form */}
        <div className="flex items-center justify-center px-5 py-8 sm:px-10 lg:px-12">
          <div className="w-full max-w-[420px]">

            {/* Mobile logo */}
            <div className="mb-8 lg:hidden">
               <Link to='/'>
              <h2 className="font-heading text-2xl font-extrabold text-deep-teal">
                Feed<span className="text-primary-teal">Board.</span>
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Listen. Prioritize. Build Better.
              </p>
              </Link> 
            </div>

            <Outlet />

            <p className="mt-8 text-center text-xs text-slate-400">
              © 2026 FeedBoard. All rights reserved.
            </p>

          </div>
        </div>

      </div>
    </main>
  );
};

export default AuthLayout;


