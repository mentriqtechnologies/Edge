import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';
import SectionHead from '../components/SectionHead.jsx';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/news?limit=20')
      .then((r) => setArticles(r.data.articles))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="news-page section">
      <div className="container">
        <SectionHead
          eyebrow="Within Edge"
          title="Insights, stories and guidance"
          subtitle="News from the institute, student stories and careers guidance for aspirants."
        />
        <div className="news-list">
          {loading
            ? [0, 1, 2].map((k) => <div className="skeleton-card" key={k} />)
            : articles.map((a) => (
                <Link to={`/insights/${a.slug}`} className="news-row" key={a._id}>
                  <div className="news-row-main">
                    <span className="news-tag">{a.category}</span>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                  </div>
                  <span className="news-meta">
                    {new Date(a.publishDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    <br />
                    {a.readMinutes} min read
                  </span>
                </Link>
              ))}
        </div>
        {!loading && articles.length === 0 && (
          <div className="empty-state">No articles published yet. Check back soon.</div>
        )}
      </div>
    </div>
  );
}