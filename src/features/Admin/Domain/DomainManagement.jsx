import React from 'react';
import { FaGlobe, FaCheckCircle, FaClock, FaTimesCircle, FaPen, FaEye } from 'react-icons/fa';

// Sample data for domains
const domainData = [
  {
    name: 'enterprisecorp.com',
    owner: 'Enterprise Corp',
    email: 'admin@enterprisecorp.com',
    visits: '89.2K',
    status: 'Expired',
    type: 'Premium',
    expiry: '2023-05-18',
    revenue: '$22,340',
    price: '$399/year',
  },
  {
    name: 'globalsuppliers.org',
    owner: 'Global Suppliers Inc',
    email: 'info@globalsuppliers.org',
    visits: '12.1K',
    status: 'Pending',
    type: 'Premium',
    expiry: '2024-12-01',
    revenue: '$3,890',
    price: '$249/year',
  },
  {
    name: 'industrialsupply.net',
    owner: 'Industrial Manufacturing',
    email: 'contact@industrial.net',
    visits: '28.7K',
    status: 'Active',
    type: 'Standard',
    expiry: '2024-03-22',
    revenue: '$8,230',
    price: '$99/year',
  },
];

const statusBadge = (status) => {
  switch (status) {
    case 'Active':
      return <span className="badge bg-success">Active</span>;
    case 'Pending':
      return <span className="badge bg-warning text-dark">Pending</span>;
    case 'Expired':
      return <span className="badge bg-danger">Expired</span>;
    default:
      return <span className="badge bg-secondary">{status}</span>;
  }
};

const typeBadge = (type) => {
  switch (type) {
    case 'Premium':
      return <span className="badge bg-purple" style={{backgroundColor:'#a259ff'}}>{type}</span>;
    case 'Standard':
      return <span className="badge bg-secondary">{type}</span>;
    default:
      return <span className="badge bg-light text-dark">{type}</span>;
  }
};

function DomainManagement() {
  return (
    <div className="container-fluid py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold mb-0">Domain Management</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">Admin</li>
              <li className="breadcrumb-item">Domain Control</li>
              <li className="breadcrumb-item active" aria-current="page">Domain Names</li>
            </ol>
          </nav>
        </div>
        <div>
          <button className="btn btn-primary me-2">+ Add Domain</button>
          <button className="btn btn-outline-secondary">Export</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaGlobe size={32} className="text-primary" />
              </div>
              <div>
                <h4 className="mb-0 fw-bold">247</h4>
                <small className="text-muted">Total Domains</small>
                <div className="text-success small mt-1">+12</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaCheckCircle size={32} className="text-success" />
              </div>
              <div>
                <h4 className="mb-0 fw-bold">189</h4>
                <small className="text-muted">Active Domains</small>
                <div className="text-success small mt-1">+8</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaClock size={32} className="text-warning" />
              </div>
              <div>
                <h4 className="mb-0 fw-bold">34</h4>
                <small className="text-muted">Pending Verification</small>
                <div className="text-danger small mt-1">-3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <FaTimesCircle size={32} className="text-danger" />
              </div>
              <div>
                <h4 className="mb-0 fw-bold">24</h4>
                <small className="text-muted">Expired Domains</small>
                <div className="text-success small mt-1">+5</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="row g-2 align-items-center">
            <div className="col-md-5">
              <input type="text" className="form-control" placeholder="Search domains or owners..." />
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Expired</option>
              </select>
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option>All Types</option>
                <option>Premium</option>
                <option>Standard</option>
              </select>
            </div>
            <div className="col-md-3 text-end">
              <button className="btn btn-outline-secondary">Advanced</button>
            </div>
          </div>
        </div>
      </div>

      {/* Domain List Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0">Domain List</h5>
            <span className="text-muted small">Showing {domainData.length} domains</span>
          </div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col"><input type="checkbox" /></th>
                  <th scope="col">Domain Name</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Status</th>
                  <th scope="col">Type</th>
                  <th scope="col">Expiry Date</th>
                  <th scope="col">Revenue</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {domainData.map((d, idx) => (
                  <tr key={idx}>
                    <td><input type="checkbox" /></td>
                    <td>
                      <div className="fw-semibold">{d.name}</div>
                      <div className="text-muted small">{d.visits} visits/month</div>
                    </td>
                    <td>
                      <div>{d.owner}</div>
                      <div className="text-muted small">{d.email}</div>
                    </td>
                    <td>{statusBadge(d.status)}</td>
                    <td>{typeBadge(d.type)}</td>
                    <td>
                      <div>{d.expiry}</div>
                      <div className="text-muted small">{d.price}</div>
                    </td>
                    <td className="fw-bold text-success">{d.revenue}</td>
                    <td>
                      <button className="btn btn-link p-0 me-2"><FaPen /></button>
                      <button className="btn btn-link p-0"><FaEye /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DomainManagement;