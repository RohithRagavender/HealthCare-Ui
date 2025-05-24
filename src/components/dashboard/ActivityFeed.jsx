import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import activityData from "../../data/Activity.js";

export default function ActivityBarChart() {
  return (
    <div
      className="
    rounded-2xl 
    bg-white/30 
    backdrop-blur-md 
    lg:h-90 lg:w-150 lg:p-5 flex-1/2 
    shadow-lg 
    p-4 
    w-full max-w-[580px] h-[216px] 
    sm:w-[480px] sm:h-[416px] 
    border border-white/20 
    lg:relative right-50
    transition-transform duration-300 ease-in-out 
    hover:scale-105 hover:bg-blue-50 hover:cursor-pointer
  "
    >
      <h2 className="text-xl font-semibold text-gray-800 tracking-wide mb-4">
        Activity Tracker
      </h2>
      <ResponsiveContainer
        width="100%"
        height="95%"
        className="hover:cursor-pointer"
      >
        <BarChart
          data={activityData}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="activity"
            tick={{ fill: "#4B5563", fontSize: 12, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#4B5563", fontSize: 12, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              fontSize: "0.875rem",
              border: "1px solid #e5e7eb",
            }}
          />
          <Bar
            dataKey="count"
            radius={[10, 10, 0, 0]}
            fill="url(#colorActivity)"
            animationDuration={800}
          />
          <defs>
            <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#93c5fd" stopOpacity={0.6} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
