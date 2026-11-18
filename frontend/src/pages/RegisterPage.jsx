
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Eye, EyeOff, UserRound, Mail, LockKeyhole } from "lucide-react";

import Toast from "../components/Toast";
import { registerUser } from "../utils/auth";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [toast, setToast] = useState(null);

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
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!acceptedTerms) {
      newErrors.terms = "Please accept the terms to continue.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setToast(null);

    if (!validateForm()) return;

    const result = registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if (!result.success) {
      setToast({
        message: result.message,
        type: "error",
      });
      return;
    }

    setToast({
      message: result.message,
      type: "success",
    });

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setAcceptedTerms(false);

    // Go to Sign In after showing the success toast
    setTimeout(() => {
      navigate("/login");
    }, 1800);
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
        <div className="mb-4">
          <span className="inline-flex rounded-full bg-pale-mint px-3 py-1 text-xs font-semibold text-deep-teal">
            Get started for free
          </span>

          <h1 className="mt-3 font-heading text-2xl font-extrabold text-deep-teal sm:text-3xl">
            Create your account
          </h1>

          <p className="mt-2 text-sm leading-5 text-slate-500">
            Join FeedBoard and start turning feedback into better ideas.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          {/* Full name */}
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-app-text">
              Full name
            </label>

            <div className={wrapperClass}>
              <UserRound size={17} className="shrink-0 text-slate-400" />
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

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
            <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-app-text">
              Password
            </label>

            <div className={wrapperClass}>
              <LockKeyhole size={17} className="shrink-0 text-slate-400" />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Minimum 8 characters"
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

          {/* Confirm password */}
          <div>
            <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-semibold text-app-text">
              Confirm password
            </label>

            <div className={wrapperClass}>
              <LockKeyhole size={17} className="shrink-0 text-slate-400" />

              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={inputClass}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword((previous) => !previous)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                className="text-slate-400 hover:text-deep-teal"
              >
                {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Terms */}
          <div>
            <label className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-slate-500">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                className="mt-1 h-4 w-4 accent-primary-teal"
              />
              <span>
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>

            {errors.terms && (
              <p className="mt-1 text-xs text-red-600">{errors.terms}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-deep-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-teal"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-primary-teal hover:text-deep-teal"
          >
            Sign In
          </Link>
        </p>
      </motion.div>
    </>
  );
};

export default RegisterPage;

