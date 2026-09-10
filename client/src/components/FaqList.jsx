import { useState } from 'react';

export default function FaqList({ faqs }) {
  const [openIdx, setOpenIdx] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="faq-list">
      {faqs.map((faq, idx) => (
        <div className={`faq-item ${openIdx === idx ? 'open' : ''}`} key={faq._id || idx}>
          <button
            type="button"
            className="faq-question"
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
          >
            <span>{faq.question}</span>
            <span className="faq-toggle" aria-hidden>
              {openIdx === idx ? '−' : '+'}
            </span>
          </button>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}