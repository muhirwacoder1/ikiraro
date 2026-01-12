import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MicroMissionView from '../components/MicroMissionView';
import InternshipUnlockedView from '../components/InternshipUnlockedView';
import MissionsSectionView from '../components/MissionsSectionView';
import AchievementsSectionView from '../components/AchievementsSectionView';
import InternshipSectionView from '../components/InternshipSectionView';
import ProfileSectionView from '../components/ProfileSectionView';

/* 
  Translated from user HTML to React Component.
  Maintains exact visual class names but adapts to JSX syntax.
*/

export default function StudentDashboard() {
    const navigate = useNavigate();
    const [activeMission, setActiveMission] = useState(null);
    const [showInternshipUnlocked, setShowInternshipUnlocked] = useState(false);
    const [showMissionsSection, setShowMissionsSection] = useState(false);
    const [showAchievementsSection, setShowAchievementsSection] = useState(false);
    const [showInternshipSection, setShowInternshipSection] = useState(false);
    const [showProfileSection, setShowProfileSection] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    // Mock internship data
    const unlockedInternship = {
        id: 'intern-1',
        role: 'Junior Data Analyst',
        company: 'King Faisal Hospital',
        location: 'Kigali, Rwanda',
        field: 'Health Informatics'
    };

    const handleStartMission = (mission) => {
        setActiveMission(mission);
    };

    const handleBackFromMission = () => {
        setActiveMission(null);
    };

    const handleMissionSubmit = (steps) => {
        console.log("Mission submitted:", steps);
        // Here you would call the AI service to grade the mission
        setActiveMission(null);
    };

    const handleViewInternship = () => {
        setShowInternshipUnlocked(true);
    };

    const handleBackFromInternship = () => {
        setShowInternshipUnlocked(false);
    };

    const handleAcceptInternship = () => {
        console.log("Internship accepted!");
        setShowInternshipUnlocked(false);
    };

    const handleViewMissions = () => {
        setShowMissionsSection(true);
    };

    const handleBackFromMissions = () => {
        setShowMissionsSection(false);
    };

    const handleViewAchievements = () => {
        setShowAchievementsSection(true);
    };

    const handleBackFromAchievements = () => {
        setShowAchievementsSection(false);
    };

    const handleViewInternshipSection = () => {
        setShowInternshipSection(true);
    };

    const handleBackFromInternshipSection = () => {
        setShowInternshipSection(false);
    };

    const handleViewProfile = () => {
        setShowProfileSection(true);
    };

    const handleBackFromProfile = () => {
        setShowProfileSection(false);
    };

    // If profile section is active
    if (showProfileSection) {
        return (
            <ProfileSectionView
                onBack={handleBackFromProfile}
            />
        );
    }

    if (showAchievementsSection) {
        return (
            <AchievementsSectionView
                onBack={handleBackFromAchievements}
            />
        );
    }

    // If internship section is active
    if (showInternshipSection) {
        return (
            <InternshipSectionView
                onBack={handleBackFromInternshipSection}
                onViewInternship={(internship) => {
                    setShowInternshipSection(false);
                    setShowInternshipUnlocked(true);
                }}
            />
        );
    }

    // If missions section is active
    if (showMissionsSection) {
        return (
            <MissionsSectionView
                onBack={handleBackFromMissions}
                onStartMission={(mission) => {
                    setShowMissionsSection(false);
                    handleStartMission(mission);
                }}
            />
        );
    }

    // If internship unlocked view is active
    if (showInternshipUnlocked) {
        return (
            <InternshipUnlockedView
                internship={unlockedInternship}
                onBack={handleBackFromInternship}
                onAccept={handleAcceptInternship}
            />
        );
    }

    // If a mission is active, show the MicroMissionView
    if (activeMission) {
        return (
            <MicroMissionView
                mission={activeMission}
                onBack={handleBackFromMission}
                onSubmit={handleMissionSubmit}
            />
        );
    }

    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-deep-blue dark:text-white font-body antialiased overflow-hidden relative">
            {/* Mobile Menu Button - Only visible on mobile */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-card-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
            >
                <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>

            {/* Mobile Overlay - Only on mobile */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}

            {/* Sidebar Navigation */}
            <aside className={`
                h-full bg-white dark:bg-card-dark flex flex-col border-r border-gray-100 dark:border-gray-800 transition-all duration-300 shrink-0
                fixed lg:relative z-40
                ${mobileMenuOpen ? 'left-0 w-64' : '-left-64 lg:left-0'}
                ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-64'}
            `}>
                {/* Logo & Collapse Toggle */}
                <div className="h-20 flex items-center justify-between px-4 lg:px-6 border-b border-gray-50 dark:border-gray-800/50">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
                        </div>
                        <span className={`font-display font-bold text-xl tracking-tight ${sidebarCollapsed ? 'lg:hidden' : 'lg:block'} ${mobileMenuOpen ? 'block' : 'hidden'}`}>IKIRARO</span>
                    </div>
                    {/* Collapse Toggle - Desktop Only */}
                    <button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="hidden lg:flex p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 transition-colors"
                        title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            {sidebarCollapsed ? 'chevron_right' : 'chevron_left'}
                        </span>
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 py-6 px-3 flex flex-col gap-2 overflow-y-auto">
                    {/* Dashboard (Active) */}
                    <a className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-primary/10 text-primary dark:text-primary transition-all" href="#">
                        <span className="material-symbols-outlined active-nav-icon">dashboard</span>
                        <span className={`font-display font-medium text-sm ${(mobileMenuOpen || !sidebarCollapsed) ? 'block' : 'hidden'} ${sidebarCollapsed ? 'lg:hidden' : ''}`}>Dashboard</span>
                    </a>
                    {/* Missions */}
                    <button onClick={handleViewMissions} className="group flex items-center gap-3 px-3 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-deep-blue dark:hover:text-white transition-all w-full text-left">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">target</span>
                        <span className={`font-display font-medium text-sm ${(mobileMenuOpen || !sidebarCollapsed) ? 'block' : 'hidden'} ${sidebarCollapsed ? 'lg:hidden' : ''}`}>Missions</span>
                    </button>
                    {/* Achievements */}
                    <button onClick={handleViewAchievements} className="group flex items-center gap-3 px-3 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-deep-blue dark:hover:text-white transition-all w-full text-left">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">trophy</span>
                        <span className={`font-display font-medium text-sm ${(mobileMenuOpen || !sidebarCollapsed) ? 'block' : 'hidden'} ${sidebarCollapsed ? 'lg:hidden' : ''}`}>Achievements</span>
                    </button>
                    {/* Internship */}
                    <button onClick={handleViewInternshipSection} className="group flex items-center gap-3 px-3 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-deep-blue dark:hover:text-white transition-all w-full text-left">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">work</span>
                        <span className={`font-display font-medium text-sm ${(mobileMenuOpen || !sidebarCollapsed) ? 'block' : 'hidden'} ${sidebarCollapsed ? 'lg:hidden' : ''}`}>Internship</span>
                    </button>
                    {/* Profile */}
                    <button onClick={handleViewProfile} className="group flex items-center gap-3 px-3 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-deep-blue dark:hover:text-white transition-all w-full text-left">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
                        <span className={`font-display font-medium text-sm ${(mobileMenuOpen || !sidebarCollapsed) ? 'block' : 'hidden'} ${sidebarCollapsed ? 'lg:hidden' : ''}`}>Profile</span>
                    </button>
                </nav>

                {/* User Mini Profile */}
                <div className="p-4 border-t border-gray-50 dark:border-gray-800/50">
                    <div className="flex items-center gap-3 p-2 rounded-xl bg-gray-50 dark:bg-white/5 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <div className="size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-700 shadow-sm shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGhLMMsTlcTLOEE_1z8K6IKaopzxz8JFrvHOtjPNXrAkukGuTS-EXQ7hJl4OfiRjQ_yDbGt9YZeDHuHyAmEc5-jUrsy4_xu0IuT_ZdH2X_6Ft-rpap0lHHWMjG3VkFkbJScweCzJI6Xh-0Al3QlPOq1qd1Al9iptnJx_ONwEgsIy-_fo9ZKLNLvMPFKDXi5C-aMLNSMxth-1bfJxIBmmoKmHGrjzDJFWKW1-GwJrh6eXi7-9JgUFqpGX0shns93fy0BT8p65LbBp4')" }}></div>
                        <div className={`${(mobileMenuOpen || !sidebarCollapsed) ? 'flex' : 'hidden'} ${sidebarCollapsed ? 'lg:hidden' : ''} flex-col overflow-hidden`}>
                            <span className="font-display font-bold text-sm truncate text-deep-blue dark:text-white">Keza M.</span>
                            <span className="font-body text-xs text-gray-500 dark:text-gray-400 truncate">Aspiring Innovator</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative scroll-smooth p-0 pt-0">
                {/* p-0 override main padding from index.css if necessary */}
                <div className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 flex flex-col gap-8">

                    {/* Header Section */}
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-display text-3xl md:text-4xl font-bold text-deep-blue dark:text-white tracking-tight">
                                Mwaramutse, Keza! <span className="animate-pulse inline-block">🚀</span>
                            </h1>
                            <p className="font-body text-gray-500 dark:text-gray-400 text-base md:text-lg">
                                Ready to unlock new opportunities in Kigali today?
                            </p>
                        </div>
                        <button className="bg-deep-blue dark:bg-white text-white dark:text-deep-blue hover:opacity-90 font-display font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            <span className="material-symbols-outlined text-[20px]">add_circle</span>
                            <span>Request Mentorship</span>
                        </button>
                    </header>

                    {/* Gamification Stats Dashboard */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {/* Level Card */}
                        <div className="bg-white dark:bg-card-dark p-5 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 flex items-center gap-4 relative overflow-hidden group">
                            <div className="absolute right-0 top-0 opacity-5 dark:opacity-10 pointer-events-none">
                                <span className="material-symbols-outlined text-[120px] rotate-12 -mr-6 -mt-6">military_tech</span>
                            </div>
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                <span className="font-display font-bold text-xl">5</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-body text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Current Level</span>
                                <span className="font-display font-bold text-lg text-deep-blue dark:text-white">Aspiring Innovator</span>
                            </div>
                        </div>
                        {/* Purpose Points */}
                        <div className="bg-white dark:bg-card-dark p-5 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 flex items-center gap-4 relative overflow-hidden group">
                            <div className="absolute right-0 top-0 opacity-5 dark:opacity-10 pointer-events-none">
                                <span className="material-symbols-outlined text-[120px] rotate-12 -mr-6 -mt-6">hotel_class</span>
                            </div>
                            <div className="size-14 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">bolt</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-body text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Purpose Points</span>
                                <span className="font-display font-bold text-lg text-deep-blue dark:text-white">1,250 PP</span>
                            </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="bg-white dark:bg-card-dark p-5 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 flex flex-col justify-center gap-3 relative overflow-hidden">
                            <div className="flex justify-between items-end">
                                <span className="font-body text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">To Level 6</span>
                                <span className="font-display font-bold text-primary">75%</span>
                            </div>
                            <div className="w-full h-3 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                            </div>
                            <p className="text-xs text-gray-400 text-right">350 PP remaining</p>
                        </div>
                    </section>

                    {/* Content Split Layout */}
                    <div className="flex flex-col xl:flex-row gap-8 pb-12">
                        {/* Left Column: Mission Grid */}
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <h2 className="font-display text-2xl font-bold text-deep-blue dark:text-white">Active Missions</h2>
                                <a className="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1" href="#">
                                    View all <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </a>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Mission Card 1 */}
                                <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-card hover:shadow-soft transition-all group border border-transparent hover:border-primary/20 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                                            Biology
                                        </div>
                                        <div className="bg-gray-100 dark:bg-white/5 rounded-full p-2 text-gray-400">
                                            <span className="material-symbols-outlined text-[20px]">potted_plant</span>
                                        </div>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-deep-blue dark:text-white mb-2 group-hover:text-primary transition-colors">Optimizing Coffee Yields</h3>
                                    <p className="font-body text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">
                                        Analyze soil pH levels from samples in Huye District to recommend fertilizer adjustments.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                                        <span>Huye, Southern Province</span>
                                    </div>
                                    <button
                                        onClick={() => handleStartMission({
                                            id: 'bio-1',
                                            title: 'Akagera Park Water Imbalance',
                                            subject: 'Biology',
                                            description: 'Analyze soil pH levels from samples in Huye District to recommend fertilizer adjustments.'
                                        })}
                                        className="w-full py-3 rounded-xl bg-gray-50 dark:bg-white/5 text-deep-blue dark:text-white font-display font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white"
                                    >
                                        Start Mission
                                    </button>
                                </div>
                                {/* Mission Card 2 */}
                                <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-card hover:shadow-soft transition-all group border border-transparent hover:border-primary/20 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                                            Physics
                                        </div>
                                        <div className="bg-gray-100 dark:bg-white/5 rounded-full p-2 text-gray-400">
                                            <span className="material-symbols-outlined text-[20px]">solar_power</span>
                                        </div>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-deep-blue dark:text-white mb-2 group-hover:text-primary transition-colors">Solar Grid Calibration</h3>
                                    <p className="font-body text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">
                                        Calculate optimal panel angles for a new school project in Kayonza to maximize efficiency.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                                        <span>Kayonza, Eastern Province</span>
                                    </div>
                                    <button
                                        onClick={() => handleStartMission({
                                            id: 'phys-1',
                                            title: 'Solar Grid Calibration',
                                            subject: 'Physics',
                                            description: 'Calculate optimal panel angles for a new school project in Kayonza to maximize efficiency.'
                                        })}
                                        className="w-full py-3 rounded-xl bg-gray-50 dark:bg-white/5 text-deep-blue dark:text-white font-display font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white"
                                    >
                                        Start Mission
                                    </button>
                                </div>
                                {/* Mission Card 3 */}
                                <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-card hover:shadow-soft transition-all group border border-transparent hover:border-primary/20 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                                            Fintech
                                        </div>
                                        <div className="bg-gray-100 dark:bg-white/5 rounded-full p-2 text-gray-400">
                                            <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                                        </div>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-deep-blue dark:text-white mb-2 group-hover:text-primary transition-colors">Mobile Money API</h3>
                                    <p className="font-body text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">
                                        Design a simple interface for a cooperative to track payments via MoMo API integration.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                                        <span>Kigali Innovation City</span>
                                    </div>
                                    <button
                                        onClick={() => handleStartMission({
                                            id: 'fin-1',
                                            title: 'Mobile Money API Integration',
                                            subject: 'Fintech',
                                            description: 'Design a simple interface for a cooperative to track payments via MoMo API integration.'
                                        })}
                                        className="w-full py-3 rounded-xl bg-gray-50 dark:bg-white/5 text-deep-blue dark:text-white font-display font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white"
                                    >
                                        Start Mission
                                    </button>
                                </div>
                                {/* Mission Card 4 (Locked) */}
                                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-dashed border-gray-300 dark:border-gray-700 flex flex-col h-full items-center justify-center text-center gap-3 opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
                                    <div className="bg-gray-200 dark:bg-white/10 rounded-full p-3 text-gray-400">
                                        <span className="material-symbols-outlined text-[24px]">lock</span>
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-gray-500 dark:text-gray-400">Unlock Level 6</h3>
                                    <p className="font-body text-xs text-gray-400 max-w-[200px]">
                                        Complete current missions to unlock advanced internship challenges.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Stats & Widgets */}
                        <div className="w-full xl:w-[360px] flex flex-col gap-6">
                            {/* Skill Radar Widget */}
                            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-gray-800 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-display text-lg font-bold text-deep-blue dark:text-white">Growth Matrix</h3>
                                    <span className="material-symbols-outlined text-gray-400 cursor-help" title="Your skill balance">info</span>
                                </div>
                                {/* SVG Radar Chart Simulation */}
                                <div className="relative w-full aspect-square flex items-center justify-center">
                                    {/* Background Hexagon Lines */}
                                    <svg className="w-full h-full text-gray-200 dark:text-gray-700" viewBox="0 0 100 100">
                                        {/* Grid lines */}
                                        <polygon fill="none" points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="currentColor" strokeWidth="0.5"></polygon>
                                        <polygon fill="none" points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5" stroke="currentColor" strokeWidth="0.5"></polygon>
                                        {/* Axes */}
                                        <line stroke="currentColor" strokeDasharray="2,2" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="10"></line>
                                        <line stroke="currentColor" strokeDasharray="2,2" strokeWidth="0.5" x1="50" x2="90" y1="50" y2="70"></line>
                                        <line stroke="currentColor" strokeDasharray="2,2" strokeWidth="0.5" x1="50" x2="10" y1="50" y2="70"></line>
                                        {/* The Data Shape */}
                                        <polygon fill="rgba(26, 203, 203, 0.2)" points="50,20 85,65 20,60" stroke="#1acbcb" strokeLinejoin="round" strokeWidth="2"></polygon>
                                        {/* Data Points */}
                                        <circle cx="50" cy="20" fill="#1acbcb" r="2"></circle>
                                        <circle cx="85" cy="65" fill="#1acbcb" r="2"></circle>
                                        <circle cx="20" cy="60" fill="#1acbcb" r="2"></circle>
                                    </svg>
                                    {/* Labels */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white dark:bg-card-dark px-2 py-0.5 rounded shadow text-[10px] font-bold text-gray-600 dark:text-gray-300">Logic</div>
                                    <div className="absolute bottom-6 right-2 bg-white dark:bg-card-dark px-2 py-0.5 rounded shadow text-[10px] font-bold text-gray-600 dark:text-gray-300">Creativity</div>
                                    <div className="absolute bottom-6 left-2 bg-white dark:bg-card-dark px-2 py-0.5 rounded shadow text-[10px] font-bold text-gray-600 dark:text-gray-300">Subject</div>
                                </div>
                                <div className="flex gap-2 justify-center">
                                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-lg">+12% vs last month</span>
                                </div>
                            </div>

                            {/* Internship Spotlight */}
                            <div className="bg-deep-blue rounded-2xl p-6 text-white relative overflow-hidden group">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="bg-accent-gold text-deep-blue text-xs font-bold px-2 py-1 rounded uppercase">New Match</div>
                                </div>
                                <div className="relative z-10 h-full flex flex-col justify-end gap-2">
                                    <div className="size-10 bg-white rounded-lg flex items-center justify-center mb-2">
                                        <span className="material-symbols-outlined text-deep-blue">business</span>
                                    </div>
                                    <h3 className="font-display text-lg font-bold">BK Tech House</h3>
                                    <p className="text-sm text-gray-300 mb-3">Junior Data Analyst Intern</p>
                                    <button
                                        onClick={handleViewInternship}
                                        className="w-full bg-primary hover:bg-white hover:text-deep-blue text-deep-blue font-bold py-2 rounded-lg transition-colors text-sm"
                                    >
                                        View Match 🎉
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
