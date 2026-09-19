const STATE_API = '/api/statewise_rainfall_api.php?state=%22GUJARAT%22';
const DISTRICT_API = '/api/districtwise_rainfall_api.php';

export async function fetchStateRainfall() {
  const response = await fetch(STATE_API);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('No state rainfall data');
  }
  return data;
}

export async function fetchDistrictRainfall() {
  const response = await fetch(DISTRICT_API);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('Invalid district rainfall data');
  }
  const gujarat = data.filter(d => d.State && d.State.toUpperCase() === 'GUJARAT');
  if (gujarat.length === 0) {
    throw new Error('No district rainfall data');
  }
  return gujarat;
}

export function getCategoryColor(category) {
  if (!category) return '#64748B';
  const cat = category.trim().toUpperCase();
  switch (cat) {
    case 'LE': return '#10B981';
    case 'E':  return '#0EA5E9';
    case 'N':  return '#F59E0B';
    case 'D':  return '#EF4444';
    case 'NR': return '#64748B';
    default:   return '#64748B';
  }
}

export function getCategoryLabel(category) {
  if (!category) return 'Unknown';
  const cat = category.trim().toUpperCase();
  switch (cat) {
    case 'LE': return 'Large Excess';
    case 'E':  return 'Excess';
    case 'N':  return 'Normal';
    case 'D':  return 'Deficient';
    case 'NR': return 'No Rain';
    default:   return category;
  }
}

export function getCategoryBadgeClass(category) {
  if (!category) return 'badge-nr';
  const cat = category.trim().toUpperCase();
  switch (cat) {
    case 'LE': return 'badge-le';
    case 'E':  return 'badge-e';
    case 'N':  return 'badge-n';
    case 'D':  return 'badge-d';
    case 'NR': return 'badge-nr';
    default:   return 'badge-nr';
  }
}
