import React from 'react';

function DomainManagement() {
  return (
    <div className="container py-4">
      {/* Header and Breadcrumb */}
      <div className="mb-3">
        <div className="text-muted small mb-1">Admin &gt; Domain Control &gt; Domain Names</div>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold mb-0">Domain Management</h2>
          <div>
            <button className="btn btn-primary me-2">+ Add Domain</button>
            <button className="btn btn-outline-secondary">Export</button>
          </div>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-globe fs-4 text-primary"></i>
                </div>
                <span className="badge bg-success ms-auto">+12</span>
              </div>
              <h3 className="fw-bold mb-0">247</h3>
              <div className="text-muted">Total Domains</div>
              <div className="text-muted small">All registered domains</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-check-circle fs-4 text-success"></i>
                </div>
                <span className="badge bg-success-subtle text-success ms-auto">+8</span>
              </div>
              <h3 className="fw-bold mb-0">189</h3>
              <div className="text-muted">Active Domains</div>
              <div className="text-muted small">Currently active domains</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-clock fs-4 text-warning"></i>
                </div>
                <span className="badge bg-danger-subtle text-danger ms-auto">-3</span>
              </div>
              <h3 className="fw-bold mb-0">34</h3>
              <div className="text-muted">Pending Verification</div>
              <div className="text-muted small">Awaiting verification</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-x-circle fs-4 text-danger"></i>
                </div>
                <span className="badge bg-success-subtle text-success ms-auto">+5</span>
              </div>
              <h3 className="fw-bold mb-0">24</h3>
              <div className="text-muted">Expired Domains</div>
              <div className="text-muted small">Expired or suspended</div>
            </div>
          </div>
        </div>
      </div>
      {/* Controls: Search, Status, Type, Advanced */}
      <div className="card mb-4">
        <div className="card-body py-3">
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
            <div className="col-md-2">
              <button className="btn btn-outline-secondary w-100">Advanced</button>
            </div>
          </div>
        </div>
      </div>
      {/* Domain List Table */}
      <div className="card">
        <div className="card-body p-0">
          <div className="d-flex justify-content-between align-items-center px-3 pt-3 pb-2">
            <div className="fw-bold">Domain List</div>
            <div className="text-muted small">Showing 6 domains</div>
          </div>
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th><input type="checkbox" /></th>
                <th>Domain Name</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Type</th>
                <th>Expiry Date</th>
                <th>Revenue</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="badge bg-primary-subtle text-primary me-2 p-2"><i className="bi bi-globe"></i></span>
                    <div>
                      <div className="fw-bold">enterprisecorp.com</div>
                      <div className="text-muted small">89.2k visits/month</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="fw-bold">Enterprise Corp</div>
                  <div className="text-muted small">admin@enterprisecorp.com</div>
                </td>
                <td><span className="badge bg-danger">Expired</span></td>
                <td><span className="badge bg-purple" style={{backgroundColor:'#e0c3fc', color:'#7c3aed'}}>Premium</span></td>
                <td>2023-05-18<br/><span className="text-muted small">$399/year</span></td>
                <td className="fw-bold text-success">$22,340</td>
                <td>
                  <button className="btn btn-link text-secondary p-0 me-2" title="View"><i className="bi bi-eye"></i></button>
                  <button className="btn btn-link text-secondary p-0 me-2" title="Edit"><i className="bi bi-pencil"></i></button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="badge bg-info-subtle text-info me-2 p-2"><i className="bi bi-globe"></i></span>
                    <div>
                      <div className="fw-bold">globalsuppliers.org</div>
                      <div className="text-muted small">12.1k visits/month <span className="badge bg-warning-subtle text-warning ms-1">Auto-renew</span></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="fw-bold">Global Suppliers Inc</div>
                  <div className="text-muted small">info@globalsuppliers.org</div>
                </td>
                <td><span className="badge bg-warning text-dark">Pending</span></td>
                <td><span className="badge bg-purple" style={{backgroundColor:'#e0c3fc', color:'#7c3aed'}}>Premium</span></td>
                <td>2024-12-01<br/><span className="text-muted small">$249/year</span></td>
                <td className="fw-bold text-success">$3,890</td>
                <td>
                  <button className="btn btn-link text-secondary p-0 me-2" title="View"><i className="bi bi-eye"></i></button>
                  <button className="btn btn-link text-secondary p-0 me-2" title="Edit"><i className="bi bi-pencil"></i></button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="badge bg-success-subtle text-success me-2 p-2"><i className="bi bi-globe"></i></span>
                    <div>
                      <div className="fw-bold">industrialsupply.net</div>
                      <div className="text-muted small">28.7k visits/month</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="fw-bold">Industrial Manufacturing</div>
                  <div className="text-muted small">contact@industrial.net</div>
                </td>
                <td><span className="badge bg-success">Active</span></td>
                <td><span className="badge bg-secondary">Standard</span></td>
                <td>2024-03-22<br/><span className="text-muted small">$99/year</span></td>
                <td className="fw-bold text-success">$8,230</td>
                <td>
                  <button className="btn btn-link text-secondary p-0 me-2" title="View"><i className="bi bi-eye"></i></button>
                  <button className="btn btn-link text-secondary p-0 me-2" title="Edit"><i className="bi bi-pencil"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DomainManagement; 