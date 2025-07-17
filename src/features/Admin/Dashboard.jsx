import React, { useState } from "react";
import "./DashboardColors.css";

function Dashboard() {
  const [dateRange, setDateRange] = useState("Last 7 Days");

  // Dummy activity data
  const activities = [
    {
      icon: "bi-person-plus-fill",
      iconBg: "#E9FDF6",
      iconColor: "#22C55E",
      title: "New User Registration",
      desc: "Sarah Johnson joined as a buyer",
      tags: [{ text: "Sarah Johnson", color: "#F3F4F6" }],
      time: "2 minutes ago",
    },
    {
      icon: "bi-bar-chart-fill",
      iconBg: "#F3F0FF",
      iconColor: "#A78BFA",
      title: "Seller Plan Upgrade",
      desc: "TechCorp Solutions upgraded to Premium",
      tags: [
        { text: "TechCorp Solutions", color: "#F3F4F6" },
        { text: "$299/month", color: "#D1FAE5", textColor: "#059669" },
      ],
      time: "15 minutes ago",
    },
    {
      icon: "bi-bag-check-fill",
      iconBg: "#EFF6FF",
      iconColor: "#60A5FA",
      title: "High-Value Order Completed",
      desc: "Order #ORD-12453 for $25,000 completed",
      tags: [{ text: "$25,000", color: "#D1FAE5", textColor: "#059669" }],
      time: "1 hour ago",
    },
  ];

  // Quick Actions
  const quickActions = [
    {
      icon: "bi-person-plus-fill",
      color: "#2563EB",
      bg: "#EEF2FF",
      title: "Add New User",
      desc: "Create new buyer or seller account",
    },
    {
      icon: "bi-gear-fill",
      color: "#22C55E",
      bg: "#ECFDF5",
      title: "System Settings",
      desc: "Configure platform settings",
    },
    {
      icon: "bi-bar-chart-fill",
      color: "#A78BFA",
      bg: "#F3F0FF",
      title: "Generate Report",
      desc: "Create analytics reports",
    },
    {
      icon: "bi-life-preserver",
      color: "#F59E42",
      bg: "#FFF7ED",
      title: "Support Center",
      desc: "Manage support tickets",
    },
    {
      icon: "bi-people-fill",
      color: "#F87171",
      bg: "#FEF2F2",
      title: "UserManagement",
      desc: "Manage user accounts",
    },
    {
      icon: "bi-credit-card-2-front-fill",
      color: "#F59E42",
      bg: "#FEFCE8",
      title: "Payment Issues",
      desc: "Handle payment disputes",
    },
  ];

  return (
    <>
      {/* Google Fonts for Inter */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Bootstrap Icons CDN (ensure this is in your index.html for icons to work) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />
      <div
        className="container-fluid p-5 dashboard-main"
        style={{ fontFamily:"Inter, sans-serif"}}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb mb-0"
                style={{ background: "transparent", padding: 0 }}
              >
                <li className="breadcrumb-item">
                  <a
                    href="#"
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    Admin
                  </a>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{ color: "#0f172a", fontWeight: 600 }}
                >
                  Dashboard
                </li>
              </ol>
            </nav>
            <h3
              className="fw-bold mt-2 dashboard-section-title"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#0f172a",
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
              }}
            >
              Dashboard Overview
            </h3>
          </div>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <select
              className="form-select w-auto"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              style={{ minWidth: 150, fontWeight: 500 }}
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
              <option>Last Month</option>
            </select>
            <button
              className="btn d-flex align-items-center"
              style={{
                fontWeight: 500,
                background: "#2B4B37",
                border: "none",
                color: "#fff",
                borderRadius: 8,
                padding: "10px 22px",
                fontSize: 16,
                boxShadow: "0 2px 8px 0 rgba(16,30,54,.06)",
              }}
            >
              <i className="bi bi-download me-2"></i>Export Report
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-3">
            <div className="dashboard-card">
              <div className="d-flex align-items-center mb-2">
                <div className="rounded-3 p-2 me-3 d-flex align-items-center justify-content-center" style={{ background: "#EEF2FF", color: "#2563EB", width: 44, height: 44 }}>
                  <i className="bi bi-person-fill fs-3"></i>
                </div>
                <span className="badge ms-auto" style={{ background: "#D1FAE5", color: "#22C55E", fontWeight: 600, fontSize: 12 }}>
                  <i className="bi bi-arrow-up me-1"></i>+12.5%
                </span>
              </div>
              <div className="card-value">12,548</div>
              <div className="card-title">Total Users</div>
              <div className="card-desc">Active platform users</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="dashboard-card">
              <div className="d-flex align-items-center mb-2">
                <div className="rounded-3 p-2 me-3 d-flex align-items-center justify-content-center" style={{ background: "#ECFDF5", color: "#22C55E", width: 44, height: 44 }}>
                  <i className="bi bi-person-lines-fill fs-3"></i>
                </div>
                <span className="badge ms-auto" style={{ background: "#D1FAE5", color: "#22C55E", fontWeight: 600, fontSize: 12 }}>
                  <i className="bi bi-arrow-up me-1"></i>+8.2%
                </span>
              </div>
              <div className="card-value">2,347</div>
              <div className="card-title">Active Sellers</div>
              <div className="card-desc">Sellers with active listings</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="dashboard-card">
              <div className="d-flex align-items-center mb-2">
                <div className="rounded-3 p-2 me-3 d-flex align-items-center justify-content-center" style={{ background: "#F3F0FF", color: "#A78BFA", width: 44, height: 44 }}>
                  <i className="bi bi-currency-dollar fs-3"></i>
                </div>
                <span className="badge ms-auto" style={{ background: "#D1FAE5", color: "#22C55E", fontWeight: 600, fontSize: 12 }}>
                  <i className="bi bi-arrow-up me-1"></i>+15.8%
                </span>
              </div>
              <div className="card-value">$489,230</div>
              <div className="card-title">Total Revenue</div>
              <div className="card-desc">Monthly recurring revenue</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="dashboard-card">
              <div className="d-flex align-items-center mb-2">
                <div className="rounded-3 p-2 me-3 d-flex align-items-center justify-content-center" style={{ background: "#FEF3C7", color: "#F59E42", width: 44, height: 44 }}>
                  <i className="bi bi-calendar2-event-fill fs-3"></i>
                </div>
                <span className="badge ms-auto" style={{ background: "#D1FAE5", color: "#22C55E", fontWeight: 600, fontSize: 12 }}>
                  <i className="bi bi-arrow-up me-1"></i>+6.4%
                </span>
              </div>
              <div className="card-value">8,924</div>
              <div className="card-title">Active Subscriptions</div>
              <div className="card-desc">Premium subscriptions</div>
            </div>
          </div>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="row g-4">
          {/* Recent Activity */}
          <div className="col-lg-8">
            <div className="dashboard-card mb-4" style={{ padding: 0 }}>
              <div className="card-header bg-white d-flex justify-content-between align-items-center" style={{ borderRadius: 16, borderBottom: "none", fontWeight: 600, fontSize: 16, padding: "20px 24px 12px 24px" }}>
                <span>Recent Activity</span>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge" style={{ background: "#EEF2FF", color: "#2563EB", fontWeight: 600, fontSize: 12 }}>
                    Live
                  </span>
                  <i className="bi bi-funnel-fill text-muted" title="Filter"></i>
                  <i className="bi bi-arrow-down-up text-muted" title="Sort"></i>
                  <i className="bi bi-three-dots-vertical text-muted"></i>
                </div>
              </div>
              <div className="card-body" style={{ padding: "16px 24px" }}>
                <div className="mb-2 text-muted small">
                  <span className="text-success me-2">●</span>8 new activities today &nbsp;•&nbsp; Last updated 2 min ago
                </div>
                <div className="d-flex flex-column gap-3">
                  {activities.map((act, idx) => (
                    <div key={idx} className="d-flex align-items-start p-3" style={{ borderRadius: 12, background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 1px 2px 0 rgba(16,30,54,.03)" }}>
                      <div className="d-flex align-items-center justify-content-center me-3" style={{ width: 36, height: 36, borderRadius: 8, background: act.iconBg }}>
                        <i className={`bi ${act.icon} fs-5`} style={{ color: act.iconColor }}></i>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="fw-semibold" style={{ fontSize: 13, color: "#0F172A", fontWeight: 600, letterSpacing: "-0.2px" }}>
                            {act.title}
                          </div>
                          <span className="text-muted small" style={{ fontWeight: 500, fontSize: 12, whiteSpace: "nowrap" }}>
                            {act.time}
                          </span>
                        </div>
                        <div className="text-muted" style={{ fontSize: 12, fontWeight: 500, marginTop: 1 }}>
                          {act.desc}
                        </div>
                        <div className="mt-2 d-flex align-items-center gap-2 flex-wrap">
                          {act.tags.map((tag, i) => (
                            <span key={i} className="badge" style={{ background: tag.color, color: tag.textColor || "#111827", fontWeight: 600, fontSize: 12, border: "1px solid #E5E7EB", letterSpacing: "-0.2px" }}>
                              {tag.text}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Quick Actions */}
          <div className="col-lg-4">
            <div className="dashboard-card mb-4" style={{ padding: 0 }}>
              <div className="card-header bg-white fw-bold" style={{ borderRadius: 16, fontSize: 16, borderBottom: "none", padding: "20px 24px 12px 24px" }}>
                Quick Actions
              </div>
              <div className="card-body d-grid gap-3" style={{ gridTemplateColumns: "1fr 1fr", display: "grid", padding: "16px 24px" }}>
                {quickActions.map((action, idx) => (
                  <button key={idx} className="quick-action-btn" style={{ background: action.bg, color: action.color }}>
                    <i className={`bi ${action.icon} fs-4`}></i>
                    <div className="quick-action-title">{action.title}</div>
                    <div className="quick-action-desc">{action.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;