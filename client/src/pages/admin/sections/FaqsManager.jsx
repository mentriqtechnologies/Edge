import { useEffect, useState } from 'react';
import api, { apiError } from '../../../api/client.js';

const empty = { question: '', answer: '', category: 'Admissions', order: 0, active: true };

export default function FaqsManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try { const { data } = await api.get('/faqs'); setItems(data.faqs || []); }
    catch (err) { setError(apiError(err)); }
    finally { setLoading(false); }
  };
  useEffect(() => { load(); }, []);

  const beginNew = () => setEditing({ ...empty });
  const beginEdit = (f) => setEditing({ ...f });
  const update = (k, v) => setEditing({ ...editing, [k]: v });

  const save = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (editing._id) await api.put(`/faqs/${editing._id}`, editing);
      else await api.post('/faqs', editing);
      setEditing(null); load();
    } catch (err) { setError(apiError(err)); }
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this FAQ?')) return;
    try { await api.delete(`/faqs/${id}`); load(); }
    catch (err) { alert(apiError(err)); }
  };

  if (editing) {
    return (
      <div className="editor">
        <div className="editor-head"><h2>{editing._id ? 'Edit FAQ' : 'New FAQ'}</h2><button className="btn btn-ghost-sm" onClick={() => setEditing(null)}>← Back</button></div>
        {error && <div className="alert alert-error">{error}</div>}
        <form onSubmit={save}>
          <div className="field-grid">
            <div className="field"><label>Category</label><input value={editing.category} onChange={(e) => update('category', e.target.value)} /></div>
            <div className="field"><label>Order</label><input type="number" value={editing.order} onChange={(e) => update('order', e.target.value)} /></div>
          </div>
          <div className="field"><label>Question</label><input value={editing.question} onChange={(e) => update('question', e.target.value)} required /></div>
          <div className="field"><label>Answer</label><textarea rows="5" value={editing.answer} onChange={(e) => update('answer', e.target.value)} required /></div>
          <div className="check-row"><label><input type="checkbox" checked={editing.active} onChange={(e) => update('active', e.target.checked)} /> Active</label></div>
          <div className="editor-actions"><button className="btn btn-primary">Save</button><button className="btn btn-ghost" onClick={() => setEditing(null)}>Cancel</button></div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="toolbar"><button className="btn btn-primary" onClick={beginNew}>+ New FAQ</button><button className="btn btn-ghost-sm" onClick={load}>Refresh</button></div>
      {error && <div className="alert alert-error">{error}</div>}
      {loading ? <div className="loading">Loading…</div> : (
        <div className="admin-list">
          {items.map((f) => (
            <div className="admin-list-row" key={f._id}>
              <div><b>{f.question}</b><div className="table-sub">{f.category} · order {f.order}</div></div>
              <div className="row-actions"><button className="btn btn-ghost-sm" onClick={() => beginEdit(f)}>Edit</button><button className="btn btn-danger-sm" onClick={() => remove(f._id)}>Delete</button></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}