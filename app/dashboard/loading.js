export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">
      <div className="text-center">

        <div className="h-16 w-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <p className="text-white mt-6 text-lg">
          Loading Dashboard...
        </p>

      </div>
    </div>
  );
}