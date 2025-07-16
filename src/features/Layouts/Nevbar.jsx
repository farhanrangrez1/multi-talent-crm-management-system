import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import "./NevbarColors.css";

const navLinks = [
  { icon: <FaThLarge />, label: "Dashboard" },
  {
    icon: <FaUsers />, label: "User Management", expandable: true, subItems: [
      { label: "All Users" ,   path: "/allUsers",},
      { label: "Buyers" },
      { label: "Sellers" },
    ]
  },
  {
    icon: <FaCreditCard />, label: "Subscription Plans", expandable: true, subItems: [
      { label: "All Plans" },
      { label: "Add Plan" },
    ]
  },
  { icon: <FaTags />, label: "Coupons" },
  { icon: <FaGlobe />, label: "Domain Control" },
  { icon: <FaReceipt />, label: "Payment Logs" },
  { icon: <FaChartBar />, label: "Reports & Analytics" },
  { icon: <FaCog />, label: "Admin Settings" },
];

function Nevbar({ onSidebarToggle }) {
  const [active, setActive] = useState("Dashboard");
  const [expanded, setExpanded] = useState({});
  // State for calendar (date range selector)
  const [startDate, setStartDate] = useState(new Date());
  // Message dropdown state
  const [showMessages, setShowMessages] = useState(false);

  // For closing dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest('.message-dropdown') && !event.target.closest('.message-icon-btn')) {
        setShowMessages(false);
      }
    }
    if (showMessages) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMessages]);

  const handleNavClick = (label, expandable) => {
    setActive(label);
    if (expandable) {
      setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
    }
  };

  return (
    <div>
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-lg nevbar-main border-bottom px-4 py-3 nevbar-font">
          <div className="container-fluid">
            {/* Hamburger for mobile */}
            <button className="btn d-lg-none me-2" type="button" onClick={onSidebarToggle} aria-label="Toggle sidebar">
              <span style={{ fontSize: 24 }}>&#9776;</span>
            </button>
            <span className="navbar-brand fw-bold nevbar-brand-bold">Admin Dashboard</span>
            <div className="d-flex align-items-center ms-auto gap-3">
              {/* Search Icon */}
              <button className="btn btn-link p-0 nevbar-icon-btn">
                <FiSearch />
              </button>
              {/* Notification Icon */}
              <div className="position-relative">
                <button className="btn btn-link p-0 nevbar-notification-btn">
                  <IoMdNotificationsOutline />
                </button>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger nevbar-badge-danger">3</span>
              </div>
              {/* Message Icon */}
              <div className="position-relative">
                <button
                  className="btn btn-link p-0 message-icon-btn nevbar-icon-btn"
                  onClick={() => setShowMessages((prev) => !prev)}
                  aria-label="Show messages"
                  type="button"
                >
                  <IoMailOutline />
                </button>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary nevbar-badge-primary">7</span>
                {/* Message Dropdown */}
                {showMessages && (
                  <div className="message-dropdown">
                    <div className="message-dropdown-header">Messages</div>
                    <div className="message-dropdown-item">
                      <img src="/vite.svg" alt="profile" className="message-dropdown-profile" />
                      <div>
                        <div className="message-dropdown-title">Mark send you a message</div>
                        <div className="message-dropdown-time">1 Minutes ago</div>
                      </div>
                    </div>
                    <div className="message-dropdown-item">
                      <img src="/vite.svg" alt="profile" className="message-dropdown-profile" />
                      <div>
                        <div className="message-dropdown-title">Cregh send you a message</div>
                        <div className="message-dropdown-time">15 Minutes ago</div>
                      </div>
                    </div>
                    <div className="message-dropdown-item">
                      <img src="/vite.svg" alt="profile" className="message-dropdown-profile" />
                      <div>
                        <div className="message-dropdown-title">Profile picture updated</div>
                        <div className="message-dropdown-time">18 Minutes ago</div>
                      </div>
                    </div>
                    <div className="message-dropdown-footer">
                      4 new messages
                    </div>
                  </div>
                )}
              </div>
              {/* User Info */}
              <div className="d-flex align-items-center gap-2 ms-2">
                <div className="nevbar-user-info">
                  <div className="nevbar-user-name" style={{color:"white"}}>Admin User</div>
                  <div className="text-muted small nevbar-user-role">System Administrator</div>
                </div>
                <div className="nevbar-user-avatar">
                  A
                </div>
              </div>
            </div>
          </div>
        </nav>

    </div>
  );
}

export default Nevbar;