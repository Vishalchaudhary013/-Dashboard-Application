import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const cards = [
  { title: 'Users', value: 1200 },
  { title: 'Sales', value: '$8,400' },
  { title: 'Active Sessions', value: 320 },
  { title: 'Conversion Rate', value: '4.2%' },
];

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li>Home</li>
            <li>Analytics</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </nav>
        <button style={{marginTop: '2rem', padding: '0.7rem 1.2rem', borderRadius: '8px', background: '#3182ce', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: '500'}} onClick={() => navigate('/profile')}>
          Go to Profile
        </button>
      </aside>
      <main className="main-content">
        <header className="top-navbar">
          <h1>Welcome, Admin</h1>
          <div className="profile">👤</div>
        </header>
        <section className="cards-section">
          {cards.map((card, idx) => (
            <div className="dashboard-card" key={idx}>
              <h3>{card.title}</h3>
              <p>{card.value}</p>
            </div>
          ))}
        </section>
        <section className="chart-section">
          {/* Placeholder for data visualization widget */}
          <div className="chart-widget">
            <h3>Data Visualization</h3>
            <div className="chart-placeholder">[Chart will appear here]</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
