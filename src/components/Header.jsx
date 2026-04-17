import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = dateTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <header className="header">
      <div className="header-left">
        <h2 className="header-title">Gujarat Rainfall Dashboard</h2>
        <span className="header-subtitle">Real-time Weather Intelligence for RNBD</span>
      </div>
      <div className="header-right">
        <div className="header-datetime">
          <span className="header-date">{formattedDate}</span>
          <span className="header-time">{formattedTime}</span>
        </div>
        <div className="header-status">
          <span className="status-dot" />
          <span className="status-text">Live</span>
        </div>
      </div>
    </header>
  );
}
