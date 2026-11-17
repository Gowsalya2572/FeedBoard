
import { LoaderCircle } from "lucide-react";

const variants = {
  primary:
    "bg-primary-teal text-white shadow-sm hover:bg-deep-teal",

  secondary:
    "bg-pale-mint text-deep-teal hover:bg-mint",

  outline:
    "border border-primary-teal bg-transparent text-primary-teal hover:bg-pale-mint",

  ghost:
    "bg-transparent text-app-text hover:bg-pale-mint",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  onClick,
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl font-semibold
        transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-primary-teal focus-visible:ring-offset-2
        active:scale-[0.98]
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <LoaderCircle size={18} className="animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === "left" && (
            <Icon size={18} />
          )}

          {children}

          {Icon && iconPosition === "right" && (
            <Icon size={18} />
          )}
        </>
      )}
    </button>
  );
}

export default Button;
