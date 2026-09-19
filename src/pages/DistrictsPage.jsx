import { useState, useEffect } from 'react';
import DistrictTable from '../components/DistrictTable';
import { fetchDistrictRainfall } from '../services/api';
import './DashboardPage.css';

export default function DistrictsPage() {
  const [districtData, setDistrictData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setNoData(false);
      try {
        const district = await fetchDistrictRainfall();
        setDistrictData(district);
      } catch (error) {
        console.warn('Failed to load district data:', error.message);
        setDistrictData([]);
        setNoData(true);
      } finally {
        setLoading(false);
      }
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

  if (noData) {
    return (
      <div className="loading-container">
        <span className="empty-state-icon" aria-hidden>📭</span>
        <p className="empty-state-title">No data found</p>
        <p className="loading-text">District weather data is unavailable. Please try again later.</p>
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
