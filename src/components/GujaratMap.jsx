import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getCategoryColor, getCategoryLabel, getCategoryBadgeClass } from '../services/api';
import './GujaratMap.css';

// Gujarat district center coordinates (lat, lng)
const DISTRICT_COORDS = {
  'AHMADABAD': [23.0225, 72.5714],
  'AMRELI': [21.6032, 71.2221],
  'ANAND': [22.5645, 72.9289],
  'ARVALLI': [23.2500, 73.5000],
  'BANASKANTHA': [24.1700, 72.4300],
  'BHARUCH': [21.7051, 72.9959],
  'BHAVNAGAR': [21.7645, 72.1519],
  'BOTAD': [22.1714, 71.6685],
  'CHHOTA UDAIPUR': [22.3100, 74.0100],
  'DAHOD': [22.8353, 74.2525],
  'DANG': [20.7538, 73.6867],
  'DEVBHOOMI DWARKA': [22.2028, 69.6570],
  'GANDHINAGAR': [23.2156, 72.6369],
  'GIR SOMNATH': [20.9086, 70.3623],
  'JAMNAGAR': [22.4707, 70.0577],
  'JUNAGADH': [21.5222, 70.4579],
  'KACHCHH': [23.7337, 69.8597],
  'KHEDA': [22.7505, 72.6838],
  'MAHESANA': [23.5880, 72.3693],
  'MAHISAGAR': [23.1200, 73.6400],
  'MORBI': [22.8173, 70.8370],
  'NARMADA': [21.8787, 73.7712],
  'NAVSARI': [20.9467, 72.9520],
  'PANCHMAHAL': [22.7739, 73.5980],
  'PATAN': [23.8493, 72.1266],
  'PORBANDAR': [21.6417, 69.6293],
  'RAJKOT': [22.3039, 70.8022],
  'SABARKANTHA': [23.6255, 73.0040],
  'SURAT': [21.1702, 72.8311],
  'SURENDRANAGAR': [22.7277, 71.6480],
  'TAPI': [21.2500, 73.4800],
  'VADODARA': [22.3072, 73.1812],
  'VALSAD': [20.5992, 72.9342],
};

// Gujarat center and zoom
const GUJARAT_CENTER = [22.309425, 72.136230];
const GUJARAT_ZOOM = 7;

function MapZoomer({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center && map) {
      map.flyTo(center, zoom, { duration: 1.5 });
    }
  }, [center, zoom, map]);
  return null;
}

function getMarkerRadius(cumulativeActual) {
  const val = parseFloat(cumulativeActual) || 0;
  if (val >= 12) return 18;
  if (val >= 8) return 15;
  if (val >= 5) return 13;
  if (val >= 2) return 11;
  return 9;
}

export default function GujaratMap({ districtData, selectedDistrict }) {
  const districtMap = {};

  const targetCenter = selectedDistrict && DISTRICT_COORDS[selectedDistrict] 
    ? DISTRICT_COORDS[selectedDistrict] 
    : GUJARAT_CENTER;
  const targetZoom = selectedDistrict ? 9 : GUJARAT_ZOOM;
  if (districtData) {
    districtData.forEach(d => {
      districtMap[d.District] = d;
    });
  }

  return (
    <div className="gujarat-map-wrapper glass-card fade-in-up">
      <div className="chart-header">
        <h3 className="chart-title">🗺️ Gujarat District Rainfall Map</h3>
        <span className="chart-subtitle">Interactive map • Markers sized by cumulative rainfall • Colored by monthly category</span>
      </div>

      <div className="leaflet-map-container">
        <MapContainer
          center={GUJARAT_CENTER}
          zoom={GUJARAT_ZOOM}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%', borderRadius: '12px' }}
          zoomControl={true}
        >
          <MapZoomer center={targetCenter} zoom={targetZoom} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {Object.entries(DISTRICT_COORDS).map(([name, coords]) => {
            const data = districtMap[name];
            const cat = data ? (data['Monthly Category'] || 'NR').trim() : 'NR';
            const color = getCategoryColor(cat);
            const cumulative = data ? data['Cumulative Actual'] : '0';
            const radius = getMarkerRadius(cumulative);

            return (
              <CircleMarker
                key={name}
                center={coords}
                radius={radius}
                pathOptions={{
                  color: color,
                  fillColor: color,
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 0.9,
                }}
              >
                <Tooltip
                  direction="top"
                  offset={[0, -10]}
                  className="district-map-tooltip"
                  permanent={false}
                >
                  <div className="leaflet-tooltip-content">
                    <strong>{name}</strong>
                    <span className="tooltip-cat" style={{ color: color }}>{getCategoryLabel(cat)}</span>
                  </div>
                </Tooltip>
                <Popup className="district-popup">
                  <div className="popup-content">
                    <h4 className="popup-title">{name}</h4>
                    <div className="popup-badge-row">
                      <span className={`badge ${getCategoryBadgeClass(cat)}`}>
                        {getCategoryLabel(cat)}
                      </span>
                    </div>
                    {data ? (
                      <div className="popup-grid">
                        <div className="popup-item">
                          <span className="popup-label">Daily</span>
                          <span className="popup-value">{data['Daily Actual']} mm</span>
                        </div>
                        <div className="popup-item">
                          <span className="popup-label">Monthly</span>
                          <span className="popup-value">{data['Monthly Acutual']} mm</span>
                        </div>
                        <div className="popup-item">
                          <span className="popup-label">Cumulative</span>
                          <span className="popup-value highlight">{data['Cumulative Actual']} mm</span>
                        </div>
                        <div className="popup-item">
                          <span className="popup-label">Departure</span>
                          <span className="popup-value">{data['Cumulative Departue Per']}</span>
                        </div>
                      </div>
                    ) : (
                      <p className="popup-no-data">No data available</p>
                    )}
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="map-legend">
        {[
          { cat: 'NR', label: 'No Rain' },
          { cat: 'D', label: 'Deficient' },
          { cat: 'N', label: 'Normal' },
          { cat: 'E', label: 'Excess' },
          { cat: 'LE', label: 'Large Excess' },
        ].map(({ cat, label }) => (
          <div key={cat} className="map-legend-item">
            <span className="map-legend-color" style={{ background: getCategoryColor(cat) }} />
            <span className="map-legend-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
