export default function Card({ children }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      {children}
    </div>
  );
}
