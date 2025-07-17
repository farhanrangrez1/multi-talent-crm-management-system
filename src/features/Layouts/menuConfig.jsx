
import {
  FaThLarge,
  FaUsers,
  FaCreditCard,
  FaTags,
  FaGlobe,
  FaReceipt,
  FaChartBar,
  FaCog,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
  FaProjectDiagram,
  FaUserTie
} from "react-icons/fa";


const Admin = [
    { icon: <FaThLarge />, label: "Dashboard", path: "/admin/dashboard" },
    {
      icon: <FaUsers />, label: "User Management", expandable: true, subItems: [
        { label: "All Users", path: "/admin/allUsers" },
        { label: "Buyers", path: "/admin/buyers" },
        { label: "Sellers", path: "/admin/sellers" },
      ]
    },
    {
      icon: <FaCreditCard />, label: "Subscription Plans", expandable: true, subItems: [
        { label: "All Plans", path: "/admin/AllPlans" },
      ]
    },
    { icon: <FaTags />, label: "Coupons", path: "/admin/CouponManagement" },
    { icon: <FaGlobe />, label: "Domain Control", path: "/admin/domain" },
    { icon: <FaReceipt />, label: "Payment Logs", path: "/admin/Payment" },
    { icon: <FaChartBar />, label: "Reports & Analytics", path: "/admin/reports" },
    { icon: <FaCog />, label: "Admin Settings", path: "/admin/settings" },
  ];



const Seller = [
  { icon: <FaThLarge />, label: "Dashboard", path: "/seller/dashboard" },
  { icon: <FaUsers />, label: "Leads", path: "/seller/leads" },
  { icon: <FaChartBar />, label: "Sales Reports", path: "/seller/salesReports" },
  { icon: <FaUserTie />, label: "Customers", path: "/seller/customers" },
  { icon: <FaCreditCard />, label: "Products", path: "/seller/products" },
  { icon: <FaGlobe />, label: "Domain Manager", path: "/seller/domain" },
  { icon: <FaReceipt />, label: "Reports", path: "/seller/reports" },
  { icon: <FaCog />, label: "Settings", path: "/seller/settings" },
];


export { Admin, Seller };