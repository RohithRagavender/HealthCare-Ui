import AnatomySection from "../components/dashboard/AnatomySection";
import HealthStatusCards from "../components/dashboard/HealthCard";
import CalendarView from "../components/dashboard/CalendarVIew";
import UpcomingSchedule from "../components/dashboard/Schedule";
import ActivityFeed from "../components/dashboard/ActivityFeed";

export default function Dashboard() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-blue-900 font-bold">Dashboard</h1>
      <br />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div className="xl:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnatomySection />
            <HealthStatusCards />
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white rounded-lg shadow p-4 h-full">
            <CalendarView />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UpcomingSchedule />
        </div>

        <div>
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
}
