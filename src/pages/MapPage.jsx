import { useState, useEffect } from 'react';
import GujaratMap from '../components/GujaratMap';
import DistrictTable from '../components/DistrictTable';
import { fetchDistrictRainfall } from '../services/api';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './MapPage.css';

export default function MapPage() {
  const [districtData, setDistrictData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await fetchDistrictRainfall();
      setDistrictData(data);
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

  // Top 10 districts by cumulative rainfall
  const top10 = [...districtData]
    .sort((a, b) => parseFloat(b['Cumulative Actual']) - parseFloat(a['Cumulative Actual']))
    .slice(0, 10)
    .map(d => ({
      name: d.District.length > 12 ? d.District.substring(0, 10) + '…' : d.District,
      fullName: d.District,
      cumulative: parseFloat(d['Cumulative Actual']) || 0,
    }));

  return (
    <div className="map-page">
      {/* Map + Table split */}
      <div className="map-split">
        <div className="map-split-left">
          <GujaratMap districtData={districtData} selectedDistrict={selectedDistrict} />
        </div>
        <div className="map-split-right">
          <DistrictTable 
            districtData={districtData} 
            onRowClick={(districtName) => setSelectedDistrict(districtName)} 
          />
        </div>
      </div>

      {/* Top 10 Districts */}
      <div className="top10-chart glass-card fade-in-up" style={{ animationDelay: '300ms' }}>
        <div className="chart-header">
          <h3 className="chart-title">🏆 Top 10 Districts by Cumulative Rainfall</h3>
          <span className="chart-subtitle">Highest cumulative rainfall from March to date</span>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={top10}
            margin={{ top: 20, right: 30, left: 5, bottom: 25 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis
              type="category"
              dataKey="name"
              tick={{ fill: '#F1F5F9', fontSize: 11, fontWeight: 500 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              angle={-45}
              textAnchor="end"
            />
            <YAxis
              type="number"
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              unit=" mm"
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#F1F5F9',
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
  );
}
