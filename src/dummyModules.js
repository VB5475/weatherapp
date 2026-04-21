export const NEW_DESIGN_MODULES = [
  {
    id: 'integrated',
    name: 'Integrated Modules',
    icon: '🔗',
    submodules: [
      {
        id: 'roads-state',
        name: 'Roads and Bridges (State-STROBES)',
        icon: '🛣️',
        subtitle: 'State: STROBES',
        stats: [
          { label: 'Total Road Length', value: '18,420 km', color: 'red' },
          { label: 'Active Projects', value: '1,412', color: 'amber' },
          { label: 'Total Budget', value: '₹9,240 Cr', color: 'green' },
          { label: 'Avg Completion', value: '67%', color: 'blue' },

        ]
      },
      {
        id: 'roads-panchayat',
        name: 'Roads and Bridges (Panchayat-RPMS)',
        icon: '🏘️',
        subtitle: 'Panchayat: RPMS',
        stats: [
          { label: 'Village Roads', value: '42,180 km', color: 'blue' },
          { label: 'Works Sanctioned', value: '8,640', color: 'amber' },
          { label: 'RPMS Budget', value: '₹3,420 Cr', color: 'blue' },
          { label: 'Completion Rate', value: '58%', color: 'green' },

        ]
      },
      {
        id: 'building-state',
        name: 'Building (State-STROBES)',
        icon: '🏛️',
        subtitle: 'State: STROBES',
        stats: [
          { label: 'Total Projects', value: '1,800', color: 'blue' },
          { label: 'Under Construction', value: '471', color: 'amber' },
          { label: 'Total Budget', value: '₹6,840 Cr', color: 'blue' },
          { label: 'Floor Area Target', value: '84.2 lakh sqft', color: 'green' },
        ]
      }
    ]
  },
  {
    id: 'dashboard',
    name: 'Dashboard Modules',
    icon: '📊',
    submodules: [
      {
        id: 'contractor-registration',
        name: 'Contractor Registration',
        icon: '📝',
        subtitle: 'Registration status',
        stats: [
          { label: 'Total Contractors', value: '14,820', color: 'blue' },
          { label: 'Renewals Due', value: '2,340', color: 'amber' },
          { label: 'Revenue (Fees)', value: '₹48.6 Cr', color: 'green' },
          { label: 'Blacklisted', value: '128', color: 'red' },
        ]
      }
    ]
  }
];