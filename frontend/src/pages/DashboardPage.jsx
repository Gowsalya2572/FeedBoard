
import { motion } from "motion/react";
import { Lightbulb } from "lucide-react";

import SummaryCards from "../components/dashboard/SummaryCards";
import { getCurrentUser } from "../utils/auth";

const DashboardPage = () => {
  const user = getCurrentUser();

  return (
    <div className="mx-auto max-w-7xl space-y-7">
      {/* Welcome */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-4 rounded-2xl bg-deep-teal p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div>
          <p className="text-sm font-medium text-mint">
            Your workspace at a glance
          </p>

          <h2 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">
            Welcome back, {user?.name || "User"}!
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
            Here's what's happening with your community. Keep listening to
            your customers and building better products.
          </p>
        </div>

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-mint">
          <Lightbulb size={30} />
        </div>
      </motion.section>

      {/* Overview */}
      <section>
        <div className="mb-4">
          <h2 className="font-heading text-lg font-bold text-deep-teal">
            Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your community activity at a glance.
          </p>
        </div>

        <SummaryCards />
      </section>

      {/* Community message */}
      <section className="rounded-2xl border border-teal-100 bg-white p-6">
        <span className="inline-flex rounded-full bg-pale-mint px-3 py-1 text-xs font-semibold text-deep-teal">
          Keep growing
        </span>

        <h2 className="mt-3 font-heading text-lg font-bold text-deep-teal">
          Your community makes better products possible.
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Collect suggestions, understand what matters most, and turn
          customer ideas into meaningful improvements.
        </p>
      </section>
    </div>
  );
};

export default DashboardPage;

