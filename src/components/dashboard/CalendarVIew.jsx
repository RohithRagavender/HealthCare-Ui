import { useState, useEffect } from "react";
import calendarData from "../../data/calenderData.js";

const DAYS_PER_PAGE = 7; // Show 7 days per page

export default function CalendarView() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(0);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(calendarData.days.length / DAYS_PER_PAGE);

  // Slice days to show only current page's days
  const daysToShow = calendarData.days.slice(
    currentPage * DAYS_PER_PAGE,
    currentPage * DAYS_PER_PAGE + DAYS_PER_PAGE
  );

  return (
    <div className="bg-white rounded-lg shadow p-5 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {calendarData.month} {calendarData.year}
          </h2>
          <p className="text-xs text-gray-500">
            Updated:{" "}
            {currentTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <button
          className="px-3 py-1 text-sm rounded-md bg-gray-100 hover:bg-gray-200"
          onClick={() => setCurrentPage(0)}
          disabled={currentPage === 0}
        >
          Today
        </button>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mb-4 px-2">
        <button
          className={`px-3 py-1 rounded-md ${
            currentPage === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages - 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>

      <div className="mb-8">

        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-700 p-1"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2 ">
          {daysToShow.map((day, index) => (
            <div
              key={index}
              className={`text-center text-sm p-1 ${
                day.isCurrentDay ? "font-bold text-blue-600" : "text-gray-800"
              }`}
            >
              {day.date}
            </div>
          ))}
        </div>

        {[0, 1, 2].map((row) => (
          <div key={row} className="grid grid-cols-7 gap-1 mb-1 cursor-pointer">
            {daysToShow.map((day, col) => {
              const timeIndex = row;
              const time = day.times[timeIndex] || "—";
              return (
                <div
                  key={col}
                  className={`text-center text-xs p-1 ${
                    time === "—" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {time}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-8 ">
        <div className="flex justify-between items-center mb-4 ">
          <h3 className="text-lg font-semibold text-gray-900 ">
            Today's Appointments 
          </h3>
          <span className="text-sm text-gray-500">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        <div className="grid gap-3 hover:scale-105 transition-transform duration-200 ease-in-out ">
          {calendarData.appointments.map((appt, index) => (
            <div
              key={index}
              className="group relative p-4 bg-white rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{appt.title}</h4>
                  <p className="text-sm text-gray-600 mt-1 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1.5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {appt.doctor}
                  </p>
                </div>
                <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
                  {appt.time}
                </span>
              </div>

              <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1.5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {appt.duration} mins
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
