import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ThumbsUp,
  Moon,
  Smartphone,
  FileDown,
  TrendingUp,
} from "lucide-react";

import Button from "../Button";
import StatusBadge from "../StatusBadge";

const requests = [
  {
    title: "Dark Mode",
    description: "Let users switch to dark theme.",
    votes: 128,
    icon: Moon,
    status: "Planned",
  },
  {
    title: "Mobile App",
    description: "Native mobile app for iOS & Android.",
    votes: 96,
    icon: Smartphone,
    status: "In Progress",
  },
  {
    title: "Export to PDF",
    description: "Export data in PDF format.",
    votes: 64,
    icon: FileDown,
    status: "Completed",
  },
];

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-xl px-2 pb-9 pt-7 sm:px-5 sm:pb-10 sm:pt-8"
    >
      <div className="absolute inset-5 -z-10 rounded-[40px] bg-gradient-to-br from-mint/30 via-pale-mint to-transparent blur-2xl" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full overflow-hidden rounded-2xl border border-teal-900/10 bg-white p-3 shadow-2xl shadow-teal-900/10 sm:rounded-3xl sm:p-6"
      >
        <div className="mb-4 flex items-center justify-between gap-2 sm:mb-5">
          <div className="min-w-0">
            <p className="text-[10px] font-medium tracking-wide text-slate-400 sm:text-xs">
              CUSTOMER FEEDBACK
            </p>
            <h3 className="mt-1 font-heading text-base font-bold text-deep-teal sm:text-lg">
              Popular Ideas
            </h3>
          </div>

          <span className="shrink-0 rounded-full bg-pale-mint px-2.5 py-1.5 text-[10px] font-semibold text-deep-teal sm:px-3 sm:text-xs">
            Live Board
          </span>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {requests.map((request, index) => {
            const Icon = request.icon;

            return (
              <motion.div
                key={request.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 sm:gap-3 sm:rounded-2xl sm:p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pale-mint text-primary-teal sm:h-10 sm:w-10 sm:rounded-xl">
                  <Icon size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-xs font-bold text-deep-teal sm:text-sm">
                    {request.title}
                  </h4>
                  <p className="mt-1 truncate text-[10px] text-slate-500 sm:text-xs">
                    {request.description}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-1.5 sm:gap-2">
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-deep-teal sm:text-xs">
                    <ThumbsUp size={12} />
                    {request.votes}
                  </span>
                  <StatusBadge status={request.status} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 rounded-xl bg-pale-mint/70 p-2.5 sm:mt-5 sm:p-3">
          <span className="text-[10px] font-semibold text-deep-teal sm:text-xs">
            Your ideas make a difference!
          </span>
          <TrendingUp size={18} className="shrink-0 text-primary-teal" />
        </div>
      </motion.div>

      {/* Floating notification */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-1 top-0 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-teal text-white shadow-xl sm:right-3 sm:h-14 sm:w-14 sm:rounded-2xl"
      >
        <ThumbsUp size={21} />
      </motion.div>

      {/* Completed notification */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-0 left-1 flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-2 shadow-xl sm:left-3 sm:rounded-2xl sm:p-3"
      >
        <CheckCircle2 className="shrink-0 text-emerald-500" size={20} />
        <div>
          <p className="text-[10px] font-bold text-deep-teal sm:text-xs">
            Idea Completed
          </p>
          <p className="text-[9px] text-slate-400 sm:text-[10px]">
            Great progress!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8  "
    >
      <div className="absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-pale-mint/60 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-pale-mint/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-deep-teal sm:px-4 sm:text-xs">
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary-teal" />
            Customer Feedback Platform
          </span>

          <h1 className="mt-5 font-heading text-[34px] font-extrabold leading-[1.15] tracking-tight text-deep-teal sm:mt-7 sm:text-5xl lg:text-[58px]">
            Turn Customer Feedback Into Your Next{" "}
            <span className="text-primary-teal">Big Idea.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-app-text/75 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0">
            Give your customers a voice. Collect feature requests, let users
            vote for their favorite ideas, and build products people actually
            want.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row lg:justify-start">
            <Link to="/register" className="w-full sm:w-auto">
              <Button size="lg"  icon={ArrowRight}>
                Get Started – Free
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Explore Features
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-medium text-app-text/70 sm:mt-7 sm:text-xs lg:justify-start">
            <CheckCircle2 size={16} className="shrink-0 text-primary-teal" />
            <span>
              One platform. Every idea. Better product decisions.
            </span>
          </div>
        </motion.div>

        {/* Right Dashboard Preview */}
        <div className="min-w-0 w-full">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

export default Hero;
