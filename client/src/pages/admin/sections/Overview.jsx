import { useState } from 'react';

export default function Overview({ onNavigate }) {
  return (
    <div className="overview">
      <div className="note-card">
        <h3>Welcome to the Edge admin dashboard</h3>
        <p>
          This dashboard manages the content your students see on the public
          website. Use the navigation on the left to manage programs, news,
          testimonials, FAQs, partners and admissions inquiries.
        </p>
      </div>

      <div className="quick-grid">
        <button type="button" className="quick-card" onClick={() => onNavigate('inquiries')}>
          <span className="quick-ic">✉</span>
          <b>Inquiries</b>
          <p>Review and update the status of new admission and contact leads.</p>
        </button>
        <button type="button" className="quick-card" onClick={() => onNavigate('programs')}>
          <span className="quick-ic">✦</span>
          <b>Programs</b>
          <p>Create and edit degree tracks, curricula and fees.</p>
        </button>
        <button type="button" className="quick-card" onClick={() => onNavigate('news')}>
          <span className="quick-ic">📰</span>
          <b>News</b>
          <p>Publish insights, announcements and success stories.</p>
        </button>
        <button type="button" className="quick-card" onClick={() => onNavigate('faqs')}>
          <span className="quick-ic">❓</span>
          <b>FAQs</b>
          <p>Keep admissions and program FAQs up to date.</p>
        </button>
      </div>

      <div className="note-card">
        <h4>Getting started</h4>
        <p>
          When an applicant fills a form on the website, an inquiry appears in
          the <b>Inquiries</b> section. Mark it as contacted once your team has
          reached out. All content edits go live immediately on the public site.
        </p>
      </div>
    </div>
  );
}