
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";  
import Nevbar from "./features/Layouts/Nevbar";
import Shidebar from "./features/Layouts/Shidebar";
import Dashboard from "./features/Admin/Dashboard";
import AllUsers from "./features/Admin/UserManagement/AllUsers";
import Buyers from "./features/Admin/UserManagement/Buyers";
import Sellers from "./features/Admin/UserManagement/Sellers";
import CouponManagement from "./features/Admin/Coupon/CouponManagement";
import DomainManagement from "./features/Admin/Coupon/DomainManagement";
import PaymentLogs from "./features/Admin/Payment/PaymentLogs";
import AllPlans from "./features/Admin/Plans/AllPlans";
import GeneralSettings from "./features/Admin/Settings/GeneralSettings";
import Reportanalatics from "./features/Admin/Reports/Reportanalatics";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen((open) => !open);
  const handleSidebarClose = () => setSidebarOpen(false);
  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#f7f9fb" }}>
      <Shidebar show={sidebarOpen} onClose={handleSidebarClose} />
      <div className="flex-grow-1">
        <Nevbar onSidebarToggle={handleSidebarToggle} />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/allUsers"element={<AllUsers/>} />
            <Route path="/buyers"  element={<Buyers/>} />
            <Route path="/sellers" element={<Sellers/>} />
            <Route path="/CouponManagement" element={<CouponManagement/>} />
            <Route path="/domain" element={<DomainManagement/>} />
            <Route path="/Payment" element={<PaymentLogs/>} />
            <Route path="/AllPlans" element={<AllPlans/>} />
            <Route path="/reports" element={<Reportanalatics/>} />
            <Route path="/settings" element={<GeneralSettings/>} />
            {/* 404 ‑‑ optional fallback */}
            <Route path="*" element={<h2 className="p-4">Page not found</h2>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;