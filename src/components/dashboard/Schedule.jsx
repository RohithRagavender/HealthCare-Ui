import upcomingData from "../../data/upcoming";

export default function UpcomingSchedule() {
  return (
    <div
      className="
        bg-white rounded-2xl shadow p-6  
        w-full max-w-[560px] mx-auto 
        sm:w-160 sm:right-25 sm:relative 
        transition-transform duration-300 ease-in-out 
    hover:scale-105 cursor-pointer hover:bg-blue-50
      "
    >
      <h2 className="text-lg font-semibold text-gray-700 mb-4 ">
        Upcoming Schedule
      </h2>
      <ul className="space-y-4">
        {upcomingData.map((item) => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-200 rounded-lg p-2"
          >
            <div className="mb-2 sm:mb-0">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.date} at {item.time}
              </p>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                item.status === "Confirmed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
