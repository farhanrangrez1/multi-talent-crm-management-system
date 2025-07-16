import React, { useState } from 'react';


// Add this at the top level of your app (e.g., in index.html):
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
// And in your main CSS (e.g., index.css):
// body { font-family: 'Inter', sans-serif; }

function GeneralSettings() {
  // State for toggles and fields
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [userRegistration, setUserRegistration] = useState(true);
  const [autoApprove, setAutoApprove] = useState(false);
  const [maxFileSize, setMaxFileSize] = useState('10');
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [allowedFileTypes, setAllowedFileTypes] = useState('jpg,png,pdf,doc,docx');
  const [activeTab, setActiveTab] = useState('systemSettings');
  // Security logs data
  const securityLogs = [
    {
      event: 'Failed Login Attempt',
      user: 'admin@example.com',
      ip: '192.168.1.108',
      time: '2024-01-15 14:30:25',
      status: 'Blocked',
    },
    {
      event: 'Password Changed',
      user: 'john.doe@example.com',
      ip: '18.0.8.45',
      time: '2024-01-15 13:45:12',
      status: 'Success',
    },
    {
      event: 'Two-Factor Authentication Enabled',
      user: 'sarah.wilson@example.com',
      ip: '172.16.8.78',
      time: '2024-01-15 12:20:33',
      status: 'Success',
    },
    {
      event: 'Suspicious Activity Detected',
      user: 'mike.johnson@example.com',
      ip: '203.0.113.42',
      time: '2024-01-15 11:15:44',
      status: 'Warning',
    },
    {
      event: 'API Key Generated',
      user: 'admin@example.com',
      ip: '192.168.1.108',
      time: '2024-01-15 10:30:55',
      status: 'Success',
    },
  ];
  const [eventFilter, setEventFilter] = useState('All Events');

  const handleReset = () => {
    setMaintenanceMode(false);
    setUserRegistration(true);
    setAutoApprove(false);
    setMaxFileSize('10');
    setSessionTimeout('30');
    setAllowedFileTypes('jpg,png,pdf,doc,docx');
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Add save logic here (API call, etc.)
    alert('Settings saved!');
  };

  // Custom tab labels for this page
  const navTabs = [
    { key: 'systemSettings', label: 'System Settings' }, // New tab
    { key: 'securityLogs', label: 'Security Logs' },
    // { key: 'security', label: 'Security' },
    // { key: 'authentication', label: 'Authentication' },
    // { key: 'monitoring', label: 'Monitoring' },
  ];

  return (
    <div className="container-fluid px-0" style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Custom horizontal nav */}
      <nav className="border-bottom bg-white px-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16 }}>
        <ul className="nav nav-underline" style={{ gap: '2rem', height: 56, alignItems: 'center' }}>
          {navTabs.map(tab => (
            <li className="nav-item" key={tab.key}>
              <button
                className={`nav-link px-0${activeTab === tab.key ? ' active text-primary fw-semibold' : ' text-dark'}`}
                style={{ background: 'none', border: 'none', fontSize: 16, boxShadow: 'none' }}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Only show System Settings tab content for now */}
      {activeTab === 'systemSettings' && (
        <>
          <form className="bg-white p-4 rounded shadow-sm mb-4" onSubmit={handleSave}>
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <div className="form-label fw-semibold mb-0">Maintenance Mode</div>
                <div className="text-muted small">Enable maintenance mode to restrict access</div>
              </div>
              <div className="col-md-2 text-end">
                <div className="form-check form-switch d-flex justify-content-end">
                  <input className="form-check-input" type="checkbox" id="maintenanceMode" checked={maintenanceMode} onChange={() => setMaintenanceMode(v => !v)} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-label fw-semibold mb-0">User Registration</div>
                <div className="text-muted small">Allow new users to register</div>
              </div>
              <div className="col-md-2 text-end">
                <div className="form-check form-switch d-flex justify-content-end">
                  <input className="form-check-input" type="checkbox" id="userRegistration" checked={userRegistration} onChange={() => setUserRegistration(v => !v)} />
                </div>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <div className="form-label fw-semibold mb-0">Auto-Approve Listings</div>
                <div className="text-muted small">Automatically approve new domain listings</div>
              </div>
              <div className="col-md-2 text-end">
                <div className="form-check form-switch d-flex justify-content-end">
                  <input className="form-check-input" type="checkbox" id="autoApprove" checked={autoApprove} onChange={() => setAutoApprove(v => !v)} />
                </div>
              </div>
              <div className="col-md-3">
                <label className="form-label">Max File Size (MB)</label>
                <input type="number" className="form-control" value={maxFileSize} onChange={e => setMaxFileSize(e.target.value)} min="1" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Session Timeout (minutes)</label>
                <input type="number" className="form-control" value={sessionTimeout} onChange={e => setSessionTimeout(e.target.value)} min="1" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Allowed File Types</label>
              <input type="text" className="form-control" value={allowedFileTypes} onChange={e => setAllowedFileTypes(e.target.value)} />
              <div className="form-text">Separate file extensions with commas</div>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>Reset to Default</button>
              <button type="submit" className="btn btn-primary"><i className="bi bi-save me-2"></i>Save Changes</button>
            </div>
          </form>
          {/* Quick Actions */}
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="row g-3">
              <div className="col-md-4">
                <button className="btn btn-success w-100">
                  <i className="bi bi-hdd-stack me-2"></i>Backup Settings
                </button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-warning w-100 text-dark">
                  <i className="bi bi-trash3 me-2"></i>Clear Cache
                </button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-light w-100 text-primary border-primary">
                  <i className="bi bi-shield-check me-2"></i>Run Security Check
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Security Logs Tab (only render this for now) */}
      {activeTab === 'securityLogs' && (
        <div className="d-flex justify-content-center align-items-start pt-4" style={{ minHeight: 'calc(100vh - 56px)' }}>
          <div className="bg-white rounded-3 shadow-sm p-4 w-100" style={{ maxWidth: 1100 }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-semibold mb-0" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Security Logs</h5>
              <div className="d-flex gap-2 align-items-center">
                <select className="form-select" style={{ width: 140, height: 38, fontSize: 15 }} value={eventFilter} onChange={e => setEventFilter(e.target.value)}>
                  <option>All Events</option>
                  <option>Blocked</option>
                  <option>Success</option>
                  <option>Warning</option>
                </select>
                <button className="btn btn-primary d-flex align-items-center" style={{ height: 38, fontSize: 15, fontWeight: 500 }}>
                  <i className="bi bi-box-arrow-up me-2" style={{ fontSize: 17 }}></i>Export Logs
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table mb-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: 15 }}>
                <thead style={{ background: '#f8fafc' }}>
                  <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>Event</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>User</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>IP Address</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>Time</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {securityLogs.filter(log => eventFilter === 'All Events' || log.status === eventFilter)
                    .map((log, idx) => (
                    <tr key={idx} style={{ borderBottom: '1.5px solid #f1f5f9' }}>
                      <td style={{ padding: '12px 8px' }}>{log.event}</td>
                      <td style={{ padding: '12px 8px' }}>{log.user}</td>
                      <td style={{ padding: '12px 8px' }}>{log.ip}</td>
                      <td style={{ padding: '12px 8px' }}>{log.time}</td>
                      <td style={{ padding: '12px 8px' }}>
                        {log.status === 'Blocked' && <span className="badge rounded-pill" style={{ background: '#fee2e2', color: '#dc2626', fontWeight: 500, fontSize: 14, padding: '6px 16px' }}>Blocked</span>}
                        {log.status === 'Success' && <span className="badge rounded-pill" style={{ background: '#dcfce7', color: '#16a34a', fontWeight: 500, fontSize: 14, padding: '6px 16px' }}>Success</span>}
                        {log.status === 'Warning' && <span className="badge rounded-pill" style={{ background: '#fef9c3', color: '#b45309', fontWeight: 500, fontSize: 14, padding: '6px 16px' }}>Warning</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white p-4 rounded shadow-sm">
        <div className="row g-3">
          <div className="col-md-4">
            <button className="btn btn-success w-100">
              <i className="bi bi-hdd-stack me-2"></i>Backup Settings
            </button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-warning w-100 text-dark">
              <i className="bi bi-trash3 me-2"></i>Clear Cache
            </button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-light w-100 text-primary border-primary">
              <i className="bi bi-shield-check me-2"></i>Run Security Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralSettings;