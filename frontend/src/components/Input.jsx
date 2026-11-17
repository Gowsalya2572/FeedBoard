
function Input({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  hint,
  required = false,
  disabled = false,
  autoComplete,
  className = "",
}) {
  const inputId = id || name;

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-app-text"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${inputId}-error` :
          hint ? `${inputId}-hint` : undefined
        }
        className={`
          w-full rounded-xl border bg-white px-4 py-3
          text-sm text-app-text placeholder:text-slate-400
          outline-none transition-all duration-200
          focus:border-primary-teal focus:ring-2
          focus:ring-primary-teal/10
          disabled:cursor-not-allowed disabled:bg-slate-100
          ${error ? "border-red-400 focus:border-red-500" : "border-slate-200"}
          ${className}
        `}
      />

      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="text-xs text-red-500"
        >
          {error}
        </p>
      )}

      {!error && hint && (
        <p
          id={`${inputId}-hint`}
          className="text-xs text-slate-500"
        >
          {hint}
        </p>
      )}
    </div>
  );
}

export default Input;
