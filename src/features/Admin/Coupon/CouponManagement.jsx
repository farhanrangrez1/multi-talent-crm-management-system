import React from 'react'

function CouponManagement() {
  return (
    <div className="container py-4">
      {/* Header and Description */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold mb-1">Coupon Management</h2>
          <div className="text-muted">Manage discount coupons and promotional codes</div>
        </div>
        <button className="btn btn-primary">+ Create New Coupon</button>
      </div>

      {/* Controls: Search, Status, Export, Filter */}
      <div className="d-flex flex-wrap gap-2 mb-4 align-items-center">
        <div className="flex-grow-1">
          <input type="text" className="form-control" placeholder="Search coupons..." />
        </div>
        <select className="form-select w-auto">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <button className="btn btn-outline-secondary">Export</button>
        <button className="btn btn-outline-secondary">Filter</button>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-ticket fs-4 text-primary"></i>
                </div>
                <span className="badge bg-success ms-auto">+2 this month</span>
              </div>
              <h3 className="fw-bold mb-0">6</h3>
              <div className="text-muted">Total Coupons</div>
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
                <span className="badge bg-success-subtle text-success ms-auto">+1 this week</span>
              </div>
              <h3 className="fw-bold mb-0">4</h3>
              <div className="text-muted">Active Coupons</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-currency-rupee fs-4 text-info"></i>
                </div>
                <span className="badge bg-info-subtle text-info ms-auto">+12% this month</span>
              </div>
              <h3 className="fw-bold mb-0">₹45,670</h3>
              <div className="text-muted">Total Savings</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-bar-chart-line fs-4 text-warning"></i>
                </div>
                <span className="badge bg-warning-subtle text-warning ms-auto">+5% improvement</span>
              </div>
              <h3 className="fw-bold mb-0">68%</h3>
              <div className="text-muted">Usage Rate</div>
            </div>
          </div>
        </div>
      </div>
      {/* Coupon Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Coupon Code</th>
                <th>Type & Value</th>
                <th>Usage</th>
                <th>Valid Period</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td>
                  <div className="fw-bold">WELCOME20</div>
                  <div className="text-muted small">Welcome discount for new users</div>
                </td>
                <td>
                  <div className="fw-bold">20%</div>
                  <div className="text-muted small">Percentage</div>
                </td>
                <td style={{minWidth: 140}}>
                  <div className="fw-bold">347 / 1000 <span className="text-muted small">(35%)</span></div>
                  <div className="progress" style={{height: 6}}>
                    <div className="progress-bar bg-primary" style={{width: '35%'}}></div>
                  </div>
                </td>
                <td>
                  <div className="small">2024-01-01<br/>to 2024-12-31</div>
                </td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>
                  <button className="btn btn-link text-secondary p-0 me-2" title="View"><i className="bi bi-eye"></i></button>
                  <button className="btn btn-link text-secondary p-0 me-2" title="Edit"><i className="bi bi-pencil"></i></button>
                  <button className="btn btn-link text-danger p-0" title="Delete"><i className="bi bi-trash"></i></button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td>
                  <div className="fw-bold">SUMMER50</div>
                  <div className="text-muted small">Summer special discount</div>
                </td>
                <td>
                  <div className="fw-bold">₹50</div>
                  <div className="text-muted small">Fixed Amount</div>
                </td>
                <td style={{minWidth: 140}}>
                  <div className="fw-bold">234 / 500 <span className="text-muted small">(47%)</span></div>
                  <div className="progress" style={{height: 6}}>
                    <div className="progress-bar bg-primary" style={{width: '47%'}}></div>
                  </div>
                </td>
                <td>
                  <div className="small">2024-06-01<br/>to 2024-08-31</div>
                </td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>
                  <button className="btn btn-link text-secondary p-0 me-2" title="View"><i className="bi bi-eye"></i></button>
                  <button className="btn btn-link text-secondary p-0 me-2" title="Edit"><i className="bi bi-pencil"></i></button>
                  <button className="btn btn-link text-danger p-0" title="Delete"><i className="bi bi-trash"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* ...rest of the UI will go here... */}
    </div>
  )
}

export default CouponManagement