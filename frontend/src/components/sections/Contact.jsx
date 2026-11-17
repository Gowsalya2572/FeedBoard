
import { useState } from "react";
import { motion } from "motion/react";
import {
  Send,
  Mail,
  MessageSquareText,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import Input from "../Input";
import Button from "../Button";


const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);
    setFormData(initialForm);
  };

  return (
    <section
      id="contact"
      className="bg-app-bg px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              align="left"
              eyebrow="Get In Touch"
              title="Let's Build Better Products Together"
              description="Have questions about FeedBoard? Want to see how it works? Send us a message and request a demo."
            />

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pale-mint text-primary-teal">
                  <Mail size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-deep-teal">
                    Email Us
                  </h4>
                  <p className="mt-1 text-sm text-app-text/70">
                    hello@feedboard.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pale-mint text-primary-teal">
                  <MessageSquareText size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-deep-teal">
                    Our Promise
                  </h4>
                  <p className="mt-1 text-sm text-app-text/70">
                    Your feedback helps us build better products.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-teal-900/5 bg-white p-6 shadow-xl shadow-teal-900/5 sm:p-9"
          >
            <h3 className="font-heading text-xl font-bold text-deep-teal">
              Request a Demo
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Tell us a little about yourself.
            </p>

            <div className="mt-7 space-y-5">
              <Input
                label="Full Name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                label="Company Name"
                name="company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
                required
              />

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-app-text"
                >
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-app-text outline-none transition focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/10"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                fullWidth
                icon={Send}
              >
                Request a Demo
              </Button>

              {success && (
                <div
                  role="status"
                  className="flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-700"
                >
                  <CheckCircle2 size={19} />
                  Thank you! Your demo request was submitted successfully.
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
