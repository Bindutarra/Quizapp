import React from "react";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
  const navigate = useNavigate();

  const quizzes = [
    {
      name: "History Quiz",
      description: "Test your knowledge of world history.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Science Quiz",
      description: "Challenge yourself with science questions.",
      image:
        "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Literature Quiz",
      description: "Explore the world of literature.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const pastResults = [
    { name: "History Quiz", score: "8/10", date: "2023-11-15" },
    { name: "Science Quiz", score: "6/10", date: "2023-11-10" },
    { name: "Literature Quiz", score: "9/10", date: "2023-11-05" },
  ];

  return (
    <div className="user-home-container">
      <nav className="navbar">
        <div className="logo">Quiz Builder</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>My Quizzes</li>
          <li>Results</li>
        </ul>
        <button className="btn new-quiz-btn">New Quiz</button>
        <div className="profile-pic">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            title="User Profile"
          />
        </div>
      </nav>

      <main>
        <h2>Welcome back, Sarah</h2>
        <p>Ready to test your knowledge or create a new challenge?</p>

        <section className="quiz-cards">
          <h3>Available Quizzes</h3>
          <div className="cards-container">
            {quizzes.map((quiz, index) => (
              <div key={index} className="quiz-card">
                <img src={quiz.image} alt={quiz.name} />
                <div className="quiz-info">
                  <h4>{quiz.name}</h4>
                  <p>{quiz.description}</p>
                  <button className="btn start-quiz-btn">Start Quiz</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="past-results">
          <h3>Past Results</h3>
          <table>
            <thead>
              <tr>
                <th>Quiz Name</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {pastResults.map((result, idx) => (
                <tr key={idx}>
                  <td>{result.name}</td>
                  <td>{result.score}</td>
                  <td>{result.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <style>{`
        .user-home-container {
        
          font-family: Arial, sans-serif;
          background: #f7f9fc;
          min-height: 100vh;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
        }
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
        }
        .logo {
          font-weight: bold;
          font-size: 1.25rem;
          color: #1a202c;
        }
        .nav-links {
          display: flex;
          gap: 16px;
          list-style: none;
          color: #6b7280;
          font-weight: 600;
        }
        .btn {
          cursor: pointer;
        }
        .new-quiz-btn {
          background-color: #2563eb;
          border: none;
          color: white;
          padding: 10px 20px;
          font-weight: 700;
          border-radius: 6px;
          margin-left: auto;
        }
        .profile-pic img {
          border-radius: 50%;
        }
        main h2 {
          font-weight: 700;
          margin-bottom: 8px;
        }
        main p {
          margin-bottom: 20px;
          color: #374151;
        }
        .quiz-cards h3,
        .past-results h3 {
          font-weight: 700;
          margin-bottom: 12px;
        }
        .cards-container {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .quiz-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 0 8px rgb(0 0 0 / 0.1);
          width: 280px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .quiz-card:hover {
          transform: translateY(-6px);
        }
        .quiz-card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
        }
        .quiz-info {
          padding: 12px 16px;
        }
        .quiz-info h4 {
          font-weight: 700;
          margin-bottom: 6px;
          color: #1a202c;
        }
        .quiz-info p {
          font-size: 0.9rem;
          margin-bottom: 12px;
          color: #4b5563;
        }
        .start-quiz-btn {
          background-color: #bfdbfe;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          font-weight: 600;
          color: #2563eb;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .start-quiz-btn:hover {
          background-color: #93c5fd;
        }
        .past-results table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 0 8px rgb(0 0 0 / 0.1);
        }
        .past-results th,
        .past-results td {
          padding: 12px 16px;
          border-bottom: 1px solid #e2e8f0;
          text-align: left;
          color: #4b5563;
        }
        .past-results th {
          background: #f3f4f6;
          font-weight: 600;
        }
        .past-results tr:last-child td {
          border-bottom: none;
        }

      `}</style>
    </div>
  );
};

export default UserHome;
