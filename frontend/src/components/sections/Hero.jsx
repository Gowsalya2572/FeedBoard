
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ThumbsUp,
  Lightbulb,
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
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="absolute -inset-5 -z-10 rounded-[40px] bg-gradient-to-br from-mint/30 via-pale-mint to-transparent blur-2xl" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="overflow-hidden rounded-3xl border border-teal-900/10 bg-white p-4 shadow-2xl shadow-teal-900/10 sm:p-6"
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">
              CUSTOMER FEEDBACK
            </p>
            <h3 className="mt-1 font-heading text-lg font-bold text-deep-teal">
              Popular Ideas
            </h3>
          </div>

          <span className="rounded-full bg-pale-mint px-3 py-1.5 text-xs font-semibold text-deep-teal">
            Live Board
          </span>
        </div>

        <div className="space-y-3">
          {requests.map((request, index) => {
            const Icon = request.icon;

            return (
              <motion.div
                key={request.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3 sm:p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pale-mint text-primary-teal">
                  <Icon size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-deep-teal">
                    {request.title}
                  </h4>
                  <p className="mt-1 truncate text-xs text-slate-500">
                    {request.description}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-2">
                  <span className="flex items-center gap-1 text-xs font-semibold text-deep-teal">
                    <ThumbsUp size={13} />
                    {request.votes}
                  </span>
                  <StatusBadge status={request.status} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-pale-mint/70 p-3">
          <span className="text-xs font-semibold text-deep-teal">
            Your ideas make a difference!
          </span>
          <TrendingUp size={20} className="text-primary-teal" />
        </div>
      </motion.div>

      {/* Floating notification */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -right-3 -top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-teal text-white shadow-xl sm:-right-5"
      >
        <ThumbsUp size={25} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:-left-6"
      >
        <CheckCircle2 className="text-emerald-500" size={22} />
        <div>
          <p className="text-xs font-bold text-deep-teal">Idea Completed</p>
          <p className="text-[10px] text-slate-400">Great progress!</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="home"
     
      className="relative overflow-hidden px-5 pb-24 pt-16 sm:pt-24 lg:px-8 lg:pb-32"
    >
      <div className="absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-pale-mint/60 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-pale-mint/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-deep-teal">
            <span className="h-2 w-2 rounded-full bg-primary-teal" />
            Customer Feedback Platform
          </span>

          <h1 className="mt-7 font-heading text-4xl font-extrabold leading-[1.15] tracking-tight text-deep-teal sm:text-5xl lg:text-[58px]">
            Turn Customer Feedback Into Your Next{" "}
            <span className="text-primary-teal">Big Idea.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-app-text/75 lg:mx-0">
            Give your customers a voice. Collect feature requests, let users
            vote for their favorite ideas, and build products people actually
            want.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link to="/signup">
              <Button size="lg" fullWidth icon={ArrowRight}>
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

          <div className="mt-7 flex items-center justify-center gap-2 text-xs font-medium text-app-text/70 lg:justify-start">
            <CheckCircle2 size={17} className="text-primary-teal" />
            One platform. Every idea. Better product decisions.
          </div>
        </motion.div>

        {/* Right Dashboard Preview */}
        <DashboardPreview />
      </div>
    </section>

  );
}

export default Hero;
