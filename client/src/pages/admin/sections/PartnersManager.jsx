import { useEffect, useState } from 'react';
import api, { apiError } from '../../../api/client.js';

const empty = { name: '', kind: 'recruiter', tagline: '', description: '', tags: '', active: true };

const kindLabel = { campus: 'Campus', recruiter: 'Recruiter', collaboration: 'Collaboration' };

export default function PartnersManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try { const { data } = await api.get('/partners'); setItems(data.partners || []); }
    catch (err) { setError(apiError(err)); }
    finally { setLoading(false); }
  };
  useEffect(() => { load(); }, []);

  const beginNew = () => setEditing({ ...empty });
  const beginEdit = (p) => setEditing({ ...p, tags: (p.tags || []).join(', ') });
  const update = (k, v) => setEditing({ ...editing, [k]: v });

  const save = async (e) => {
    e.preventDefault();
    setError('');
    const payload = { ...editing, tags: (editing.tags || '').split(',').map((t) => t.trim()).filter(Boolean) };
    try {
      if (editing._id) await api.put(`/partners/${editing._id}`, payload);
      else await api.post('/partners', payload);
      setEditing(null); load();
    } catch (err) { setError(apiError(err)); }
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this partner?')) return;
    try { await api.delete(`/partners/${id}`); load(); }
    catch (err) { alert(apiError(err)); }
  };

  if (editing) {
    return (
      <div className="editor">
        <div className="editor-head"><h2>{editing._id ? 'Edit partner' : 'New partner'}</h2><button className="btn btn-ghost-sm" onClick={() => setEditing(null)}>← Back</button></div>
        {error && <div className="alert alert-error">{error}</div>}
        <form onSubmit={save}>
          <div className="field-grid">
            <div className="field"><label>Name</label><input value={editing.name} onChange={(e) => update('name', e.target.value)} required /></div>
            <div className="field"><label>Kind</label>
              <select value={editing.kind} onChange={(e) => update('kind', e.target.value)}>
                <option value="campus">Campus</option>
                <option value="recruiter">Recruiter</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </div>
            <div className="field"><label>Tagline</label><input value={editing.tagline} onChange={(e) => update('tagline', e.target.value)} /></div>
          </div>
          <div className="field"><label>Tags (comma separated)</label><input value={editing.tags} onChange={(e) => update('tags', e.target.value)} /></div>
          <div className="field"><label>Description</label><textarea rows="3" value={editing.description} onChange={(e) => update('description', e.target.value)} /></div>
          <div className="check-row"><label><input type="checkbox" checked={editing.active} onChange={(e) => update('active', e.target.checked)} /> Active</label></div>
          <div className="editor-actions"><button className="btn btn-primary">Save</button><button className="btn btn-ghost" onClick={() => setEditing(null)}>Cancel</button></div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="toolbar"><button className="btn btn-primary" onClick={beginNew}>+ New partner</button><button className="btn btn-ghost-sm" onClick={load}>Refresh</button></div>
      {error && <div className="alert alert-error">{error}</div>}
      {loading ? <div className="loading">Loading…</div> : (
        <div className="admin-list">
          {items.map((p) => (
            <div className="admin-list-row" key={p._id}>
              <div><b>{p.name}</b><span className="kind-pill">{kindLabel[p.kind] || p.kind}</span><div className="table-sub">{p.tagline}</div></div>
              <div className="row-actions"><button className="btn btn-ghost-sm" onClick={() => beginEdit(p)}>Edit</button><button className="btn btn-danger-sm" onClick={() => remove(p._id)}>Delete</button></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}