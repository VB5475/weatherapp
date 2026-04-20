// ─────────────────────────────────────────
// DATASET 1 — Roads & Bridges (State-STROBES)
// Budget scale: ₹50–500 Cr per project
// ─────────────────────────────────────────
export const roadsStateData = {
  kpiData: [
    { icon: '🛣️', title: 'Total Road Length', value: '18,420', unit: ' km', change: '+312 km', trend: 'up' },
    { icon: '🏗️', title: 'Active Projects',   value: '1,412',  unit: '',     change: '+48 this qtr', trend: 'up' },
    { icon: '💰', title: 'Total Budget',       value: '₹9,240', unit: ' Cr', change: 'FY 2024-25', trend: 'neutral' },
    { icon: '📊', title: 'Avg Completion',     value: '67',     unit: '%',   change: '+4.2% MoM',  trend: 'up' },
  ],

  districtProjectData: {
    quarterly: [
      { district: 'Ahmedabad', completed: 82, pending: 34 },
      { district: 'Surat',     completed: 71, pending: 28 },
      { district: 'Vadodara',  completed: 65, pending: 40 },
      { district: 'Rajkot',    completed: 58, pending: 37 },
      { district: 'Bhavnagar', completed: 44, pending: 29 },
      { district: 'Jamnagar',  completed: 39, pending: 22 },
    ],
    monthly: [
      { district: 'Ahmedabad', completed: 28, pending: 11 },
      { district: 'Surat',     completed: 24, pending: 9  },
      { district: 'Vadodara',  completed: 22, pending: 14 },
      { district: 'Rajkot',    completed: 18, pending: 12 },
      { district: 'Bhavnagar', completed: 15, pending: 10 },
      { district: 'Jamnagar',  completed: 12, pending:  7 },
    ],
    weekly: [
      { district: 'Ahmedabad', completed: 7, pending: 3 },
      { district: 'Surat',     completed: 6, pending: 2 },
      { district: 'Vadodara',  completed: 5, pending: 3 },
      { district: 'Rajkot',    completed: 4, pending: 3 },
      { district: 'Bhavnagar', completed: 3, pending: 2 },
      { district: 'Jamnagar',  completed: 3, pending: 2 },
    ],
  },

  budgetAllocationData: {
    quarterly: [
      { name: 'State Highways',   value: 3850, color: '#0891B2' },
      { name: 'National Highways',value: 2640, color: '#059669' },
      { name: 'Rural Roads',      value: 1480, color: '#D97706' },
      { name: 'Bridges',          value: 980,  color: '#7C3AED' },
      { name: 'Maintenance',      value: 290,  color: '#DC2626' },
    ],
    monthly: [
      { name: 'State Highways',   value: 1283, color: '#0891B2' },
      { name: 'National Highways',value: 880,  color: '#059669' },
      { name: 'Rural Roads',      value: 493,  color: '#D97706' },
      { name: 'Bridges',          value: 327,  color: '#7C3AED' },
      { name: 'Maintenance',      value:  97,  color: '#DC2626' },
    ],
    weekly: [
      { name: 'State Highways',   value: 321, color: '#0891B2' },
      { name: 'National Highways',value: 220, color: '#059669' },
      { name: 'Rural Roads',      value: 123, color: '#D97706' },
      { name: 'Bridges',          value:  82, color: '#7C3AED' },
      { name: 'Maintenance',      value:  24, color: '#DC2626' },
    ],
  },

  expenditureVsTargetData: {
    quarterly: [
      { month: 'Q1 FY24', actual: 1840, target: 2000 },
      { month: 'Q2 FY24', actual: 2210, target: 2300 },
      { month: 'Q3 FY24', actual: 2080, target: 2400 },
      { month: 'Q4 FY24', actual: 2560, target: 2600 },
      { month: 'Q1 FY25', actual: 1920, target: 2100 },
    ],
    monthly: [
      { month: 'Oct', actual: 680,  target: 720  },
      { month: 'Nov', actual: 710,  target: 750  },
      { month: 'Dec', actual: 640,  target: 700  },
      { month: 'Jan', actual: 780,  target: 800  },
      { month: 'Feb', actual: 820,  target: 850  },
      { month: 'Mar', actual: 890,  target: 900  },
    ],
    weekly: [
      { month: 'Wk 1', actual: 162, target: 175 },
      { month: 'Wk 2', actual: 178, target: 190 },
      { month: 'Wk 3', actual: 155, target: 180 },
      { month: 'Wk 4', actual: 195, target: 200 },
    ],
  },

  progressTrendData: {
    quarterly: [
      { month: 'Q1', roads: 52, bridges: 44, buildings: 38 },
      { month: 'Q2', roads: 61, bridges: 53, buildings: 47 },
      { month: 'Q3', roads: 68, bridges: 60, buildings: 55 },
      { month: 'Q4', roads: 74, bridges: 67, buildings: 63 },
    ],
    monthly: [
      { month: 'Oct', roads: 62, bridges: 54, buildings: 48 },
      { month: 'Nov', roads: 65, bridges: 57, buildings: 51 },
      { month: 'Dec', roads: 63, bridges: 56, buildings: 50 },
      { month: 'Jan', roads: 68, bridges: 60, buildings: 55 },
      { month: 'Feb', roads: 71, bridges: 64, buildings: 59 },
      { month: 'Mar', roads: 74, bridges: 67, buildings: 63 },
    ],
    weekly: [
      { month: 'Wk 1', roads: 70, bridges: 63, buildings: 58 },
      { month: 'Wk 2', roads: 72, bridges: 65, buildings: 60 },
      { month: 'Wk 3', roads: 71, bridges: 64, buildings: 59 },
      { month: 'Wk 4', roads: 74, bridges: 67, buildings: 63 },
    ],
  },

  resourceAllocationData: {
    quarterly: [
      { dept: 'NH Division',     manpower: 1840, machinery: 620, materials: 980 },
      { dept: 'SH Division',     manpower: 2210, machinery: 740, materials: 1120 },
      { dept: 'Rural Roads',     manpower: 1480, machinery: 410, materials: 760 },
      { dept: 'Bridge Cell',     manpower:  890, machinery: 530, materials: 640 },
      { dept: 'Maintenance',     manpower:  620, machinery: 280, materials: 310 },
    ],
    monthly: [
      { dept: 'NH Division',     manpower: 613, machinery: 207, materials: 327 },
      { dept: 'SH Division',     manpower: 737, machinery: 247, materials: 373 },
      { dept: 'Rural Roads',     manpower: 493, machinery: 137, materials: 253 },
      { dept: 'Bridge Cell',     manpower: 297, machinery: 177, materials: 213 },
      { dept: 'Maintenance',     manpower: 207, machinery:  93, materials: 103 },
    ],
    weekly: [
      { dept: 'NH Division',     manpower: 153, machinery: 52, materials: 82 },
      { dept: 'SH Division',     manpower: 184, machinery: 62, materials: 93 },
      { dept: 'Rural Roads',     manpower: 123, machinery: 34, materials: 63 },
      { dept: 'Bridge Cell',     manpower:  74, machinery: 44, materials: 53 },
      { dept: 'Maintenance',     manpower:  52, machinery: 23, materials: 26 },
    ],
  },

  activeProjectsData: [
    { id: 'RS-001', name: 'NH-48 Four-Laning (Ahmedabad-Vadodara)',    district: 'Ahmedabad', type: 'Highway',      budget: 485.2, spent: 362.4, progress: 74, status: 'On Track' },
    { id: 'RS-002', name: 'SH-17 Widening & Strengthening',            district: 'Surat',     type: 'State Hwy',   budget: 128.6, spent:  64.3, progress: 50, status: 'Delayed'  },
    { id: 'RS-003', name: 'Mahi River Bridge Reconstruction',           district: 'Vadodara',  type: 'Bridge',      budget: 220.0, spent: 198.0, progress: 90, status: 'On Track' },
    { id: 'RS-004', name: 'Rural Connectivity Package — Kutch Cluster', district: 'Kutch',     type: 'Rural Road',  budget:  84.3, spent:  21.1, progress: 25, status: 'Critical'  },
    { id: 'RS-005', name: 'Rajkot Ring Road Phase II',                  district: 'Rajkot',    type: 'Ring Road',   budget: 310.5, spent: 217.4, progress: 70, status: 'On Track' },
    { id: 'RS-006', name: 'Bhavnagar Port Access Road',                 district: 'Bhavnagar', type: 'Access Road', budget: 143.7, spent:  86.2, progress: 60, status: 'On Track' },
    { id: 'RS-007', name: 'Morbi-Wankaner State Highway Repair',        district: 'Morbi',     type: 'State Hwy',   budget:  62.4, spent:  12.5, progress: 20, status: 'Critical'  },
    { id: 'RS-008', name: 'Anand Bypass Construction',                  district: 'Anand',     type: 'Bypass',      budget: 175.0, spent: 140.0, progress: 80, status: 'On Track' },
    { id: 'RS-009', name: 'Mehsana Urban Road Package',                 district: 'Mehsana',   type: 'Urban Road',  budget:  95.8, spent:  57.5, progress: 60, status: 'Delayed'  },
    { id: 'RS-010', name: 'Narmada Bridge Widening',                    district: 'Bharuch',   type: 'Bridge',      budget: 267.3, spent: 133.7, progress: 50, status: 'On Track' },
    { id: 'RS-011', name: 'Patan-Unjha Rural Roads Package',            district: 'Patan',     type: 'Rural Road',  budget:  48.9, spent:  39.1, progress: 80, status: 'On Track' },
    { id: 'RS-012', name: 'Gandhinagar Capital Road Beautification',    district: 'Gandhinagar',type:'Urban Road',  budget: 112.0, spent:  50.4, progress: 45, status: 'Delayed'  },
  ],
};

// ─────────────────────────────────────────
// DATASET 2 — Roads & Bridges (Panchayat-RPMS)
// ─────────────────────────────────────────
export const roadsPanchayatData = {
  kpiData: [
    { icon: '🏘️', title: 'Village Roads',     value: '42,180', unit: ' km',  change: '+890 km', trend: 'up' },
    { icon: '🔧', title: 'Works Sanctioned',  value: '8,640',  unit: '',     change: 'FY 2024-25', trend: 'neutral' },
    { icon: '💰', title: 'RPMS Budget',       value: '₹3,420', unit: ' Cr', change: '+12% YoY', trend: 'up' },
    { icon: '✅', title: 'Completion Rate',   value: '58',      unit: '%',   change: '+3.1% QoQ', trend: 'up' },
  ],

  districtProjectData: {
    quarterly: [
      { district: 'Sabarkantha', completed: 142, pending: 88 },
      { district: 'Banaskantha', completed: 118, pending: 94 },
      { district: 'Panchmahal',  completed: 103, pending: 72 },
      { district: 'Dahod',       completed:  88, pending: 67 },
      { district: 'Narmada',     completed:  74, pending: 48 },
      { district: 'Tapi',        completed:  62, pending: 41 },
    ],
    monthly: [
      { district: 'Sabarkantha', completed: 47, pending: 29 },
      { district: 'Banaskantha', completed: 39, pending: 31 },
      { district: 'Panchmahal',  completed: 34, pending: 24 },
      { district: 'Dahod',       completed: 29, pending: 22 },
      { district: 'Narmada',     completed: 25, pending: 16 },
      { district: 'Tapi',        completed: 21, pending: 14 },
    ],
    weekly: [
      { district: 'Sabarkantha', completed: 12, pending: 7 },
      { district: 'Banaskantha', completed: 10, pending: 8 },
      { district: 'Panchmahal',  completed:  9, pending: 6 },
      { district: 'Dahod',       completed:  7, pending: 6 },
      { district: 'Narmada',     completed:  6, pending: 4 },
      { district: 'Tapi',        completed:  5, pending: 3 },
    ],
  },

  budgetAllocationData: {
    quarterly: [
      { name: 'PMGSY Roads',      value: 1240, color: '#0891B2' },
      { name: 'Taluka Roads',     value:  820, color: '#059669' },
      { name: 'Gram Panchayat',   value:  640, color: '#D97706' },
      { name: 'Culverts',         value:  480, color: '#7C3AED' },
      { name: 'Maintenance',      value:  240, color: '#DC2626' },
    ],
    monthly: [
      { name: 'PMGSY Roads',      value: 413, color: '#0891B2' },
      { name: 'Taluka Roads',     value: 273, color: '#059669' },
      { name: 'Gram Panchayat',   value: 213, color: '#D97706' },
      { name: 'Culverts',         value: 160, color: '#7C3AED' },
      { name: 'Maintenance',      value:  80, color: '#DC2626' },
    ],
    weekly: [
      { name: 'PMGSY Roads',      value: 103, color: '#0891B2' },
      { name: 'Taluka Roads',     value:  68, color: '#059669' },
      { name: 'Gram Panchayat',   value:  53, color: '#D97706' },
      { name: 'Culverts',         value:  40, color: '#7C3AED' },
      { name: 'Maintenance',      value:  20, color: '#DC2626' },
    ],
  },

  expenditureVsTargetData: {
    quarterly: [
      { month: 'Q1 FY24', actual: 620, target: 700  },
      { month: 'Q2 FY24', actual: 780, target: 820  },
      { month: 'Q3 FY24', actual: 740, target: 850  },
      { month: 'Q4 FY24', actual: 910, target: 950  },
      { month: 'Q1 FY25', actual: 680, target: 760  },
    ],
    monthly: [
      { month: 'Oct', actual: 228, target: 255 },
      { month: 'Nov', actual: 245, target: 265 },
      { month: 'Dec', actual: 218, target: 248 },
      { month: 'Jan', actual: 262, target: 278 },
      { month: 'Feb', actual: 275, target: 290 },
      { month: 'Mar', actual: 298, target: 310 },
    ],
    weekly: [
      { month: 'Wk 1', actual: 57, target: 64 },
      { month: 'Wk 2', actual: 63, target: 68 },
      { month: 'Wk 3', actual: 54, target: 62 },
      { month: 'Wk 4', actual: 70, target: 74 },
    ],
  },

  progressTrendData: {
    quarterly: [
      { month: 'Q1', roads: 44, bridges: 38, buildings: 30 },
      { month: 'Q2', roads: 51, bridges: 45, buildings: 37 },
      { month: 'Q3', roads: 57, bridges: 50, buildings: 43 },
      { month: 'Q4', roads: 63, bridges: 56, buildings: 50 },
    ],
    monthly: [
      { month: 'Oct', roads: 52, bridges: 45, buildings: 39 },
      { month: 'Nov', roads: 55, bridges: 48, buildings: 42 },
      { month: 'Dec', roads: 53, bridges: 47, buildings: 41 },
      { month: 'Jan', roads: 57, bridges: 51, buildings: 45 },
      { month: 'Feb', roads: 60, bridges: 54, buildings: 48 },
      { month: 'Mar', roads: 63, bridges: 56, buildings: 50 },
    ],
    weekly: [
      { month: 'Wk 1', roads: 59, bridges: 52, buildings: 47 },
      { month: 'Wk 2', roads: 61, bridges: 54, buildings: 49 },
      { month: 'Wk 3', roads: 60, bridges: 53, buildings: 48 },
      { month: 'Wk 4', roads: 63, bridges: 56, buildings: 50 },
    ],
  },

  resourceAllocationData: {
    quarterly: [
      { dept: 'PMGSY Cell',     manpower: 1240, machinery: 380, materials: 610 },
      { dept: 'Taluka Works',   manpower: 1820, machinery: 460, materials: 780 },
      { dept: 'Gram Sewa',      manpower: 2640, machinery: 210, materials: 420 },
      { dept: 'Culvert Wing',   manpower:  480, machinery: 190, materials: 280 },
      { dept: 'Maintenance',    manpower:  720, machinery: 140, materials: 210 },
    ],
    monthly: [
      { dept: 'PMGSY Cell',     manpower: 413, machinery: 127, materials: 203 },
      { dept: 'Taluka Works',   manpower: 607, machinery: 153, materials: 260 },
      { dept: 'Gram Sewa',      manpower: 880, machinery:  70, materials: 140 },
      { dept: 'Culvert Wing',   manpower: 160, machinery:  63, materials:  93 },
      { dept: 'Maintenance',    manpower: 240, machinery:  47, materials:  70 },
    ],
    weekly: [
      { dept: 'PMGSY Cell',     manpower: 103, machinery: 32, materials: 51 },
      { dept: 'Taluka Works',   manpower: 152, machinery: 38, materials: 65 },
      { dept: 'Gram Sewa',      manpower: 220, machinery: 18, materials: 35 },
      { dept: 'Culvert Wing',   manpower:  40, machinery: 16, materials: 23 },
      { dept: 'Maintenance',    manpower:  60, machinery: 12, materials: 18 },
    ],
  },

  activeProjectsData: [
    { id: 'RP-001', name: 'PMGSY Phase IV — Tapi Cluster',           district: 'Tapi',       type: 'Rural Road', budget: 38.4, spent: 22.3, progress: 58, status: 'On Track'  },
    { id: 'RP-002', name: 'Gram Panchayat Roads — Dahod Package',    district: 'Dahod',      type: 'GP Road',    budget: 12.6, spent:  3.8, progress: 30, status: 'Delayed'   },
    { id: 'RP-003', name: 'Banaskantha Taluka Road Upgradation',     district: 'Banaskantha',type: 'Taluka Rd',  budget: 27.8, spent: 21.7, progress: 78, status: 'On Track'  },
    { id: 'RP-012', name: 'Botad PMGSY Phase III Completion',        district: 'Botad',      type: 'Rural Road', budget: 19.8, spent: 19.4, progress: 98, status: 'On Track'  },
  ],
};

// ─────────────────────────────────────────
// DATASET 3 — Buildings (State-STROBES)
// ─────────────────────────────────────────
export const buildingsStateData = {
  kpiData: [
    { icon: '🏛️', title: 'Total Projects',    value: '1,800', unit: '',     change: '+62 new', trend: 'up' },
    { icon: '🏗️', title: 'Under Construction',value: '471',   unit: '',     change: 'Active',  trend: 'neutral' },
    { icon: '💰', title: 'Total Budget',       value: '₹6,840',unit: ' Cr', change: 'FY 2024-25', trend: 'neutral' },
    { icon: '📐', title: 'Floor Area Target',  value: '84.2',  unit: ' lakh sqft', change: '+9.4% YoY', trend: 'up' },
  ],

  districtProjectData: {
    quarterly: [
      { district: 'Gandhinagar', completed: 48, pending: 22 },
      { district: 'Ahmedabad',   completed: 62, pending: 38 },
      { district: 'Surat',       completed: 44, pending: 31 },
      { district: 'Vadodara',    completed: 38, pending: 28 },
      { district: 'Rajkot',      completed: 34, pending: 24 },
      { district: 'Junagadh',    completed: 28, pending: 18 },
    ],
    monthly: [
      { district: 'Gandhinagar', completed: 16, pending:  7 },
      { district: 'Ahmedabad',   completed: 21, pending: 13 },
      { district: 'Surat',       completed: 15, pending: 10 },
      { district: 'Vadodara',    completed: 13, pending:  9 },
      { district: 'Rajkot',      completed: 11, pending:  8 },
      { district: 'Junagadh',    completed:  9, pending:  6 },
    ],
    weekly: [
      { district: 'Gandhinagar', completed: 4, pending: 2 },
      { district: 'Ahmedabad',   completed: 5, pending: 3 },
      { district: 'Surat',       completed: 4, pending: 3 },
      { district: 'Vadodara',    completed: 3, pending: 2 },
      { district: 'Rajkot',      completed: 3, pending: 2 },
      { district: 'Junagadh',    completed: 2, pending: 2 },
    ],
  },

  budgetAllocationData: {
    quarterly: [
      { name: 'Govt. Offices',   value: 2480, color: '#0891B2' },
      { name: 'Hospitals',       value: 1620, color: '#059669' },
      { name: 'Schools / Edu.',  value: 1280, color: '#D97706' },
      { name: 'Residential',     value:  860, color: '#7C3AED' },
      { name: 'Misc. Civil',     value:  600, color: '#DC2626' },
    ],
    monthly: [
      { name: 'Govt. Offices',   value: 827, color: '#0891B2' },
      { name: 'Hospitals',       value: 540, color: '#059669' },
      { name: 'Schools / Edu.',  value: 427, color: '#D97706' },
      { name: 'Residential',     value: 287, color: '#7C3AED' },
      { name: 'Misc. Civil',     value: 200, color: '#DC2626' },
    ],
    weekly: [
      { name: 'Govt. Offices',   value: 207, color: '#0891B2' },
      { name: 'Hospitals',       value: 135, color: '#059669' },
      { name: 'Schools / Edu.',  value: 107, color: '#D97706' },
      { name: 'Residential',     value:  72, color: '#7C3AED' },
      { name: 'Misc. Civil',     value:  50, color: '#DC2626' },
    ],
  },

  expenditureVsTargetData: {
    quarterly: [
      { month: 'Q1 FY24', actual: 1280, target: 1400 },
      { month: 'Q2 FY24', actual: 1620, target: 1700 },
      { month: 'Q3 FY24', actual: 1480, target: 1800 },
      { month: 'Q4 FY24', actual: 1940, target: 2000 },
      { month: 'Q1 FY25', actual: 1380, target: 1500 },
    ],
    monthly: [
      { month: 'Oct', actual: 480, target: 520 },
      { month: 'Nov', actual: 510, target: 545 },
      { month: 'Dec', actual: 460, target: 510 },
      { month: 'Jan', actual: 565, target: 580 },
      { month: 'Feb', actual: 598, target: 620 },
      { month: 'Mar', actual: 648, target: 660 },
    ],
    weekly: [
      { month: 'Wk 1', actual: 115, target: 128 },
      { month: 'Wk 2', actual: 128, target: 138 },
      { month: 'Wk 3', actual: 110, target: 132 },
      { month: 'Wk 4', actual: 148, target: 155 },
    ],
  },

  progressTrendData: {
    quarterly: [
      { month: 'Q1', roads: 40, bridges: 34, buildings: 42 },
      { month: 'Q2', roads: 48, bridges: 41, buildings: 52 },
      { month: 'Q3', roads: 56, bridges: 49, buildings: 61 },
      { month: 'Q4', roads: 63, bridges: 57, buildings: 69 },
    ],
    monthly: [
      { month: 'Oct', roads: 50, bridges: 43, buildings: 55 },
      { month: 'Nov', roads: 53, bridges: 46, buildings: 58 },
      { month: 'Dec', roads: 51, bridges: 45, buildings: 57 },
      { month: 'Jan', roads: 56, bridges: 50, buildings: 62 },
      { month: 'Feb', roads: 59, bridges: 53, buildings: 65 },
      { month: 'Mar', roads: 63, bridges: 57, buildings: 69 },
    ],
    weekly: [
      { month: 'Wk 1', roads: 60, bridges: 54, buildings: 66 },
      { month: 'Wk 2', roads: 62, bridges: 56, buildings: 68 },
      { month: 'Wk 3', roads: 61, bridges: 55, buildings: 67 },
      { month: 'Wk 4', roads: 63, bridges: 57, buildings: 69 },
    ],
  },

  resourceAllocationData: {
    quarterly: [
      { dept: 'Architecture',    manpower: 840,  machinery: 180, materials: 920 },
      { dept: 'Civil Works',     manpower: 1640, machinery: 540, materials: 1480 },
      { dept: 'Electrical',      manpower: 480,  machinery: 120, materials: 640 },
      { dept: 'Plumbing/MEP',    manpower: 360,  machinery:  90, materials: 480 },
      { dept: 'Interior',        manpower: 280,  machinery:  60, materials: 380 },
    ],
    monthly: [
      { dept: 'Architecture',    manpower: 280, machinery:  60, materials: 307 },
      { dept: 'Civil Works',     manpower: 547, machinery: 180, materials: 493 },
      { dept: 'Electrical',      manpower: 160, machinery:  40, materials: 213 },
      { dept: 'Plumbing/MEP',    manpower: 120, machinery:  30, materials: 160 },
      { dept: 'Interior',        manpower:  93, machinery:  20, materials: 127 },
    ],
    weekly: [
      { dept: 'Architecture',    manpower:  70, machinery: 15, materials: 77 },
      { dept: 'Civil Works',     manpower: 137, machinery: 45, materials: 123 },
      { dept: 'Electrical',      manpower:  40, machinery: 10, materials: 53 },
      { dept: 'Plumbing/MEP',    manpower:  30, machinery:  8, materials: 40 },
      { dept: 'Interior',        manpower:  23, machinery:  5, materials: 32 },
    ],
  },

  activeProjectsData: [
    { id: 'BS-001', name: 'Secretariat Annexe Block — Gandhinagar',       district: 'Gandhinagar', type: 'Govt Office',   budget: 342.0, spent: 273.6, progress: 80, status: 'On Track' },
    { id: 'BS-002', name: 'New Civil Hospital — Surat',                    district: 'Surat',       type: 'Hospital',      budget: 280.4, spent: 140.2, progress: 50, status: 'Delayed'  },
    { id: 'BS-012', name: 'High Court Annexe — Ahmedabad',                district: 'Ahmedabad',   type: 'Govt Office',   budget: 245.0, spent:  98.0, progress: 40, status: 'Delayed'  },
  ],
};

// ─────────────────────────────────────────
// DATASET 4 — Contractor Registration
// ─────────────────────────────────────────
export const contractorRegistrationData = {
  kpiData: [
    { icon: '📋', title: 'Total Contractors', value: '14,820', unit: '',    change: '+640 FY25', trend: 'up' },
    { icon: '🔄', title: 'Renewals Due',      value: '2,340',  unit: '',    change: 'Next 90d',  trend: 'neutral' },
    { icon: '💰', title: 'Revenue (Fees)',     value: '₹48.6',  unit: ' Cr',change: '+11% YoY',  trend: 'up' },
    { icon: '⚠️', title: 'Blacklisted',        value: '128',    unit: '',    change: 'Active ban', trend: 'down' },
  ],

  districtProjectData: {
    quarterly: [
      { district: 'Ahmedabad', completed: 340, pending: 88 },
      { district: 'Surat',     completed: 282, pending: 64 },
      { district: 'Rajkot',    completed: 198, pending: 52 },
      { district: 'Vadodara',  completed: 224, pending: 58 },
      { district: 'Gandhinagar',completed:142, pending: 36 },
      { district: 'Junagadh',  completed:  96, pending: 28 },
    ],
    monthly: [
      { district: 'Ahmedabad', completed: 113, pending: 29 },
      { district: 'Surat',     completed:  94, pending: 21 },
      { district: 'Rajkot',    completed:  66, pending: 17 },
      { district: 'Vadodara',  completed:  75, pending: 19 },
      { district: 'Gandhinagar',completed:  47, pending: 12 },
      { district: 'Junagadh',  completed:  32, pending:  9 },
    ],
    weekly: [
      { district: 'Ahmedabad', completed: 28, pending: 7 },
      { district: 'Surat',     completed: 24, pending: 5 },
      { district: 'Rajkot',    completed: 17, pending: 4 },
      { district: 'Vadodara',  completed: 19, pending: 5 },
      { district: 'Gandhinagar',completed: 12, pending: 3 },
      { district: 'Junagadh',  completed:  8, pending: 2 },
    ],
  },

  budgetAllocationData: {
    quarterly: [
      { name: 'AA Class',            value: 3840, color: '#0891B2' },
      { name: 'A Class',             value: 4620, color: '#059669' },
      { name: 'B Class',             value: 2840, color: '#D97706' },
      { name: 'C Class',             value: 2180, color: '#7C3AED' },
      { name: 'Spl Bridge',          value:  820, color: '#DC2626' },
      { name: 'Spl Roads',           value:  520, color: '#0284C7' },
    ],
    monthly: [
      { name: 'AA Class',            value: 1280, color: '#0891B2' },
      { name: 'A Class',             value: 1540, color: '#059669' },
      { name: 'B Class',             value:  947, color: '#D97706' },
      { name: 'C Class',             value:  727, color: '#7C3AED' },
      { name: 'Spl Bridge',          value:  273, color: '#DC2626' },
      { name: 'Spl Roads',           value:  173, color: '#0284C7' },
    ],
    weekly: [
      { name: 'AA Class',            value: 320, color: '#0891B2' },
      { name: 'A Class',             value: 385, color: '#059669' },
      { name: 'B Class',             value: 237, color: '#D97706' },
      { name: 'C Class',             value: 182, color: '#7C3AED' },
      { name: 'Spl Bridge',          value:  68, color: '#DC2626' },
      { name: 'Spl Roads',           value:  43, color: '#0284C7' },
    ],
  },

  expenditureVsTargetData: {
    quarterly: [
      { month: 'Q1 FY24', actual: 9.8,  target: 11.0 },
      { month: 'Q2 FY24', actual: 12.4, target: 13.0 },
      { month: 'Q3 FY24', actual: 11.6, target: 12.5 },
      { month: 'Q4 FY24', actual: 14.8, target: 15.0 },
      { month: 'Q1 FY25', actual: 10.4, target: 12.0 },
    ],
    monthly: [
      { month: 'Oct', actual: 3.6, target: 4.0 },
      { month: 'Nov', actual: 4.1, target: 4.4 },
      { month: 'Dec', actual: 3.8, target: 4.2 },
      { month: 'Jan', actual: 4.8, target: 5.0 },
      { month: 'Feb', actual: 5.1, target: 5.4 },
      { month: 'Mar', actual: 5.6, target: 5.8 },
    ],
    weekly: [
      { month: 'Wk 1', actual: 0.88, target: 1.02 },
      { month: 'Wk 2', actual: 1.04, target: 1.12 },
      { month: 'Wk 3', actual: 0.94, target: 1.06 },
      { month: 'Wk 4', actual: 1.24, target: 1.30 },
    ],
  },

  progressTrendData: {
    quarterly: [
      { month: 'Q1', roads: 62, bridges: 58, buildings: 54 },
      { month: 'Q2', roads: 70, bridges: 65, buildings: 62 },
      { month: 'Q3', roads: 74, bridges: 70, buildings: 68 },
      { month: 'Q4', roads: 82, bridges: 78, buildings: 75 },
    ],
    monthly: [
      { month: 'Oct', roads: 68, bridges: 63, buildings: 61 },
      { month: 'Nov', roads: 71, bridges: 67, buildings: 64 },
      { month: 'Dec', roads: 70, bridges: 66, buildings: 63 },
      { month: 'Jan', roads: 74, bridges: 70, buildings: 67 },
      { month: 'Feb', roads: 78, bridges: 73, buildings: 71 },
      { month: 'Mar', roads: 82, bridges: 78, buildings: 75 },
    ],
    weekly: [
      { month: 'Wk 1', roads: 76, bridges: 71, buildings: 69 },
      { month: 'Wk 2', roads: 79, bridges: 74, buildings: 72 },
      { month: 'Wk 3', roads: 78, bridges: 73, buildings: 71 },
      { month: 'Wk 4', roads: 82, bridges: 78, buildings: 75 },
    ],
  },

  resourceAllocationData: {
    quarterly: [
      { dept: 'AA Class',   manpower: 3840, machinery: 1240, materials: 2600 },
      { dept: 'A Class',    manpower: 4620, machinery: 1820, materials: 2800 },
      { dept: 'B Class',    manpower: 2840, machinery: 1040, materials: 1800 },
      { dept: 'C Class',    manpower: 2180, machinery:  880, materials: 1300 },
      { dept: 'Spl Categ.', manpower: 1340, machinery:  420, materials:  920 },
    ],
    monthly: [
      { dept: 'AA Class',   manpower: 1280, machinery: 413, materials: 867 },
      { dept: 'A Class',    manpower: 1540, machinery: 607, materials: 933 },
      { dept: 'B Class',    manpower:  947, machinery: 347, materials: 600 },
      { dept: 'C Class',    manpower:  727, machinery: 293, materials: 433 },
      { dept: 'Spl Categ.', manpower:  447, machinery: 140, materials: 307 },
    ],
    weekly: [
      { dept: 'AA Class',   manpower: 320, machinery: 103, materials: 217 },
      { dept: 'A Class',    manpower: 385, machinery: 152, materials: 233 },
      { dept: 'B Class',    manpower: 237, machinery:  87, materials: 150 },
      { dept: 'C Class',    manpower: 182, machinery:  73, materials: 108 },
      { dept: 'Spl Categ.', manpower: 112, machinery:  35, materials:  77 },
    ],
  },

  activeProjectsData: [
    { id: 'CR-001', name: 'Mehta Constructions Pvt Ltd',         district: 'Ahmedabad', type: 'AA Class',    budget: 0, spent: 0, progress: 100, status: 'On Track' },
    { id: 'CR-002', name: 'Patel Infra & Roads',                 district: 'Surat',     type: 'A Class',     budget: 0, spent: 0, progress: 88,  status: 'On Track' },
    { id: 'CR-012', name: 'Mehsana Rural Builders',              district: 'Mehsana',   type: 'C Class',     budget: 0, spent: 0, progress: 70,  status: 'On Track' },
  ],
};
