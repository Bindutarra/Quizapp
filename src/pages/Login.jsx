import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add auth logic here
    navigate("/UserHome"); // Navigate to dashboard on login success
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    navigate("/Login"); // Navigate to dashboard after signup
  };

  return (
    <div className="auth-container">
      <nav className="navbar">
        <div className="logo">Quiz Builder</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="auth-box">
        <h2>Access Your Account</h2>
        <p>
          Or{" "}
          <button
            onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}
            className="toggle-link"
          >
            create a new one
          </button>
        </p>

        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Log In
          </button>
          <button
            className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {activeTab === "login" && (
          <form onSubmit={handleLoginSubmit} className="auth-form">
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <a href="#" className="forgot-link">
              Forgot your password?
            </a>
            <button type="submit" className="primary-btn">
              Log In
            </button>
          </form>
        )}

        {activeTab === "signup" && (
          <form onSubmit={handleSignupSubmit} className="auth-form">
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="primary-btn">
              Sign Up
            </button>
          </form>
        )}
      </div>

      <style>{`
        .auth-container {
          font-family: Arial, sans-serif;
          color: #111;
          min-height: 100vh;
          background: #f7f9fc;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 32px;
          background: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .logo {
          font-weight: bold;
          font-size: 1.2rem;
          color: #1a202c;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
          color: #4b5563;
          font-weight: 500;
          cursor: pointer;
        }
        .auth-box {
          max-width: 400px;
          background: white;
          margin: 40px auto;
          padding: 40px 32px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
          text-align: center;
        }
        .auth-box h2 {
          font-weight: 700;
          margin-bottom: 12px;
        }
        .toggle-link {
          background: none;
          border: none;
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
        }
        .tab-buttons {
          display: flex;
          justify-content: center;
          margin: 24px 0;
          gap: 8px;
        }
        .tab-btn {
          flex: 1;
          background: transparent;
          padding: 12px 0;
          border: none;
          border-bottom: 2px solid transparent;
          font-weight: 700;
          cursor: pointer;
          color: #6b7280;
          transition: border-color 0.3s ease, color 0.3s ease;
        }
        .tab-btn.active {
          color: #2563eb;
          border-color: #2563eb;
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .auth-form input {
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid #cbd5e1;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .auth-form input:focus {
          border-color: #2563eb;
        }
        .forgot-link {
          font-size: 0.9rem;
          text-align: right;
          color: #2563eb;
          text-decoration: underline;
          cursor: pointer;
          margin-bottom: 8px;
          display: inline-block;
        }
        .primary-btn {
          background-color: #2563eb;
          border: none;
          color: white;
          padding: 12px 0;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .primary-btn:hover {
          background-color: #1d4ed8;
        }
      `}</style>
    </div>
  );
};

export default Login;
