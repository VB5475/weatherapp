const STATE_API = "https://mausam.imd.gov.in/api/statewise_rainfall_api.php";
const DISTRICT_API = 'https://mausam.imd.gov.in/api/districtwise_rainfall_api.php';

export async function fetchStateRainfall() {
  try {
    const response = await fetch(STATE_API);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log("see response:", data)
    return data.filter(d => d.State && d.State.toUpperCase() === 'GUJARAT');
  } catch (error) {
    console.warn('Failed to fetch state data:', error.message);
    return [];
  }
}

export async function fetchDistrictRainfall() {
  try {
    const response = await fetch(DISTRICT_API);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    // Filter for Gujarat districts only
    return data.filter(d => d.State && d.State.toUpperCase() === 'GUJARAT');
  } catch (error) {
    console.warn('Failed to fetch district data:', error.message);
    return [];
  }
}

export function getCategoryColor(category) {
  if (!category) return '#64748B';
  const cat = category.trim().toUpperCase();
  switch (cat) {
    case 'LE': return '#10B981';
    case 'E': return '#0EA5E9';
    case 'N': return '#F59E0B';
    case 'D': return '#EF4444';
    case 'NR': return '#64748B';
    default: return '#64748B';
  }
}

export function getCategoryLabel(category) {
  if (!category) return 'Unknown';
  const cat = category.trim().toUpperCase();
  switch (cat) {
    case 'LE': return 'Large Excess';
    case 'E': return 'Excess';
    case 'N': return 'Normal';
    case 'D': return 'Deficient';
    case 'NR': return 'No Rain';
    default: return category;
  }
}

export function getCategoryBadgeClass(category) {
  if (!category) return 'badge-nr';
  const cat = category.trim().toUpperCase();
  switch (cat) {
    case 'LE': return 'badge-le';
    case 'E': return 'badge-e';
    case 'N': return 'badge-n';
    case 'D': return 'badge-d';
    case 'NR': return 'badge-nr';
    default: return 'badge-nr';
  }
}
