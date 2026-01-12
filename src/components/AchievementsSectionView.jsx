import { useState } from 'react';

/*
  Achievements Section View Component
  Shows all achievements, badges, and progress tracking
*/

export default function AchievementsSectionView({ onBack }) {
    const [activeTab, setActiveTab] = useState('all');

    // Mock achievements data
    const achievements = [
        {
            id: 'badge-1',
            title: 'First Mission Complete',
            description: 'Successfully completed your first mission and demonstrated problem-solving skills.',
            icon: 'rocket_launch',
            color: 'primary',
            earned: true,
            earnedDate: 'Dec 15, 2024',
            points: 100,
            rarity: 'Common'
        },
        {
            id: 'badge-2',
            title: 'Health Sector Strategist',
            description: 'Demonstrated exceptional analytical skills in health informatics missions.',
            icon: 'health_and_safety',
            color: 'gold',
            earned: true,
            earnedDate: 'Jan 10, 2025',
            points: 500,
            rarity: 'Rare'
        },
        {
            id: 'badge-3',
            title: 'Data Detective',
            description: 'Analyzed complex datasets to uncover insights that led to actionable recommendations.',
            icon: 'analytics',
            color: 'blue',
            earned: true,
            earnedDate: 'Jan 5, 2025',
            points: 250,
            rarity: 'Uncommon'
        },
        {
            id: 'badge-4',
            title: 'Green Innovator',
            description: 'Proposed sustainable solutions for environmental challenges in Rwanda.',
            icon: 'eco',
            color: 'green',
            earned: true,
            earnedDate: 'Dec 20, 2024',
            points: 300,
            rarity: 'Uncommon'
        },
        {
            id: 'badge-5',
            title: 'Tech Pioneer',
            description: 'Demonstrated excellence in fintech or technology-related missions.',
            icon: 'computer',
            color: 'purple',
            earned: false,
            progress: 60,
            pointsRequired: 400,
            rarity: 'Rare'
        },
        {
            id: 'badge-6',
            title: 'Community Leader',
            description: 'Helped mentor other students and contributed to community discussions.',
            icon: 'groups',
            color: 'orange',
            earned: false,
            progress: 30,
            pointsRequired: 350,
            rarity: 'Uncommon'
        },
        {
            id: 'badge-7',
            title: 'Master Strategist',
            description: 'Completed 10 advanced-level missions with outstanding performance.',
            icon: 'military_tech',
            color: 'gold',
            earned: false,
            progress: 20,
            pointsRequired: 1000,
            rarity: 'Legendary'
        },
        {
            id: 'badge-8',
            title: 'Perfect Score',
            description: 'Achieved 100% on a mission assessment.',
            icon: 'stars',
            color: 'cyan',
            earned: false,
            progress: 85,
            pointsRequired: 200,
            rarity: 'Rare'
        }
    ];

    const milestones = [
        { level: 1, title: 'Curious Explorer', pointsRequired: 0, completed: true },
        { level: 2, title: 'Active Learner', pointsRequired: 200, completed: true },
        { level: 3, title: 'Rising Star', pointsRequired: 500, completed: true },
        { level: 4, title: 'Problem Solver', pointsRequired: 800, completed: true },
        { level: 5, title: 'Aspiring Innovator', pointsRequired: 1200, completed: true, current: true },
        { level: 6, title: 'Industry Ready', pointsRequired: 1600, completed: false },
        { level: 7, title: 'Expert Contributor', pointsRequired: 2000, completed: false },
        { level: 8, title: 'Master Innovator', pointsRequired: 2500, completed: false }
    ];

    const tabs = [
        { id: 'all', label: 'All Badges', icon: 'apps' },
        { id: 'earned', label: 'Earned', icon: 'verified' },
        { id: 'in-progress', label: 'In Progress', icon: 'pending' }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            primary: { bg: 'bg-primary/10', text: 'text-primary', gradient: 'from-primary to-primary-dark' },
            gold: { bg: 'bg-amber-100 dark:bg-amber-900/20', text: 'text-amber-600 dark:text-amber-400', gradient: 'from-yellow-400 to-amber-600' },
            blue: { bg: 'bg-blue-100 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', gradient: 'from-blue-400 to-blue-600' },
            green: { bg: 'bg-green-100 dark:bg-green-900/20', text: 'text-green-600 dark:text-green-400', gradient: 'from-green-400 to-green-600' },
            purple: { bg: 'bg-purple-100 dark:bg-purple-900/20', text: 'text-purple-600 dark:text-purple-400', gradient: 'from-purple-400 to-purple-600' },
            orange: { bg: 'bg-orange-100 dark:bg-orange-900/20', text: 'text-orange-600 dark:text-orange-400', gradient: 'from-orange-400 to-orange-600' },
            cyan: { bg: 'bg-cyan-100 dark:bg-cyan-900/20', text: 'text-cyan-600 dark:text-cyan-400', gradient: 'from-cyan-400 to-cyan-600' }
        };
        return colorMap[color] || colorMap.primary;
    };

    const getRarityBadge = (rarity) => {
        const rarityMap = {
            'Common': { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-600 dark:text-gray-400' },
            'Uncommon': { bg: 'bg-green-100 dark:bg-green-900/20', text: 'text-green-600 dark:text-green-400' },
            'Rare': { bg: 'bg-blue-100 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400' },
            'Legendary': { bg: 'bg-amber-100 dark:bg-amber-900/20', text: 'text-amber-600 dark:text-amber-400' }
        };
        return rarityMap[rarity] || rarityMap.Common;
    };

    const filteredAchievements = achievements.filter(achievement => {
        if (activeTab === 'all') return true;
        if (activeTab === 'earned') return achievement.earned;
        if (activeTab === 'in-progress') return !achievement.earned;
        return true;
    });

    const totalPoints = achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0);
    const earnedCount = achievements.filter(a => a.earned).length;

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
                    <div className="size-8 rounded-lg bg-accent-gold flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">trophy</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight">Achievements</h2>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-accent-gold/10 rounded-full border border-accent-gold/20">
                        <span className="material-symbols-outlined text-accent-gold text-[18px]">bolt</span>
                        <span className="text-xs font-bold text-accent-gold font-body">{totalPoints} PP Earned</span>
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
                    <div className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-3xl p-8 md:p-10 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute -right-20 -top-20 size-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -left-10 -bottom-10 size-48 bg-yellow-300/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex flex-col gap-3">
                                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                        Achievement Hall 🏆
                                    </h1>
                                    <p className="text-white/80 font-body text-base md:text-lg max-w-xl">
                                        Collect badges, earn rewards, and showcase your journey to becoming an industry-ready innovator.
                                    </p>
                                </div>
                                {/* Stats Pills */}
                                <div className="flex flex-wrap gap-3">
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white">verified</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-bold text-white">{earnedCount}</span>
                                            <span className="text-xs text-white/70 uppercase tracking-wider">Badges</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-yellow-300/30 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-yellow-300">bolt</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-bold text-white">{totalPoints}</span>
                                            <span className="text-xs text-white/70 uppercase tracking-wider">Points</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Level Progress */}
                    <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-display text-lg font-bold text-deep-blue dark:text-white">Level Progress</h3>
                            <span className="text-sm text-primary font-medium">Level 5 → Level 6</span>
                        </div>
                        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                            {milestones.map((milestone, index) => (
                                <div key={milestone.level} className="flex flex-col items-center gap-1">
                                    <div className={`relative size-10 rounded-full flex items-center justify-center transition-all ${milestone.current ? 'bg-primary text-white ring-4 ring-primary/20 scale-110' :
                                            milestone.completed ? 'bg-primary/20 text-primary' :
                                                'bg-gray-100 dark:bg-gray-800 text-gray-400'
                                        }`}>
                                        {milestone.completed ? (
                                            <span className="material-symbols-outlined text-lg">check</span>
                                        ) : (
                                            <span className="font-bold text-sm">{milestone.level}</span>
                                        )}
                                        {milestone.current && (
                                            <div className="absolute -top-1 -right-1 size-4 bg-accent-gold rounded-full flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white text-[10px]">star</span>
                                            </div>
                                        )}
                                    </div>
                                    <span className={`text-[10px] font-medium text-center max-w-[60px] ${milestone.current ? 'text-primary' : 'text-gray-400'}`}>
                                        {milestone.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full transition-all" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-sm text-gray-500 mt-3 text-center">350 more Purpose Points to reach Level 6: Industry Ready</p>
                    </div>

                    {/* Tab Filters */}
                    <div className="flex gap-2 flex-wrap">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all ${activeTab === tab.id
                                        ? 'bg-accent-gold text-white shadow-lg shadow-accent-gold/20'
                                        : 'bg-white dark:bg-card-dark text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Achievements Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {filteredAchievements.map((achievement) => {
                            const colors = getColorClasses(achievement.color);
                            const rarityBadge = getRarityBadge(achievement.rarity);

                            return (
                                <div
                                    key={achievement.id}
                                    className={`relative bg-white dark:bg-card-dark rounded-2xl p-6 shadow-card hover:shadow-soft transition-all group border ${achievement.earned ? 'border-transparent hover:border-primary/20' : 'border-dashed border-gray-300 dark:border-gray-700 opacity-80'
                                        } flex flex-col items-center text-center`}
                                >
                                    {/* Rarity Badge */}
                                    <div className={`absolute top-4 right-4 ${rarityBadge.bg} ${rarityBadge.text} px-2 py-0.5 rounded text-[10px] font-bold uppercase`}>
                                        {achievement.rarity}
                                    </div>

                                    {/* Badge Icon */}
                                    <div className={`relative size-20 rounded-full flex items-center justify-center mb-4 ${achievement.earned
                                            ? `bg-gradient-to-br ${colors.gradient} shadow-lg`
                                            : 'bg-gray-100 dark:bg-gray-800'
                                        }`}>
                                        <span className={`material-symbols-outlined text-3xl ${achievement.earned ? 'text-white' : 'text-gray-400'}`}>
                                            {achievement.icon}
                                        </span>
                                        {achievement.earned && (
                                            <div className="absolute -bottom-1 -right-1 size-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-card-dark">
                                                <span className="material-symbols-outlined text-white text-sm">check</span>
                                            </div>
                                        )}
                                        {!achievement.earned && (
                                            <div className="absolute -bottom-1 -right-1 size-6 bg-gray-400 rounded-full flex items-center justify-center border-2 border-white dark:border-card-dark">
                                                <span className="material-symbols-outlined text-white text-sm">lock</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3 className={`font-display text-lg font-bold mb-2 ${achievement.earned ? 'text-deep-blue dark:text-white' : 'text-gray-500'}`}>
                                        {achievement.title}
                                    </h3>
                                    <p className="font-body text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                                        {achievement.description}
                                    </p>

                                    {/* Progress or Earned Info */}
                                    {achievement.earned ? (
                                        <div className="mt-auto flex flex-col items-center gap-2">
                                            <div className="flex items-center gap-1 text-accent-gold">
                                                <span className="material-symbols-outlined text-[16px]">bolt</span>
                                                <span className="font-bold text-sm">+{achievement.points} PP</span>
                                            </div>
                                            <span className="text-xs text-gray-400">Earned {achievement.earnedDate}</span>
                                        </div>
                                    ) : (
                                        <div className="mt-auto w-full">
                                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                                                <span>Progress</span>
                                                <span>{achievement.progress}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary/50 rounded-full transition-all"
                                                    style={{ width: `${achievement.progress}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs text-gray-400 mt-2 block">+{achievement.pointsRequired} PP on completion</span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}
