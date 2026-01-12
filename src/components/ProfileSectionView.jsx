import { useState } from 'react';

/*
  Profile Section View Component
  Shows student profile, settings, and account information
*/

export default function ProfileSectionView({ onBack }) {
    const [activeTab, setActiveTab] = useState('overview');

    // Mock student profile data
    const student = {
        name: 'Keza Mugisha',
        email: 'keza.mugisha@student.edu.rw',
        phone: '+250 78 123 4567',
        location: 'Kigali, Rwanda',
        school: 'IPRC Kigali',
        program: 'Information Technology',
        year: 'Year 3',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy-sOiGmwVOwcYe99cZGKhYE-Te3319xb7k8LXRMj_qIzshkW8PJnJn0uHpb_j8rGtA_yyGh6CJTdsPmcgiUguuYI5wF5y9Vjz_6RcifWGsaW9NWC_1GwVHD8vy1G98p1HkjW6g5quNCONnH4egbV9knDA3kkcJK3ms1A6JiPVFr9oNZph1ChIFMEsCdXzpMxC_wzHi3792H3Knak8MbON3DM0HUq6MWauCR3ungmlzZgdwRfkRvDp-YoPv_J5VTp9vbbgvhLGtHY',
        level: 5,
        levelTitle: 'Aspiring Innovator',
        purposePoints: 1250,
        joinedDate: 'September 2024',
        bio: 'Passionate about technology and healthcare innovation. Currently exploring data science and health informatics to make a positive impact in Rwanda\'s healthcare sector.'
    };

    const stats = {
        missionsCompleted: 12,
        badgesEarned: 4,
        internshipsUnlocked: 1,
        totalPoints: 1250,
        ranking: 'Top 15%'
    };

    const skills = [
        { name: 'Data Analysis', level: 85, color: 'primary' },
        { name: 'Python', level: 75, color: 'blue' },
        { name: 'Health Informatics', level: 90, color: 'green' },
        { name: 'Problem Solving', level: 80, color: 'purple' },
        { name: 'Communication', level: 70, color: 'orange' },
        { name: 'SQL', level: 65, color: 'cyan' }
    ];

    const recentActivity = [
        { id: 1, type: 'mission', title: 'Completed "Healthcare Data Analysis"', date: 'Today', points: '+250 PP', icon: 'check_circle', color: 'green' },
        { id: 2, type: 'badge', title: 'Earned "Data Detective" badge', date: 'Yesterday', points: '+100 PP', icon: 'military_tech', color: 'gold' },
        { id: 3, type: 'internship', title: 'Matched with King Faisal Hospital', date: '2 days ago', points: '', icon: 'handshake', color: 'primary' },
        { id: 4, type: 'mission', title: 'Started "Mobile Money API"', date: '3 days ago', points: '', icon: 'play_arrow', color: 'blue' },
        { id: 5, type: 'level', title: 'Reached Level 5: Aspiring Innovator', date: '1 week ago', points: '+500 PP', icon: 'trending_up', color: 'purple' }
    ];

    const tabs = [
        { id: 'overview', label: 'Overview', icon: 'person' },
        { id: 'skills', label: 'Skills', icon: 'psychology' },
        { id: 'activity', label: 'Activity', icon: 'history' },
        { id: 'settings', label: 'Settings', icon: 'settings' }
    ];

    const getColorClass = (color) => {
        const colorMap = {
            primary: 'bg-primary',
            blue: 'bg-blue-500',
            green: 'bg-green-500',
            purple: 'bg-purple-500',
            orange: 'bg-orange-500',
            cyan: 'bg-cyan-500',
            gold: 'bg-amber-500'
        };
        return colorMap[color] || colorMap.primary;
    };

    const getColorTextClass = (color) => {
        const colorMap = {
            primary: 'text-primary',
            blue: 'text-blue-500',
            green: 'text-green-500',
            purple: 'text-purple-500',
            orange: 'text-orange-500',
            cyan: 'text-cyan-500',
            gold: 'text-amber-500'
        };
        return colorMap[color] || colorMap.primary;
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
                    <div className="size-8 rounded-lg bg-deep-blue flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">person</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight">My Profile</h2>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
                        <span className="text-xs font-bold text-primary font-body">{student.purposePoints} PP</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center size-10 rounded-xl bg-[#e8f3f3] dark:bg-white/10 text-text-main dark:text-white hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="size-10 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('${student.avatar}')` }}></div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-10 flex flex-col gap-8">
                    {/* Profile Hero Card */}
                    <div className="relative bg-gradient-to-br from-deep-blue via-slate-800 to-primary rounded-3xl overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                        <div className="absolute -right-20 -top-20 size-64 bg-primary/30 rounded-full blur-3xl"></div>
                        <div className="absolute -left-10 -bottom-10 size-48 bg-accent-gold/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 p-8 md:p-10">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="size-28 md:size-36 rounded-2xl bg-cover bg-center border-4 border-white/20 shadow-2xl"
                                        style={{ backgroundImage: `url('${student.avatar}')` }}>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                                        <span className="material-symbols-outlined text-sm">military_tech</span>
                                        Lv.{student.level}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h1 className="text-2xl md:text-3xl font-bold text-white">{student.name}</h1>
                                        <span className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full text-xs font-bold uppercase tracking-wider border border-accent-gold/30">
                                            {student.levelTitle}
                                        </span>
                                    </div>
                                    <p className="text-white/70 font-body mb-4 max-w-xl">{student.bio}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-white/60">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">school</span>
                                            <span>{student.school}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">book</span>
                                            <span>{student.program}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">location_on</span>
                                            <span>{student.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="flex gap-3 flex-wrap md:flex-nowrap">
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center min-w-[80px]">
                                        <span className="text-2xl font-bold text-white block">{stats.missionsCompleted}</span>
                                        <span className="text-[10px] text-white/60 uppercase tracking-wider">Missions</span>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center min-w-[80px]">
                                        <span className="text-2xl font-bold text-white block">{stats.badgesEarned}</span>
                                        <span className="text-[10px] text-white/60 uppercase tracking-wider">Badges</span>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center min-w-[80px]">
                                        <span className="text-2xl font-bold text-accent-gold block">{stats.ranking}</span>
                                        <span className="text-[10px] text-white/60 uppercase tracking-wider">Rank</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex gap-2 flex-wrap border-b border-gray-200 dark:border-gray-700 pb-4">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all ${activeTab === tab.id
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-white dark:bg-card-dark text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Personal Information */}
                            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-gray-800">
                                <h3 className="font-display text-lg font-bold text-deep-blue dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">badge</span>
                                    Personal Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                                        <span className="text-gray-500 text-sm">Full Name</span>
                                        <span className="font-medium">{student.name}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                                        <span className="text-gray-500 text-sm">Email</span>
                                        <span className="font-medium">{student.email}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                                        <span className="text-gray-500 text-sm">Phone</span>
                                        <span className="font-medium">{student.phone}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                                        <span className="text-gray-500 text-sm">Location</span>
                                        <span className="font-medium">{student.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3">
                                        <span className="text-gray-500 text-sm">Member Since</span>
                                        <span className="font-medium">{student.joinedDate}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Academic Information */}
                            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-gray-800">
                                <h3 className="font-display text-lg font-bold text-deep-blue dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">school</span>
                                    Academic Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                                        <span className="text-gray-500 text-sm">Institution</span>
                                        <span className="font-medium">{student.school}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                                        <span className="text-gray-500 text-sm">Program</span>
                                        <span className="font-medium">{student.program}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                                        <span className="text-gray-500 text-sm">Year</span>
                                        <span className="font-medium">{student.year}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3">
                                        <span className="text-gray-500 text-sm">Current Level</span>
                                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">
                                            Level {student.level}: {student.levelTitle}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Purpose Points Summary */}
                            <div className="lg:col-span-2 bg-gradient-to-r from-primary/10 to-accent-gold/10 rounded-2xl p-6 border border-primary/20">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-deep-blue dark:text-white mb-1">Purpose Points Balance</h3>
                                        <p className="text-gray-500 text-sm">Keep completing missions to earn more points and unlock opportunities!</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="size-12 rounded-full bg-accent-gold/20 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-accent-gold text-2xl">bolt</span>
                                            </div>
                                            <div>
                                                <span className="text-3xl font-bold text-deep-blue dark:text-white">{student.purposePoints}</span>
                                                <span className="text-gray-500 text-sm ml-1">PP</span>
                                            </div>
                                        </div>
                                        <button className="px-4 py-2 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-colors">
                                            View History
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'skills' && (
                        <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-gray-800">
                            <h3 className="font-display text-lg font-bold text-deep-blue dark:text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">psychology</span>
                                Skills & Competencies
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {skills.map((skill, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-deep-blue dark:text-white">{skill.name}</span>
                                            <span className={`font-bold text-sm ${getColorTextClass(skill.color)}`}>{skill.level}%</span>
                                        </div>
                                        <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all ${getColorClass(skill.color)}`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-primary text-sm align-middle mr-1">info</span>
                                    Skills are calculated based on your mission performance, badge achievements, and internship activities.
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'activity' && (
                        <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-gray-800">
                            <h3 className="font-display text-lg font-bold text-deep-blue dark:text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">history</span>
                                Recent Activity
                            </h3>
                            <div className="space-y-4">
                                {recentActivity.map((activity) => (
                                    <div key={activity.id} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <div className={`size-10 rounded-full flex items-center justify-center ${activity.color === 'gold' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' :
                                                activity.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                                                    activity.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' :
                                                        activity.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' :
                                                            'bg-primary/10 text-primary'
                                            }`}>
                                            <span className="material-symbols-outlined">{activity.icon}</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-deep-blue dark:text-white">{activity.title}</p>
                                            <p className="text-xs text-gray-500">{activity.date}</p>
                                        </div>
                                        {activity.points && (
                                            <span className="font-bold text-accent-gold text-sm">{activity.points}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="space-y-6">
                            {/* Account Settings */}
                            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-gray-800">
                                <h3 className="font-display text-lg font-bold text-deep-blue dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">manage_accounts</span>
                                    Account Settings
                                </h3>
                                <div className="space-y-4">
                                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-gray-500">edit</span>
                                            <span className="font-medium">Edit Profile</span>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                                    </button>
                                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-gray-500">lock</span>
                                            <span className="font-medium">Change Password</span>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                                    </button>
                                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-gray-500">notifications</span>
                                            <span className="font-medium">Notification Preferences</span>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                                    </button>
                                </div>
                            </div>

                            {/* Preferences */}
                            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-gray-800">
                                <h3 className="font-display text-lg font-bold text-deep-blue dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">tune</span>
                                    Preferences
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-gray-500">dark_mode</span>
                                            <span className="font-medium">Dark Mode</span>
                                        </div>
                                        <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-gray-500">translate</span>
                                            <span className="font-medium">Language</span>
                                        </div>
                                        <span className="text-gray-500">English</span>
                                    </div>
                                </div>
                            </div>

                            {/* Danger Zone */}
                            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-red-200 dark:border-red-900/30">
                                <h3 className="font-display text-lg font-bold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined">warning</span>
                                    Danger Zone
                                </h3>
                                <div className="space-y-4">
                                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-red-600 dark:text-red-400">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined">logout</span>
                                            <span className="font-medium">Sign Out</span>
                                        </div>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
