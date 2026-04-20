import { useState, lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const showNewDesign = import.meta.env.VITE_NEW_DESIGN === 'true';
const NewDesignPage = showNewDesign ? lazy(() => import('../pages/NewDesignPage')) : null;

export default function DashboardLayout() {
  const [newDesignMode, setNewDesignMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setNewDesignMode(prev => {
      if (prev) setDarkMode(false); // reset dark mode when going back to weather
      return !prev;
    });
  };
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={newDesignMode && darkMode ? 'app-root dark-mode' : 'app-root'} style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar newDesignMode={newDesignMode} onToggleMode={toggleMode} />
      <div style={{
        marginLeft: 'var(--sidebar-width)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        <Header newDesignMode={newDesignMode} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <main style={{
          flex: 1,
          overflow: 'auto',
          padding: '24px 28px',
        }}>
          {showNewDesign && newDesignMode ? (
            <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Loading New Design...</div>}>
              <NewDesignPage darkMode={darkMode} />
            </Suspense>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
}

