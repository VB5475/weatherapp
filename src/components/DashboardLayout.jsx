import { useState, lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const showNewDesign = import.meta.env.VITE_NEW_DESIGN === 'true';

// We lazy load the new overview and submodule pages
const ModulesOverview = showNewDesign ? lazy(() => import('../pages/ModulesOverview')) : null;
const SubModuleView = showNewDesign ? lazy(() => import('../pages/SubModuleView')) : null;

function PageSkeleton() {
  return (
    <div style={{ padding: '0', display: 'flex', flexDirection: 'column', gap: 24, animation: 'pageEnter 0.3s ease both' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {[...Array(4)].map((_,i) => (
          <div key={i} style={{
            height: 110, borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-secondary)',
            animation: 'shimmer 1.4s infinite linear',
            backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }} />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {[...Array(2)].map((_,i) => (
          <div key={i} style={{
            height: 300, borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-secondary)',
            animation: 'shimmer 1.4s infinite linear',
            backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }} />
        ))}
      </div>
    </div>
  );
}

export default function DashboardLayout() {
  const [newDesignMode, setNewDesignMode] = useState(() => {
    return sessionStorage.getItem('newDesignMode') === 'true';
  });
  const [darkMode, setDarkMode] = useState(() => {
    return sessionStorage.getItem('darkMode') === 'true';
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const [activeSubModule, setActiveSubModule] = useState(null);
  const [pageKey, setPageKey] = useState(0);

  const handleSubModuleChange = (id) => {
    setPageKey(k => k + 1); // Trigger re-animation
    setActiveSubModule(id);
  };

  const toggleMode = () => {
    setNewDesignMode(prev => {
      const next = !prev;
      sessionStorage.setItem('newDesignMode', next);
      if (!next) {
        setDarkMode(false); // reset dark mode when going back to weather
        sessionStorage.setItem('darkMode', false);
      }
      return next;
    });
  };
  
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      sessionStorage.setItem('darkMode', next);
      return next;
    });
  };

  const toggleSidebar = () => setSidebarCollapsed(prev => !prev);

  // Update root class based on collapsed state dynamically
  const rootClass = `app-root ${newDesignMode && darkMode ? 'dark-mode' : ''} ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`.trim();

  return (
    <div className={rootClass} style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar 
        newDesignMode={newDesignMode} 
        onToggleMode={toggleMode} 
        collapsed={sidebarCollapsed} 
        onToggleCollapse={toggleSidebar}
        activeSubModule={activeSubModule}
        setActiveSubModule={setActiveSubModule}
      />
      <div style={{
        marginLeft: sidebarCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'margin-left var(--sidebar-transition)',
        willChange: 'margin-left',
      }}>
        <Header 
          newDesignMode={newDesignMode} 
          darkMode={darkMode} 
          onToggleDarkMode={toggleDarkMode}
          activeSubModule={activeSubModule}
        />
        <main style={{
          flex: 1,
          overflow: 'auto',
          padding: '24px 32px',
        }}>
          {showNewDesign && newDesignMode ? (
            <Suspense fallback={<PageSkeleton />}>
              <div key={pageKey} className={activeSubModule ? 'page-transition-slide' : 'page-transition-enter'}>
                {activeSubModule ? (
                  <SubModuleView 
                    darkMode={darkMode} 
                    submoduleId={activeSubModule} 
                    setActiveSubModule={handleSubModuleChange} 
                  />
                ) : (
                  <ModulesOverview 
                    darkMode={darkMode} 
                    onSubModuleClick={handleSubModuleChange} 
                  />
                )}
              </div>
            </Suspense>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
}

