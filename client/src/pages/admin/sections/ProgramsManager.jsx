import { useEffect, useState } from 'react';
import api, { apiError } from '../../../api/client.js';

const emptySpec = {
  slug: '', name: '', summary: '', feesPerYear: 0, intake: 60, seatsFilled: 0,
  highlights: '', careers: '', skills: '',
  curriculum: [{ semester: 'Sem 1', subjects: [''] }],
  featured: false,
};

const emptyProgram = {
  slug: '', title: '', shortTitle: '', code: '', level: 'Undergraduate',
  degree: '', duration: '', mode: 'Full-time · On-campus', category: '',
  summary: '', description: '', eligibility: '', featured: false, active: true,
  specializations: [],
};

const splitLines = (v) => (v || '').split('\n').map((s) => s.trim()).filter(Boolean);

export default function ProgramsManager() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/programs');
      setPrograms(data.programs || []);
    } catch (err) { setError(apiError(err)); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const hydrate = (p) => ({
    ...emptyProgram,
    ...p,
    specializations: (p.specializations || []).map((s) => ({
      ...emptySpec,
      ...s,
      highlights: (s.highlights || []).join('\n'),
      careers: (s.careers || []).join('\n'),
      skills: (s.skills || []).join('\n'),
      feesPerYear: s.feesPerYear ?? 0,
      intake: s.intake ?? 60,
      seatsFilled: s.seatsFilled ?? 0,
      curriculum: s.curriculum?.length ? s.curriculum : [{ semester: 'Sem 1', subjects: [''] }],
    })),
  });

  const beginEdit = (p) => setEditing(hydrate(p));
  const beginNew = () => setEditing({ ...emptyProgram, shortTitle: '', specializations: [] });

  const updateField = (k, v) => setEditing({ ...editing, [k]: v });

  const updateSpec = (idx, k, v) => {
    const specializations = editing.specializations.map((s, i) => (i === idx ? { ...s, [k]: v } : s));
    updateField('specializations', specializations);
  };
  const addSpec = () => updateField('specializations', [...editing.specializations, { ...emptySpec }]);
  const removeSpec = (idx) => updateField('specializations', editing.specializations.filter((_, i) => i !== idx));

  const updateSem = (specIdx, semIdx, field, value) => {
    const specializations = editing.specializations.map((s, i) => {
      if (i !== specIdx) return s;
      const curriculum = s.curriculum.map((sem, j) => (j === semIdx ? { ...sem, [field]: value } : sem));
      return { ...s, curriculum };
    });
    updateField('specializations', specializations);
  };
  const addSem = (specIdx) => {
    const specializations = editing.specializations.map((s, i) =>
      i === specIdx ? { ...s, curriculum: [...s.curriculum, { semester: `Sem ${s.curriculum.length + 1}`, subjects: [''] }] } : s
    );
    updateField('specializations', specializations);
  };
  const removeSem = (specIdx, semIdx) => {
    const specializations = editing.specializations.map((s, i) =>
      i === specIdx ? { ...s, curriculum: s.curriculum.filter((_, j) => j !== semIdx) } : s
    );
    updateField('specializations', specializations);
  };
  const addSubject = (specIdx, semIdx) => {
    const specializations = editing.specializations.map((s, i) => {
      if (i !== specIdx) return s;
      const curriculum = s.curriculum.map((sem, j) => (j === semIdx ? { ...sem, subjects: [...sem.subjects, ''] } : sem));
      return { ...s, curriculum };
    });
    updateField('specializations', specializations);
  };
  const updateSubject = (specIdx, semIdx, subIdx, value) => {
    const specializations = editing.specializations.map((s, i) => {
      if (i !== specIdx) return s;
      const curriculum = s.curriculum.map((sem, j) =>
        j === semIdx ? { ...sem, subjects: sem.subjects.map((sub, k) => (k === subIdx ? value : sub)) } : sem
      );
      return { ...s, curriculum };
    });
    updateField('specializations', specializations);
  };
  const removeSubject = (specIdx, semIdx, subIdx) => {
    const specializations = editing.specializations.map((s, i) => {
      if (i !== specIdx) return s;
      const curriculum = s.curriculum.map((sem, j) =>
        j === semIdx ? { ...sem, subjects: sem.subjects.filter((_, k) => k !== subIdx) } : sem
      );
      return { ...s, curriculum };
    });
    updateField('specializations', specializations);
  };

  const slugify = (v) => (v || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const save = async (e) => {
    e.preventDefault();
    setError('');
    if (!editing.shortTitle && editing.title) {
      updateField('shortTitle', editing.title);
    }
    const payload = {
      ...editing,
      slug: slugify(editing.slug || editing.title),
      specializations: editing.specializations.map((s) => ({
        ...s,
        slug: slugify(s.slug || s.name),
        feesPerYear: Number(s.feesPerYear) || 0,
        intake: Number(s.intake) || 60,
        seatsFilled: Number(s.seatsFilled) || 0,
        highlights: splitLines(s.highlights),
        careers: splitLines(s.careers),
        skills: splitLines(s.skills),
        curriculum: s.curriculum.map((sem) => ({
          semester: sem.semester || `Sem ${s.curriculum.indexOf(sem) + 1}`,
          subjects: sem.subjects.map((x) => x.trim()).filter(Boolean),
        })).filter((sem) => sem.subjects.length > 0),
      })).filter((s) => s.name),
    };
    try {
      if (editing._id) await api.put(`/programs/${editing._id}`, payload);
      else await api.post('/programs', payload);
      setEditing(null);
      load();
    } catch (err) { setError(apiError(err)); }
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this program?')) return;
    try { await api.delete(`/programs/${id}`); load(); }
    catch (err) { alert(apiError(err)); }
  };

  /* ---------------- LIST VIEW ---------------- */
  if (!editing) {
    return (
      <div>
        <div className="toolbar">
          <button className="btn btn-primary" onClick={beginNew}>+ New degree</button>
          <button className="btn btn-ghost-sm" onClick={load}>Refresh</button>
        </div>
        {error && <div className="alert alert-error">{error}</div>}
        {loading ? <div className="loading">Loading…</div> : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr><th>Degree</th><th>Level</th><th>Duration</th><th>Specs</th><th>Status</th><th></th></tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p._id}>
                    <td>
                      <b>{p.title}</b>
                      <div className="table-sub">{p.code} · {p.slug}</div>
                    </td>
                    <td>{p.level}</td>
                    <td>{p.duration}</td>
                    <td>{p.specCount ?? p.specializations.length}</td>
                    <td>{p.active ? (p.featured ? 'Featured' : 'Active') : 'Hidden'}</td>
                    <td>
                      <div className="row-actions">
                        <button className="btn btn-ghost-sm" onClick={() => beginEdit(p)}>Edit</button>
                        <button className="btn btn-danger-sm" onClick={() => remove(p._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }

  /* ---------------- EDITOR VIEW ---------------- */
  return (
    <div className="editor">
      <div className="editor-head">
        <h2>{editing._id ? `Edit ${editing.title}` : 'New degree program'}</h2>
        <button className="btn btn-ghost-sm" onClick={() => setEditing(null)}>← Back</button>
      </div>
      {error && <div className="alert alert-error">{error}</div>}
      <form onSubmit={save}>
        <h3 className="editor-subhead">Degree details</h3>
        <div className="field-grid">
          <div className="field"><label>Degree short name (e.g. B.Tech)</label><input value={editing.shortTitle} onChange={(e) => updateField('shortTitle', e.target.value)} required placeholder="B.Tech" /></div>
          <div className="field"><label>Full title</label><input value={editing.title} onChange={(e) => updateField('title', e.target.value)} required placeholder="Bachelor of Technology (B.Tech)" /></div>
          <div className="field"><label>Slug</label><input value={editing.slug} onChange={(e) => updateField('slug', e.target.value)} placeholder="e.g. btech" /></div>
          <div className="field"><label>Code</label><input value={editing.code} onChange={(e) => updateField('code', e.target.value)} required /></div>
          <div className="field"><label>Level</label>
            <select value={editing.level} onChange={(e) => updateField('level', e.target.value)}>
              <option>Undergraduate</option><option>Postgraduate</option>
            </select>
          </div>
          <div className="field"><label>Duration</label><input value={editing.duration} onChange={(e) => updateField('duration', e.target.value)} required placeholder="4 Years" /></div>
          <div className="field"><label>Mode</label><input value={editing.mode} onChange={(e) => updateField('mode', e.target.value)} /></div>
          <div className="field"><label>Category</label><input value={editing.category} onChange={(e) => updateField('category', e.target.value)} /></div>
        </div>
        <div className="check-row">
          <label><input type="checkbox" checked={editing.featured} onChange={(e) => updateField('featured', e.target.checked)} /> Featured on home</label>
          <label><input type="checkbox" checked={editing.active} onChange={(e) => updateField('active', e.target.checked)} /> Active</label>
        </div>
        <div className="field"><label>Summary</label><textarea rows="2" value={editing.summary} onChange={(e) => updateField('summary', e.target.value)} required /></div>
        <div className="field"><label>Description</label><textarea rows="4" value={editing.description} onChange={(e) => updateField('description', e.target.value)} /></div>
        <div className="field"><label>Eligibility</label><textarea rows="2" value={editing.eligibility} onChange={(e) => updateField('eligibility', e.target.value)} /></div>

        <h3 className="editor-subhead">
          Specializations ({editing.specializations.length})
          <button type="button" className="btn btn-ghost-sm" style={{ marginLeft: 12 }} onClick={addSpec}>+ Add specialization</button>
        </h3>

        {editing.specializations.map((spec, specIdx) => (
          <div className="spec-editor" key={specIdx}>
            <div className="spec-editor-head">
              <b>{spec.name || `Specialization ${specIdx + 1}`}</b>
              <button type="button" className="btn btn-danger-sm" onClick={() => removeSpec(specIdx)}>Remove</button>
            </div>
            <div className="field-grid">
              <div className="field"><label>Name</label><input value={spec.name} onChange={(e) => updateSpec(specIdx, 'name', e.target.value)} placeholder="Artificial Intelligence & Machine Learning" /></div>
              <div className="field"><label>Slug</label><input value={spec.slug} onChange={(e) => updateSpec(specIdx, 'slug', e.target.value)} placeholder="ai-ml" /></div>
              <div className="field"><label>Fees per year (₹)</label><input type="number" value={spec.feesPerYear} onChange={(e) => updateSpec(specIdx, 'feesPerYear', e.target.value)} /></div>
              <div className="field"><label>Intake</label><input type="number" value={spec.intake} onChange={(e) => updateSpec(specIdx, 'intake', e.target.value)} /></div>
              <div className="field"><label>Seats filled</label><input type="number" value={spec.seatsFilled} onChange={(e) => updateSpec(specIdx, 'seatsFilled', e.target.value)} /></div>
              <div className="field check-field">
                <label style={{ marginBottom: 6 }}>Featured</label>
                <input type="checkbox" checked={spec.featured} onChange={(e) => updateSpec(specIdx, 'featured', e.target.checked)} />
              </div>
            </div>
            <div className="field"><label>Summary</label><textarea rows="2" value={spec.summary} onChange={(e) => updateSpec(specIdx, 'summary', e.target.value)} /></div>
            <div className="field"><label>Highlights (one per line)</label><textarea rows="3" value={spec.highlights} onChange={(e) => updateSpec(specIdx, 'highlights', e.target.value)} /></div>
            <div className="field"><label>Careers (one per line)</label><textarea rows="3" value={spec.careers} onChange={(e) => updateSpec(specIdx, 'careers', e.target.value)} /></div>
            <div className="field"><label>Skills / technologies (one per line)</label><textarea rows="3" value={spec.skills} onChange={(e) => updateSpec(specIdx, 'skills', e.target.value)} /></div>

            <div className="sub-editor-head">
              <b>Curriculum</b>
              <button type="button" className="btn btn-ghost-sm" onClick={() => addSem(specIdx)}>+ Add semester</button>
            </div>
            {spec.curriculum.map((sem, semIdx) => (
              <div className="sem-block" key={semIdx}>
                <div className="sem-head">
                  <input value={sem.semester} onChange={(e) => updateSem(specIdx, semIdx, 'semester', e.target.value)} placeholder="Semester" />
                  <button type="button" className="btn btn-danger-sm" onClick={() => removeSem(specIdx, semIdx)}>Remove</button>
                </div>
                {sem.subjects.map((sub, subIdx) => (
                  <div className="subject-row" key={subIdx}>
                    <input value={sub} onChange={(e) => updateSubject(specIdx, semIdx, subIdx, e.target.value)} placeholder="Subject" />
                    <button type="button" className="icon-btn" onClick={() => removeSubject(specIdx, semIdx, subIdx)}>−</button>
                  </div>
                ))}
                <button type="button" className="btn btn-ghost-sm" onClick={() => addSubject(specIdx, semIdx)}>+ Add subject</button>
              </div>
            ))}
          </div>
        ))}

        <div className="editor-actions">
          <button type="submit" className="btn btn-primary">Save program</button>
          <button type="button" className="btn btn-ghost" onClick={() => setEditing(null)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}