import {
  History,
  Calendar,
  BarChart2,
  MessageSquare,
  LifeBuoy,
  Settings2,
  CalendarClock,
  LayoutDashboard,
  PhoneCall,
} from "lucide-react";

const navLinks = [
  {
    title: "General",
    items: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Calendar", icon: Calendar },
      { name: "History", icon: History },
      { name: "Appointments", icon: CalendarClock },
      { name: "Statistics", icon: BarChart2 },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        name: "Chat",
        icon: MessageSquare,
      },
      {
        name: "Support",
        icon: PhoneCall,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        name: "Settings",
        icon: Settings2,
      },
    ],
  },
];
export default navLinks;
