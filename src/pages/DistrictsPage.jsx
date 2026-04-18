import { useState, useEffect } from 'react';
import DistrictTable from '../components/DistrictTable';
import { fetchDistrictRainfall } from '../services/api';
import './DashboardPage.css';

export default function DistrictsPage() {
  const [districtData, setDistrictData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const district = await fetchDistrictRainfall();
      setDistrictData(district);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <p className="loading-text">Loading district data...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="state-banner glass-card fade-in-up">
        <div className="state-banner-left">
          <span className="state-banner-icon">📋</span>
          <div>
            <h2 className="state-banner-title">District Rainfall Data</h2>
            <p className="state-banner-date">
              Detailed view of all 33 districts in Gujarat
            </p>
          </div>
        </div>
      </div>
      
      <div className="glass-card fade-in-up" style={{ animationDelay: '100ms' }}>
        <DistrictTable districtData={districtData} />
      </div>
    </div>
  );
}
