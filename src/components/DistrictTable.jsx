import { useState } from 'react';
import { getCategoryBadgeClass, getCategoryLabel } from '../services/api';
import './DistrictTable.css';

export default function DistrictTable({ districtData, onRowClick }) {
  const [sortField, setSortField] = useState('District');
  const [sortDir, setSortDir] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  if (!districtData || districtData.length === 0) {
    return <div className="district-table-empty">No district data available</div>;
  }

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const filtered = districtData.filter(d =>
    d.District.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];

    // Try numeric sort for numeric fields
    if (['Daily Actual', 'Monthly Acutual', 'Cumulative Actual'].includes(sortField)) {
      aVal = parseFloat(aVal) || 0;
      bVal = parseFloat(bVal) || 0;
    }

    if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const SortIcon = ({ field }) => (
    <span className="sort-icon">
      {sortField === field ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
    </span>
  );

  return (
    <div className="district-table-wrapper glass-card fade-in-up" style={{ animationDelay: '200ms' }}>
      <div className="district-table-header">
        <div>
          <h3 className="chart-title">📋 District Rainfall Data</h3>
          <span className="chart-subtitle">{districtData.length} districts • Click headers to sort</span>
        </div>
        <div className="district-search">
          <input
            type="text"
            placeholder="Search district..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="district-search-input"
          />
        </div>
      </div>

      <div className="district-table-scroll">
        <table className="district-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('District')}>
                District <SortIcon field="District" />
              </th>
              <th onClick={() => handleSort('Daily Actual')}>
                Daily <SortIcon field="Daily Actual" />
              </th>
              <th onClick={() => handleSort('Monthly Acutual')}>
                Monthly <SortIcon field="Monthly Acutual" />
              </th>
              <th onClick={() => handleSort('Cumulative Actual')}>
                Cumulative <SortIcon field="Cumulative Actual" />
              </th>
              <th>Departure</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((d, i) => (
              <tr 
                key={d.District || i} 
                onClick={() => onRowClick && onRowClick(d.District)}
                style={{ cursor: onRowClick ? 'pointer' : 'default' }}
              >
                <td className="district-name">{d.District}</td>
                <td>{d['Daily Actual']} mm</td>
                <td>{d['Monthly Acutual']} mm</td>
                <td className="cumulative-value">{d['Cumulative Actual']} mm</td>
                <td>
                  <span className={
                    parseFloat(d['Cumulative Departue Per']) > 0 ? 'positive' :
                    parseFloat(d['Cumulative Departue Per']) < 0 ? 'negative' : ''
                  }>
                    {d['Cumulative Departue Per']}
                  </span>
                </td>
                <td>
                  <span className={`badge ${getCategoryBadgeClass(d['Monthly Category'])}`}>
                    {(d['Monthly Category'] || 'NR').trim()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
