// ──────────────────────────────────────────
// Dummy Data for RNB New Design Wireframe
// Gujarat Roads & Buildings Department
// ──────────────────────────────────────────

// KPI Summary Cards
export const kpiData = [
  { title: 'Total Road Length', value: '12,480', unit: 'km', change: '+3.2%', icon: '🛣️', trend: 'up' },
  { title: 'Bridges Constructed', value: '347', unit: 'nos', change: '+12', icon: '🌉', trend: 'up' },
  { title: 'Budget Utilised', value: '₹2,840', unit: 'Cr', change: '78%', icon: '💰', trend: 'up' },
  { title: 'Active Projects', value: '1,024', unit: '', change: '-18', icon: '🏗️', trend: 'down' },
];

// ── Bar Chart: District-wise Project Completion ──
export const districtProjectData = {
  quarterly: [
    { district: 'Ahmedabad', completed: 48, pending: 12 },
    { district: 'Surat', completed: 42, pending: 18 },
    { district: 'Vadodara', completed: 35, pending: 15 },
    { district: 'Rajkot', completed: 30, pending: 20 },
    { district: 'Bhavnagar', completed: 28, pending: 8 },
    { district: 'Jamnagar', completed: 25, pending: 10 },
    { district: 'Junagadh', completed: 22, pending: 14 },
    { district: 'Gandhinagar', completed: 20, pending: 6 },
  ],
  monthly: [
    { district: 'Ahmedabad', completed: 16, pending: 4 },
    { district: 'Surat', completed: 14, pending: 6 },
    { district: 'Vadodara', completed: 12, pending: 5 },
    { district: 'Rajkot', completed: 10, pending: 7 },
    { district: 'Bhavnagar', completed: 9, pending: 3 },
    { district: 'Jamnagar', completed: 8, pending: 4 },
    { district: 'Junagadh', completed: 7, pending: 5 },
    { district: 'Gandhinagar', completed: 7, pending: 2 },
  ],
  weekly: [
    { district: 'Ahmedabad', completed: 4, pending: 1 },
    { district: 'Surat', completed: 3, pending: 2 },
    { district: 'Vadodara', completed: 3, pending: 1 },
    { district: 'Rajkot', completed: 2, pending: 2 },
    { district: 'Bhavnagar', completed: 2, pending: 1 },
    { district: 'Jamnagar', completed: 2, pending: 1 },
    { district: 'Junagadh', completed: 2, pending: 1 },
    { district: 'Gandhinagar', completed: 1, pending: 1 },
  ],
};

// ── Pie Chart: Budget Allocation by Category ──
export const budgetAllocationData = {
  quarterly: [
    { name: 'Roads & Highways', value: 1250, color: '#0F766E' },
    { name: 'Bridges & Flyovers', value: 680, color: '#F59E0B' },
    { name: 'Government Buildings', value: 420, color: '#3B82F6' },
    { name: 'Maintenance', value: 310, color: '#EF4444' },
    { name: 'Smart Infrastructure', value: 180, color: '#8B5CF6' },
  ],
  monthly: [
    { name: 'Roads & Highways', value: 415, color: '#0F766E' },
    { name: 'Bridges & Flyovers', value: 228, color: '#F59E0B' },
    { name: 'Government Buildings', value: 140, color: '#3B82F6' },
    { name: 'Maintenance', value: 105, color: '#EF4444' },
    { name: 'Smart Infrastructure', value: 60, color: '#8B5CF6' },
  ],
  weekly: [
    { name: 'Roads & Highways', value: 105, color: '#0F766E' },
    { name: 'Bridges & Flyovers', value: 56, color: '#F59E0B' },
    { name: 'Government Buildings', value: 35, color: '#3B82F6' },
    { name: 'Maintenance', value: 26, color: '#EF4444' },
    { name: 'Smart Infrastructure', value: 15, color: '#8B5CF6' },
  ],
};

// ── Bar-Line Combo: Expenditure vs Target ──
export const expenditureVsTargetData = {
  quarterly: [
    { month: 'Jan', actual: 320, target: 350 },
    { month: 'Feb', actual: 280, target: 310 },
    { month: 'Mar', actual: 410, target: 380 },
    { month: 'Apr', actual: 360, target: 400 },
    { month: 'May', actual: 450, target: 420 },
    { month: 'Jun', actual: 390, target: 430 },
    { month: 'Jul', actual: 480, target: 460 },
    { month: 'Aug', actual: 520, target: 500 },
    { month: 'Sep', actual: 470, target: 480 },
    { month: 'Oct', actual: 510, target: 520 },
    { month: 'Nov', actual: 440, target: 450 },
    { month: 'Dec', actual: 530, target: 540 },
  ],
  monthly: [
    { month: 'Week 1', actual: 120, target: 130 },
    { month: 'Week 2', actual: 135, target: 125 },
    { month: 'Week 3', actual: 110, target: 140 },
    { month: 'Week 4', actual: 155, target: 145 },
  ],
  weekly: [
    { month: 'Mon', actual: 22, target: 25 },
    { month: 'Tue', actual: 28, target: 26 },
    { month: 'Wed', actual: 30, target: 28 },
    { month: 'Thu', actual: 25, target: 30 },
    { month: 'Fri', actual: 35, target: 32 },
  ],
};

// ── Line Chart: Monthly Progress Trend ──
export const progressTrendData = {
  quarterly: [
    { month: 'Jan', roads: 65, bridges: 40, buildings: 55 },
    { month: 'Feb', roads: 68, bridges: 42, buildings: 58 },
    { month: 'Mar', roads: 72, bridges: 48, buildings: 60 },
    { month: 'Apr', roads: 70, bridges: 52, buildings: 62 },
    { month: 'May', roads: 75, bridges: 55, buildings: 65 },
    { month: 'Jun', roads: 78, bridges: 58, buildings: 68 },
    { month: 'Jul', roads: 82, bridges: 62, buildings: 72 },
    { month: 'Aug', roads: 85, bridges: 65, buildings: 75 },
    { month: 'Sep', roads: 83, bridges: 68, buildings: 78 },
    { month: 'Oct', roads: 88, bridges: 72, buildings: 80 },
    { month: 'Nov', roads: 90, bridges: 75, buildings: 82 },
    { month: 'Dec', roads: 92, bridges: 78, buildings: 85 },
  ],
  monthly: [
    { month: 'Week 1', roads: 82, bridges: 60, buildings: 70 },
    { month: 'Week 2', roads: 85, bridges: 63, buildings: 73 },
    { month: 'Week 3', roads: 87, bridges: 66, buildings: 76 },
    { month: 'Week 4', roads: 90, bridges: 70, buildings: 80 },
  ],
  weekly: [
    { month: 'Mon', roads: 88, bridges: 68, buildings: 78 },
    { month: 'Tue', roads: 89, bridges: 69, buildings: 79 },
    { month: 'Wed', roads: 90, bridges: 70, buildings: 80 },
    { month: 'Thu', roads: 91, bridges: 71, buildings: 81 },
    { month: 'Fri', roads: 92, bridges: 72, buildings: 82 },
  ],
};

// ── Multi-Bar: Resource Allocation by Department ──
export const resourceAllocationData = {
  quarterly: [
    { dept: 'Planning', manpower: 120, machinery: 85, materials: 200 },
    { dept: 'Construction', manpower: 280, machinery: 190, materials: 350 },
    { dept: 'Maintenance', manpower: 95, machinery: 60, materials: 110 },
    { dept: 'Quality', manpower: 65, machinery: 30, materials: 45 },
    { dept: 'Survey', manpower: 80, machinery: 110, materials: 60 },
    { dept: 'Design', manpower: 55, machinery: 25, materials: 35 },
  ],
  monthly: [
    { dept: 'Planning', manpower: 40, machinery: 28, materials: 65 },
    { dept: 'Construction', manpower: 93, machinery: 63, materials: 115 },
    { dept: 'Maintenance', manpower: 32, machinery: 20, materials: 38 },
    { dept: 'Quality', manpower: 22, machinery: 10, materials: 15 },
    { dept: 'Survey', manpower: 27, machinery: 37, materials: 20 },
    { dept: 'Design', manpower: 18, machinery: 8, materials: 12 },
  ],
  weekly: [
    { dept: 'Planning', manpower: 10, machinery: 7, materials: 16 },
    { dept: 'Construction', manpower: 23, machinery: 16, materials: 29 },
    { dept: 'Maintenance', manpower: 8, machinery: 5, materials: 9 },
    { dept: 'Quality', manpower: 5, machinery: 3, materials: 4 },
    { dept: 'Survey', manpower: 7, machinery: 9, materials: 5 },
    { dept: 'Design', manpower: 5, machinery: 2, materials: 3 },
  ],
};

// ── Data Grid: Active Projects Overview ──
export const activeProjectsData = [
  { id: 'PRJ-001', name: 'Ahmedabad Ring Road Phase-III', district: 'Ahmedabad', type: 'Road', budget: 245.8, spent: 189.2, progress: 82, status: 'On Track', contractor: 'L&T Infrastructure', startDate: '2024-03-15', endDate: '2026-09-30' },
  { id: 'PRJ-002', name: 'Sabarmati Riverfront Bridge', district: 'Ahmedabad', type: 'Bridge', budget: 128.5, spent: 98.4, progress: 68, status: 'On Track', contractor: 'Afcons Infrastructure', startDate: '2024-06-01', endDate: '2026-12-31' },
  { id: 'PRJ-003', name: 'Surat-Daman Expressway', district: 'Surat', type: 'Road', budget: 580.0, spent: 312.5, progress: 54, status: 'Delayed', contractor: 'IRB Infrastructure', startDate: '2023-11-01', endDate: '2027-03-31' },
  { id: 'PRJ-004', name: 'Vadodara Flyover Extension', district: 'Vadodara', type: 'Bridge', budget: 95.2, spent: 88.1, progress: 95, status: 'On Track', contractor: 'Gammon India', startDate: '2024-01-10', endDate: '2026-06-30' },
  { id: 'PRJ-005', name: 'Rajkot District Court Complex', district: 'Rajkot', type: 'Building', budget: 68.3, spent: 42.1, progress: 61, status: 'On Track', contractor: 'Shapoorji Pallonji', startDate: '2024-08-20', endDate: '2026-11-30' },
  { id: 'PRJ-006', name: 'Bhavnagar Port Access Road', district: 'Bhavnagar', type: 'Road', budget: 156.7, spent: 78.4, progress: 45, status: 'Delayed', contractor: 'Dilip Buildcon', startDate: '2024-04-01', endDate: '2027-01-31' },
  { id: 'PRJ-007', name: 'Gandhinagar Secretariat Renovation', district: 'Gandhinagar', type: 'Building', budget: 210.0, spent: 165.3, progress: 78, status: 'On Track', contractor: 'NCC Ltd', startDate: '2024-02-15', endDate: '2026-08-31' },
  { id: 'PRJ-008', name: 'Junagadh Heritage Bridge Restoration', district: 'Junagadh', type: 'Bridge', budget: 42.8, spent: 38.5, progress: 90, status: 'On Track', contractor: 'HCC Ltd', startDate: '2024-05-01', endDate: '2026-05-31' },
  { id: 'PRJ-009', name: 'Kutch Border Highway', district: 'Kachchh', type: 'Road', budget: 890.0, spent: 356.0, progress: 40, status: 'Critical', contractor: 'Adani Road Transport', startDate: '2023-09-01', endDate: '2028-03-31' },
  { id: 'PRJ-010', name: 'Jamnagar Medical College Building', district: 'Jamnagar', type: 'Building', budget: 125.6, spent: 82.3, progress: 65, status: 'On Track', contractor: 'PSP Projects', startDate: '2024-07-01', endDate: '2026-12-31' },
  { id: 'PRJ-011', name: 'Patan Highway Widening', district: 'Patan', type: 'Road', budget: 178.4, spent: 134.2, progress: 75, status: 'On Track', contractor: 'Sadbhav Engineering', startDate: '2024-01-20', endDate: '2026-07-31' },
  { id: 'PRJ-012', name: 'Navsari Riverfront Development', district: 'Navsari', type: 'Road', budget: 95.0, spent: 28.5, progress: 30, status: 'Delayed', contractor: 'KNR Construction', startDate: '2025-01-15', endDate: '2027-06-30' },
];
