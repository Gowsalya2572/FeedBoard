
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { features } from "../../data/features";
import SectionHeading from "../SectionHeading";


function Features() {
  return (
    <section
      id="features"
      className="bg-white px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Powerful Features"
          title="Everything You Need to Build Better Products"
          description="From collecting ideas to tracking product progress, FeedBoard brings your customers and product team together."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:border-mint/50 hover:shadow-xl hover:shadow-teal-900/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pale-mint text-primary-teal transition-all duration-300 group-hover:bg-primary-teal group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mt-7 font-heading text-lg font-bold text-deep-teal">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-app-text/70">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-xs font-semibold text-primary-teal">
                  Learn more
                  <ArrowUpRight
                    size={16}
                    className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
