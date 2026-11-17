
const statusStyles = {
  Planned: "bg-blue-50 text-blue-700 border-blue-100",

  "In Progress":
    "bg-amber-50 text-amber-700 border-amber-100",

  Completed:
    "bg-emerald-50 text-emerald-700 border-emerald-100",
};

function StatusBadge({
  status = "Planned",
  className = "",
}) {
  const styles =
    statusStyles[status] || statusStyles.Planned;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        whitespace-nowrap rounded-full border
        px-3 py-1 text-xs font-semibold
        ${styles}
        ${className}
      `}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-current"
        aria-hidden="true"
      />

      {status}
    </span>
  );
}

export default StatusBadge;
