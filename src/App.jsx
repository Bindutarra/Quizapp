import React, { useEffect, useRef } from "react";
import Login from "./pages/Login";
import UserHome from "./pages/UserHome";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

// Scroll to top and handle hash scroll on route change
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return null;
};

const Dashboard = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="user-home-container">
  <div className="center-wrapper">
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">QuizMaster</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => scrollToRef(aboutRef)}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => scrollToRef(contactRef)}
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login" className="btn login-btn">
            Log In
          </Link>
          <Link to="/signup" className="btn signup-btn">
            Sign Up
          </Link>
        </div>
      </nav>

      <header className="hero-section">
        <h1>Create and Share Engaging Quizzes</h1>
        <p>
          The ultimate platform for creating and sharing interactive quizzes.
          Whether you're an educator, a business, or just looking for some fun,
          QuizMaster has you covered.
        </p>
        <div className="hero-buttons">
          <button
            className="btn primary"
            onClick={() => alert("Get Started clicked")}
          >
            Get Started
          </button>
          <button
            className="btn secondary"
            onClick={() => alert("Browse Quizzes clicked")}
          >
            Browse Quizzes
          </button>
        </div>
      </header>

      <section className="features-section" ref={aboutRef}>
        <h2>Why Choose QuizMaster?</h2>
        <p>
          QuizMaster offers a comprehensive suite of features designed to make
          quiz creation and sharing easy and effective.
        </p>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Easy Quiz Creation</h3>
            <p>
              Our intuitive interface allows you to create quizzes in minutes,
              with a variety of question types and customization options.
            </p>
          </div>
          <div className="feature-box">
            <h3>Collaborative Features</h3>
            <p>
              Work together with colleagues or friends on quizzes, with
              real-time editing and feedback features.
            </p>
          </div>
          <div className="feature-box">
            <h3>Seamless Sharing</h3>
            <p>
              Share your quizzes with a simple link or embed them directly into
              your website or learning platform.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" ref={contactRef}>
        <h2>Contact Us</h2>
        <p>
          Have questions or need support? Reach out to us via email or phone.
          We're here to help you make the most of QuizMaster!
        </p>
        <ul>
          <li>Email: support@quizmaster.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Address: 123 QuizMaster Lane, Learning City, EduState</li>
        </ul>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact Us</a>
        </div>
        <p>© 2024 QuizMaster. All rights reserved.</p>
      </footer>
      </div>
      </div>
      <style>{`
        .dashboard {
          font-family: Arial, sans-serif;
          color: #1a202c;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px 40px;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }
        .logo {
          font-weight: bold;
          color: #2563eb;
          font-size: 1.2rem;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
          font-weight: 500;
          color: #6b7280;
        }
        .link-button {
          background: none;
          border: none;
          color: #6b7280;
          font-weight: 500;
          cursor: pointer;
          font-size: 1rem;
          padding: 0;
        }
        .link-button:hover {
          color: #2563eb;
          text-decoration: underline;
        }
        .auth-buttons .btn {
          margin-left: 15px;
          padding: 8px 16px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 4px;
          border: none;
          transition: background-color 0.3s ease;
          text-decoration: none;
          display: inline-block;
          line-height: 1;
        }
        .login-btn {
          background-color: #e2e8f0;
          color: #1a202c;
        }
        .login-btn:hover {
          background-color: #cbd5e1;
        }
        .signup-btn {
          background-color: #2563eb;
          color: white;
        }
        .signup-btn:hover {
          background-color: #1d4ed8;
        }
        .hero-section {
          text-align: center;
          margin-top: 40px;
          padding: 60px 20px;
          background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0.9)
            ),
            url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80")
              no-repeat center;
          background-size: cover;
          border-radius: 8px;
        }
        .hero-section h1 {
          font-size: 2.3rem;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .hero-section p {
          font-size: 1rem;
          margin-bottom: 32px;
          color: #4b5563;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
        }
        .btn {
          padding: 12px 28px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
        .primary {
          color: white;
          background-color: #2563eb;
        }
        .primary:hover {
          background-color: #1d4ed8;
          transform: scale(1.05);
        }
        .secondary {
          background-color: transparent;
          color: #374151;
          border: 2px solid #374151;
        }
        .secondary:hover {
          background-color: #374151;
          color: white;
          transform: scale(1.05);
        }
        .features-section {
          text-align: center;
          margin-top: 80px;
          scroll-margin-top: 120px;
        }
        .features-section h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #111827;
        }
        .features-section p {
          margin-bottom: 32px;
          color: #6b7280;
          font-size: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .features-grid {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .feature-box {
          background: #f9fafb;
          box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
          border-radius: 8px;
          padding: 24px;
          max-width: 280px;
          flex: 1;
          text-align: left;
        }
        .feature-box h3 {
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 1.1rem;
          color: #1f2937;
        }
        .feature-box p {
          color: #4b5563;
          font-size: 0.95rem;
        }
        .contact-section {
          margin-top: 80px;
          padding: 20px;
          background: #f3f4f6;
          border-radius: 8px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          scroll-margin-top: 120px;
        }
        .contact-section h2 {
          font-size: 1.8rem;
          color: #111827;
          margin-bottom: 12px;
          font-weight: 700;
          text-align: center;
        }
        .contact-section p,
        .contact-section ul {
          color: #4b5563;
          font-size: 1rem;
          margin-bottom: 12px;
          text-align: center;
          list-style-type: none;
          padding: 0;
        }
        .footer {
          text-align: center;
          margin-top: 80px;
          padding-top: 28px;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
          font-size: 0.9rem;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 8px;
        }
        .footer-links a {
          color: #6b7280;
          text-decoration: none;
          font-weight: 500;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
          
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userhome" element={<UserHome />} />
      </Routes>
    </Router>
  );
};

export default App;
