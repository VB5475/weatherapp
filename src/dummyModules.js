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
          { label: 'Not Started', value: '--', color: 'red' },
          { label: 'In Progress', value: '1412', color: 'amber' },
          { label: 'Phy. Completed', value: '308', color: 'green' },
          { label: 'Completed', value: '600', color: 'green' },
          { label: 'Stopped (S)', value: '40', color: 'red' },
          { label: 'Maintenance', value: '0', color: 'gray' },
          { label: 'Dropped (D)', value: '99', color: 'purple' },
          { label: 'No Status', value: '0', color: 'gray' },
          { label: 'Total', value: '2930', color: 'blue' }
        ]
      },
      {
        id: 'roads-panchayat',
        name: 'Roads and Bridges (Panchayat-RPMS)',
        icon: '🏘️',
        subtitle: 'Panchayat: RPMS',
        stats: [
          { label: 'Not Started', value: '--', color: 'red' },
          { label: 'In Progress', value: '--', color: 'amber' },
          { label: 'Phy. Completed', value: '--', color: 'green' },
          { label: 'Completed', value: '--', color: 'green' },
          { label: 'Total', value: '--', color: 'blue' }
        ]
      },
      {
        id: 'building-state',
        name: 'Building (State-STROBES)',
        icon: '🏛️',
        subtitle: 'State: STROBES',
        stats: [
          { label: 'Not Started', value: '--', color: 'red' },
          { label: 'In Progress', value: '471', color: 'amber' },
          { label: 'Phy. Completed', value: '120', color: 'green' },
          { label: 'Completed', value: '400', color: 'green' },
          { label: 'Total', value: '1800', color: 'blue' }
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
          { label: 'AA Class', value: '--', color: 'amber' },
          { label: 'A Class', value: '--', color: 'amber' },
          { label: 'B Class', value: '--', color: 'green' },
          { label: 'C Class', value: '--', color: 'blue' },
          { label: 'Spl. Category Bridge', value: '--', color: 'purple' },
          { label: 'Spl. Category Roads', value: '--', color: 'red' }
        ]
      }
    ]
  }
];
