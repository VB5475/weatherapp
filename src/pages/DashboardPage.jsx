import { useState, useEffect } from 'react';
import MetricCard from '../components/MetricCard';
import { CategoryDistributionChart } from '../components/RainfallCharts';
import GujaratMap from '../components/GujaratMap';
import { fetchStateRainfall, fetchDistrictRainfall } from '../services/api';
import { Link } from 'react-router-dom';
import WingDailyTrendChart from '../components/WingDailyTrendChart';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from 'recharts';

import './DashboardPage.css';

export default function DashboardPage() {
  const [stateData, setStateData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [state, district] = await Promise.all([
        fetchStateRainfall(),
        fetchDistrictRainfall(),
      ]);
      setStateData(state);
      setDistrictData(district);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <p className="loading-text">Loading rainfall data...</p>
      </div>
    );
  }

  const d = stateData[0] || {};

  // Top 10 districts by cumulative rainfall
  const top10 = [...districtData]
    .sort((a, b) => parseFloat(b['Cumulative Actual']) - parseFloat(a['Cumulative Actual']))
    .slice(0, 10)
    .map(data => ({
      name: data.District.length > 12 ? data.District.substring(0, 10) + '…' : data.District,
      fullName: data.District,
      cumulative: parseFloat(data['Cumulative Actual']) || 0,
    }));

  return (
    <div className="dashboard-page">
      {/* State Summary Banner */}
      <div className="state-banner glass-card fade-in-up">
        <div className="state-banner-left">
          <span className="state-banner-icon">🌧️</span>
          <div>
            <h2 className="state-banner-title">Gujarat State Rainfall Summary</h2>
            <p className="state-banner-date">
              Data as of {d['Date'] || 'N/A'} • Cumulative Period: {d['Cumulative Date'] || 'N/A'}
            </p>
          </div>
        </div>
        <div className="state-banner-stats">
          <Link to="/districts" className="banner-stat hoverable-stat">
            <span className="banner-stat-value" style={{ textDecoration: 'underline' }}>{districtData.length}</span>
            <span className="banner-stat-label">Districts (View All)</span>
          </Link>
          <div className="banner-stat">
            <span className="banner-stat-value">{d['Cumulative Actual'] || '0'}</span>
            <span className="banner-stat-label">Cumulative (mm)</span>
          </div>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid-4">
        <MetricCard
          title="Daily Rainfall"
          icon="☀️"
          actual={d['Daily Actual'] || '0.00'}
          normal={d['Daily Normal'] || '0.00'}
          departure={d['Daily Departure Per'] || '0%'}
          category={d['Daily Category'] || 'NR'}
          delay={100}
        />
        <MetricCard
          title="Weekly Rainfall"
          icon="📅"
          actual={d['Weekly Actual'] || '0.00'}
          normal={d['Weekly Normal'] || '0.00'}
          departure={d['Weekly Departure Per'] || '0%'}
          category={d['Weekly Category'] || 'NR'}
          delay={200}
        />
        <MetricCard
          title="Monthly Rainfall"
          icon="🌦️"
          actual={d['Monthly Acutual'] || '0.00'}
          normal={d['Monthly Normal'] || '0.00'}
          departure={d['Monthly Departure Per'] || '0%'}
          category={d['Monthly Category'] || 'NR'}
          delay={300}
        />
        <MetricCard
          title="Cumulative Rainfall"
          icon="💧"
          actual={d['Cumulative Actual'] || '0.00'}
          normal={d['Cumulative Normal'] || '0.00'}
          departure={d['Cumulative Departue Per'] || '0%'}
          category={(d['Cumulative Category'] || 'NR').trim()}
          delay={400}
        />
      </div>

      {/* Map + Right Charts Split */}
      <div className="map-split">
        <div className="map-split-left">
          <GujaratMap districtData={districtData} selectedDistrict={selectedDistrict} />
        </div>
        <div className="map-split-right">
          <CategoryDistributionChart districtData={districtData} />
          <div className="top10-chart glass-card fade-in-up flex-col" style={{ animationDelay: '300ms' }}>
          <div className="chart-header">
            <h3 className="chart-title">📈 Top 10 Districts by Cumulative Rainfall</h3>
            <span className="chart-subtitle">Highest cumulative rainfall from March to date</span>
          </div>
          <div className="top10-chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={top10}
                margin={{ top: 20, right: 30, left: 5, bottom: 85 }}
              >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
              <XAxis
                type="category"
                dataKey="name"
                tick={{ fill: '#334155', fontSize: 11, fontWeight: 500 }}
                axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
                angle={-45}
                textAnchor="end"
              />
              <YAxis
                type="number"
                tick={{ fill: '#64748B', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
                unit=" mm"
              />
              <Tooltip
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  color: '#0F172A',
                }}
                formatter={(value) => [`${value} mm`, 'Cumulative']}
                labelFormatter={(label, payload) => payload?.[0]?.payload?.fullName || label}
              />
              <Bar
                dataKey="cumulative"
                fill="url(#barGradient)"
                radius={[6, 6, 0, 0]}
                barSize={30}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0EA5E9" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#10B981" stopOpacity={0.9} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
    
    {/* Wing-wise Daily Trend Section */}
    <div className="full-width-chart-section">
      <WingDailyTrendChart />
    </div>
  </div>
);
}
