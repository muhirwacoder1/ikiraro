import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <div className="logo-icon">
                        <Hexagon size={24} color="white" strokeWidth={2.5} />
                    </div>
                    <span className="logo-text">IKIRARO</span>
                </Link>

                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/student" className="nav-link">Student Hub</Link>
                    <Link to="/company" className="nav-link">Company Portal</Link>
                </div>

                <div className="nav-actions">
                    <Link to="/login" className="btn btn-outline">Log In</Link>
                    <Link to="/signup" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </nav>
    );
}
