import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}
