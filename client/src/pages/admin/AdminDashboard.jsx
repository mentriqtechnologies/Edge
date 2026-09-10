import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

import Inquiries from './sections/Inquiries.jsx';
import ProgramsManager from './sections/ProgramsManager.jsx';
import NewsManager from './sections/NewsManager.jsx';
import TestimonialsManager from './sections/TestimonialsManager.jsx';
import FaqsManager from './sections/FaqsManager.jsx';
import PartnersManager from './sections/PartnersManager.jsx';
import Overview from './sections/Overview.jsx';

const sections = [
  { id: 'overview', label: 'Overview', icon: '◎' },
  { id: 'inquiries', label: 'Inquiries', icon: '✉' },
  { id: 'programs', label: 'Programs', icon: '✦' },
  { id: 'news', label: 'News articles', icon: '📰' },
  { id: 'testimonials', label: 'Testimonials', icon: '❝' },
  { id: 'faqs', label: 'FAQs', icon: '❓' },
  { id: 'partners', label: 'Partners', icon: '🤝' },
];

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [active, setActive] = useState('overview');

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  const renderSection = () => {
    switch (active) {
      case 'inquiries': return <Inquiries />;
      case 'programs': return <ProgramsManager />;
      case 'news': return <NewsManager />;
      case 'testimonials': return <TestimonialsManager />;
      case 'faqs': return <FaqsManager />;
      case 'partners': return <PartnersManager />;
      default: return <Overview onNavigate={setActive} />;
    }
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <img src="/Logo.png" alt="Edge Institute logo" className="brand-logo" />
          <span className="brand-text">Edge Admin</span>
        </div>
        <nav className="admin-nav">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`admin-nav-item ${active === s.id ? 'active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              <span className="nav-ic">{s.icon}</span> {s.label}
            </button>
          ))}
        </nav>
        <div className="admin-user">
          <div>
            <b>{user.name}</b>
            <span>{user.email} · {user.role}</span>
          </div>
          <button type="button" className="btn btn-ghost-sm" onClick={logout}>Sign out</button>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-topbar">
          <h1>{sections.find((s) => s.id === active)?.label}</h1>
          <a href="/" className="btn btn-ghost-sm" target="_blank" rel="noreferrer">View live site</a>
        </div>
        <div className="admin-content">{renderSection()}</div>
      </main>
    </div>
  );
}