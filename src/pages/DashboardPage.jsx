import { useState, useEffect } from 'react';
import MetricCard from '../components/MetricCard';
import { ActualVsNormalChart, CategoryDistributionChart } from '../components/RainfallCharts';
import DistrictTable from '../components/DistrictTable';
import { fetchStateRainfall, fetchDistrictRainfall } from '../services/api';
import './DashboardPage.css';

export default function DashboardPage() {
  const [stateData, setStateData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <div className="banner-stat">
            <span className="banner-stat-value">{districtData.length}</span>
            <span className="banner-stat-label">Districts</span>
          </div>
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
          icon="🌊"
          actual={d['Cumulative Actual'] || '0.00'}
          normal={d['Cumulative Normal'] || '0.00'}
          departure={d['Cumulative Departue Per'] || '0%'}
          category={(d['Cumulative Category'] || 'NR').trim()}
          delay={400}
        />
      </div>

      {/* Charts Row */}
      <div className="grid-2">
        <ActualVsNormalChart stateData={stateData} />
        <CategoryDistributionChart districtData={districtData} />
      </div>

      {/* District Table */}
      <DistrictTable districtData={districtData} />
    </div>
  );
}
