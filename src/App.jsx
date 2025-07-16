
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";  
import Nevbar from "./features/Layouts/Nevbar";
import Shidebar from "./features/Layouts/Shidebar";
import Dashboard from "./features/Admin/Dashboard";
import AllUsers from "./features/Admin/UserManagement/AllUsers";
import Buyers from "./features/Admin/UserManagement/Buyers";
import Sellers from "./features/Admin/UserManagement/Sellers";

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
            {/* 404 ‑‑ optional fallback */}
            <Route path="*" element={<h2 className="p-4">Page not found</h2>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;