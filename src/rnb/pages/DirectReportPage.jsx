import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { activeTabCodeFromPath } from '../utils/activeTabCode';
import {
  fetchDirectReportList,
  fetchDrptOptions,
  downloadDirectReport,
} from '../services/directReport';
import RnbLoader from '../components/RnbLoader';
import './DirectReportPage.css';

export default function DirectReportPage() {
  const location = useLocation();
  const menuCode = activeTabCodeFromPath(location.pathname);

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [wings, setWings] = useState([]);
  const [circles, setCircles] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [wingId, setWingId] = useState('');
  const [circleId, setCircleId] = useState('');
  const [divisionId, setDivisionId] = useState('');
  const [ddlLoading, setDdlLoading] = useState(false);
  const [downloadingId, setDownloadingId] = useState(null);

  useEffect(() => {
    if (!menuCode) return;
    setLoading(true);
    fetchDirectReportList(menuCode)
      .then(setReports)
      .catch((e) => toast.error(e.message || 'Failed to load reports'))
      .finally(() => setLoading(false));
  }, [menuCode]);

  useEffect(() => {
    fetchDrptOptions('WING').then(setWings);
  }, []);

  useEffect(() => {
    setCircleId('');
    setDivisionId('');
    setCircles([]);
    setDivisions([]);
    if (wingId) {
      fetchDrptOptions('CIRCLE', { wingId }).then(setCircles);
    }
  }, [wingId]);

  useEffect(() => {
    setDivisionId('');
    setDivisions([]);
    if (wingId && circleId) {
      fetchDrptOptions('DIV', { wingId, circleId }).then(setDivisions);
    }
  }, [wingId, circleId]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return reports;
    return reports.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.fileName.toLowerCase().includes(q),
    );
  }, [reports, search]);

  async function handleDownload(report) {
    if (!wingId || !circleId || !divisionId) {
      toast.error('Select wing, circle, and division first');
      return;
    }
    setDownloadingId(report.id);
    try {
      const url = await downloadDirectReport({
        objectId: report.objectId,
        wingId,
        circleId,
        divisionId,
      });
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.download = report.fileName || 'report.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (e) {
      toast.error(e.message || 'Download failed');
    } finally {
      setDownloadingId(null);
    }
  }

  if (!menuCode) {
    return <div className="rnb-home-message">No menu code for direct reports.</div>;
  }

  if (loading) {
    return (
      <RnbLoader variant="page" message="Loading reports" />
    );
  }

  return (
    <div className="direct-report-page">
      <div className="direct-report-filters glass-card">
        <h2 className="chart-title">Direct reports</h2>
        <p className="chart-subtitle">Select location, then download a report</p>
        <div className="direct-report-ddl-row">
          <label>
            Wing
            <select value={wingId} onChange={(e) => setWingId(e.target.value)} disabled={ddlLoading}>
              <option value="">Select wing</option>
              {wings.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Circle
            <select value={circleId} onChange={(e) => setCircleId(e.target.value)} disabled={!wingId}>
              <option value="">Select circle</option>
              {circles.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Division
            <select
              value={divisionId}
              onChange={(e) => setDivisionId(e.target.value)}
              disabled={!circleId}
            >
              <option value="">Select division</option>
              {divisions.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <input
          className="direct-report-search"
          placeholder="Search reports…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="direct-report-grid">
        {filtered.length === 0 ? (
          <div className="rnb-home-message">No reports found.</div>
        ) : (
          filtered.map((report) => (
            <article key={report.id} className="direct-report-card glass-card">
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <span className="direct-report-file">{report.fileName}</span>
              <button
                type="button"
                className="direct-report-download"
                disabled={downloadingId === report.id}
                onClick={() => handleDownload(report)}
              >
                {downloadingId === report.id ? 'Preparing…' : 'Download'}
              </button>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
