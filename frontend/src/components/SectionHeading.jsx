
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment = {
    center: "mx-auto text-center items-center",
    left: "text-left items-start",
  };

  return (
    <div
      className={`
        flex max-w-2xl flex-col gap-3
        ${alignment[align] || alignment.center}
        ${className}
      `}
    >
      {eyebrow && (
        <span
          className="inline-flex w-fit rounded-full
          bg-pale-mint px-3 py-1.5 text-xs font-semibold
          uppercase tracking-wider text-deep-teal"
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="font-heading text-2xl font-bold
        leading-tight tracking-tight text-deep-teal
        sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>

      {description && (
        <p className="max-w-xl text-sm leading-7 text-app-text/75 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
