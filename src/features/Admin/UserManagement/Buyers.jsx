import React, { useState } from 'react';
import { TbUser, TbCheck, TbX, TbShoppingCart, TbSearch, TbRefresh, TbEye, TbPencil, TbTrash } from 'react-icons/tb';

const buyersData = [
  {
    initials: 'AT',
    name: 'Alex Thompson',
    email: 'alex.thompson@email.com',
    phone: '+1-555-0369',
    role: 'Buyer',
    status: 'Active',
    orders: 33,
    joinDate: 'Dec 20, 2023',
    lastLogin: 'Jan 19, 2024',
  },
  {
    initials: 'DJ',
    name: 'David Johnson',
    email: 'david.johnson@email.com',
    phone: '+1-555-0654',
    role: 'Buyer',
    status: 'Active',
    orders: 42,
    joinDate: 'Oct 5, 2023',
    lastLogin: 'Jan 17, 2024',
  },
  {
    initials: 'JW',
    name: 'James Wilson',
    email: 'james.wilson@email.com',
    phone: '+1-555-0852',
    role: 'Buyer',
    status: 'Active',
    orders: 67,
    joinDate: 'Sep 10, 2023',
    lastLogin: 'Jan 18, 2024',
  },
  // Add more users as needed
];

const summaryStats = [
  {
    icon: <TbUser size={28} style={{ color: '#5b6bfa' }} />, // blue
    label: 'Total Buyers',
    value: 8,
    iconBg: '#e6f0ff',
  },
  {
    icon: <TbCheck size={28} style={{ color: '#22c55e' }} />, // green
    label: 'Active Buyers',
    value: 6,
    iconBg: '#e6fbe6',
  },
  {
    icon: <TbX size={28} style={{ color: '#ef4444' }} />, // red
    label: 'Suspended',
    value: 2,
    iconBg: '#ffe6e6',
  },
  {
    icon: <TbShoppingCart size={28} style={{ color: '#a259ff' }} />, // purple
    label: 'Total Orders',
    value: 221,
    iconBg: '#f3e8ff',
  },
];

const statusBadge = (status) => (
  <span className={`badge rounded-pill ${status === 'Active' ? 'bg-success' : 'bg-danger'}`}>{status}</span>
);

const roleBadge = (role) => (
  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">{role}</span>
);

function Buyers() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All Status');
  const [sortBy, setSortBy] = useState('Name');
  const [order, setOrder] = useState('Ascending');

  // Filter logic
  const filteredBuyers = buyersData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === 'All Status' || user.status === status;
    return matchesSearch && matchesStatus;
  });

  // Sort logic
  const sortedBuyers = [...filteredBuyers].sort((a, b) => {
    if (sortBy === 'Name') {
      return order === 'Ascending'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === 'Orders') {
      return order === 'Ascending' ? a.orders - b.orders : b.orders - a.orders;
    }
    return 0;
  });

  return (
    <div className="container-fluid py-4">
      <h3 className="fw-bold mb-1" style={{ letterSpacing: '-0.5px' }}>Buyers Management</h3>
      <div className="text-muted mb-4" style={{ fontWeight: 500 }}>Manage all registered buyers and their purchasing activity</div>
      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        {summaryStats.map((stat, idx) => (
          <div className="col-md-3 col-6" key={stat.label}>
            <div className="card shadow-sm border-0" style={{ minHeight: 100 }}>
              <div className="card-body d-flex align-items-center gap-3">
                <div className="d-flex align-items-center justify-content-center" style={{ width: 48, height: 48, borderRadius: '50%', background: stat.iconBg }}>
                  {stat.icon}
                </div>
                <div>
                  <div className="fw-bold fs-4" style={{ fontWeight: 700 }}>{stat.value}</div>
                  <div className="text-muted small" style={{ fontWeight: 500 }}>{stat.label}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Filter & Search */}
      <div className="card mb-4 shadow-sm border-0">
        <div className="card-body">
          <div className="row align-items-end g-3">
            <div className="col-md-4">
              <label className="form-label fw-semibold">Search Users</label>
              <div className="input-group">
                <span className="input-group-text bg-transparent border-end-0" style={{ borderRadius: '8px 0 0 8px' }}>
                  <TbSearch className="filter-icon" />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  style={{ borderRadius: '0 8px 8px 0' }}
                  placeholder="Search by name or email..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <div className="small text-muted mt-1">Showing {filteredBuyers.length} users</div>
            </div>
            <div className="col-md-2">
              <label className="form-label fw-semibold">Status</label>
              <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
                <option>All Status</option>
                <option>Active</option>
                <option>Suspended</option>
              </select>
            </div>
            <div className="col-md-2">
              <label className="form-label fw-semibold">Sort By</label>
              <select className="form-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option>Name</option>
                <option>Orders</option>
              </select>
            </div>
            <div className="col-md-2">
              <label className="form-label fw-semibold">Order</label>
              <select className="form-select" value={order} onChange={e => setOrder(e.target.value)}>
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </div>
            <div className="col-md-2 d-flex align-items-end justify-content-end">
              <button className="btn btn-outline-secondary d-flex align-items-center" style={{ borderRadius: 8 }} onClick={() => { setSearch(''); setStatus('All Status'); setSortBy('Name'); setOrder('Ascending'); }}>
                <TbRefresh className="reset-icon" /> Reset Filters
              </button>
            </div>
          </div>
          <div className="d-flex gap-3 mt-3 small text-muted">
            <span>Active: 6</span>
            <span>Suspended: 2</span>
            <span>Buyers: 8</span>
            <span>Sellers: 0</span>
          </div>
        </div>
      </div>
      {/* Users List Table */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="fw-semibold mb-2" style={{ fontWeight: 600 }}>Users List</div>
          <div className="text-muted small mb-3">Total {filteredBuyers.length} users found</div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-light">
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Performance</th>
                  <th>Join Date</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedBuyers.map((user, idx) => (
                  <tr key={user.email}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="avatar" style={{ background: '#6366f1' }}>{user.initials}</div>
                        <div>
                          <div className="fw-semibold" style={{ fontWeight: 600 }}>{user.name}</div>
                          <div className="text-muted small">{user.email}</div>
                          <div className="text-muted small">{user.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td>{roleBadge(user.role)}</td>
                    <td>{statusBadge(user.status)}</td>
                    <td>
                      <span className="fw-semibold" style={{ fontWeight: 600 }}>{user.orders} Orders</span>
                      <div className="text-muted small">Total purchases</div>
                    </td>
                    <td>{user.joinDate}</td>
                    <td>{user.lastLogin}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="icon-btn view" title="View"><TbEye /></button>
                        <button className="icon-btn edit" title="Edit"><TbPencil /></button>
                        <button className="icon-btn delete" title="Delete"><TbTrash /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {sortedBuyers.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center text-muted">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buyers;