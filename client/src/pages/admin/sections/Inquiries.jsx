import { useEffect, useState } from 'react';
import api, { apiError } from '../../../api/client.js';

const statuses = ['new', 'contacted', 'scheduled', 'converted', 'closed'];

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    load();
  }, [filter]);

  const load = async () => {
    setLoading(true);
    try {
      const params = {};
      if (filter) params.status = filter;
      const { data } = await api.get('/inquiries', { params });
      setInquiries(data.inquiries || []);
    } catch (err) {
      setError(apiError(err));
    } finally {
      setLoading(false);
    }
  };

  const changeStatus = async (id, status) => {
    try {
      await api.put(`/inquiries/${id}/status`, { status });
      load();
    } catch (err) {
      alert(apiError(err));
    }
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this inquiry?')) return;
    try {
      await api.delete(`/inquiries/${id}`);
      load();
    } catch (err) {
      alert(apiError(err));
    }
  };

  return (
    <div>
      <div className="toolbar">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All statuses</option>
          {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <button type="button" className="btn btn-ghost-sm" onClick={load}>Refresh</button>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {loading ? (
        <div className="loading">Loading…</div>
      ) : inquiries.length === 0 ? (
        <div className="empty-state">No inquiries yet.</div>
      ) : (
        <div className="inquiry-list">
          {inquiries.map((inq) => (
            <div className={`inquiry-card status-${inq.status}`} key={inq._id}>
              <div className="inquiry-head">
                <div>
                  <b>{inq.name}</b>
                  <span className="inquiry-type">{inq.type}</span>
                </div>
                <span className="status-pill">{inq.status}</span>
              </div>
              <div className="inquiry-body">
                <p><span>Phone:</span> <a href={`tel:${inq.phone}`}>{inq.phone}</a></p>
                <p><span>Email:</span> <a href={`mailto:${inq.email}`}>{inq.email}</a></p>
                {inq.program && <p><span>Program:</span> {inq.program}</p>}
                {inq.city && <p><span>Location:</span> {inq.city}{inq.state ? `, ${inq.state}` : ''}</p>}
                {inq.message && <p className="inq-message"><span>Message:</span> {inq.message}</p>}
                <p className="inq-date">
                  Received {new Date(inq.createdAt).toLocaleString('en-IN')}
                </p>
              </div>
              <div className="inquiry-actions">
                <select
                  value={inq.status}
                  onChange={(e) => changeStatus(inq._id, e.target.value)}
                >
                  {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <button type="button" className="btn btn-danger-sm" onClick={() => remove(inq._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}