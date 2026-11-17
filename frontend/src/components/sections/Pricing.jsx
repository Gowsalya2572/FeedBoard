
import { motion } from "motion/react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { pricingPlans } from "../../data/pricing";
import SectionHeading from "../SectionHeading";
import Button from "../Button";


function Pricing() {
  return (
    <section id="pricing" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Simple Pricing"
          title="Choose a Plan That Works for You"
          description="Start collecting ideas for free and grow as your community grows."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-7 md:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-3xl border p-8 transition-shadow duration-300 ${
                plan.popular
                  ? "border-primary-teal bg-pale-mint/30 shadow-xl shadow-primary-teal/10"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-primary-teal px-4 py-2 text-xs font-bold text-white shadow-lg">
                  <Sparkles size={14} />
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-heading text-xl font-bold text-deep-teal">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-app-text/70">
                  {plan.description}
                </p>

                <div className="mt-7 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-extrabold text-deep-teal">
                    {plan.price}
                  </span>

                  <span className="text-sm text-slate-500">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="my-7 h-px bg-teal-900/10" />

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-app-text/80"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-primary-teal"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/signup" className="mt-8 block">
                <Button
                  fullWidth
                  size="lg"
                  variant={plan.popular ? "primary" : "outline"}
                  icon={ArrowRight}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Choose the plan that fits your product journey.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
