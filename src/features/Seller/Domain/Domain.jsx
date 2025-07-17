import React, { useState } from "react";
import "./Domain.css";

const domainData = {
  totalDomains: 3,
  activeDomains: 1,
  sslSecured: 2,
  domains: [
    {
      name: "mystore.example.com",
      type: "primary",
      status: "active",
      ssl: "secured",
      addedDate: "2024-01-15",
      expires: "2025-01-15",
      actions: ["edit", "delete"]
    },
    {
      name: "shop.mybrand.com",
      type: "custom",
      status: "pending",
      ssl: "not secured",
      addedDate: "2024-01-20",
      expires: "2024-12-20",
      actions: ["edit", "delete"]
    },
    {
      name: "store.company.net",
      type: "custom",
      status: "inactive",
      ssl: "secured",
      addedDate: "2024-01-10",
      expires: "2024-11-10",
      actions: ["edit", "delete"]
    }
  ]
};

const Domain = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editDomain, setEditDomain] = useState(null);

  const handleAddDomain = () => {
    setAddModalOpen(true);
  };

  const handleEditDomain = (domain) => {
    setEditDomain(domain);
    setEditModalOpen(true);
  };

  const closeModal = () => {
    setAddModalOpen(false);
    setEditModalOpen(false);
    setEditDomain(null);
  };

  return (
    <div className="domain-manager-container">
      <div className="domain-manager-header">
        <div>
          <h2>Domain Manager</h2>
          <p>Manage your custom domains and SSL certificates</p>
        </div>
        <div className="add-domain">
          <input
            type="text"
            placeholder="Enter your domain (e.g., shop.yourdomain.com)"
          />
          <button className="add-domain-btn" onClick={handleAddDomain}>+ Add Domain</button>
        </div>
      </div>

      <div className="domain-stats-grid">
        <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
          <div className="stat-title">Total Domains</div>
          <div className="stat-value">{domainData.totalDomains}</div>
        </div>
        <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
          <div className="stat-title">Active Domains</div>
          <div className="stat-value">{domainData.activeDomains}</div>
        </div>
        <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
          <div className="stat-title">SSL Secured</div>
          <div className="stat-value">{domainData.sslSecured}</div>
        </div>
      </div>

      <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
        <div className="list-header">
          <div>Domain</div>
          <div>Type</div>
          <div>Status</div>
          <div>SSL</div>
          <div>Added Date</div>
          <div>Expires</div>
          <div>Actions</div>
        </div>
        {domainData.domains.map((domain, idx) => (
          <div className="list-row" key={idx}>
            <div>{domain.name}</div>
            <div>{domain.type}</div>
 <div className={`status ${domain.status}`}>{domain.status}</div>
<div className={`ssl ${domain.ssl.replace(" ", "-")}`}>{domain.ssl}</div>

            <div>{domain.addedDate}</div>
            <div>{domain.expires}</div>
            <div className="actions">
              <button className="action-btn edit" onClick={() => handleEditDomain(domain)}>Edit</button>
              <button className="action-btn delete">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
        <h3>DNS Configuration Guide</h3>
        <ul>
          <li>Step 1: Add an A record pointing to our server IP: 192.168.1.100</li>
          <li>Step 2: Add a CNAME record for www pointing to your domain</li>
          <li>Step 3: Wait for DNS propagation (up to 24 hours)</li>
          <li>Step 4: SSL certificate will be automatically generated once domain is verified</li>
        </ul>
      </div>

      {isAddModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Domain</h3>
            <form>
              <input type="text" placeholder="Domain Name" />
              <input type="text" placeholder="Type" />
              <input type="text" placeholder="Status" />
              <input type="text" placeholder="SSL" />
              <input type="text" placeholder="Added Date" />
              <input type="text" placeholder="Expires" />
              <button type="submit">Add</button>
            </form>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Domain</h3>
            <form>
              <input type="text" defaultValue={editDomain.name} />
              <input type="text" defaultValue={editDomain.type} />
              <input type="text" defaultValue={editDomain.status} />
               <input type="text" defaultValue={editDomain.ssl} />
                <input type="text" defaultValue={editDomain.addedDate} />
                 <input type="text" defaultValue={editDomain.expires} />
              <button type="submit">Save</button>
            </form>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Domain;