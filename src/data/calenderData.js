const calendarData = {
  month: "October",
  year: 2021,
  days: [
    { date: 1, times: [], isWeekend: true },
    { date: 2, times: [], isWeekend: true },
    { date: 3, times: [], isWeekend: true },
    { date: 4, times: [], isCurrentDay: true },
    { date: 5, times: ["3:00 PM", "4:30 PM"] },
    { date: 6, times: ["10:15 AM"] },
    { date: 7, times: [] },
    { date: 8, times: ["9:30 AM", "2:00 PM"] },
    { date: 9, times: ["9:00 AM", "11:00 AM"] },
    { date: 10, times: [], isWeekend: true },
    { date: 11, times: ["1:45 PM"], isWeekend: true },
    { date: 12, times: [] },
    { date: 13, times: ["8:00 AM", "12:30 PM"] },
    { date: 14, times: [] },
    { date: 15, times: ["10:00 AM"] },
    { date: 16, times: ["2:15 PM"], isWeekend: true },
    { date: 17, times: [], isWeekend: true },
    { date: 18, times: ["3:00 PM"] },
    { date: 19, times: ["9:00 AM", "11:30 AM"] },
    { date: 20, times: [] },
    { date: 21, times: ["4:00 PM"] },
    { date: 22, times: [] },
    { date: 23, times: ["10:45 AM"], isWeekend: true },
    { date: 24, times: [], isWeekend: true },
    { date: 25, times: ["1:00 PM"] },
    { date: 26, times: [] },
    { date: 27, times: ["2:30 PM"] },
    { date: 28, times: ["9:15 AM", "3:45 PM"] },
    { date: 29, times: [] },
    { date: 30, times: ["11:00 AM"], isWeekend: true },
    { date: 31, times: ["7:00 PM"], isWeekend: true }
  ],
  appointments: [
    {
      title: "Dentist Appointment",
      time: "10:30 AM",
      doctor: "Dr. Ramesh",
      duration: 45,
      type: "medical"
    },
    {
      title: "Physiotherapy Session",
      time: "2:00 PM",
      doctor: "Dr. Swetha",
      duration: 60,
      type: "therapy"
    },
    // {
    //   title: "Annual Checkup",
    //   time: "4:15 PM",
    //   doctor: "Dr. Kapoor",
    //   duration: 30,
    //   type: "medical"
    // }
  ]
};

export default calendarData;