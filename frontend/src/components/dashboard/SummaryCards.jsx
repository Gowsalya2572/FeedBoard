
import { motion } from "motion/react";
import {
  Lightbulb,
  ThumbsUp,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const summaryData = [
  {
    title: "Total Ideas",
    value: "24",
    description: "Ideas shared by your community",
    icon: Lightbulb,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    trend: "+12%",
  },
  {
    title: "Total Votes",
    value: "562",
    description: "Votes from community members",
    icon: ThumbsUp,
    iconBg: "bg-teal-50",
    iconColor: "text-primary-teal",
    trend: "+18%",
  },
  {
    title: "Completed",
    value: "8",
    description: "Ideas successfully completed",
    icon: CheckCircle2,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    trend: "+8%",
  },
];

const SummaryCards = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {summaryData.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
              >
                <Icon size={21} />
              </div>

              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                <TrendingUp size={13} />
                {item.trend}
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              {item.title}
            </p>

            <h2 className="mt-1 font-heading text-3xl font-extrabold text-deep-teal">
              {item.value}
            </h2>

            <p className="mt-2 text-xs text-slate-400">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SummaryCards;
