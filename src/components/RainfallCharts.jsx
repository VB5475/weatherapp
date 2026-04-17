import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import { getCategoryColor } from '../services/api';
import './RainfallCharts.css';

const CHART_COLORS = {
  actual: '#0EA5E9',
  normal: '#64748B',
};

const CATEGORY_COLORS = {
  'No Rain': '#64748B',
  'Deficient': '#EF4444',
  'Normal': '#F59E0B',
  'Excess': '#0EA5E9',
  'Large Excess': '#10B981',
};

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-label">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} className="chart-tooltip-value" style={{ color: entry.color }}>
          {entry.name}: {entry.value} mm
        </p>
      ))}
    </div>
  );
}

export function ActualVsNormalChart({ stateData }) {
  if (!stateData || stateData.length === 0) return null;
  const d = stateData[0];

  const barData = [
    { period: 'Daily', actual: parseFloat(d['Daily Actual']) || 0, normal: parseFloat(d['Daily Normal']) || 0 },
    { period: 'Weekly', actual: parseFloat(d['Weekly Actual']) || 0, normal: parseFloat(d['Weekly Normal']) || 0 },
    { period: 'Monthly', actual: parseFloat(d['Monthly Acutual']) || 0, normal: parseFloat(d['Monthly Normal']) || 0 },
    { period: 'Cumulative', actual: parseFloat(d['Cumulative Actual']) || 0, normal: parseFloat(d['Cumulative Normal']) || 0 },
  ];

  return (
    <div className="chart-container glass-card fade-in-up" style={{ animationDelay: '400ms' }}>
      <div className="chart-header">
        <h3 className="chart-title">📊 Actual vs Normal Rainfall</h3>
        <span className="chart-subtitle">State-level comparison across periods</span>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={barData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
          <XAxis dataKey="period" tick={{ fill: '#334155', fontSize: 12 }} axisLine={{ stroke: 'rgba(0,0,0,0.1)' }} />
          <YAxis tick={{ fill: '#334155', fontSize: 12 }} axisLine={{ stroke: 'rgba(0,0,0,0.1)' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: 12, color: '#334155' }} />
          <Bar dataKey="actual" name="Actual" fill={CHART_COLORS.actual} radius={[6, 6, 0, 0]} />
          <Bar dataKey="normal" name="Normal" fill={CHART_COLORS.normal} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryDistributionChart({ districtData }) {
  if (!districtData || districtData.length === 0) return null;

  const categoryCounts = {};
  districtData.forEach(d => {
    const cat = d['Monthly Category'] ? d['Monthly Category'].trim() : 'NR';
    const label =
      cat === 'LE' ? 'Large Excess' :
      cat === 'E' ? 'Excess' :
      cat === 'N' ? 'Normal' :
      cat === 'D' ? 'Deficient' : 'No Rain';
    categoryCounts[label] = (categoryCounts[label] || 0) + 1;
  });

  const pieData = Object.entries(categoryCounts).map(([name, value]) => ({ name, value }));

  return (
    <div className="chart-container glass-card fade-in-up" style={{ animationDelay: '500ms' }}>
      <div className="chart-header">
        <h3 className="chart-title">🎯 District Category Distribution</h3>
        <span className="chart-subtitle">Monthly rainfall categories across Gujarat</span>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}`}
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={CATEGORY_COLORS[entry.name] || '#64748B'} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '8px',
              color: '#0F172A',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
