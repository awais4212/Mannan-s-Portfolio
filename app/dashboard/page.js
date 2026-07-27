import DashboardTable from "../../components/DashboardTable.js";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 p-10">
      <h1 className="text-4xl text-white font-bold mb-10">
        Contact Messages
      </h1>

      <DashboardTable />
    </main>
  );
}