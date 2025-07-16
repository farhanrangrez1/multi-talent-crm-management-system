import React from "react";
import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function Nevbar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white border-end"
      style={{ width: 260, minHeight: "100vh", fontFamily: 'Inter, sans-serif' }}
    >
      {/* Logo and Panel Title */}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <span className="me-2" style={{ fontSize: 32, color: '#6366f1' }}>
          <MdOutlineAdminPanelSettings />
        </span>
        <span className="fs-5 fw-bold">Admin Panel</span>
      </a>
      <span className="text-muted small mb-4 ms-1">CRM Management System</span>
      <ul className="nav nav-pills flex-column mb-auto gap-1">
        <li className="nav-item">
          <a href="#" className="nav-link active rounded-3 d-flex align-items-center" aria-current="page" style={{ background: '#f1f5ff', color: '#6366f1', fontWeight: 500 }}>
            <FaThLarge className="me-2" /> Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaUsers className="me-2" /> User Management
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaCreditCard className="me-2" /> Subscription Plans
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaTags className="me-2" /> Coupons
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaGlobe className="me-2" /> Domain Control
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaReceipt className="me-2" /> Payment Logs
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaChartBar className="me-2" /> Reports & Analytics
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaCog className="me-2" /> Admin Settings
          </a>
        </li>
      </ul>
      {/* User Info at Bottom */}
      <div className="mt-auto d-flex align-items-center gap-2 pt-3">
        <div style={{ width: 36, height: 36, background: '#6366f1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18 }}>
          A
        </div>
        <div>
          <div className="fw-semibold">Admin User</div>
          <div className="text-muted small">System Administrator</div>
        </div>
      </div>
    </div>
  );
}

export default Nevbar;




















// New nevbar alg wala nevbar 

import React, { useState } from "react";
import Nevbar from "../Layouts/Nevbar";
import Shidebar from "../Layouts/Shidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";


function Dashboard() {
  // State for calendar (date range selector)
  const [startDate, setStartDate] = useState(new Date());
  // Sidebar toggle state for mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Responsive Sidebar */}
      <Shidebar show={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Navbar with sidebar toggle */}
      <Nevbar onSidebarToggle={() => setSidebarOpen((v) => !v)} />
      {/* Inline responsive CSS for mobile tweaks */}
      <style>{`
        @media (max-width: 767.98px) {
          .card-body { padding: 1rem !important; }
          .card-header { padding: 0.75rem 1rem !important; font-size: 1rem; }
          h3, .fw-bold { font-size: 1.2rem !important; }
          .breadcrumb { font-size: 0.95rem; }
          .navbar-brand { font-size: 1.1rem !important; }
        }
        @media (max-width: 991.98px) {
          .d-lg-flex { display: none !important; }
        }
      `}</style>
        {/* Main Content */}
        <div className="container-fluid py-4 px-2 px-md-4">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">Admin</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
              <h3 className="fw-bold mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>Dashboard Overview</h3>
            </div>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              {/* Calendar/Date Range Picker */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-select w-auto"
                customInput={<button className="btn btn-outline-secondary"><i className="bi bi-calendar me-2"></i>Last 7 Days</button>}
                dateFormat="MMMM d, yyyy"
              />
              <button className="btn btn-primary">
                <i className="bi bi-download me-2"></i>Export Report
              </button>
            </div>
          </div>
          {/* Dashboard Cards */}
          <div className="row g-4 mb-4">
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-0" style={{ borderRadius: 18 }}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-2 me-3">
                      <i className="bi bi-person fs-3"></i>
                    </div>
                    <span className="badge bg-success bg-opacity-25 text-success ms-auto">
                      <i className="bi bi-arrow-up me-1"></i>+12.5%
                    </span>
                  </div>
                  <h4 className="fw-bold mb-0">12,548</h4>
                  <small className="text-muted">Total Users</small>
                  <div className="text-muted small">Active platform users</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-0" style={{ borderRadius: 18 }}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <div className="bg-success bg-opacity-10 text-success rounded-3 p-2 me-3">
                      <i className="bi bi-briefcase fs-3"></i>
                    </div>
                    <span className="badge bg-success bg-opacity-25 text-success ms-auto">
                      <i className="bi bi-arrow-up me-1"></i>+8.2%
                    </span>
                  </div>
                  <h4 className="fw-bold mb-0">2,347</h4>
                  <small className="text-muted">Active Sellers</small>
                  <div className="text-muted small">Sellers with active listings</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-0" style={{ borderRadius: 18 }}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="rounded-3 p-2 me-3"
                      style={{
                        background: "#f3e8ff",
                        color: "#a259ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className="bi bi-cash-stack fs-3"></i>
                    </div>
                    <span className="badge bg-success bg-opacity-25 text-success ms-auto">
                      <i className="bi bi-arrow-up me-1"></i>+15.8%
                    </span>
                  </div>
                  <h4 className="fw-bold mb-0">$489,230</h4>
                  <small className="text-muted">Total Revenue</small>
                  <div className="text-muted small">Monthly recurring revenue</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card shadow-sm border-0" style={{ borderRadius: 18 }}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <div className="bg-warning bg-opacity-10 text-warning rounded-3 p-2 me-3">
                      <i className="bi bi-box-seam fs-3"></i>
                    </div>
                    <span className="badge bg-success bg-opacity-25 text-success ms-auto">
                      <i className="bi bi-arrow-up me-1"></i>+6.4%
                    </span>
                  </div>
                  <h4 className="fw-bold mb-0">8,924</h4>
                  <small className="text-muted">Active Subscriptions</small>
                  <div className="text-muted small">Premium subscriptions</div>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Activity & Quick Actions */}
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: 18 }}>
                <div className="card-header bg-white d-flex justify-content-between align-items-center" style={{ borderRadius: 18 }}>
                  <span className="fw-bold">Recent Activity</span>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-primary bg-opacity-10 text-primary">Live</span>
                    <i className="bi bi-funnel text-muted" title="Filter"></i>
                    <i className="bi bi-arrow-down-up text-muted" title="Sort"></i>
                  </div>
                </div>
                <div className="card-body">
                  <div className="mb-2 text-muted small">
                    <span className="text-success me-2">●</span>8 new activities today &nbsp;•&nbsp; Last updated 2 min ago
                  </div>
                  <div className="alert alert-success d-flex align-items-center mb-0" role="alert" style={{ borderRadius: 12 }}>
                    <i className="bi bi-person-plus me-2 fs-5"></i>
                    <div>
                      <strong>New User Registration</strong> <br />
                      Sarah Johnson joined as a buyer
                      <div className="mt-1 d-flex align-items-center gap-2">
                        <span className="badge bg-light text-dark border">Sarah Johnson</span>
                        <span className="text-muted small">2 minutes ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: 18 }}>
                <div className="card-header bg-white fw-bold" style={{ borderRadius: 18 }}>
                  Quick Actions
                </div>
                <div className="card-body d-flex flex-column gap-3">
                  <button className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 py-3 rounded-3">
                    <i className="bi bi-person-plus fs-4"></i>
                    <div>
                      <div className="fw-semibold">Add New User</div>
                      <div className="text-muted small">Create new buyer or seller account</div>
                    </div>
                  </button>
                  <button className="btn btn-outline-success d-flex align-items-center justify-content-center gap-2 py-3 rounded-3">
                    <i className="bi bi-gear fs-4"></i>
                    <div>
                      <div className="fw-semibold">System Settings</div>
                      <div className="text-muted small">Configure platform settings</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Dashboard; 




import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const navLinks = [
  { icon: <FaThLarge />, label: "Dashboard" },
  {
    icon: <FaUsers />, label: "User Management", expandable: true, subItems: [
      { label: "All Users" },
      { label: "Add User" },
      { label: "Roles & Permissions" },
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

  const handleNavClick = (label, expandable) => {
    setActive(label);
    if (expandable) {
      setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
    }
  };

  // Color palette
  const sidebarBg = '#f9fafb';
  const activeBg = '#4f46e5';
  const activeText = '#fff';
  const activeIcon = '#fff';
  const inactiveText = '#334155';
  const inactiveIcon = '#334155';
  const hoverBg = '#f1f5f9';
  const borderColor = '#e5e7eb';
  const activeBorder = '#6366f1';
  const dividerColor = '#e2e8f0';

  return (
    <div>
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3" style={{ fontFamily: 'Inter, sans-serif', minHeight: 72 }}>
          <div className="container-fluid">
            {/* Hamburger for mobile */}
            <button className="btn d-lg-none me-2" type="button" onClick={onSidebarToggle} aria-label="Toggle sidebar">
              <span style={{ fontSize: 24 }}>&#9776;</span>
            </button>
            <span className="navbar-brand fw-bold" style={{ fontSize: 20, color: '#222' }}>Admin Dashboard</span>
            <div className="d-flex align-items-center ms-auto gap-3">
              {/* Search Icon */}
              <button className="btn btn-link p-0" style={{ color: '#94a3b8', fontSize: 22 }}>
                <FiSearch />
              </button>
              {/* Notification Icon */}
              <div className="position-relative">
                <button className="btn btn-link p-0" style={{ color: '#94a3b8', fontSize: 24 }}>
                  <IoMdNotificationsOutline />
                </button>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: 11, padding: '2px 6px', right: -6, top: 2 }}>3</span>
              </div>
              {/* Message Icon */}
              <div className="position-relative">
                <button className="btn btn-link p-0" style={{ color: '#94a3b8', fontSize: 22 }}>
                  <IoMailOutline />
                </button>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ fontSize: 11, padding: '2px 6px', right: -6, top: 2 }}>7</span>
              </div>
              {/* User Info */}
              <div className="d-flex align-items-center gap-2 ms-2">
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: '#222' }}>Admin User</div>
                  <div className="text-muted small" style={{ fontSize: 13 }}>System Administrator</div>
                </div>
                <div style={{ width: 36, height: 36, background: '#6366f1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, marginLeft: 6 }}>
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



import React, { useState } from "react";
import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const navLinks = [
  { icon: <FaThLarge />, label: "Dashboard" },
  {
    icon: <FaUsers />, label: "User Management", expandable: true, subItems: [
      { label: "All Users" },
      { label: "Add User" },
      { label: "Roles & Permissions" },
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

function Shidebar({ show, onClose }) {
  const [active, setActive] = useState("Dashboard");
  const [expanded, setExpanded] = useState({});

  const handleNavClick = (label, expandable) => {
    setActive(label);
    if (expandable) {
      setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
    }
  };

  // Color palette
  const sidebarBg = '#f9fafb'; // very light gray
  const activeBg = '#4f46e5'; // lighter blue
  const activeText = '#fff';
  const activeIcon = '#fff';
  const inactiveText = '#334155'; // darker gray
  const inactiveIcon = '#334155';
  const hoverBg = '#f1f5f9'; // slightly darker gray
  const borderColor = '#e5e7eb';
  const activeBorder = '#6366f1'; // soft blue
  const dividerColor = '#e2e8f0';

  return (
    <>
      {/* Overlay for mobile */}
      {show && (
        <div className="d-lg-none position-fixed top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.3)', zIndex: 1040 }} onClick={onClose}></div>
      )}
      <div
        className={`d-none d-lg-flex flex-column flex-shrink-0 p-3 border-end ${show ? 'd-flex d-lg-flex position-fixed top-0 start-0 h-100' : ''}`}
        style={{
          width: 270,
          minHeight: "100vh",
          fontFamily: 'Inter, system-ui, sans-serif',
          background: sidebarBg,
          zIndex: show ? 1041 : 2,
          backgroundColor: "white",
          borderRight: `1px solid ${borderColor}`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          transition: 'left 0.3s',
          left: show ? 0 : '-270px',
        }}
      >
        {/* Logo and Panel Title */}
        <a
          href="/"
          className="d-flex align-items-center mb-4 text-decoration-none"
          style={{ gap: 14 }}
        >
          <span style={{ fontSize: 32, color: '#6366f1', display: 'flex', alignItems: 'center' }}>
            <MdOutlineAdminPanelSettings />
          </span>
          <span className="fs-5 fw-bold" style={{ color: '#222', letterSpacing: 0.2, fontWeight: 700, fontSize: 20 }}>Admin Panel</span>
        </a>
        <span className="text-muted small mb-4 ms-1" style={{ fontSize: 13, color: '#94a3b8', marginBottom: 18, display: 'block' }}>CRM Management System</span>
        <ul className="nav nav-pills flex-column mb-auto gap-1" style={{ marginTop: 8 }}>
          {navLinks.map((item, idx) => (
            <React.Fragment key={item.label}>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center rounded-3 px-3 py-2"
                  style={{
                    background: active === item.label ? activeBg : 'transparent',
                    color: active === item.label ? activeText : inactiveText,
                    fontWeight: active === item.label ? 600 : 500,
                    fontSize: 16,
                    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s',
                    gap: 14,
                    cursor: 'pointer',
                    justifyContent: 'flex-start',
                    borderRadius: 12,
                    marginBottom: 2,
                    boxShadow: active === item.label ? '0 2px 12px 0 rgba(79,70,229,0.10)' : 'none',
                    outline: active === item.label ? `1.5px solid #e0e7ff` : 'none',
                    borderLeft: active === item.label ? `4px solid ${activeBorder}` : '4px solid transparent',
                    paddingLeft: 20,
                    position: 'relative',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                  onClick={() => handleNavClick(item.label, item.expandable)}
                  onMouseOver={e => { if (active !== item.label) e.currentTarget.style.background = hoverBg; }}
                  onMouseOut={e => { if (active !== item.label) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span className="d-flex align-items-center" style={{ gap: 14, minWidth: 0 }}>
                    <span style={{ fontSize: 20, display: 'flex', alignItems: 'center', color: active === item.label ? activeIcon : inactiveIcon, minWidth: 24 }}>
                      {item.icon}
                    </span>
                    <span style={{ fontWeight: active === item.label ? 600 : 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                  </span>
                  {item.expandable && (
                    <span style={{ marginLeft: 'auto', color: active === item.label ? activeIcon : inactiveIcon }}>
                      {expanded[item.label] ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </span>
                  )}
                </a>
              </li>
              {/* Sub-items for expandable menus */}
              {item.expandable && expanded[item.label] && (
                <ul style={{ listStyle: 'none', paddingLeft: 36, margin: 0 }}>
                  {item.subItems.map(sub => (
                    <li key={sub.label}>
                      <a
                        href="#"
                        className="nav-link d-flex align-items-center rounded-3 px-2 py-1"
                        style={{
                          background: active === sub.label ? activeBg : 'transparent',
                          color: active === sub.label ? activeText : inactiveText,
                          fontWeight: active === sub.label ? 600 : 500,
                          fontSize: 15,
                          marginBottom: 2,
                          transition: 'background 0.2s, color 0.2s',
                          cursor: 'pointer',
                          borderRadius: 8,
                          paddingLeft: 8,
                        }}
                        onClick={() => setActive(sub.label)}
                        onMouseOver={e => { if (active !== sub.label) e.currentTarget.style.background = hoverBg; }}
                        onMouseOut={e => { if (active !== sub.label) e.currentTarget.style.background = 'transparent'; }}
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* Divider above user info */}
        <div style={{ borderTop: `1.5px solid ${dividerColor}`, margin: '22px 0 0 0' }} />
        {/* User Info at Bottom */}
        <div className="mt-auto d-flex align-items-center gap-3 pt-4" style={{ minHeight: 60 }}>
          <div style={{ width: 38, height: 38, background: '#6366f1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)' }}>
            A
          </div>
          <div>
            <div className="fw-semibold" style={{ fontSize: 15, color: '#222', fontWeight: 600 }}>Admin User</div>
            <div className="text-muted small" style={{ fontSize: 13, color: '#94a3b8' }}>System Administrator</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shidebar;





import React, { useState } from 'react';
import { FaUser, FaCheckCircle, FaUserTie, FaUserTag, FaSearch, FaThList, FaThLarge } from 'react-icons/fa';

const usersData = [
  { initials: 'JA', name: 'John Anderson', email: 'john.anderson@email.com', role: 'Buyer', status: 'Active', joined: 'Jan 15, 2024', lastLogin: 'Jan 20, 2024', orders: 25 },
  { initials: 'SM', name: 'Sarah Mitchell', email: 'sarah.mitchell@email.com', role: 'Seller', status: 'Active', joined: 'Dec 10, 2023', lastLogin: 'Jan 19, 2024', revenue: '$15,750.00' },
  { initials: 'MC', name: 'Michael Chen', email: 'michael.chen@email.com', role: 'Buyer', status: 'Suspended', joined: 'Jan 8, 2024', lastLogin: 'Jan 18, 2024', orders: 8 },
  { initials: 'ER', name: 'Emma Rodriguez', email: 'emma.rodriguez@email.com', role: 'Seller', status: 'Active', joined: 'Nov 22, 2023', lastLogin: 'Jan 20, 2024', revenue: '$28,900.00' },
  { initials: 'DJ', name: 'David Johnson', email: 'david.johnson@email.com', role: 'Buyer', status: 'Active', joined: 'Oct 5, 2023', lastLogin: 'Jan 17, 2024', orders: 42 },
  { initials: 'LT', name: 'Lisa Thompson', email: 'lisa.thompson@email.com', role: 'Seller', status: 'Suspended', joined: 'Sep 18, 2023', lastLogin: 'Jan 10, 2024', revenue: '$8,200.00' },
  { initials: 'RW', name: 'Robert Wilson', email: 'robert.wilson@email.com', role: 'Buyer', status: 'Active', joined: 'Jan 12, 2024', lastLogin: 'Jan 19, 2024', orders: 15 },
  { initials: 'JL', name: 'Jennifer Lee', email: 'jennifer.lee@email.com', role: 'Seller', status: 'Active', joined: 'Aug 30, 2023', lastLogin: 'Jan 20, 2024', revenue: '$45,600.00' },
  { initials: 'MT', name: 'Mark Taylor', email: 'mark.taylor@email.com', role: 'Buyer', status: 'Active', joined: 'Nov 5, 2023', lastLogin: 'Jan 18, 2024', orders: 33 },
  { initials: 'JB', name: 'Jessica Brown', email: 'jessica.brown@email.com', role: 'Seller', status: 'Active', joined: 'Oct 20, 2023', lastLogin: 'Jan 16, 2024', revenue: '$22,400.00' },
  { initials: 'KM', name: 'Kevin Martinez', email: 'kevin.martinez@email.com', role: 'Buyer', status: 'Suspended', joined: 'Dec 28, 2023', lastLogin: 'Jan 15, 2024', orders: 12 },
  { initials: 'AD', name: 'Amanda Davis', email: 'amanda.davis@email.com', role: 'Seller', status: 'Active', joined: 'Sep 10, 2023', lastLogin: 'Jan 12, 2024', revenue: '$31,200.00' },
];

const summary = {
  total: 12,
  active: 9,
  buyers: 6,
  sellers: 6,
};

function AllUsers() {
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');

  const filteredUsers = usersData.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid py-4 px-2 px-md-4" style={{ fontFamily: 'Inter, sans-serif', background: '#f7f9fb', minHeight: '100vh' }}>
      {/* Header */}
      <div className="bg-white rounded-top-4 px-4 pt-4 pb-0 mb-0 shadow-sm d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div>
          <h3 className="fw-bold mb-1" style={{ fontSize: 28, color: '#222' }}>All Users</h3>
          <div className="text-muted" style={{ fontSize: 15 }}>Complete overview of all registered users</div>
        </div>
        <button className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2 rounded-3 fw-medium" style={{ fontSize: 15, background: '#2563eb', border: 'none' }}>
          <FaUser className="me-1" /> Manage Users
        </button>
      </div>
      {/* Summary Cards */}
      <div className="bg-white rounded-bottom-4 shadow-sm px-4 pt-3 pb-4 mb-4 row g-3" style={{ marginTop: '-2px' }}>
        <div className="col-6 col-md-3">
          <div className="d-flex flex-column align-items-center justify-content-center bg-light rounded-3 py-3 h-100" style={{ background: '#f7f9fb' }}>
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-2" style={{ background: '#eef2ff', color: '#2563eb', width: 38, height: 38 }}><FaUser /></div>
            <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.total}</div>
            <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Total Users</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="d-flex flex-column align-items-center justify-content-center bg-light rounded-3 py-3 h-100" style={{ background: '#f7f9fb' }}>
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-2" style={{ background: '#ecfdf5', color: '#22c55e', width: 38, height: 38 }}><FaCheckCircle /></div>
            <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.active}</div>
            <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Active Users</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="d-flex flex-column align-items-center justify-content-center bg-light rounded-3 py-3 h-100" style={{ background: '#f7f9fb' }}>
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-2" style={{ background: '#f3f0ff', color: '#a78bfa', width: 38, height: 38 }}><FaUserTie /></div>
            <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.buyers}</div>
            <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Buyers</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="d-flex flex-column align-items-center justify-content-center bg-light rounded-3 py-3 h-100" style={{ background: '#f7f9fb' }}>
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-2" style={{ background: '#fff7ed', color: '#f59e42', width: 38, height: 38 }}><FaUserTag /></div>
            <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.sellers}</div>
            <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Sellers</div>
          </div>
        </div>
      </div>
      {/* User Directory */}
      <div className="bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <div className="fw-semibold" style={{ fontSize: 18, color: '#222' }}>User Directory</div>
          <div className="d-flex align-items-center gap-2 position-relative">
            <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontSize: 16 }}><FaSearch /></span>
            <input
              type="text"
              className="form-control ps-5 py-2 rounded-3"
              style={{ minWidth: 220, fontSize: 15, background: '#f7f9fb', border: '1.5px solid #e5e7eb', color: '#222' }}
              placeholder="Search users..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className={`btn px-0 py-0 ms-2 rounded-3 border-0${view === 'grid' ? ' bg-primary text-white' : ' bg-light text-secondary'}`} style={{ width: 38, height: 38, fontSize: 18, border: '1.5px solid #e5e7eb' }} onClick={() => setView('grid')}><FaThLarge /></button>
            <button className={`btn px-0 py-0 ms-2 rounded-3 border-0${view === 'list' ? ' bg-primary text-white' : ' bg-light text-secondary'}`} style={{ width: 38, height: 38, fontSize: 18, border: '1.5px solid #e5e7eb' }} onClick={() => setView('list')}><FaThList /></button>
          </div>
        </div>
        {/* User Cards Grid */}
        {view === 'grid' ? (
          <div className="row g-3">
            {filteredUsers.map((user, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div className="bg-light rounded-3 shadow-sm p-3 h-100 d-flex flex-column gap-2" style={{ background: '#f7f9fb', minHeight: 170 }}>
                  <div className="d-flex align-items-center gap-3 mb-1">
                    <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 44, height: 44, background: '#6366f1', color: '#fff', fontWeight: 600, fontSize: 18 }}>{user.initials}</div>
                    <div>
                      <div className="fw-semibold" style={{ fontSize: 16, color: '#222' }}>{user.name}</div>
                      <div className="text-muted small" style={{ fontSize: 13 }}>{user.email}</div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 mb-1">
                    <span className={`badge rounded-pill px-3 py-1 fw-semibold${user.role === 'Buyer' ? '' : ''}`} style={{ background: user.role === 'Buyer' ? '#eef2ff' : '#f3f0ff', color: user.role === 'Buyer' ? '#2563eb' : '#a78bfa', fontSize: 12 }}>{user.role}</span>
                    <span className={`badge rounded-pill px-3 py-1 fw-semibold${user.status === 'Active' ? '' : ''}`} style={{ background: user.status === 'Active' ? '#ecfdf5' : '#fef2f2', color: user.status === 'Active' ? '#22c55e' : '#f87171', fontSize: 12 }}>{user.status}</span>
                  </div>
                  <div className="d-flex flex-wrap gap-3" style={{ fontSize: 13, color: '#64748b' }}>
                    <div>Joined: <span className="fw-semibold text-dark">{user.joined}</span></div>
                    <div>Last Login: <span className="fw-semibold text-dark">{user.lastLogin}</span></div>
                    {user.orders !== undefined && <div>Orders: <span className="fw-semibold text-dark">{user.orders}</span></div>}
                    {user.revenue !== undefined && <div>Revenue: <span className="fw-semibold text-dark">{user.revenue}</span></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Last Login</th>
                  <th>Orders</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 36, height: 36, background: '#6366f1', color: '#fff', fontWeight: 600, fontSize: 16 }}>{user.initials}</div>
                        <div>
                          <div className="fw-semibold" style={{ color: '#222' }}>{user.name}</div>
                          <div className="text-muted small" style={{ fontSize: 13 }}>{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className={`badge rounded-pill px-3 py-1 fw-semibold${user.role === 'Buyer' ? '' : ''}`} style={{ background: user.role === 'Buyer' ? '#eef2ff' : '#f3f0ff', color: user.role === 'Buyer' ? '#2563eb' : '#a78bfa', fontSize: 12 }}>{user.role}</span></td>
                    <td><span className={`badge rounded-pill px-3 py-1 fw-semibold${user.status === 'Active' ? '' : ''}`} style={{ background: user.status === 'Active' ? '#ecfdf5' : '#fef2f2', color: user.status === 'Active' ? '#22c55e' : '#f87171', fontSize: 12 }}>{user.status}</span></td>
                    <td>{user.joined}</td>
                    <td>{user.lastLogin}</td>
                    <td>{user.orders !== undefined ? user.orders : '-'}</td>
                    <td>{user.revenue !== undefined ? user.revenue : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllUsers;











import React, { useEffect, useState } from "react";
import { adminMenuItems } from "../Layouts/menuConfig"
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";



const navLinks = [
  { icon: <FaThLarge />, label: "Dashboard", path: "/" },
  {
    icon: <FaUsers />, label: "User Management", expandable: true, path: "/admin/users", subItems: [
      { label: "All Users", path: "/allUsers" },
      { label: "Add User", path: "/buyers" },
      { label: "Roles & Permissions", path: "/sellers" },
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
function Shidebar({ show, onClose }) {
 
  const [active, setActive] = useState("Dashboard");
  const [expanded, setExpanded] = useState({});

  const handleNavClick = (label, expandable) => {
    setActive(label);
    if (expandable) {
      setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
    }
  };

  // Color palette
  const sidebarBg = '#f9fafb'; // very light gray
  const activeBg = '#4f46e5'; // lighter blue
  const activeText = '#fff';
  const activeIcon = '#fff';
  const inactiveText = '#334155'; // darker gray
  const inactiveIcon = '#334155';
  const hoverBg = '#f1f5f9'; // slightly darker gray
  const borderColor = '#e5e7eb';
  const activeBorder = '#6366f1'; // soft blue
  const dividerColor = '#e2e8f0';

  return (
    <>
      {/* Overlay for mobile */}
      {show && (
        <div className="d-lg-none position-fixed top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.3)', zIndex: 1040 }} onClick={onClose}></div>
      )}
      {/* Sidebar for mobile (slide-in) */}
      <div
        className={`sidebar-main d-lg-none position-fixed top-0 start-0 h-100 d-flex flex-column flex-shrink-0 p-3 border-end${show ? ' open' : ''}`}
        style={{
          width: 270,
          minHeight: "100vh",
          fontFamily: 'Inter, system-ui, sans-serif',
          background: sidebarBg,
          zIndex: show ? 1041 : 2,
          backgroundColor: "white",
          borderRight: `1px solid ${borderColor}`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          transform: show ? 'translateX(0)' : 'translateX(-100%)',
          left: 0,
        }}
      >
        {/* Close button for mobile */}
        <div className="d-lg-none d-flex justify-content-end mb-2">
          <button className="btn btn-link fs-3" style={{ color: '#222' }} onClick={onClose} aria-label="Close sidebar">&times;</button>
        </div>
        {/* Logo and Panel Title */}
        <a
          href="/"
          className="d-flex align-items-center mb-4 text-decoration-none"
          style={{ gap: 14 }}
        >
          <span style={{ fontSize: 32, color: '#6366f1', display: 'flex', alignItems: 'center' }}>
            <MdOutlineAdminPanelSettings />
          </span>
          <span className="fs-5 fw-bold" style={{ color: '#222', letterSpacing: 0.2, fontWeight: 700, fontSize: 20 }}>Admin Panel</span>
        </a>
        <span className="text-muted small mb-4 ms-1" style={{ fontSize: 13, color: '#94a3b8', marginBottom: 18, display: 'block' }}>CRM Management System</span>
        <ul className="nav nav-pills flex-column mb-auto gap-1" style={{ marginTop: 8 }}>
          {adminMenuItems.map((item, idx) => (
            <React.Fragment key={item.label}>
              <li className="nav-item">
                <Link
                  to={item.path}
                  className="nav-link d-flex align-items-center rounded-3 px-3 py-2"
                  style={{
                    background: active === item.label ? activeBg : 'transparent',
                    color: active === item.label ? activeText : inactiveText,
                    fontWeight: active === item.label ? 600 : 500,
                    fontSize: 16,
                    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s',
                    gap: 14,
                    cursor: 'pointer',
                    justifyContent: 'flex-start',
                    borderRadius: 12,
                    marginBottom: 2,
                    boxShadow: active === item.label ? '0 2px 12px 0 rgba(79,70,229,0.10)' : 'none',
                    outline: active === item.label ? `1.5px solid #e0e7ff` : 'none',
                    borderLeft: active === item.label ? `4px solid ${activeBorder}` : '4px solid transparent',
                    paddingLeft: 20,
                    position: 'relative',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                  onClick={() => handleNavClick(item.label, item.expandable)}
                  onMouseOver={e => { if (active !== item.label) e.currentTarget.style.background = hoverBg; }}
                  onMouseOut={e => { if (active !== item.label) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span className="d-flex align-items-center" style={{ gap: 14, minWidth: 0 }}>
                    <span style={{ fontSize: 20, display: 'flex', alignItems: 'center', color: active === item.label ? activeIcon : inactiveIcon, minWidth: 24 }}>
                      {item.icon}
                    </span>
                    <span style={{ fontWeight: active === item.label ? 600 : 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                  </span>
                  {item.expandable && (
                    <span style={{ marginLeft: 'auto', color: active === item.label ? activeIcon : inactiveIcon }}>
                      {expanded[item.label] ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </span>
                  )}
                </Link>
              </li>
              {/* Sub-items for expandable menus */}
              {item.expandable && expanded[item.label] && (
                <ul style={{ listStyle: 'none', paddingLeft: 36, margin: 0 }}>
                  {item.subItems.map(sub => (
                    <li key={sub.label}>
                      <Link
                        to={sub.path}
                        className="nav-link d-flex align-items-center rounded-3 px-2 py-1"
                        style={{
                          background: active === sub.label ? activeBg : 'transparent',
                          color: active === sub.label ? activeText : inactiveText,
                          fontWeight: active === sub.label ? 600 : 500,
                          fontSize: 15,
                          marginBottom: 2,
                          transition: 'background 0.2s, color 0.2s',
                          cursor: 'pointer',
                          borderRadius: 8,
                          paddingLeft: 8,
                        }}
                        onClick={() => setActive(sub.label)}
                        onMouseOver={e => { if (active !== sub.label) e.currentTarget.style.background = hoverBg; }}
                        onMouseOut={e => { if (active !== sub.label) e.currentTarget.style.background = 'transparent'; }}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* Divider above user info */}
        {/* User Info at Bottom */}
        <div className="mt-auto d-flex align-items-center gap-3 pt-4" style={{ minHeight: 60 }}>
          <div style={{ width: 38, height: 38, background: '#6366f1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)' }}>
            A
          </div>
          <div>
            <div className="fw-semibold" style={{ fontSize: 15, color: '#222', fontWeight: 600 }}>Admin User</div>
            <div className="text-muted small" style={{ fontSize: 13, color: '#94a3b8' }}>System Administrator</div>
          </div>
        </div>
      </div>
      {/* Sidebar for desktop (always visible) */}
      <div
        className="sidebar-main d-none d-lg-flex flex-column flex-shrink-0 p-3 border-end"
        style={{
          width: 270,
          minHeight: "100vh",
          fontFamily: 'Inter, system-ui, sans-serif',
          background: sidebarBg,
          zIndex: 2,
          backgroundColor: "white",
          borderRight: `1px solid ${borderColor}`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* Logo and Panel Title */}
        <a
          href="/"
          className="d-flex align-items-center mb-4 text-decoration-none"
          style={{ gap: 14 }}
        >
          <span style={{ fontSize: 32, color: '#6366f1', display: 'flex', alignItems: 'center' }}>
            <MdOutlineAdminPanelSettings />
          </span>
          <span className="fs-5 fw-bold" style={{ color: '#222', letterSpacing: 0.2, fontWeight: 700, fontSize: 20 }}>Admin Panel</span>
        </a>
        <span className="text-muted small mb-4 ms-1" style={{ fontSize: 13, color: '#94a3b8', marginBottom: 18, display: 'block' }}>CRM Management System</span>
        <ul className="nav nav-pills flex-column mb-auto gap-1" style={{ marginTop: 8 }}>
          {navLinks.map((item, idx) => (
            <React.Fragment key={item.label}>
              <li className="nav-item">
                <Link
                  to={item.path}
                  className="nav-link d-flex align-items-center rounded-3 px-3 py-2"
                  style={{
                    background: active === item.label ? activeBg : 'transparent',
                    color: active === item.label ? activeText : inactiveText,
                    fontWeight: active === item.label ? 600 : 500,
                    fontSize: 16,
                    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s',
                    gap: 14,
                    cursor: 'pointer',
                    justifyContent: 'flex-start',
                    borderRadius: 12,
                    marginBottom: 2,
                    boxShadow: active === item.label ? '0 2px 12px 0 rgba(79,70,229,0.10)' : 'none',
                    outline: active === item.label ? `1.5px solid #e0e7ff` : 'none',
                    borderLeft: active === item.label ? `4px solid ${activeBorder}` : '4px solid transparent',
                    paddingLeft: 20,
                    position: 'relative',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                  onClick={() => handleNavClick(item.label, item.expandable)}
                  onMouseOver={e => { if (active !== item.label) e.currentTarget.style.background = hoverBg; }}
                  onMouseOut={e => { if (active !== item.label) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span className="d-flex align-items-center" style={{ gap: 14, minWidth: 0 }}>
                    <span style={{ fontSize: 20, display: 'flex', alignItems: 'center', color: active === item.label ? activeIcon : inactiveIcon, minWidth: 24 }}>
                      {item.icon}
                    </span>
                    <span style={{ fontWeight: active === item.label ? 600 : 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                  </span>
                  {item.expandable && (
                    <span style={{ marginLeft: 'auto', color: active === item.label ? activeIcon : inactiveIcon }}>
                      {expanded[item.label] ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </span>
                  )}
                </Link>
              </li>
              {/* Sub-items for expandable menus */}
              {item.expandable && expanded[item.label] && (
                <ul style={{ listStyle: 'none', paddingLeft: 36, margin: 0 }}>
                  {item.subItems.map(sub => (
                    <li key={sub.label}>
                      <Link
                        to={sub.path}
                        className="nav-link d-flex align-items-center rounded-3 px-2 py-1"
                        style={{
                          background: active === sub.label ? activeBg : 'transparent',
                          color: active === sub.label ? activeText : inactiveText,
                          fontWeight: active === sub.label ? 600 : 500,
                          fontSize: 15,
                          marginBottom: 2,
                          transition: 'background 0.2s, color 0.2s',
                          cursor: 'pointer',
                          borderRadius: 8,
                          paddingLeft: 8,
                        }}
                        onClick={() => setActive(sub.label)}
                        onMouseOver={e => { if (active !== sub.label) e.currentTarget.style.background = hoverBg; }}
                        onMouseOut={e => { if (active !== sub.label) e.currentTarget.style.background = 'transparent'; }}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* Divider above user info */}
        {/* User Info at Bottom */}
        <div className="mt-auto d-flex align-items-center gap-3 pt-4" style={{ minHeight: 60 }}>
          <div style={{ width: 38, height: 38, background: '#6366f1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)' }}>
            A
          </div>
          <div>
            <div className="fw-semibold" style={{ fontSize: 15, color: '#222', fontWeight: 600 }}>Admin User</div>
            <div className="text-muted small" style={{ fontSize: 13, color: '#94a3b8' }}>System Administrator</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shidebar;
