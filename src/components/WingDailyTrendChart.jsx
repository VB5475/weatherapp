import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { WING_DAILY_DATA, WING_COLORS } from '../services/wingData';
import './RainfallCharts.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip-label">{label}</p>
        <div className="chart-tooltip-items">
          {payload.filter(p => !p.name.includes('Trend')).map((entry, index) => (
            <p key={index} className="chart-tooltip-value" style={{ color: entry.stroke || entry.fill }}>
              <span className="dot" style={{ backgroundColor: entry.stroke || entry.fill }}></span>
              {entry.name}: {entry.value.toFixed(3)} MCM
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function WingDailyTrendChart() {
  const avgNG  = (WING_DAILY_DATA.reduce((s, d) => s + d.ng,  0) / WING_DAILY_DATA.length).toFixed(2);
  const avgSAU = (WING_DAILY_DATA.reduce((s, d) => s + d.sau, 0) / WING_DAILY_DATA.length).toFixed(2);
  const avgSG  = (WING_DAILY_DATA.reduce((s, d) => s + d.sg,  0) / WING_DAILY_DATA.length).toFixed(2);

  return (
    <div className="chart-container glass-card fade-in-up" style={{ animationDelay: '600ms' }}>
      <div className="chart-header">
        <h3 className="chart-title">📈 Wing-wise Daily Storage Trend</h3>
        <span className="chart-subtitle">Daily totals comparison for North, Saurashtra, and South Gujarat (MCM)</span>
      </div>

      <div className="wing-stat-row">
        <div className="wing-stat-box">
          <span className="wing-stat-label">NG avg / day</span>
          <span className="wing-stat-value" style={{ color: WING_COLORS.NG.line }}>{avgNG} MCM</span>
        </div>
        <div className="wing-stat-box">
          <span className="wing-stat-label">SAU avg / day</span>
          <span className="wing-stat-value" style={{ color: WING_COLORS.SAU.line }}>{avgSAU} MCM</span>
        </div>
        <div className="wing-stat-box">
          <span className="wing-stat-label">SG avg / day</span>
          <span className="wing-stat-value" style={{ color: WING_COLORS.SG.line }}>{avgSG} MCM</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={380}>
        <ComposedChart
          data={WING_DAILY_DATA}
          margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
          <XAxis 
            dataKey="date" 
            tick={{ fill: '#64748B', fontSize: 11 }} 
            axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
          />
          <YAxis 
            tick={{ fill: '#64748B', fontSize: 11 }} 
            axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
            label={{ value: 'Daily total storage (MCM)', angle: -90, position: 'insideLeft', offset: 0, style: { fontSize: 11, fill: '#64748B' } }}
            domain={[0, 8]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
            payload={[
              { value: 'NG — North Gujarat',  type: 'rect', color: WING_COLORS.NG.line  },
              { value: 'SAU — Saurashtra',    type: 'rect', color: WING_COLORS.SAU.line },
              { value: 'SG — South Gujarat',  type: 'rect', color: WING_COLORS.SG.line  },
            ]}
          />
          
          <Bar dataKey="ng" name="North Gujarat" fill={WING_COLORS.NG.bar} radius={[3, 3, 0, 0]} barSize={18} />
          <Bar dataKey="sau" name="Saurashtra" fill={WING_COLORS.SAU.bar} radius={[3, 3, 0, 0]} barSize={18} />
          <Bar dataKey="sg" name="South Gujarat" fill={WING_COLORS.SG.bar} radius={[3, 3, 0, 0]} barSize={18} />
          
          <Line 
            type="monotone" 
            dataKey="ng" 
            name="NG Trend" 
            stroke={WING_COLORS.NG.line} 
            strokeWidth={2} 
            dot={{ r: 3, fill: WING_COLORS.NG.line }} 
            activeDot={{ r: 5 }} 
            legendType="none"
          />
          <Line 
            type="monotone" 
            dataKey="sau" 
            name="SAU Trend" 
            stroke={WING_COLORS.SAU.line} 
            strokeDasharray="6 3" 
            strokeWidth={2} 
            dot={{ r: 3, fill: WING_COLORS.SAU.line }} 
            activeDot={{ r: 5 }} 
            legendType="none"
          />
          <Line 
            type="monotone" 
            dataKey="sg" 
            name="SG Trend" 
            stroke={WING_COLORS.SG.line} 
            strokeDasharray="3 3" 
            strokeWidth={2} 
            dot={{ r: 3, fill: WING_COLORS.SG.line }} 
            activeDot={{ r: 5 }} 
            legendType="none"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
