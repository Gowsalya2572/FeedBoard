
import { MessageSquareText } from "lucide-react";

function Logo({
  size = "md",
  showTagline = false,
  className = "",
  light=false,
}) {
  const sizes = {
    sm: {
      icon: 28,
      text: "text-base",
      tagline: "text-[10px]",
    },
    md: {
      icon: 34,
      text: "text-lg",
      tagline: "text-xs",
    },
    lg: {
      icon: 42,
      text: "text-xl",
      tagline: "text-sm",
    },
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <a
      href="/"
      aria-label="FeedBoard home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        className="flex shrink-0 items-center justify-center
        rounded-xl bg-primary-teal text-white shadow-sm"
        style={{
          width: currentSize.icon,
          height: currentSize.icon,
        }}
      >
        <MessageSquareText
          size={currentSize.icon * 0.58}
          strokeWidth={2.5}
        />
      </span>

      <span className="flex flex-col">
        <span
          className={`font-heading font-bold tracking-tight ${light ? "text-white" : "text-deep-teal"} text-deep-teal ${currentSize.text}`}
        >
          FeedBoard
        </span>

        {showTagline && (
          <span
            className={`text-app-text/70 ${light ? "text-white" : "text-deep-teal"} ${currentSize.tagline}`}
          >
            Listen. Prioritize. Build Better.
          </span>
        )}
      </span>
    </a>
  );
}

export default Logo;
