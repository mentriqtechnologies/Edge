import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/client';
import CtaBand from '../components/CtaBand.jsx';

export default function NewsDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    api.get(`/news/slug/${slug}`)
      .then((r) => {
        setArticle(r.data.article);
        return api.get('/news?limit=3');
      })
      .then((r) => setRelated(r.data.articles))
      .catch(() => setError('Article not found.'))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="loading-page">Loading…</div>;

  if (error || !article) {
    return (
      <div className="loading-page">
        <p>{error || 'Article not found.'}</p>
        <Link to="/insights" className="btn btn-primary">Back to Insights</Link>
      </div>
    );
  }

  const paragraphs = (article.content || '').split('\n').filter((l) => l.trim() !== '');

  return (
    <div className="article-page section">
      <div className="container article-wrap">
        <div className="article-meta">
          <Link to="/insights" className="back-link">← All insights</Link>
          <span className="news-tag">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="article-sub">{article.excerpt}</p>
          <div className="article-byline">
            <span>{article.author}</span>
            <span>·</span>
            <span>
              {new Date(article.publishDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span>·</span>
            <span>{article.readMinutes} min read</span>
          </div>
        </div>

        <div className="article-body">
          {paragraphs.map((p) =>
            p.endsWith(':') ? <h2 key={p}>{p}</h2> : <p key={p}>{p}</p>
          )}
        </div>

        {related.length > 0 && (
          <div className="related">
            <h3>Keep reading</h3>
            <div className="news-grid">
              {related.map((a) => (
                <Link to={`/insights/${a.slug}`} className="news-card" key={a._id}>
                  <span className="news-tag">{a.category}</span>
                  <h4>{a.title}</h4>
                  <p>{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <CtaBand />
    </div>
  );
}