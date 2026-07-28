export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src="/src/assets/images/logo-light.svg" alt="Skilluate" className="h-10 w-10" />

      <div>
        <h1 className="text-xl font-bold">Skilluate</h1>

        <p className="text-xs text-slate-500">Learn. Practice. Master.</p>
      </div>
    </div>
  );
}
