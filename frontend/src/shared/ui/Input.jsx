export default function Input({ label, error, ...props }) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}

      <input
        {...props}
        className="h-11 w-full rounded-xl border px-4 outline-none focus:border-violet-500"
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
