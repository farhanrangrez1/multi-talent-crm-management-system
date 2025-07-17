import React from 'react';
import productImg from '../../../assets/react.svg';

const products = [
  {
    name: 'Premium Software License',
    category: 'Software',
    price: 299,
    oldPrice: 399,
    stock: 45,
    sales: 128,
    revenue: 38272,
    status: 'In Stock',
  },
  {
    name: 'Enterprise Solution',
    category: 'Enterprise',
    price: 1299,
    oldPrice: 1599,
    stock: 12,
    sales: 45,
    revenue: 58455,
    status: 'In Stock',
  },
  {
    name: 'Standard Package',
    category: 'Basic',
    price: 99,
    oldPrice: 149,
    stock: 0,
    sales: 89,
    revenue: 8811,
    status: 'Out of Stock',
  },
  {
    name: 'Professional Tools Suite',
    category: 'Tools',
    price: 499,
    oldPrice: 699,
    stock: 23,
    sales: 67,
    revenue: 26999,
    status: 'In Stock',
  },
  {
    name: 'Analytics Pro',
    category: 'Analytics',
    price: 199,
    oldPrice: 299,
    stock: 8,
    sales: 156,
    revenue: 30920,
    status: 'Low Stock',
  },
  {
    name: 'Marketing Automation',
    category: 'Marketing',
    price: 799,
    oldPrice: 999,
    stock: 34,
    sales: 78,
    revenue: 39999,
    status: 'In Stock',
  },
];

const statusBadge = (status) => {
  if (status === 'In Stock')
    return <span className="badge bg-success position-absolute top-0 end-0 m-3">In Stock</span>;
  if (status === 'Low Stock')
    return <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-3">Low Stock</span>;
  if (status === 'Out of Stock')
    return <span className="badge bg-danger position-absolute top-0 end-0 m-3">Out of Stock</span>;
  return null;
};

function ProductCatalog() {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h2 className="fw-bold mb-1">Product Catalog</h2>
          <div className="text-muted">Manage your products and inventory</div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-secondary"><i className="bi bi-grid-3x3-gap-fill me-1"></i> Cards</button>
          <button className="btn btn-outline-secondary"><i className="bi bi-table me-1"></i> Table</button>
          <button className="btn btn-primary"><i className="bi bi-plus-lg me-1"></i> Add Product</button>
        </div>
      </div>
      <div className="row g-4">
        {products.map((product, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <div className="card position-relative h-100 shadow-sm">
              {statusBadge(product.status)}
              <img src={productImg} className="card-img-top p-4" alt="Product" style={{height: 180, objectFit: 'contain'}} />
              <div className="card-body">
                <h5 className="card-title mb-1 fw-semibold">{product.name}</h5>
                <div className="text-muted mb-2" style={{fontSize: 14}}>{product.category}</div>
                <div className="d-flex align-items-end mb-2">
                  <span className="fs-4 fw-bold me-2">${product.price.toLocaleString()}</span>
                  <span className="text-muted text-decoration-line-through mb-1">${product.oldPrice.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="small">Stock: <b>{product.stock}</b></span>
                  <span className="small">Sales: <b>{product.sales}</b></span>
                </div>
                <div className="mb-3">
                  <span className="text-success small">Revenue: <b>${product.revenue.toLocaleString()}</b></span>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary flex-grow-1"><i className="bi bi-pencil-square me-1"></i> Edit</button>
                  <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;