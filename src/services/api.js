const STATE_API = '/api/statewise_rainfall_api.php?state=%22GUJARAT%22';
const DISTRICT_API = '/api/districtwise_rainfall_api.php';

// Fallback data for when APIs are unreachable
const FALLBACK_STATE_DATA = [
  {
    "State": "GUJARAT",
    "Date": "17-04-2026",
    "Daily Actual": "0.00",
    "Daily Normal": "0.01",
    "Daily Departure Per": "-100%",
    "Daily Category": "NR",
    "Week Date": "09-04-2026 To 15-04-2026",
    "Weekly Actual": "0.00",
    "Weekly Normal": "0.20",
    "Weekly Departure Per": "-100%",
    "Weekly Category": "NR",
    "Cumulative Date": "01-03-2026 To 17-04-2026",
    "Cumulative Actual": "6.70",
    "Cumulative Normal": "0.50",
    "Cumulative Departue Per": "1246%",
    "Cumulative Category": "LE",
    "Monthly Date": "01-04-2026 To 17-04-2026",
    "Monthly Acutual": "2.50",
    "Monthly Normal": "0.30",
    "Monthly Departure Per": "721%",
    "Monthly Category": "LE"
  }
];

const FALLBACK_DISTRICT_DATA = [
  { "District": "AHMADABAD", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "3.00", "Cumulative Normal": "0.90", "Cumulative Departue Per": "235%", "Cumulative Category": "LE", "Monthly Acutual": "0.40", "Monthly Normal": "0.50", "Monthly Departure Per": "-17%", "Monthly Category": "N" },
  { "District": "AMRELI", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.00", "Daily Departure Per": "0%", "Daily Category": "NR", "Cumulative Actual": "5.20", "Cumulative Normal": "0.30", "Cumulative Departue Per": "1633%", "Cumulative Category": "LE", "Monthly Acutual": "1.80", "Monthly Normal": "0.10", "Monthly Departure Per": "1700%", "Monthly Category": "LE" },
  { "District": "ANAND", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "8.40", "Cumulative Normal": "0.70", "Cumulative Departue Per": "1100%", "Cumulative Category": "LE", "Monthly Acutual": "3.20", "Monthly Normal": "0.20", "Monthly Departure Per": "1500%", "Monthly Category": "LE" },
  { "District": "ARVALLI", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "12.60", "Cumulative Normal": "0.50", "Cumulative Departue Per": "2420%", "Cumulative Category": "LE", "Monthly Acutual": "5.10", "Monthly Normal": "0.20", "Monthly Departure Per": "2450%", "Monthly Category": "LE" },
  { "District": "BANASKANTHA", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.02", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "15.30", "Cumulative Normal": "0.80", "Cumulative Departue Per": "1813%", "Cumulative Category": "LE", "Monthly Acutual": "6.40", "Monthly Normal": "0.30", "Monthly Departure Per": "2033%", "Monthly Category": "LE" },
  { "District": "BHARUCH", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "4.10", "Cumulative Normal": "0.40", "Cumulative Departue Per": "925%", "Cumulative Category": "LE", "Monthly Acutual": "1.50", "Monthly Normal": "0.10", "Monthly Departure Per": "1400%", "Monthly Category": "LE" },
  { "District": "BHAVNAGAR", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.00", "Daily Departure Per": "0%", "Daily Category": "NR", "Cumulative Actual": "2.80", "Cumulative Normal": "0.20", "Cumulative Departue Per": "1300%", "Cumulative Category": "LE", "Monthly Acutual": "0.90", "Monthly Normal": "0.10", "Monthly Departure Per": "800%", "Monthly Category": "LE" },
  { "District": "BOTAD", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.00", "Daily Departure Per": "0%", "Daily Category": "NR", "Cumulative Actual": "1.50", "Cumulative Normal": "0.20", "Cumulative Departue Per": "650%", "Cumulative Category": "LE", "Monthly Acutual": "0.20", "Monthly Normal": "0.10", "Monthly Departure Per": "100%", "Monthly Category": "E" },
  { "District": "CHHOTA UDAIPUR", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "9.70", "Cumulative Normal": "0.60", "Cumulative Departue Per": "1517%", "Cumulative Category": "LE", "Monthly Acutual": "4.30", "Monthly Normal": "0.20", "Monthly Departure Per": "2050%", "Monthly Category": "LE" },
  { "District": "DANG", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.02", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "7.50", "Cumulative Normal": "1.20", "Cumulative Departue Per": "525%", "Cumulative Category": "LE", "Monthly Acutual": "2.10", "Monthly Normal": "0.50", "Monthly Departure Per": "320%", "Monthly Category": "LE" },
  { "District": "DEVBHOOMI DWARKA", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.00", "Daily Departure Per": "0%", "Daily Category": "NR", "Cumulative Actual": "0.30", "Cumulative Normal": "0.10", "Cumulative Departue Per": "200%", "Cumulative Category": "LE", "Monthly Acutual": "0.00", "Monthly Normal": "0.00", "Monthly Departure Per": "0%", "Monthly Category": "NR" },
  { "District": "GANDHINAGAR", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "4.50", "Cumulative Normal": "0.50", "Cumulative Departue Per": "800%", "Cumulative Category": "LE", "Monthly Acutual": "1.20", "Monthly Normal": "0.20", "Monthly Departure Per": "500%", "Monthly Category": "LE" },
  { "District": "GIR SOMNATH", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.00", "Daily Departure Per": "0%", "Daily Category": "NR", "Cumulative Actual": "3.60", "Cumulative Normal": "0.20", "Cumulative Departue Per": "1700%", "Cumulative Category": "LE", "Monthly Acutual": "1.10", "Monthly Normal": "0.10", "Monthly Departure Per": "1000%", "Monthly Category": "LE" },
  { "District": "JAMNAGAR", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.00", "Daily Departure Per": "0%", "Daily Category": "NR", "Cumulative Actual": "0.80", "Cumulative Normal": "0.10", "Cumulative Departue Per": "700%", "Cumulative Category": "LE", "Monthly Acutual": "0.10", "Monthly Normal": "0.00", "Monthly Departure Per": "0%", "Monthly Category": "NR" },
  { "District": "JUNAGADH", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "4.90", "Cumulative Normal": "0.30", "Cumulative Departue Per": "1533%", "Cumulative Category": "LE", "Monthly Acutual": "1.60", "Monthly Normal": "0.10", "Monthly Departure Per": "1500%", "Monthly Category": "LE" },
  { "District": "KACHCHH", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "0.50", "Cumulative Normal": "0.30", "Cumulative Departue Per": "67%", "Cumulative Category": "E", "Monthly Acutual": "0.00", "Monthly Normal": "0.10", "Monthly Departure Per": "-100%", "Monthly Category": "NR" },
  { "District": "KHEDA", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "6.80", "Cumulative Normal": "0.50", "Cumulative Departue Per": "1260%", "Cumulative Category": "LE", "Monthly Acutual": "2.70", "Monthly Normal": "0.20", "Monthly Departure Per": "1250%", "Monthly Category": "LE" },
  { "District": "MAHESANA", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "7.20", "Cumulative Normal": "0.40", "Cumulative Departue Per": "1700%", "Cumulative Category": "LE", "Monthly Acutual": "2.90", "Monthly Normal": "0.10", "Monthly Departure Per": "2800%", "Monthly Category": "LE" },
  { "District": "MAHISAGAR", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "10.10", "Cumulative Normal": "0.50", "Cumulative Departue Per": "1920%", "Cumulative Category": "LE", "Monthly Acutual": "4.50", "Monthly Normal": "0.20", "Monthly Departure Per": "2150%", "Monthly Category": "LE" },
  { "District": "MORBI", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.00", "Daily Departure Per": "0%", "Daily Category": "NR", "Cumulative Actual": "1.20", "Cumulative Normal": "0.10", "Cumulative Departue Per": "1100%", "Cumulative Category": "LE", "Monthly Acutual": "0.30", "Monthly Normal": "0.00", "Monthly Departure Per": "0%", "Monthly Category": "NR" },
  { "District": "NARMADA", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.02", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "6.30", "Cumulative Normal": "0.80", "Cumulative Departue Per": "688%", "Cumulative Category": "LE", "Monthly Acutual": "2.40", "Monthly Normal": "0.30", "Monthly Departure Per": "700%", "Monthly Category": "LE" },
  { "District": "NAVSARI", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.02", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "5.80", "Cumulative Normal": "1.00", "Cumulative Departue Per": "480%", "Cumulative Category": "LE", "Monthly Acutual": "1.90", "Monthly Normal": "0.40", "Monthly Departure Per": "375%", "Monthly Category": "LE" },
  { "District": "PANCHMAHAL", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "11.40", "Cumulative Normal": "0.50", "Cumulative Departue Per": "2180%", "Cumulative Category": "LE", "Monthly Acutual": "5.60", "Monthly Normal": "0.20", "Monthly Departure Per": "2700%", "Monthly Category": "LE" },
  { "District": "PATAN", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "5.60", "Cumulative Normal": "0.30", "Cumulative Departue Per": "1767%", "Cumulative Category": "LE", "Monthly Acutual": "2.30", "Monthly Normal": "0.10", "Monthly Departure Per": "2200%", "Monthly Category": "LE" },
  { "District": "PORBANDAR", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.00", "Daily Departure Per": "0%", "Daily Category": "NR", "Cumulative Actual": "1.40", "Cumulative Normal": "0.10", "Cumulative Departue Per": "1300%", "Cumulative Category": "LE", "Monthly Acutual": "0.50", "Monthly Normal": "0.00", "Monthly Departure Per": "0%", "Monthly Category": "NR" },
  { "District": "RAJKOT", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.00", "Daily Departure Per": "0%", "Daily Category": "NR", "Cumulative Actual": "2.10", "Cumulative Normal": "0.20", "Cumulative Departue Per": "950%", "Cumulative Category": "LE", "Monthly Acutual": "0.60", "Monthly Normal": "0.10", "Monthly Departure Per": "500%", "Monthly Category": "LE" },
  { "District": "SABARKANTHA", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.02", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "14.80", "Cumulative Normal": "0.70", "Cumulative Departue Per": "2014%", "Cumulative Category": "LE", "Monthly Acutual": "6.20", "Monthly Normal": "0.30", "Monthly Departure Per": "1967%", "Monthly Category": "LE" },
  { "District": "SURAT", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "4.60", "Cumulative Normal": "0.70", "Cumulative Departue Per": "557%", "Cumulative Category": "LE", "Monthly Acutual": "1.30", "Monthly Normal": "0.30", "Monthly Departure Per": "333%", "Monthly Category": "LE" },
  { "District": "SURENDRANAGAR", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.00", "Daily Departure Per": "0%", "Daily Category": "NR", "Cumulative Actual": "1.90", "Cumulative Normal": "0.10", "Cumulative Departue Per": "1800%", "Cumulative Category": "LE", "Monthly Acutual": "0.50", "Monthly Normal": "0.00", "Monthly Departure Per": "0%", "Monthly Category": "NR" },
  { "District": "TAPI", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.02", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "8.90", "Cumulative Normal": "0.90", "Cumulative Departue Per": "889%", "Cumulative Category": "LE", "Monthly Acutual": "3.80", "Monthly Normal": "0.40", "Monthly Departure Per": "850%", "Monthly Category": "LE" },
  { "District": "VADODARA", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.01", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "7.90", "Cumulative Normal": "0.60", "Cumulative Departue Per": "1217%", "Cumulative Category": "LE", "Monthly Acutual": "3.50", "Monthly Normal": "0.20", "Monthly Departure Per": "1650%", "Monthly Category": "LE" },
  { "District": "VALSAD", "State": "GUJARAT", "Date": "2026-04-17", "Daily Actual": "0.00", "Daily Normal": "0.02", "Daily Departure Per": "-100%", "Daily Category": "NR", "Cumulative Actual": "4.20", "Cumulative Normal": "0.90", "Cumulative Departue Per": "367%", "Cumulative Category": "LE", "Monthly Acutual": "1.00", "Monthly Normal": "0.30", "Monthly Departure Per": "233%", "Monthly Category": "LE" }
];

export async function fetchStateRainfall() {
  try {
    const response = await fetch(STATE_API);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('Using fallback state data:', error.message);
    return FALLBACK_STATE_DATA;
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
    console.warn('Using fallback district data:', error.message);
    return FALLBACK_DISTRICT_DATA;
  }
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
