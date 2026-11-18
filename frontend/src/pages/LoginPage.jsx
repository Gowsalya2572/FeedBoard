
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, LockKeyhole } from "lucide-react";

import Toast from "../components/Toast";
import { loginUser } from "../utils/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setToast(null);
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setToast(null);

    if (!validateForm()) return;

    const result = loginUser(formData);

    if (!result.success) {
      setToast({
        message: result.message,
        type: "error",
      });
      return;
    }

    setIsLoading(true);

    setToast({
      message: result.message,
      type: "success",
    });

    setTimeout(() => {
      navigate("/dashboard");
    }, 1600);
  };

  const inputClass =
    "w-full bg-transparent py-3 text-sm text-app-text outline-none placeholder:text-slate-400";

  const wrapperClass =
    "flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-primary-teal focus-within:ring-2 focus-within:ring-primary-teal/20";

  return (
    <>
      <Toast
        message={toast?.message}
        type={toast?.type}
        onClose={() => setToast(null)}
      />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full"
      >
        <div className="mb-5">
          <span className="inline-flex rounded-full bg-pale-mint px-3 py-1 text-xs font-semibold text-deep-teal">
            Welcome back
          </span>

          <h1 className="mt-3 font-heading text-2xl font-extrabold text-deep-teal sm:text-3xl">
            Sign in to your account
          </h1>

          <p className="mt-2 text-sm leading-5 text-slate-500">
            Enter your registered email and password to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-app-text">
              Email address
            </label>

            <div className={wrapperClass}>
              <Mail size={17} className="shrink-0 text-slate-400" />

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-semibold text-app-text">
                Password
              </label>

              <button
                type="button"
                onClick={() =>
                  setToast({
                    message: "Password recovery is not available in this demo.",
                    type: "error",
                  })
                }
                className="text-xs font-semibold text-primary-teal hover:text-deep-teal"
              >
                Forgot password?
              </button>
            </div>

            <div className={wrapperClass}>
              <LockKeyhole size={17} className="shrink-0 text-slate-400" />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={inputClass}
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="text-slate-400 hover:text-deep-teal"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-deep-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-teal disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-primary-teal hover:text-deep-teal"
          >
            Create an account
          </Link>
        </p>
      </motion.div>
    </>
  );
};

export default LoginPage;

