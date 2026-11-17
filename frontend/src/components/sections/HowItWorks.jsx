
import { motion } from "motion/react";
import {
  MessageSquareText,
  ThumbsUp,
  Rocket,
  ArrowRight,
} from "lucide-react";

import SectionHeading from "../SectionHeading";

const steps = [
  {
    id: "01",
    title: "Share Ideas",
    description:
      "Let your customers suggest new features and share valuable feedback.",
    icon: MessageSquareText,
  },
  {
    id: "02",
    title: "Vote Together",
    description:
      "Help the community decide which ideas matter most through voting.",
    icon: ThumbsUp,
  },
  {
    id: "03",
    title: "Build Better",
    description:
      "Turn popular ideas into real improvements your customers love.",
    icon: Rocket,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    rotateX: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
  },
};

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-app-bg px-5 py-24 lg:px-8"
    >
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-mint/30 blur-[100px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-teal-200/40 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Simple Process"
            title="From Ideas to Better Products in Three Simple Steps"
            description="A straightforward process that makes customer feedback meaningful."
          />
        </motion.div>

        {/* Cards */}
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">

          {/* Animated connecting line */}
          <div className="absolute left-[16%] right-[16%] top-12 hidden h-[2px] bg-mint/40 md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                delay: 0.4,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "left" }}
              className="h-full w-full bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-600"
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -12,
                  rotateX: 5,
                  rotateY: index === 1 ? 0 : index === 0 ? 4 : -4,
                  scale: 1.025,
                  transition: {
                    duration: 0.35,
                    ease: "easeOut",
                  },
                }}
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                }}
                className="group relative z-10 rounded-3xl border border-teal-900/5 bg-white p-8 text-center shadow-[0_10px_40px_rgba(15,118,110,0.05)] transition-shadow hover:shadow-[0_25px_60px_rgba(15,118,110,0.15)]"
              >

                {/* Floating icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 3, 0, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-pale-mint text-primary-teal shadow-sm transition-colors duration-300 group-hover:bg-primary-teal group-hover:text-white"
                >
                  {/* Icon glow */}
                  <div className="absolute inset-0 rounded-3xl bg-teal-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                  <Icon
                    size={37}
                    strokeWidth={1.7}
                    className="relative z-10"
                  />

                  {/* Number badge */}
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-primary-teal text-xs font-bold text-white"
                  >
                    {step.id}
                  </motion.span>
                </motion.div>

                {/* Card Content */}
                <h3 className="mt-8 font-heading text-xl font-bold text-deep-teal transition-colors group-hover:text-primary-teal">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-app-text/70">
                  {step.description}
                </p>

                {/* Bottom decoration */}
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7 + index * 0.2,
                  }}
                  className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-teal-300 to-emerald-500"
                />

                {/* Mobile arrow */}
                {index !== 2 && (
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="mt-6 flex justify-center text-primary-teal md:hidden"
                  >
                    <ArrowRight
                      size={22}
                      className="rotate-90"
                    />
                  </motion.div>
                )}

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;


