import React from 'react';

function PaymentLogs() {
  return (
    <div className="container-fluid py-4" style={{ background: '#f7f8fa', minHeight: '100vh' }}>
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Payment Logs</h3>
        <div className="text-muted" style={{ fontSize: '15px' }}>Monitor and manage all payment transactions</div>
      </div>
      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-2">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-muted" style={{ fontSize: '14px' }}>Total Transactions</div>
              <div className="fw-bold fs-4">6</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card shadow-sm h-100 border-success">
            <div className="card-body text-center">
              <div className="text-muted" style={{ fontSize: '14px' }}>Completed</div>
              <div className="fw-bold fs-4 text-success">3</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card shadow-sm h-100 border-warning">
            <div className="card-body text-center">
              <div className="text-muted" style={{ fontSize: '14px' }}>Pending</div>
              <div className="fw-bold fs-4 text-warning">1</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card shadow-sm h-100 border-danger">
            <div className="card-body text-center">
              <div className="text-muted" style={{ fontSize: '14px' }}>Failed</div>
              <div className="fw-bold fs-4 text-danger">1</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-muted" style={{ fontSize: '14px' }}>Total Revenue</div>
              <div className="fw-bold fs-4" style={{ color: '#7c3aed' }}>$2,397</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-muted" style={{ fontSize: '14px' }}>Total Refunds</div>
              <div className="fw-bold fs-4 text-warning">$299</div>
            </div>
          </div>
        </div>
        <div className="col-md-2 mt-3">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-muted" style={{ fontSize: '14px' }}>Processing Fees</div>
              <div className="fw-bold fs-4" style={{ color: '#6366f1' }}>$71.91</div>
            </div>
          </div>
        </div>
      </div>
      {/* Actions */}
      <div className="d-flex justify-content-end gap-2 mb-3">
        <button className="btn btn-primary"><i className="bi bi-download me-2"></i>Export All</button>
        <button className="btn btn-success"><i className="bi bi-arrow-repeat me-2"></i>Sync Payments</button>
      </div>
      {/* Filters */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="row g-3 align-items-center">
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Search transactions..." />
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option>All Types</option>
                <option>Subscription</option>
                <option>Domain</option>
              </select>
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option>All Methods</option>
                <option>Credit Card</option>
                <option>PayPal</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option>All Time</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Transactions Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="fw-bold mb-3">Payment Transactions (6)</div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col"><input type="checkbox" /></th>
                  <th scope="col">Transaction</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col">Status</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="fw-semibold">TXN_2024_001234</div>
                    <div className="text-muted small">Premium Plan - Monthly Subscription</div>
                    <div className="text-muted small">Ref: SUB_PREMIUM_001</div>
                  </td>
                  <td>
                    <div className="fw-semibold">John Smith</div>
                    <div className="text-muted small">john.smith@email.com</div>
                  </td>
                  <td>
                    <div className="fw-bold text-success">$299 <span className="text-muted small">USD</span></div>
                    <div className="text-muted small">Fee: $8.97<br/>Net: $290.03</div>
                  </td>
                  <td>
                    <div>Credit Card</div>
                    <div className="text-muted small">Stripe</div>
                  </td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
                  <td>
                    <span className="badge bg-light text-primary border">Subscription</span>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="fw-semibold">TXN_2024_001235</div>
                    <div className="text-muted small">Premium Domain Registration - techsolutions.com</div>
                    <div className="text-muted small">Ref: DOM_REG_002</div>
                  </td>
                  <td>
                    <div className="fw-semibold">Sarah Johnson</div>
                    <div className="text-muted small">sarah.johnson@email.com</div>
                  </td>
                  <td>
                    <div className="fw-bold text-success">$1,299 <span className="text-muted small">USD</span></div>
                    <div className="text-muted small">Fee: $38.97<br/>Net: $1,260.03</div>
                  </td>
                  <td>
                    <div>PayPal</div>
                    <div className="text-muted small">PayPal</div>
                  </td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
                  <td>
                    <span className="badge bg-light text-primary border">Domain</span>
                  </td>
                </tr>
                {/* Add more rows as needed to match the image */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentLogs;