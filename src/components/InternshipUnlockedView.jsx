import { useState } from 'react';

/*
  Internship Unlocked View Component
  Shows when a student has unlocked an internship placement
  Includes: Voucher/Ticket, Talent Map radar chart, Career Timeline, and Badge Showcase
*/

export default function InternshipUnlockedView({ internship, onBack, onAccept }) {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex overflow-hidden">
            {/* Side Navigation */}
            <aside className="hidden lg:flex w-72 flex-col border-r border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark h-screen sticky top-0 z-20 transition-colors duration-300">
                <div className="p-6 pb-2">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">I</div>
                        <h1 className="text-xl font-bold tracking-tight font-display">IKIRARO</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-slate-500 dark:text-slate-400"
                        >
                            <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
                            <span className="font-medium">Dashboard</span>
                        </button>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-slate-500 dark:text-slate-400" href="#">
                            <span className="material-symbols-outlined group-hover:text-primary transition-colors">flag</span>
                            <span className="font-medium">Missions</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary dark:text-primary transition-colors font-medium" href="#">
                            <span className="material-symbols-outlined">rocket_launch</span>
                            <span>Internship Match</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-slate-500 dark:text-slate-400" href="#">
                            <span className="material-symbols-outlined group-hover:text-primary transition-colors">school</span>
                            <span className="font-medium">Career Path</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group text-slate-500 dark:text-slate-400" href="#">
                            <span className="material-symbols-outlined group-hover:text-primary transition-colors">person</span>
                            <span className="font-medium">Profile</span>
                        </a>
                    </div>
                </div>
                <div className="mt-auto p-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8kaAPGs9m70SbMOfN_zWgnkhgULh_FElJv7SS8IIqxSGIt8m-KE7Ivgl7CcW28Ft9BRtq4ACdvwbRNYivyLfbSZtAwbQFq5M-1xjhKskWTOybQzro4SZdTwixCLC7oyVCvN4oK5S-OmypqAgSMHYUNn5H3oxh-HUTMt47kYwQy9H0Wh15uDlHFmWPko-dfp9ealUtfayjHUcDC1H37eGeaJC5xTuLHKHPxxXze911i7B1wYLN-rNVKDcfhqXWaApGF_94fKp-vM')" }}></div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Keza M.</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Aspiring Innovator</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-y-auto relative scroll-smooth">
                {/* Top Mobile Header */}
                <header className="lg:hidden flex items-center justify-between p-4 bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">I</div>
                        <span className="font-bold font-display">IKIRARO</span>
                    </div>
                    <button onClick={onBack} className="p-2 text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                </header>

                <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:p-10 flex flex-col gap-8">
                    {/* Page Heading & Celebration */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/20 text-yellow-700 dark:text-yellow-400 text-xs font-bold mb-3 border border-accent-gold/30">
                                <span className="material-symbols-outlined text-[16px]">celebration</span>
                                MILESTONE UNLOCKED
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white mb-2">
                                Match Found! <span className="text-primary">🎉</span>
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
                                Congratulations, Keza! Your performance in <span className="font-semibold text-slate-700 dark:text-slate-300">Health Informatics</span> has secured you a spot.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <span className="text-sm font-medium text-slate-400">Application ID: #RW-2024-KFH</span>
                        </div>
                    </div>

                    {/* Split Layout: Voucher & Talent Map */}
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                        {/* LEFT: The Golden Ticket / Voucher */}
                        <div className="xl:col-span-7 flex flex-col">
                            <div className="relative w-full bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft overflow-hidden flex flex-col md:flex-row min-h-[320px] border border-slate-100 dark:border-slate-800">
                                {/* Left side of ticket */}
                                <div className="flex-1 p-6 md:p-8 flex flex-col relative z-10">
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-slate-100 p-2 flex items-center justify-center">
                                            <div className="text-primary">
                                                <span className="material-symbols-outlined text-4xl">local_hospital</span>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-xs font-bold uppercase tracking-wider border border-accent-green/20 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">verified</span>
                                            Verified
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-1">Internship Voucher</h3>
                                        <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white leading-tight mb-2">
                                            {internship?.role || "Junior Data Analyst"}
                                        </h2>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">
                                            {internship?.company || "King Faisal Hospital"} • Kigali, Rwanda
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={onAccept}
                                                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                                            >
                                                <span>Accept Placement</span>
                                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </button>
                                            <button className="px-4 py-3 rounded-xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all">
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Ticket Perforation Line */}
                                <div className="relative hidden md:flex flex-col items-center justify-center w-8">
                                    <div className="absolute inset-y-0 left-1/2 border-l-2 border-dashed border-slate-300 dark:border-slate-600 h-[85%] my-auto top-0 bottom-0"></div>
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800"></div>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800"></div>
                                </div>
                                {/* Right side of ticket (QR) */}
                                <div className="w-full md:w-64 bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800">
                                    <div className="bg-white p-3 rounded-xl shadow-sm mb-3">
                                        <div className="w-32 h-32 bg-slate-900 flex flex-wrap content-start p-1 gap-0.5">
                                            <div className="w-1/2 h-1/2 border-4 border-white bg-slate-900 box-border relative">
                                                <div className="absolute inset-2 bg-white"></div>
                                                <div className="absolute inset-3 bg-slate-900"></div>
                                            </div>
                                            <div className="w-1/2 h-1/2 border-4 border-white bg-slate-900 box-border relative">
                                                <div className="absolute inset-2 bg-white"></div>
                                                <div className="absolute inset-3 bg-slate-900"></div>
                                            </div>
                                            <div className="w-full h-1/2 flex flex-wrap">
                                                <div className="w-1/4 h-1/2 bg-white"></div><div className="w-1/4 h-1/2 bg-slate-900"></div><div className="w-1/4 h-1/2 bg-white"></div><div className="w-1/4 h-1/2 bg-slate-900"></div>
                                                <div className="w-1/4 h-1/2 bg-slate-900"></div><div className="w-1/4 h-1/2 bg-white"></div><div className="w-1/4 h-1/2 bg-slate-900"></div><div className="w-1/4 h-1/2 bg-white"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-400 font-mono uppercase tracking-widest mb-1">Scan at Reception</p>
                                    <p className="text-xs font-bold text-slate-600 dark:text-slate-300">Valid until: Sept 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Talent Map */}
                        <div className="xl:col-span-5 flex flex-col">
                            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft p-6 border border-slate-100 dark:border-slate-800 h-full">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold font-display text-lg text-slate-800 dark:text-white">Talent Map</h3>
                                    <div className="flex items-center gap-3 text-xs font-medium">
                                        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> You</div>
                                        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></span> Market Avg</div>
                                    </div>
                                </div>
                                {/* Custom CSS Radar Chart */}
                                <div className="relative w-full aspect-square max-h-[260px] mx-auto flex items-center justify-center my-4">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                                        {/* Grid Levels */}
                                        <polygon className="text-slate-200 dark:text-slate-700" fill="none" points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="currentColor" strokeWidth="0.5"></polygon>
                                        <polygon className="text-slate-200 dark:text-slate-700" fill="none" points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5" stroke="currentColor" strokeWidth="0.5"></polygon>
                                        {/* Axis Lines */}
                                        <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="10"></line>
                                        <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="90" y1="50" y2="30"></line>
                                        <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="90" y1="50" y2="70"></line>
                                        <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="90"></line>
                                        <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="10" y1="50" y2="70"></line>
                                        <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="10" y1="50" y2="30"></line>
                                        {/* Market Data (Gray) */}
                                        <polygon className="text-slate-400 dark:text-slate-500" fill="currentColor" fillOpacity="0.1" points="50,30 80,45 65,70 50,70 25,65 30,45" stroke="currentColor" strokeWidth="1.5"></polygon>
                                        {/* User Data (Primary Color) */}
                                        <polygon className="text-primary radar-area" fill="currentColor" fillOpacity="0.4" points="50,15 85,35 80,65 50,80 35,65 20,40" stroke="currentColor" strokeWidth="2"></polygon>
                                        {/* Data Points */}
                                        <circle className="text-primary fill-current" cx="50" cy="15" r="2"></circle>
                                        <circle className="text-primary fill-current" cx="85" cy="35" r="2"></circle>
                                        <circle className="text-primary fill-current" cx="80" cy="65" r="2"></circle>
                                        <circle className="text-primary fill-current" cx="50" cy="80" r="2"></circle>
                                        <circle className="text-primary fill-current" cx="35" cy="65" r="2"></circle>
                                        <circle className="text-primary fill-current" cx="20" cy="40" r="2"></circle>
                                    </svg>
                                    {/* Labels */}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-surface-light dark:bg-surface-dark px-2 py-0.5 text-[10px] font-bold text-slate-500 shadow-sm rounded border border-slate-100 dark:border-slate-700">Analytics</div>
                                    <div className="absolute top-1/4 -right-2 bg-surface-light dark:bg-surface-dark px-2 py-0.5 text-[10px] font-bold text-slate-500 shadow-sm rounded border border-slate-100 dark:border-slate-700">Health Policy</div>
                                    <div className="absolute bottom-1/4 -right-2 bg-surface-light dark:bg-surface-dark px-2 py-0.5 text-[10px] font-bold text-slate-500 shadow-sm rounded border border-slate-100 dark:border-slate-700">Ethics</div>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-surface-light dark:bg-surface-dark px-2 py-0.5 text-[10px] font-bold text-slate-500 shadow-sm rounded border border-slate-100 dark:border-slate-700">Coding</div>
                                    <div className="absolute bottom-1/4 -left-4 bg-surface-light dark:bg-surface-dark px-2 py-0.5 text-[10px] font-bold text-slate-500 shadow-sm rounded border border-slate-100 dark:border-slate-700">Comms</div>
                                    <div className="absolute top-1/4 -left-2 bg-surface-light dark:bg-surface-dark px-2 py-0.5 text-[10px] font-bold text-slate-500 shadow-sm rounded border border-slate-100 dark:border-slate-700">English</div>
                                </div>
                                <div className="mt-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                        <span className="text-primary font-bold">Insight:</span> Your data analysis skills are in the top 10% of applicants for the Kigali private health sector.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Career Timeline & Badges */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Timeline Section */}
                        <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft p-6 md:p-8 border border-slate-100 dark:border-slate-800">
                            <h3 className="font-bold font-display text-xl text-slate-900 dark:text-white mb-6">Your Journey</h3>
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-slate-700 -translate-y-1/2 hidden md:block rounded-full z-0"></div>
                                <div className="absolute top-1/2 left-0 w-3/4 h-1 bg-gradient-to-r from-accent-green via-primary to-primary -translate-y-1/2 hidden md:block rounded-full z-0 opacity-40"></div>
                                <div className="flex flex-col md:flex-row justify-between relative z-10 gap-6 md:gap-0">
                                    {/* Step 1 */}
                                    <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 group">
                                        <div className="w-10 h-10 rounded-full bg-accent-green text-white flex items-center justify-center shadow-lg shadow-accent-green/30 ring-4 ring-white dark:ring-surface-dark">
                                            <span className="material-symbols-outlined text-xl">check</span>
                                        </div>
                                        <div className="text-left md:text-center">
                                            <p className="font-bold text-sm text-slate-900 dark:text-white">Coursework</p>
                                            <p className="text-xs text-slate-500">Completed May 12</p>
                                        </div>
                                    </div>
                                    {/* Step 2 */}
                                    <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 group">
                                        <div className="w-10 h-10 rounded-full bg-accent-green text-white flex items-center justify-center shadow-lg shadow-accent-green/30 ring-4 ring-white dark:ring-surface-dark">
                                            <span className="material-symbols-outlined text-xl">check</span>
                                        </div>
                                        <div className="text-left md:text-center">
                                            <p className="font-bold text-sm text-slate-900 dark:text-white">Skill Assessment</p>
                                            <p className="text-xs text-slate-500">Score: 98/100</p>
                                        </div>
                                    </div>
                                    {/* Step 3 (Badge Unlocked) */}
                                    <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 group">
                                        <div className="w-12 h-12 rounded-full bg-accent-gold text-white flex items-center justify-center shadow-lg shadow-accent-gold/30 ring-4 ring-white dark:ring-surface-dark transform md:-translate-y-1">
                                            <span className="material-symbols-outlined text-2xl">military_tech</span>
                                        </div>
                                        <div className="text-left md:text-center">
                                            <p className="font-bold text-sm text-accent-gold dark:text-yellow-400">Badge Earned</p>
                                            <p className="text-xs text-slate-500">Health Strategist</p>
                                        </div>
                                    </div>
                                    {/* Step 4 (Current) */}
                                    <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 group">
                                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-white dark:ring-surface-dark animate-pulse">
                                            <span className="material-symbols-outlined text-xl">lock_open</span>
                                        </div>
                                        <div className="text-left md:text-center">
                                            <p className="font-bold text-sm text-slate-900 dark:text-white">Internship</p>
                                            <p className="text-xs text-primary font-bold">Unlocked Today!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Badge Showcase */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-soft p-6 border border-slate-700 relative overflow-hidden text-white flex flex-col justify-center items-center text-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold opacity-10 blur-3xl rounded-full pointer-events-none"></div>
                            <div className="relative z-10 mb-4">
                                <div className="w-20 h-20 bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl mx-auto border-4 border-yellow-200/20">
                                    <span className="material-symbols-outlined text-4xl text-white drop-shadow-md">health_and_safety</span>
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-800">New!</div>
                            </div>
                            <h4 className="font-display font-bold text-lg mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Health Sector Strategist</h4>
                            <p className="text-xs text-slate-400 mb-4">Rare Badge • Top 5% of Students</p>
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                                <span className="material-symbols-outlined text-accent-gold text-sm">stars</span>
                                <span className="text-xs font-bold font-mono text-accent-gold">+500 Purpose Points</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
