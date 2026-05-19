export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin" />
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Loading project...</p>
      </div>
    </div>
  );
}
