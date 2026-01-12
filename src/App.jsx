import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import CompanyDashboard from './pages/CompanyDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student/*" element={<StudentDashboard />} />
        <Route path="/company/*" element={<CompanyDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

