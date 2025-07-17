import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

const Login = () => {
  const navigate = useNavigate();

  // State for email, password, and selected role
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const roleCredentials = {
    admin: { email: "admin@example.com", password: "admin123" },
    seller: { email: "seller@example.com", password: "seller123" },
    buyer: { email: "buyer@example.com", password: "buyer123" },
  };

  const handleRoleSelect = (role) => {
    const credentials = roleCredentials[role];
    setEmail(credentials.email);
    setPassword(credentials.password);
    setSelectedRole(role);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (selectedRole) {
      localStorage.setItem("userRole", selectedRole);
      switch (selectedRole) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "seller":
          navigate("/seller/dashboard");
          break;
        case "buyer":
          navigate("/buyer/dashboard");
          break;
        default:
          navigate("/");
      }
    } else {
      alert("Please select a role before logging in.");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-7 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h3 className="text-center mb-4 fw-bold">Sign In</h3>
      
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="remember" />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-decoration-none small">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-bold"
                style={{ borderRadius: "6px" }}
              >
                Log In
              </button>
            </form>
            <div className="d-flex justify-content-center gap-3 mb-4 mt-4">
              <button
                type="button"
                className={`btn btn-outline-primary px-4 py-2 fw-semibold ${selectedRole === "admin" ? "active" : ""}`}
                onClick={() => handleRoleSelect("admin")}
              >
                Admin
              </button>
              <button
                type="button"
                className={`btn btn-outline-success px-4 py-2 fw-semibold ${selectedRole === "seller" ? "active" : ""}`}
                onClick={() => handleRoleSelect("seller")}
              >
                Seller
              </button>
              <button
                type="button"
                className={`btn btn-outline-warning px-4 py-2 fw-semibold ${selectedRole === "buyer" ? "active" : ""}`}
                onClick={() => handleRoleSelect("buyer")}
              >
                Buyer
              </button>
            </div>
            <div className="text-center mt-3">
              <span className="text-secondary">Don't have an account?</span>
              <Link to="/admin/signup" className="ms-1 text-primary text-decoration-none fw-semibold">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
