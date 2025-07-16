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
      <div className=" px-4 pt-4 pb-0 mb-0  d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div>
          <h3 className="fw-bold mb-1" style={{ fontSize: 28, color: '#222' }}>All Users</h3>
          <div className="text-muted" style={{ fontSize: 15 }}>Complete overview of all registered users</div>
        </div>
        <button id='bten' className="btn  d-flex align-items-center gap-2 px-4 py-2 rounded-3 fw-medium" style={{ fontSize: 15, }}>
          <FaUser className="me-1" /> Manage Users
        </button>
     
      {/* Summary Cards */}
      <div className="d-flex flex-wrap gap-4 my-4">
        <div className="flex-grow-1" style={{ minWidth: 230, maxWidth: 250 }}>
          <div className="dashboard-card bg-white rounded-4 shadow-sm p-3 d-flex align-items-center gap-3 h-100">
            <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ background: '#eef2ff', color: '#2563eb', width: 40, height: 40, fontSize: 20 }}><FaUser /></div>
            <div>
              <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.total}</div>
              <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Total Users</div>
            </div>
          </div>
        </div>
        <div className="flex-grow-1" style={{ minWidth: 227, maxWidth: 250 }}>
          <div className="dashboard-card bg-white rounded-4 shadow-sm p-3 d-flex align-items-center gap-3 h-100">
            <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ background: '#d1fae5', color: '#22c55e', width: 40, height: 40, fontSize: 20 }}><FaCheckCircle /></div>
            <div>
              <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.active}</div>
              <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Active Users</div>
            </div>
          </div>
        </div>
        <div className="flex-grow-1" style={{ minWidth: 227, maxWidth: 250 }}>
          <div className="dashboard-card bg-white rounded-4 shadow-sm p-3 d-flex align-items-center gap-3 h-100">
            <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ background: '#f3f0ff', color: '#a78bfa', width: 40, height: 40, fontSize: 20 }}><FaUserTie /></div>
            <div>
              <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.buyers}</div>
              <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Buyers</div>
            </div>
          </div>
        </div>
        <div className="flex-grow-1" style={{ minWidth: 228, maxWidth: 260 }}>
          <div className="dashboard-card bg-white rounded-4 shadow-sm p-3 d-flex align-items-center gap-3 h-100">
            <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ background: '#fff7ed', color: '#f59e42', width: 40, height: 40, fontSize: 20 }}><FaUserTag /></div>
            <div>
              <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.sellers}</div>
              <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Sellers</div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* User Directory */}
      <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
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
                <div className="dashboard-card bg-light rounded-3 shadow-sm p-3 h-100 d-flex flex-column gap-2" style={{ background: '#eaffd6', minHeight: 170, border: '1.5px solid #d6f5c6' }}>
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
            <table className="table table-hover align-middle" style={{ background: '#ffffff', border: '1.5px solid #d6f5c6' }}>
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