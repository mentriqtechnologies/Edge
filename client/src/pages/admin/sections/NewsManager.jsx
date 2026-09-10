import { useEffect, useState } from 'react';
import api, { apiError } from '../../../api/client.js';

const empty = { title: '', slug: '', excerpt: '', content: '', category: 'Stories', author: 'Edge Institute', readMinutes: 4, tags: '', publishDate: '', published: true };

export default function NewsManager() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/news?limit=100');
      setArticles(data.articles || []);
    } catch (err) { setError(apiError(err)); }
    finally { setLoading(false); }
  };
  useEffect(() => { load(); }, []);

  const beginNew = () => setEditing({ ...empty });
  const beginEdit = (a) => setEditing({ ...a, tags: (a.tags || []).join(', ') });

  const update = (k, v) => setEditing({ ...editing, [k]: v });

  const save = async (e) => {
    e.preventDefault();
    setError('');
    const payload = {
      ...editing,
      tags: (editing.tags || '').split(',').map((t) => t.trim()).filter(Boolean),
      readMinutes: Number(editing.readMinutes) || 4,
    };
    if (editing.slug) payload.slug = editing.slug.toLowerCase().replace(/[^a-z0-9-]+/g, '-');
    try {
      if (editing._id) await api.put(`/news/${editing._id}`, payload);
      else await api.post('/news', payload);
      setEditing(null);
      load();
    } catch (err) { setError(apiError(err)); }
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this article?')) return;
    try { await api.delete(`/news/${id}`); load(); }
    catch (err) { alert(apiError(err)); }
  };

  if (editing) {
    return (
      <div className="editor">
        <div className="editor-head">
          <h2>{editing._id ? 'Edit article' : 'New article'}</h2>
          <button className="btn btn-ghost-sm" onClick={() => setEditing(null)}>← Back</button>
        </div>
        {error && <div className="alert alert-error">{error}</div>}
        <form onSubmit={save}>
          <div className="field"><label>Title</label><input value={editing.title} onChange={(e) => update('title', e.target.value)} required /></div>
          <div className="field"><label>Slug</label><input value={editing.slug} onChange={(e) => update('slug', e.target.value)} placeholder="auto-generated" /></div>
          <div className="field-grid">
            <div className="field"><label>Category</label><input value={editing.category} onChange={(e) => update('category', e.target.value)} /></div>
            <div className="field"><label>Author</label><input value={editing.author} onChange={(e) => update('author', e.target.value)} /></div>
            <div className="field"><label>Read minutes</label><input type="number" value={editing.readMinutes} onChange={(e) => update('readMinutes', e.target.value)} /></div>
            <div className="field"><label>Publish date</label><input type="date" value={editing.publishDate?.slice?.(0, 10) || ''} onChange={(e) => update('publishDate', e.target.value)} /></div>
          </div>
          <div className="field"><label>Tags (comma separated)</label><input value={editing.tags} onChange={(e) => update('tags', e.target.value)} /></div>
          <div className="field"><label>Excerpt</label><textarea rows="2" value={editing.excerpt} onChange={(e) => update('excerpt', e.target.value)} /></div>
          <div className="field"><label>Content (blank line = new paragraph. Line ending with &#39;:&#39; becomes a heading)</label><textarea rows="12" value={editing.content} onChange={(e) => update('content', e.target.value)} required /></div>
          <div className="check-row"><label><input type="checkbox" checked={editing.published} onChange={(e) => update('published', e.target.checked)} /> Published</label></div>
          <div className="editor-actions">
            <button type="submit" className="btn btn-primary">Save article</button>
            <button type="button" className="btn btn-ghost" onClick={() => setEditing(null)}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="toolbar">
        <button className="btn btn-primary" onClick={beginNew}>+ New article</button>
        <button className="btn btn-ghost-sm" onClick={load}>Refresh</button>
      </div>
      {error && <div className="alert alert-error">{error}</div>}
      {loading ? <div className="loading">Loading…</div> : (
        <div className="admin-list">
          {articles.map((a) => (
            <div className="admin-list-row" key={a._id}>
              <div>
                <b>{a.title}</b>
                <div className="table-sub">
                  {a.category} · {new Date(a.publishDate).toLocaleDateString('en-IN')} · {a.published ? 'Published' : 'Draft'}
                </div>
              </div>
              <div className="row-actions">
                <button className="btn btn-ghost-sm" onClick={() => beginEdit(a)}>Edit</button>
                <button className="btn btn-danger-sm" onClick={() => remove(a._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}