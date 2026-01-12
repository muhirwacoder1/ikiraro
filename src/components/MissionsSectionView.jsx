import { useState, useEffect } from 'react';
import { getAllMissions } from '../services/missionsStore';

/*
  Missions Section View Component
  Shows all available missions organized by category with filtering options
*/

export default function MissionsSectionView({ onBack, onStartMission }) {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [missions, setMissions] = useState([]);

    // Load missions from shared store
    useEffect(() => {
        setMissions(getAllMissions());
    }, []);

    const filters = [
        { id: 'all', label: 'All Missions', icon: 'apps' },
        { id: 'available', label: 'Available', icon: 'play_circle' },
        { id: 'in-progress', label: 'In Progress', icon: 'pending' },
        { id: 'completed', label: 'Completed', icon: 'check_circle' }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            green: { bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-700 dark:text-green-400', iconBg: 'bg-green-100 dark:bg-green-900/30' },
            blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-700 dark:text-blue-400', iconBg: 'bg-blue-100 dark:bg-blue-900/30' },
            purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-700 dark:text-purple-400', iconBg: 'bg-purple-100 dark:bg-purple-900/30' },
            cyan: { bg: 'bg-cyan-50 dark:bg-cyan-900/20', text: 'text-cyan-700 dark:text-cyan-400', iconBg: 'bg-cyan-100 dark:bg-cyan-900/30' },
            red: { bg: 'bg-red-50 dark:bg-red-900/20', text: 'text-red-700 dark:text-red-400', iconBg: 'bg-red-100 dark:bg-red-900/30' },
            emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-700 dark:text-emerald-400', iconBg: 'bg-emerald-100 dark:bg-emerald-900/30' }
        };
        return colorMap[color] || colorMap.blue;
    };

    const getStatusBadge = (status) => {
        const statusMap = {
            'available': { bg: 'bg-primary/10', text: 'text-primary', label: 'Available' },
            'in-progress': { bg: 'bg-amber-100 dark:bg-amber-900/20', text: 'text-amber-700 dark:text-amber-400', label: 'In Progress' },
            'completed': { bg: 'bg-green-100 dark:bg-green-900/20', text: 'text-green-700 dark:text-green-400', label: 'Completed' }
        };
        return statusMap[status] || statusMap.available;
    };

    const getDifficultyBadge = (difficulty) => {
        const difficultyMap = {
            'Beginner': { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-600 dark:text-gray-400' },
            'Intermediate': { bg: 'bg-blue-100 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400' },
            'Advanced': { bg: 'bg-orange-100 dark:bg-orange-900/20', text: 'text-orange-600 dark:text-orange-400' },
            'Expert': { bg: 'bg-red-100 dark:bg-red-900/20', text: 'text-red-600 dark:text-red-400' }
        };
        return difficultyMap[difficulty] || difficultyMap.Beginner;
    };

    const filteredMissions = missions.filter(mission => {
        const matchesFilter = activeFilter === 'all' || mission.status === activeFilter;
        const matchesSearch = mission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mission.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mission.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const stats = {
        total: missions.length,
        available: missions.filter(m => m.status === 'available').length,
        inProgress: missions.filter(m => m.status === 'in-progress').length,
        completed: missions.filter(m => m.status === 'completed').length
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display min-h-screen flex flex-col overflow-hidden">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e8f3f3] dark:border-white/10 px-6 py-3 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50 sticky top-0">
                <div className="flex items-center gap-4 text-text-main dark:text-white">
                    <button
                        onClick={onBack}
                        className="size-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined text-xl">arrow_back</span>
                    </button>
                    <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">target</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight">Missions Center</h2>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-[18px]">military_tech</span>
                        <span className="text-xs font-bold text-primary font-body">{stats.completed} Completed</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center size-10 rounded-xl bg-[#e8f3f3] dark:bg-white/10 text-text-main dark:text-white hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="size-10 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBy-sOiGmwVOwcYe99cZGKhYE-Te3319xb7k8LXRMj_qIzshkW8PJnJn0uHpb_j8rGtA_yyGh6CJTdsPmcgiUguuYI5wF5y9Vjz_6RcifWGsaW9NWC_1GwVHD8vy1G98p1HkjW6g5quNCONnH4egbV9knDA3kkcJK3ms1A6JiPVFr9oNZph1ChIFMEsCdXzpMxC_wzHi3792H3Knak8MbON3DM0HUq6MWauCR3ungmlzZgdwRfkRvDp-YoPv_J5VTp9vbbgvhLGtHY')" }}></div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 flex flex-col gap-8">
                    {/* Hero Section */}
                    <div className="relative bg-gradient-to-br from-primary via-primary-dark to-deep-blue rounded-3xl p-8 md:p-10 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute -right-20 -top-20 size-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -left-10 -bottom-10 size-48 bg-accent-gold/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex flex-col gap-3">
                                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                        Mission Control 🎯
                                    </h1>
                                    <p className="text-white/80 font-body text-base md:text-lg max-w-xl">
                                        Explore real-world challenges, earn Purpose Points, and unlock exclusive internship opportunities.
                                    </p>
                                </div>
                                {/* Stats Pills */}
                                <div className="flex flex-wrap gap-3">
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white">apps</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-bold text-white">{stats.total}</span>
                                            <span className="text-xs text-white/70 uppercase tracking-wider">Total</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-accent-gold/30 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-accent-gold">pending</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-bold text-white">{stats.inProgress}</span>
                                            <span className="text-xs text-white/70 uppercase tracking-wider">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search & Filters */}
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search missions by title, subject, or keyword..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body text-sm"
                            />
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex gap-2 flex-wrap">
                            {filters.map(filter => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all ${activeFilter === filter.id
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-white dark:bg-card-dark text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">{filter.icon}</span>
                                    <span className="hidden sm:inline">{filter.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Missions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredMissions.map((mission) => {
                            const colors = getColorClasses(mission.color);
                            const statusBadge = getStatusBadge(mission.status);
                            const difficultyBadge = getDifficultyBadge(mission.difficulty);

                            return (
                                <div
                                    key={mission.id}
                                    className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-card hover:shadow-soft transition-all group border border-transparent hover:border-primary/20 flex flex-col h-full"
                                >
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-2">
                                            <div className={`${colors.bg} ${colors.text} px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider`}>
                                                {mission.subject}
                                            </div>
                                            <div className={`${statusBadge.bg} ${statusBadge.text} px-2 py-1 rounded-lg text-xs font-bold`}>
                                                {statusBadge.label}
                                            </div>
                                        </div>
                                        <div className={`${colors.iconBg} rounded-full p-2 ${colors.text}`}>
                                            <span className="material-symbols-outlined text-[20px]">{mission.icon}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-display text-xl font-bold text-deep-blue dark:text-white mb-2 group-hover:text-primary transition-colors">
                                        {mission.title}
                                    </h3>
                                    <p className="font-body text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow line-clamp-2">
                                        {mission.description}
                                    </p>

                                    {/* Location & Difficulty */}
                                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">location_on</span>
                                            <span className="truncate max-w-[120px]">{mission.location}</span>
                                        </div>
                                        <div className={`${difficultyBadge.bg} ${difficultyBadge.text} px-2 py-0.5 rounded text-xs font-medium`}>
                                            {mission.difficulty}
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-accent-gold text-[18px]">bolt</span>
                                            <span className="font-bold text-accent-gold text-sm">+{mission.points} PP</span>
                                        </div>
                                        <button
                                            onClick={() => onStartMission && onStartMission(mission)}
                                            disabled={mission.status === 'completed'}
                                            className={`py-2 px-4 rounded-xl font-display font-semibold text-sm flex items-center gap-2 transition-all ${mission.status === 'completed'
                                                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                                                : mission.status === 'in-progress'
                                                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 hover:bg-amber-200'
                                                    : 'bg-gray-50 dark:bg-white/5 text-deep-blue dark:text-white hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white'
                                                }`}
                                        >
                                            {mission.status === 'completed' ? (
                                                <>
                                                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                                                    Completed
                                                </>
                                            ) : mission.status === 'in-progress' ? (
                                                <>
                                                    <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                                                    Continue
                                                </>
                                            ) : (
                                                <>
                                                    <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                                                    Start
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Empty State */}
                    {filteredMissions.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="size-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-4xl text-gray-400">search_off</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-600 dark:text-gray-400 mb-2">No missions found</h3>
                            <p className="text-gray-500 font-body max-w-md">
                                Try adjusting your filters or search query to find available missions.
                            </p>
                            <button
                                onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
                                className="mt-6 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
