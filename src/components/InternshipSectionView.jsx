import { useState } from 'react';

/*
  Internship Section View Component
  Shows available internships, matched opportunities, and application status
*/

export default function InternshipSectionView({ onBack, onViewInternship }) {
    const [activeFilter, setActiveFilter] = useState('all');

    // Mock internship data
    const internships = [
        {
            id: 'intern-1',
            role: 'Junior Data Analyst',
            company: 'King Faisal Hospital',
            location: 'Kigali, Rwanda',
            field: 'Health Informatics',
            logo: 'local_hospital',
            color: 'blue',
            status: 'matched',
            matchScore: 98,
            duration: '3 months',
            startDate: 'Feb 2025',
            description: 'Work with healthcare data to identify trends and improve patient outcomes.',
            requirements: ['Data Analysis', 'Python/R', 'Healthcare Knowledge'],
            pointsRequired: 1200,
            isNew: true
        },
        {
            id: 'intern-2',
            role: 'Software Development Intern',
            company: 'BK Tech House',
            location: 'Kigali, Rwanda',
            field: 'Fintech',
            logo: 'account_balance',
            color: 'purple',
            status: 'available',
            matchScore: 85,
            duration: '6 months',
            startDate: 'Mar 2025',
            description: 'Build and maintain mobile banking solutions serving millions of users.',
            requirements: ['JavaScript', 'Mobile Development', 'API Integration'],
            pointsRequired: 1500,
            isNew: false
        },
        {
            id: 'intern-3',
            role: 'Environmental Analyst',
            company: 'Rwanda Environment Management Authority',
            location: 'Kigali, Rwanda',
            field: 'Environment',
            logo: 'eco',
            color: 'green',
            status: 'available',
            matchScore: 72,
            duration: '4 months',
            startDate: 'Apr 2025',
            description: 'Monitor environmental data and contribute to sustainability initiatives.',
            requirements: ['Environmental Science', 'Data Collection', 'GIS'],
            pointsRequired: 1000,
            isNew: false
        },
        {
            id: 'intern-4',
            role: 'Research Assistant',
            company: 'University of Rwanda',
            location: 'Huye, Rwanda',
            field: 'Agriculture',
            logo: 'science',
            color: 'emerald',
            status: 'applied',
            matchScore: 90,
            duration: '3 months',
            startDate: 'Feb 2025',
            description: 'Support agricultural research projects focused on increasing crop yields.',
            requirements: ['Biology', 'Research Methods', 'Lab Skills'],
            pointsRequired: 800,
            isNew: false
        },
        {
            id: 'intern-5',
            role: 'UI/UX Design Intern',
            company: 'Andela Rwanda',
            location: 'Kigali, Rwanda',
            field: 'Technology',
            logo: 'palette',
            color: 'pink',
            status: 'available',
            matchScore: 65,
            duration: '6 months',
            startDate: 'May 2025',
            description: 'Design user-centered digital products for African markets.',
            requirements: ['Figma', 'User Research', 'Prototyping'],
            pointsRequired: 1400,
            isNew: true
        },
        {
            id: 'intern-6',
            role: 'Business Development Intern',
            company: 'Norrsken Kigali',
            location: 'Kigali, Rwanda',
            field: 'Business',
            logo: 'trending_up',
            color: 'orange',
            status: 'locked',
            matchScore: 0,
            duration: '4 months',
            startDate: 'Jun 2025',
            description: 'Support startup growth initiatives and investor relations.',
            requirements: ['Business Strategy', 'Communication', 'Market Research'],
            pointsRequired: 2000,
            isNew: false
        }
    ];

    const filters = [
        { id: 'all', label: 'All Internships', icon: 'apps' },
        { id: 'matched', label: 'Matched', icon: 'handshake' },
        { id: 'available', label: 'Available', icon: 'lock_open' },
        { id: 'applied', label: 'Applied', icon: 'pending' },
        { id: 'locked', label: 'Locked', icon: 'lock' }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', iconBg: 'bg-blue-100 dark:bg-blue-900/30', gradient: 'from-blue-500 to-blue-700' },
            purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-600 dark:text-purple-400', iconBg: 'bg-purple-100 dark:bg-purple-900/30', gradient: 'from-purple-500 to-purple-700' },
            green: { bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-600 dark:text-green-400', iconBg: 'bg-green-100 dark:bg-green-900/30', gradient: 'from-green-500 to-green-700' },
            emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-600 dark:text-emerald-400', iconBg: 'bg-emerald-100 dark:bg-emerald-900/30', gradient: 'from-emerald-500 to-emerald-700' },
            pink: { bg: 'bg-pink-50 dark:bg-pink-900/20', text: 'text-pink-600 dark:text-pink-400', iconBg: 'bg-pink-100 dark:bg-pink-900/30', gradient: 'from-pink-500 to-pink-700' },
            orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-600 dark:text-orange-400', iconBg: 'bg-orange-100 dark:bg-orange-900/30', gradient: 'from-orange-500 to-orange-700' }
        };
        return colorMap[color] || colorMap.blue;
    };

    const getStatusBadge = (status) => {
        const statusMap = {
            'matched': { bg: 'bg-green-100 dark:bg-green-900/20', text: 'text-green-700 dark:text-green-400', label: '🎉 Matched!', icon: 'celebration' },
            'available': { bg: 'bg-primary/10', text: 'text-primary', label: 'Available', icon: 'lock_open' },
            'applied': { bg: 'bg-amber-100 dark:bg-amber-900/20', text: 'text-amber-700 dark:text-amber-400', label: 'Applied', icon: 'schedule' },
            'locked': { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-500 dark:text-gray-400', label: 'Locked', icon: 'lock' }
        };
        return statusMap[status] || statusMap.available;
    };

    const filteredInternships = internships.filter(internship => {
        if (activeFilter === 'all') return true;
        return internship.status === activeFilter;
    });

    const currentPoints = 1250;
    const matchedCount = internships.filter(i => i.status === 'matched').length;
    const appliedCount = internships.filter(i => i.status === 'applied').length;

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
                        <span className="material-symbols-outlined text-xl">work</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight">Internship Hub</h2>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[18px]">handshake</span>
                        <span className="text-xs font-bold text-green-700 dark:text-green-400 font-body">{matchedCount} Match</span>
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
                    <div className="relative bg-gradient-to-br from-deep-blue via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                        <div className="absolute -right-20 -top-20 size-64 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute -left-10 -bottom-10 size-48 bg-accent-gold/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full text-xs font-bold uppercase tracking-wider border border-accent-gold/30">
                                            {matchedCount} New Match
                                        </span>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                        Internship Hub 💼
                                    </h1>
                                    <p className="text-white/70 font-body text-base md:text-lg max-w-xl">
                                        Your gateway to real-world experience. Complete missions to unlock exclusive internship opportunities with top organizations in Rwanda.
                                    </p>
                                </div>
                                {/* Stats Pills */}
                                <div className="flex flex-wrap gap-3">
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-primary/30 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary">bolt</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-bold text-white">{currentPoints}</span>
                                            <span className="text-xs text-white/60 uppercase tracking-wider">Your PP</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-amber-400/30 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-amber-400">pending</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-bold text-white">{appliedCount}</span>
                                            <span className="text-xs text-white/60 uppercase tracking-wider">Applied</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 flex-wrap">
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all ${activeFilter === filter.id
                                        ? 'bg-deep-blue text-white shadow-lg shadow-deep-blue/20'
                                        : 'bg-white dark:bg-card-dark text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-[18px]">{filter.icon}</span>
                                <span className="hidden sm:inline">{filter.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Internships Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredInternships.map((internship) => {
                            const colors = getColorClasses(internship.color);
                            const statusBadge = getStatusBadge(internship.status);
                            const isLocked = internship.status === 'locked';
                            const canApply = currentPoints >= internship.pointsRequired;

                            return (
                                <div
                                    key={internship.id}
                                    className={`relative bg-white dark:bg-card-dark rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all group border ${internship.status === 'matched' ? 'border-green-300 dark:border-green-700 ring-2 ring-green-100 dark:ring-green-900/30' :
                                            isLocked ? 'border-gray-200 dark:border-gray-700 opacity-70' :
                                                'border-transparent hover:border-primary/20'
                                        }`}
                                >
                                    {/* Company Header */}
                                    <div className={`relative h-24 bg-gradient-to-r ${colors.gradient} p-4 flex items-end`}>
                                        <div className="absolute inset-0 bg-black/20"></div>
                                        {internship.isNew && (
                                            <div className="absolute top-3 left-3 bg-accent-gold text-deep-blue px-2 py-0.5 rounded text-[10px] font-bold uppercase">New</div>
                                        )}
                                        <div className="absolute top-3 right-3">
                                            <div className={`${statusBadge.bg} ${statusBadge.text} px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1`}>
                                                <span className="material-symbols-outlined text-[14px]">{statusBadge.icon}</span>
                                                {statusBadge.label}
                                            </div>
                                        </div>
                                        <div className="relative z-10 flex items-center gap-3">
                                            <div className="size-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                                                <span className={`material-symbols-outlined text-2xl ${colors.text}`}>{internship.logo}</span>
                                            </div>
                                            <div className="text-white">
                                                <h3 className="font-bold text-lg leading-tight">{internship.company}</h3>
                                                <p className="text-white/80 text-xs">{internship.location}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col gap-4">
                                        <div>
                                            <div className={`inline-block ${colors.bg} ${colors.text} px-2 py-0.5 rounded text-xs font-bold mb-2`}>
                                                {internship.field}
                                            </div>
                                            <h4 className="font-display text-lg font-bold text-deep-blue dark:text-white">{internship.role}</h4>
                                            <p className="font-body text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{internship.description}</p>
                                        </div>

                                        {/* Details */}
                                        <div className="flex items-center gap-4 text-xs text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">calendar_month</span>
                                                <span>{internship.startDate}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">schedule</span>
                                                <span>{internship.duration}</span>
                                            </div>
                                        </div>

                                        {/* Requirements */}
                                        <div className="flex flex-wrap gap-1">
                                            {internship.requirements.slice(0, 3).map((req, index) => (
                                                <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-medium text-gray-600 dark:text-gray-400">
                                                    {req}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Match Score & Action */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                            {!isLocked && internship.matchScore > 0 && (
                                                <div className="flex items-center gap-2">
                                                    <div className={`size-8 rounded-full flex items-center justify-center ${internship.matchScore >= 90 ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                                                            internship.matchScore >= 70 ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' :
                                                                'bg-gray-100 dark:bg-gray-800 text-gray-500'
                                                        }`}>
                                                        <span className="font-bold text-xs">{internship.matchScore}%</span>
                                                    </div>
                                                    <span className="text-xs text-gray-500">Match Score</span>
                                                </div>
                                            )}
                                            {isLocked && (
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                                                    <span className="text-xs">{internship.pointsRequired} PP required</span>
                                                </div>
                                            )}
                                            <button
                                                onClick={() => {
                                                    if (internship.status === 'matched' && onViewInternship) {
                                                        onViewInternship(internship);
                                                    }
                                                }}
                                                disabled={isLocked}
                                                className={`py-2 px-4 rounded-xl font-display font-semibold text-sm flex items-center gap-2 transition-all ${internship.status === 'matched'
                                                        ? 'bg-green-500 text-white hover:bg-green-600'
                                                        : internship.status === 'applied'
                                                            ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                                                            : isLocked
                                                                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                                                                : 'bg-gray-50 dark:bg-white/5 text-deep-blue dark:text-white hover:bg-primary hover:text-white'
                                                    }`}
                                            >
                                                {internship.status === 'matched' ? (
                                                    <>View Match</>
                                                ) : internship.status === 'applied' ? (
                                                    <>Pending</>
                                                ) : isLocked ? (
                                                    <>
                                                        <span className="material-symbols-outlined text-[16px]">lock</span>
                                                        Locked
                                                    </>
                                                ) : (
                                                    <>Apply Now</>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Empty State */}
                    {filteredInternships.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="size-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-4xl text-gray-400">work_off</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-600 dark:text-gray-400 mb-2">No internships found</h3>
                            <p className="text-gray-500 font-body max-w-md">
                                Try adjusting your filters to see more opportunities.
                            </p>
                            <button
                                onClick={() => setActiveFilter('all')}
                                className="mt-6 px-6 py-3 rounded-xl bg-deep-blue text-white font-semibold hover:bg-primary transition-colors"
                            >
                                View All Internships
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
