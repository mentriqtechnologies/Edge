import { useEffect, useState } from 'react';
import api, { apiError } from '../../../api/client.js';

const empty = { name: '', program: '', role: '', company: '', quote: '', rating: 5, featured: false, active: true };

export default function TestimonialsManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/testimonials');
      setItems(data.testimonials || []);
    } catch (err) { setError(apiError(err)); }
    finally { setLoading(false); }
  };
  useEffect(() => { load(); }, []);

  const beginNew = () => setEditing({ ...empty });
  const beginEdit = (t) => setEditing({ ...t });
  const update = (k, v) => setEditing({ ...editing, [k]: v });

  const save = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (editing._id) await api.put(`/testimonials/${editing._id}`, editing);
      else await api.post('/testimonials', editing);
      setEditing(null); load();
    } catch (err) { setError(apiError(err)); }
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this testimonial?')) return;
    try { await api.delete(`/testimonials/${id}`); load(); }
    catch (err) { alert(apiError(err)); }
  };

  if (editing) {
    return (
      <div className="editor">
        <div className="editor-head"><h2>{editing._id ? 'Edit testimonial' : 'New testimonial'}</h2><button className="btn btn-ghost-sm" onClick={() => setEditing(null)}>← Back</button></div>
        {error && <div className="alert alert-error">{error}</div>}
        <form onSubmit={save}>
          <div className="field-grid">
            <div className="field"><label>Name</label><input value={editing.name} onChange={(e) => update('name', e.target.value)} required /></div>
            <div className="field"><label>Program / batch</label><input value={editing.program} onChange={(e) => update('program', e.target.value)} /></div>
            <div className="field"><label>Role</label><input value={editing.role} onChange={(e) => update('role', e.target.value)} /></div>
            <div className="field"><label>Company</label><input value={editing.company} onChange={(e) => update('company', e.target.value)} /></div>
          </div>
          <div className="field"><label>Quote</label><textarea rows="4" value={editing.quote} onChange={(e) => update('quote', e.target.value)} required /></div>
          <div className="field"><label>Rating (1–5)</label>
            <select value={editing.rating} onChange={(e) => update('rating', Number(e.target.value))}>
              {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} stars</option>)}
            </select>
          </div>
          <div className="check-row">
            <label><input type="checkbox" checked={editing.featured} onChange={(e) => update('featured', e.target.checked)} /> Featured on home</label>
            <label><input type="checkbox" checked={editing.active} onChange={(e) => update('active', e.target.checked)} /> Active</label>
          </div>
          <div className="editor-actions"><button className="btn btn-primary">Save</button><button className="btn btn-ghost" onClick={() => setEditing(null)}>Cancel</button></div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="toolbar"><button className="btn btn-primary" onClick={beginNew}>+ New testimonial</button><button className="btn btn-ghost-sm" onClick={load}>Refresh</button></div>
      {error && <div className="alert alert-error">{error}</div>}
      {loading ? <div className="loading">Loading…</div> : (
        <div className="admin-list">
          {items.map((t) => (
            <div className="admin-list-row" key={t._id}>
              <div>
                <b>{t.name}</b> <span className="stars">{"★".repeat(t.rating)}</span>
                <div className="table-sub">{t.role}{t.company ? ` · ${t.company}` : ''} · {t.program} · {t.featured ? 'Featured' : ''}</div>
              </div>
              <div className="row-actions"><button className="btn btn-ghost-sm" onClick={() => beginEdit(t)}>Edit</button><button className="btn btn-danger-sm" onClick={() => remove(t._id)}>Delete</button></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}