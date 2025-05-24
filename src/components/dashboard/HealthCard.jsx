import healthData from "../../data/healthdata";

export default function HealthStatusCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:z-1 lg:grid-cols-1 gap-2 h-185">
      {healthData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow p-4 flex items-center gap-4 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer
          hover:bg-blue-50 hover:shadow-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-25 h-25 object-contain "
          />
          <div className="flex-1 ">
            <h3 className="text-xl font-semibold text-gray-700 ">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500">Status: {item.status}</p>
            <p className="text-sm text-gray-500 flex items-center gap-1.5">
              Status:
              <span className="inline-block h-1.5 w-14 mt-1.5 bg-gray-200 rounded-full overflow-hidden">
                <span
                  className={`block h-full rounded-full ${
                    item.progressbar < 30
                      ? "bg-red-500"
                      : item.progressbar < 70
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${item.progressbar}%` }}
                ></span>
              </span>
            </p>{" "}
            <p className="text-sm text-gray-400 mt-1">
              Last Check: 12 Oct 2021
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
