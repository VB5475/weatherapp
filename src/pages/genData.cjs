const fs = require('fs');
const path = require('path');

const moduleIds = ['state-strobes', 'panchayat-rpms', 'building-strobes', 'contractor-registration'];
const FILTER_OPTIONS = ['quarterly', 'monthly', 'weekly'];

// Utils
const rInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(1);
const rItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function genObjMap(generatorFn) {
  const result = {};
  moduleIds.forEach(id => {
    result[id] = generatorFn(id);
  });
  return result;
}

// 1. KPI Data
const generateKPIs = () => [
  { title: 'Total Projects', value: rInt(500, 5000), change: `+${rInt(1, 15)}%`, trend: 'up', icon: '📋' },
  { title: 'Budget Utilised', value: `₹${rInt(100, 5000)}`, unit: 'Cr', change: `+${rInt(1, 20)}%`, trend: 'up', icon: '💰' },
  { title: 'Delayed Projects', value: rInt(10, 200), change: `-${rInt(1, 10)}%`, trend: 'down', icon: '⚠️' },
  { title: 'Avg Completion Rate', value: rInt(40, 95), unit: '%', change: `+${rFloat(0.1, 5.0)}%`, trend: 'up', icon: '📈' },
];

// 2. District Project Data
const generateDistrictData = () => {
  const data = {};
  FILTER_OPTIONS.forEach(f => {
    data[f] = ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar'].map(d => ({
      district: d,
      completed: rInt(5, 50),
      pending: rInt(2, 30)
    }));
  });
  return data;
};

// 3. Budget Allocation Data
const colors = ['#0F766E', '#F59E0B', '#2563EB', '#DC2626', '#7C3AED'];
const generateBudgetData = () => {
  const data = {};
  FILTER_OPTIONS.forEach(f => {
    data[f] = [
      { name: 'Maintenance', value: rInt(100, 1000), color: colors[0] },
      { name: 'New Construction', value: rInt(400, 2000), color: colors[1] },
      { name: 'Upgrades', value: rInt(50, 500), color: colors[2] },
      { name: 'Emergency', value: rInt(10, 100), color: colors[3] },
      { name: 'Survey', value: rInt(5, 50), color: colors[4] },
    ];
  });
  return data;
};

// 4. Expenditure vs Target
const generateExpenditureData = () => {
  const data = {};
  FILTER_OPTIONS.forEach(f => {
    data[f] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(m => {
      const target = rInt(50, 400);
      return { month: m, actual: rInt(30, target + 50), target: target };
    });
  });
  return data;
};

// 5. Progress Trend Data
const generateProgressData = () => {
  const data = {};
  FILTER_OPTIONS.forEach(f => {
    data[f] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(m => ({
      month: m,
      roads: rInt(30, 95),
      bridges: rInt(20, 80),
      buildings: rInt(40, 90)
    }));
  });
  return data;
};

// 6. Resource Allocation Data
const generateResourceData = () => {
  const data = {};
  FILTER_OPTIONS.forEach(f => {
    data[f] = ['Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E'].map(d => ({
      dept: d,
      manpower: rInt(100, 500),
      machinery: rInt(20, 150),
      materials: rInt(200, 800)
    }));
  });
  return data;
};

// 7. Active Projects Data
const statuses = ['On Track', 'Delayed', 'Critical'];
const generateActiveProjects = (modId) => {
  return Array.from({ length: 15 }).map((_, i) => ({
    id: `${modId.substring(0,3).toUpperCase()}-${1000 + i}`,
    name: `Project ${modId} ${rInt(1, 100)}`,
    district: rItem(['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar']),
    type: rItem(['Highway', 'Bridge', 'Public Building', 'Rural Road']),
    budget: parseFloat(rFloat(5, 100)),
    spent: parseFloat(rFloat(1, 50)),
    progress: rInt(5, 95),
    status: rItem(statuses)
  }));
};

const output = `
export const kpiData = ${JSON.stringify(genObjMap(generateKPIs), null, 2)};
export const districtProjectData = ${JSON.stringify(genObjMap(generateDistrictData), null, 2)};
export const budgetAllocationData = ${JSON.stringify(genObjMap(generateBudgetData), null, 2)};
export const expenditureVsTargetData = ${JSON.stringify(genObjMap(generateExpenditureData), null, 2)};
export const progressTrendData = ${JSON.stringify(genObjMap(generateProgressData), null, 2)};
export const resourceAllocationData = ${JSON.stringify(genObjMap(generateResourceData), null, 2)};
export const activeProjectsData = ${JSON.stringify(genObjMap(generateActiveProjects), null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'dummyData.js'), output.trim());
console.log('dummyData.js generated successfully!');
