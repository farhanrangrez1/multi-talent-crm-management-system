import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 18000, 25000, 30000, 35000, 40000, 37000, 42000, 45000, 48000, 50000, 54000],
      fill: true,
      backgroundColor: 'rgba(99, 102, 241, 0.08)',
      borderColor: '#6366f1',
      tension: 0.4,
      pointRadius: 3,
      pointBackgroundColor: '#6366f1',
    },
  ],
};

const revenueOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { color: '#64748b', font: { size: 13 } },
      grid: { color: '#e5e7eb' },
    },
    x: {
      ticks: { color: '#64748b', font: { size: 13 } },
      grid: { display: false },
    },
  },
};

const leadsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Leads',
      data: [35, 45, 55, 65, 75, 85, 80, 95, 105, 115, 125, 140],
      fill: true,
      backgroundColor: 'rgba(34, 197, 94, 0.08)',
      borderColor: '#22c55e',
      tension: 0.4,
      pointRadius: 3,
      pointBackgroundColor: '#22c55e',
    },
  ],
};

const leadsOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { color: '#64748b', font: { size: 13 } },
      grid: { color: '#e5e7eb' },
    },
    x: {
      ticks: { color: '#64748b', font: { size: 13 } },
      grid: { display: false },
    },
  },
};

function SellerDashboard() {
  return (
    <div className="container-fluid py-4" style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <div className="mb-3">
        <h2 className="fw-bold">Dashboard Overview</h2>
        <div className="text-muted">Monitor your sales performance and manage your business</div>
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
        <div></div>
        <div className="d-flex align-items-center gap-2">
          <select className="form-select form-select-sm" style={{ width: 120 }}>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This Month</option>
          </select>
          <button className="btn btn-primary btn-sm">
            <i className="bi bi-download me-1"></i> Export Report
          </button>
        </div>
      </div>
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-primary text-white rounded-3 p-3 me-3">
                <i className="bi bi-person-plus fs-4"></i>
              </div>
              <div>
                <div className="fs-5 fw-bold">1,247</div>
                <div className="text-muted small">Total Leads</div>
                <div className="text-success small fw-semibold mt-1">
                  <i className="bi bi-arrow-up"></i> +12.5%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-success text-white rounded-3 p-3 me-3">
                <i className="bi bi-chat-dots fs-4"></i>
              </div>
              <div>
                <div className="fs-5 fw-bold">89</div>
                <div className="text-muted small">Active Inquiries</div>
                <div className="text-success small fw-semibold mt-1">
                  <i className="bi bi-arrow-up"></i> +8.2%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-purple text-white rounded-3 p-3 me-3" style={{ background: '#a259ff' }}>
                <i className="bi bi-bar-chart-line fs-4"></i>
              </div>
              <div>
                <div className="fs-5 fw-bold">$45,230</div>
                <div className="text-muted small">Monthly Sales</div>
                <div className="text-success small fw-semibold mt-1">
                  <i className="bi bi-arrow-up"></i> +15.3%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-warning text-white rounded-3 p-3 me-3">
                <i className="bi bi-percent fs-4"></i>
              </div>
              <div>
                <div className="fs-5 fw-bold">7.2%</div>
                <div className="text-muted small">Conversion Rate</div>
                <div className="text-danger small fw-semibold mt-1">
                  <i className="bi bi-arrow-down"></i> -2.1%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <span className="fw-semibold">Revenue Trend</span>
                <span className="ms-auto text-primary small"><i className="bi bi-dot"></i> Revenue</span>
              </div>
              <div style={{ height: 200 }}>
                <Line data={revenueData} options={revenueOptions} height={200} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <span className="fw-semibold">Lead Generation</span>
                <span className="ms-auto text-success small"><i className="bi bi-dot"></i> Leads</span>
              </div>
              <div style={{ height: 200 }}>
                <Line data={leadsData} options={leadsOptions} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <span className="fw-semibold">Recent Leads</span>
          <a href="#" className="small text-primary">View All Leads</a>
        </div>
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Contact</th>
                <th>Company</th>
                <th>Status</th>
                <th>Value</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="rounded-circle me-2" width="40" height="40" />
                    <div>
                      <div className="fw-semibold">Sarah Johnson</div>
                      <div className="text-muted small">sarah@techstart.com</div>
                    </div>
                  </div>
                </td>
                <td>TechStart Inc.</td>
                <td><span className="badge bg-primary">new</span></td>
                <td className="fw-semibold">$12,000</td>
                <td>2 min ago</td>
                <td>
                  <button className="btn btn-light btn-sm me-1"><i className="bi bi-eye"></i></button>
                  <button className="btn btn-light btn-sm"><i className="bi bi-three-dots"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;