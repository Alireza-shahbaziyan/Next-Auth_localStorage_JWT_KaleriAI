
"use client";
import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";
import UserCard from "../dashboard/UserCard";
import StatsGrid from "../dashboard/StatsGrid";
import GoalsProgress from "../dashboard/GoalsProgress";
import RecentMeals from "../dashboard/RecentMeals";
import ActivityChart from "../dashboard/ActivityChart";

export default function DashboardLayout() {
  return (
    <div className="font-roboto flex min-h-screen bg-gradient-to-br from-indigo-700  dark:from-gray-950 dark:via-gray-800 darkto-indigo-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 space-y-8 p-6">
          <UserCard />
          <StatsGrid />
          <GoalsProgress />
          <ActivityChart />
          <RecentMeals />
          <div className="mx-auto">Built with love… and a lot of coffee. ☕❤️</div>
        </main>
        
      </div>
    </div>
  );
}
