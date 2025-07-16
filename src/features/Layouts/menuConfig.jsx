import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";

export const adminMenuItems = [
  { icon: <FaThLarge />, label: "Dashboard", path: "/admin/dashboard" },
  {
    icon: <FaUsers />, label: "User Management", expandable: true, path: "/admin/users", subItems: [
      { label: "All Users", path: "/admin/users/all" },
      { label: "Add User", path: "/admin/users/add" },
      { label: "Roles & Permissions", path: "/admin/users/roles" },
    ]
  },
  {
    icon: <FaCreditCard />, label: "Subscription Plans", expandable: true, path: "/admin/plans", subItems: [
      { label: "All Plans", path: "/admin/plans/all" },
      { label: "Add Plan", path: "/admin/plans/add" },
    ]
  }, 
  { icon: <FaTags />, label: "Coupons", path: "/admin/coupons" },
  { icon: <FaGlobe />, label: "Domain Control", path: "/admin/domains" },
  { icon: <FaReceipt />, label: "Payment Logs", path: "/admin/payments" },
  { icon: <FaChartBar />, label: "Reports & Analytics", path: "/admin/reports" },
  { icon: <FaCog />, label: "Admin Settings", path: "/admin/settings" },
];
