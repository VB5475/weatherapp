import { useState, useMemo } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, ComposedChart, Area,
} from 'recharts';
import {
  kpiData,
  districtProjectData,
  budgetAllocationData,
  expenditureVsTargetData,
  progressTrendData,
  resourceAllocationData,
  activeProjectsData,
} from './dummyData';
import './NewDesignPage.css';

const FILTER_OPTIONS = ['quarterly', 'monthly', 'weekly'];
const ROWS_PER_PAGE = 6;

/* ── Custom Tooltip ── */
function NDTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="nd-custom-tooltip">
      <div className="nd-tooltip-title">{label}</div>
      {payload.map((p, i) => (
        <div key={i} className="nd-tooltip-row">
          <span className="nd-tooltip-dot" style={{ background: p.color || p.fill }} />
          <span className="nd-tooltip-value">{p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Pie Custom Label ── */
const RADIAN = Math.PI / 180;
function renderPieLabel({ cx, cy, midAngle, innerRadius, outerRadius, value }) {
  if (!value) return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize={15} fontWeight={700} style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
      {value}
    </text>
  );
}

/* ── Filter Tabs Component ── */
function FilterTabs({ active, onChange }) {
  return (
    <div className="nd-filter-tabs">
      {FILTER_OPTIONS.map(f => (
        <button
          key={f}
          className={`nd-filter-tab${active === f ? ' active' : ''}`}
          onClick={() => onChange(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

/* ── Progress Bar ── */
function ProgressBar({ value }) {
  const color = value >= 75 ? 'var(--nd-accent-emerald)' : value >= 50 ? 'var(--nd-accent-saffron)' : 'var(--nd-accent-red)';
  return (
    <div className="nd-progress-cell">
      <div className="nd-progress-bar">
        <div className="nd-progress-fill" style={{ width: `${value}%`, background: color }} />
      </div>
      <span className="nd-progress-text">{value}%</span>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Page Component
   ═══════════════════════════════════════════ */
export default function NewDesignPage({ darkMode = false }) {
  const [filters, setFilters] = useState({
    bar: 'quarterly',
    pie: 'quarterly',
    combo: 'quarterly',
    line: 'quarterly',
    multibar: 'quarterly',
  });
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [sortCol, setSortCol] = useState('progress');
  const [sortDir, setSortDir] = useState('desc');

  const setFilter = (chart, val) => setFilters(prev => ({ ...prev, [chart]: val }));

  /* ── Grid Data ── */
  const filteredProjects = useMemo(() => {
    let data = [...activeProjectsData];
    if (search) {
      const q = search.toLowerCase();
      data = data.filter(p => p.name.toLowerCase().includes(q) || p.district.toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
    }
    data.sort((a, b) => {
      const valA = a[sortCol], valB = b[sortCol];
      const cmp = typeof valA === 'number' ? valA - valB : String(valA).localeCompare(String(valB));
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return data;
  }, [search, sortCol, sortDir]);

  const totalPages = Math.ceil(filteredProjects.length / ROWS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);

  const handleSort = (col) => {
    if (sortCol === col) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(col);
      setSortDir('desc');
    }
  };

  const SortIcon = ({ col }) => (
    <span className={`sort-icon${sortCol === col ? ' active' : ''}`}>
      {sortCol === col ? (sortDir === 'asc' ? '▲' : '▼') : '⇅'}
    </span>
  );

  const axisStyle = { fill: darkMode ? '#94A3B8' : '#64748B', fontSize: 13, fontWeight: 600 };
  const gridStroke = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  return (
    <div className={`new-design-page${darkMode ? ' dark-mode' : ''}`}>



      {/* ── KPI Cards ── */}
      <div className="nd-kpi-grid">
        {kpiData.map((k, i) => (
          <div className="nd-kpi-card" key={i}>
            <div className="nd-kpi-header">
              <span className="nd-kpi-icon">{k.icon}</span>
              <span className={`nd-kpi-change ${k.trend}`}>{k.change}</span>
            </div>
            <div className="nd-kpi-value">
              {k.value}
              {k.unit && <span className="nd-kpi-unit">{k.unit}</span>}
            </div>
            <div className="nd-kpi-title">{k.title}</div>
          </div>
        ))}
      </div>

      {/* ── Row 1: Bar + Pie ── */}
      <div className="nd-charts-row">
        {/* Bar Chart */}
        <div className="nd-chart-card">
          <div className="nd-chart-header">
            <h3 className="nd-chart-title">🏗️ District-wise Project Completion</h3>
            <FilterTabs active={filters.bar} onChange={v => setFilter('bar', v)} />
          </div>
          <div className="nd-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={districtProjectData[filters.bar]} margin={{ top: 10, right: 20, left: -5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                <XAxis dataKey="district" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip content={<NDTooltip />} />
                <Legend wrapperStyle={{ fontSize: 13, fontWeight: 600 }} />
                <Bar dataKey="completed" name="Completed" fill="var(--nd-accent-teal)" radius={[6, 6, 0, 0]} barSize={24} />
                <Bar dataKey="pending" name="Pending" fill="var(--nd-accent-saffron)" radius={[6, 6, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="nd-chart-card">
          <div className="nd-chart-header">
            <h3 className="nd-chart-title">💰 Budget Allocation by Category</h3>
            <FilterTabs active={filters.pie} onChange={v => setFilter('pie', v)} />
          </div>
          <div className="nd-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetAllocationData[filters.pie]}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                  labelLine={false}
                  label={renderPieLabel}
                >
                  {budgetAllocationData[filters.pie].map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<NDTooltip />} />
                <Legend wrapperStyle={{ fontSize: 13, fontWeight: 600 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Row 2: Bar-Line Combo + Line ── */}
      <div className="nd-charts-row">
        {/* Bar-Line Combo */}
        <div className="nd-chart-card">
          <div className="nd-chart-header">
            <h3 className="nd-chart-title">📊 Expenditure vs Target</h3>
            <FilterTabs active={filters.combo} onChange={v => setFilter('combo', v)} />
          </div>
          <div className="nd-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={expenditureVsTargetData[filters.combo]} margin={{ top: 10, right: 20, left: -5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} unit=" Cr" />
                <Tooltip content={<NDTooltip />} />
                <Legend wrapperStyle={{ fontSize: 13, fontWeight: 600 }} />
                <Bar dataKey="actual" name="Actual (₹Cr)" fill="var(--nd-accent-blue)" radius={[6, 6, 0, 0]} barSize={28} />
                <Line type="monotone" dataKey="target" name="Target (₹Cr)" stroke="var(--nd-accent-red)" strokeWidth={3} dot={{ r: 5, fill: 'var(--nd-accent-red)' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}
        <div className="nd-chart-card">
          <div className="nd-chart-header">
            <h3 className="nd-chart-title">📈 Monthly Progress Trend</h3>
            <FilterTabs active={filters.line} onChange={v => setFilter('line', v)} />
          </div>
          <div className="nd-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressTrendData[filters.line]} margin={{ top: 10, right: 20, left: -5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} unit="%" />
                <Tooltip content={<NDTooltip />} />
                <Legend wrapperStyle={{ fontSize: 13, fontWeight: 600 }} />
                <Line type="monotone" dataKey="roads" name="Roads" stroke="var(--nd-accent-teal)" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="bridges" name="Bridges" stroke="var(--nd-accent-saffron)" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="buildings" name="Buildings" stroke="var(--nd-accent-purple)" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Row 3: Multi-Bar (full width) ── */}
      <div className="nd-charts-row">
        <div className="nd-chart-card full-width">
          <div className="nd-chart-header">
            <h3 className="nd-chart-title">👷 Resource Allocation by Department</h3>
            <FilterTabs active={filters.multibar} onChange={v => setFilter('multibar', v)} />
          </div>
          <div className="nd-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resourceAllocationData[filters.multibar]} margin={{ top: 10, right: 20, left: -5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                <XAxis dataKey="dept" tick={axisStyle} axisLine={false} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
                <Tooltip content={<NDTooltip />} />
                <Legend wrapperStyle={{ fontSize: 13, fontWeight: 600 }} />
                <Bar dataKey="manpower" name="Manpower" fill="var(--nd-accent-teal)" radius={[6, 6, 0, 0]} barSize={22} />
                <Bar dataKey="machinery" name="Machinery" fill="var(--nd-accent-blue)" radius={[6, 6, 0, 0]} barSize={22} />
                <Bar dataKey="materials" name="Materials" fill="var(--nd-accent-saffron)" radius={[6, 6, 0, 0]} barSize={22} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Data Grid ── */}
      <div className="nd-grid-section">
        <div className="nd-grid-header">
          <h3 className="nd-grid-title">📋 Active Projects Overview</h3>
          <div className="nd-grid-search">
            <input
              type="text"
              placeholder="Search projects, districts..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(0); }}
            />
          </div>
        </div>

        <div className="nd-table-wrapper">
          <table className="nd-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>ID <SortIcon col="id" /></th>
                <th onClick={() => handleSort('name')}>Project <SortIcon col="name" /></th>
                <th onClick={() => handleSort('district')}>District <SortIcon col="district" /></th>
                <th onClick={() => handleSort('type')}>Type <SortIcon col="type" /></th>
                <th onClick={() => handleSort('budget')}>Budget (₹Cr) <SortIcon col="budget" /></th>
                <th onClick={() => handleSort('spent')}>Spent (₹Cr) <SortIcon col="spent" /></th>
                <th onClick={() => handleSort('progress')}>Progress <SortIcon col="progress" /></th>
                <th onClick={() => handleSort('status')}>Status <SortIcon col="status" /></th>
              </tr>
            </thead>
            <tbody>
              {paginatedProjects.map(p => (
                <tr key={p.id}>
                  <td className="project-id">{p.id}</td>
                  <td className="project-name">{p.name}</td>
                  <td>{p.district}</td>
                  <td>{p.type}</td>
                  <td>₹{p.budget.toFixed(1)}</td>
                  <td>₹{p.spent.toFixed(1)}</td>
                  <td><ProgressBar value={p.progress} /></td>
                  <td>
                    <span className={`nd-status-badge ${p.status === 'On Track' ? 'on-track' : p.status === 'Delayed' ? 'delayed' : 'critical'}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="nd-pagination">
          <span className="nd-pagination-info">
            Showing {page * ROWS_PER_PAGE + 1}–{Math.min((page + 1) * ROWS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} projects
          </span>
          <div className="nd-pagination-btns">
            <button className="nd-pagination-btn" disabled={page === 0} onClick={() => setPage(p => p - 1)}>← Prev</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} className={`nd-pagination-btn${page === i ? ' active' : ''}`} onClick={() => setPage(i)}>
                {i + 1}
              </button>
            ))}
            <button className="nd-pagination-btn" disabled={page >= totalPages - 1} onClick={() => setPage(p => p + 1)}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
