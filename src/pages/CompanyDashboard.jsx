import { useState } from 'react';
import CreateMissionModal from '../components/CreateMissionModal';
import { getCompanyMissions } from '../services/missionsStore';

/*
  Translated from user-provided HTML to React Component.
  Company Dashboard - Talent Map Overview
*/

export default function CompanyDashboard() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showCreateMissionModal, setShowCreateMissionModal] = useState(false);
    const [companyMissions, setCompanyMissions] = useState(getCompanyMissions());

    const handleMissionCreated = (mission) => {
        setCompanyMissions(getCompanyMissions());
        // Show success feedback
        console.log('Mission created:', mission);
    };


    return (
        <>
            <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-200 relative">
                {/* Mobile Menu Button - Only visible on mobile */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark"
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

                {/* Sidebar */}
                <aside className={`
                h-full flex-shrink-0 border-r border-border-light dark:border-border-dark flex flex-col bg-surface-light dark:bg-surface-dark transition-all duration-300
                fixed lg:relative z-40
                ${mobileMenuOpen ? 'left-0 w-64' : '-left-64 lg:left-0'}
                ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-64'}
            `}>
                    <div className="p-4 lg:p-6 flex flex-col h-full justify-between">
                        <div className="flex flex-col gap-8">
                            {/* Logo & Collapse Toggle */}
                            <div className="flex gap-3 items-center justify-between">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-primary/20 flex items-center justify-center rounded-lg size-10 text-primary shrink-0">
                                        <span className="material-symbols-outlined text-2xl">auto_awesome_mosaic</span>
                                    </div>
                                    <div className={`flex flex-col ${sidebarCollapsed ? 'lg:hidden' : ''} ${mobileMenuOpen ? 'flex' : 'hidden lg:flex'}`}>
                                        <h1 className="text-lg font-bold leading-none tracking-tight">IKIRARO</h1>
                                        <p className="text-text-sub-light dark:text-text-sub-dark text-xs font-medium">Enterprise Portal</p>
                                    </div>
                                </div>
                                {/* Collapse Toggle - Desktop Only */}
                                <button
                                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                                    className="hidden lg:flex p-1.5 rounded-lg hover:bg-border-light dark:hover:bg-border-dark text-text-sub-light transition-colors"
                                    title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {sidebarCollapsed ? 'chevron_right' : 'chevron_left'}
                                    </span>
                                </button>
                            </div>
                            {/* Nav Items */}
                            <nav className="flex flex-col gap-2">
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sub-light dark:text-text-sub-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors group" href="#">
                                    <span className="material-symbols-outlined text-[22px] group-hover:text-primary transition-colors">dashboard</span>
                                    <span className={`text-sm font-medium ${sidebarCollapsed ? 'lg:hidden' : ''} ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>Dashboard</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sub-light dark:text-text-sub-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors group" href="#">
                                    <span className="material-symbols-outlined text-[22px] group-hover:text-primary transition-colors">target</span>
                                    <span className={`text-sm font-medium ${sidebarCollapsed ? 'lg:hidden' : ''} ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>Missions</span>
                                </a>
                                {/* Active Item */}
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined text-[22px]">map</span>
                                    <span className={`text-sm font-bold ${sidebarCollapsed ? 'lg:hidden' : ''} ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>Talent Map</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sub-light dark:text-text-sub-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors group" href="#">
                                    <span className="material-symbols-outlined text-[22px] group-hover:text-primary transition-colors">description</span>
                                    <span className={`text-sm font-medium ${sidebarCollapsed ? 'lg:hidden' : ''} ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>Requests</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sub-light dark:text-text-sub-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors group" href="#">
                                    <span className="material-symbols-outlined text-[22px] group-hover:text-primary transition-colors">bar_chart</span>
                                    <span className={`text-sm font-medium ${sidebarCollapsed ? 'lg:hidden' : ''} ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>Analytics</span>
                                </a>
                            </nav>
                        </div>
                        {/* Bottom Action - Hide when collapsed */}
                        <div className={`bg-gradient-to-br from-background-light to-border-light dark:from-background-dark dark:to-surface-dark rounded-xl p-4 border border-border-light dark:border-border-dark ${sidebarCollapsed ? 'lg:hidden' : ''} ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
                            <div className="flex items-center gap-2 mb-2 text-primary">
                                <span className="material-symbols-outlined">rocket_launch</span>
                                <span className="text-xs font-bold uppercase tracking-wider">New Feature</span>
                            </div>
                            <p className="text-xs text-text-sub-light dark:text-text-sub-dark mb-3">Sponsor a localized mission to boost your talent pipeline.</p>
                            <button onClick={() => setShowCreateMissionModal(true)} className="w-full bg-primary hover:bg-primary/90 text-white text-xs font-bold py-2 rounded-lg transition-colors">Create Mission</button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                    {/* Top Header */}
                    <header className="h-16 border-b border-border-light dark:border-border-dark flex items-center justify-between px-4 lg:px-8 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md sticky top-0 z-20">
                        <div className="flex items-center gap-4 pl-10 lg:pl-0">
                            <span className="material-symbols-outlined text-text-sub-light">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-sm w-32 sm:w-64 text-text-main-light dark:text-text-main-dark placeholder:text-text-sub-light dark:placeholder:text-text-sub-dark p-0 outline-none" placeholder="Search skills, regions..." type="text" />
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <button className="relative p-2 text-text-main-light dark:text-text-main-dark hover:bg-border-light dark:hover:bg-border-dark rounded-full transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
                            </button>
                            <div className="h-8 w-[1px] bg-border-light dark:bg-border-dark mx-1 hidden sm:block"></div>
                            <div className="flex items-center gap-3 cursor-pointer">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-bold leading-none">Bank of Kigali</p>
                                    <p className="text-xs text-text-sub-light dark:text-text-sub-dark mt-1">Recruitment Admin</p>
                                </div>
                                <div className="size-9 rounded-full bg-cover bg-center border border-border-light dark:border-border-dark" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHjVxl-BXMuzQG1tNWgyisOmrQ4lPXiSDTw3mkW-JMP01IP-k0uuqfbIUhm-MxCJtp69_4hDFw7wakWMSbj7G1uiei9jyBwBlgjlNQ4ANafUC0DkxMWLHGa1aYLJCBt5AZSjoG_Y3Ubp10ixYw1ZBaOtg6C13OMIer7yVJkh2n_0nPQ9ylkfpD63uiWuj4JJnDKa6LxXBq1rqTsoX0KkYE0OPGPCDkZKuGRSZL_mXqPqZ1ySE70cLF_t3TC4rMimMjx6WXPveNZuk')" }}></div>
                            </div>
                        </div>
                    </header>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-6">
                        {/* Page Heading & Actions */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Talent Map Overview</h2>
                                <p className="text-text-sub-light dark:text-text-sub-dark mt-1">Visualize and recruit the top 1% of Rwanda's emerging talent.</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg text-sm font-medium hover:bg-border-light dark:hover:bg-border-dark transition-colors">
                                    <span className="material-symbols-outlined text-lg">download</span>
                                    Export Report
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
                                    <span className="material-symbols-outlined text-lg">add</span>
                                    New Campaign
                                </button>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-text-sub-light dark:text-text-sub-dark text-sm font-medium">Total Candidates</span>
                                    <span className="bg-primary/10 text-primary p-1.5 rounded-lg material-symbols-outlined text-lg">groups</span>
                                </div>
                                <div className="flex items-baseline gap-2 mt-2">
                                    <span className="text-3xl font-bold">1,240</span>
                                    <span className="text-xs font-bold text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                        <span className="material-symbols-outlined text-xs">trending_up</span> 12%
                                    </span>
                                </div>
                            </div>
                            <div className="p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-text-sub-light dark:text-text-sub-dark text-sm font-medium">Internship Ready</span>
                                    <span className="bg-[#4ADF7F]/10 text-[#4ADF7F] p-1.5 rounded-lg material-symbols-outlined text-lg">verified</span>
                                </div>
                                <div className="flex items-baseline gap-2 mt-2">
                                    <span className="text-3xl font-bold">850</span>
                                    <span className="text-xs font-bold text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                        <span className="material-symbols-outlined text-xs">trending_up</span> 5%
                                    </span>
                                </div>
                                <div className="w-full bg-border-light dark:bg-border-dark h-1.5 rounded-full mt-2 overflow-hidden">
                                    <div className="bg-[#4ADF7F] h-full rounded-full" style={{ width: '68%' }}></div>
                                </div>
                                <p className="text-xs text-text-sub-light dark:text-text-sub-dark mt-1">68% of total pool</p>
                            </div>
                            <div className="p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-text-sub-light dark:text-text-sub-dark text-sm font-medium">Avg Skill Score</span>
                                    <span className="bg-amber-400/10 text-amber-500 p-1.5 rounded-lg material-symbols-outlined text-lg">military_tech</span>
                                </div>
                                <div className="flex items-baseline gap-2 mt-2">
                                    <span className="text-3xl font-bold">8.4</span>
                                    <span className="text-sm text-text-sub-light dark:text-text-sub-dark">/ 10</span>
                                </div>
                                <p className="text-xs text-text-sub-light dark:text-text-sub-dark mt-auto">Across Top 3 Sectors</p>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-sm font-medium hover:border-primary transition-colors text-text-sub-light dark:text-text-sub-dark">
                                <span className="material-symbols-outlined text-lg">tune</span>
                                Filter
                            </button>
                            <div className="h-6 w-[1px] bg-border-light dark:bg-border-dark"></div>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-transparent text-primary text-sm font-bold">
                                Region: All
                                <span className="material-symbols-outlined text-lg">expand_more</span>
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark text-sm font-medium hover:bg-border-light dark:hover:bg-border-dark transition-colors">
                                Sector: Agri-Tech
                                <span className="material-symbols-outlined text-lg text-text-sub-light">expand_more</span>
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark text-sm font-medium hover:bg-border-light dark:hover:bg-border-dark transition-colors">
                                Skill: Python
                                <span className="material-symbols-outlined text-lg text-text-sub-light">expand_more</span>
                            </button>
                            <button className="ml-auto text-primary text-sm font-bold hover:underline">Clear all</button>
                        </div>

                        {/* Main Grid: Map & List */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[600px]">
                            {/* Left Column: Visuals (Map + Charts) */}
                            <div className="lg:col-span-2 flex flex-col gap-6">
                                {/* Map Widget */}
                                <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:flex-1 bg-[#e0eaf3] dark:bg-[#252b33] rounded-2xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm group">
                                    {/* Map Background */}
                                    <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply dark:mix-blend-luminosity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAelPPtVjXv3grtADHnt1CQBZ71Tfjhd7xWRgm0qrxOlZxWwVJJ8Z398z1aY2PfEonEB4HAOTdmHHOYXSVObOE5sOOQheXOf9Z1IMHdrNdu_2Ga03IiMs1OtFYhDZR11szi0pnNyf2gYNlvz4poVFKAEQFd_tg_Xtqf4lzi3RKKMtiutoqk_YpEl_kNTRjHWEAARJrzq0Mk6ndXWJydiJJqqj5TFUDUHxZ5s9V-MHu45DrPn6X-Ky-u3riXg71f6aESXzPSWXe8iTs')" }}></div>
                                    <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg border border-border-light dark:border-border-dark">
                                        <p className="text-xs font-bold uppercase tracking-wider text-text-sub-light dark:text-text-sub-dark">Live Heatmap</p>
                                    </div>
                                    {/* Hotspot: Kigali */}
                                    <div className="absolute top-[45%] left-[52%] flex flex-col items-center justify-center group/marker cursor-pointer">
                                        <div className="relative flex items-center justify-center size-8">
                                            <div className="hotspot-ring bg-primary"></div>
                                            <div className="relative size-3 bg-primary rounded-full shadow-[0_0_10px_rgba(26,203,203,0.6)]"></div>
                                        </div>
                                        {/* Tooltip */}
                                        <div className="absolute bottom-full mb-2 hidden group-hover/marker:block w-48 bg-surface-light dark:bg-surface-dark p-3 rounded-lg shadow-xl border border-border-light dark:border-border-dark z-20">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="font-bold text-sm">Kigali City</span>
                                                <span className="text-[10px] bg-primary/10 text-primary px-1 rounded font-bold">Top Hub</span>
                                            </div>
                                            <div className="text-xs text-text-sub-light dark:text-text-sub-dark mb-2">540 Active Candidates</div>
                                            <div className="flex gap-1">
                                                <span className="h-1.5 w-full rounded-full bg-blue-400"></span>
                                                <span className="h-1.5 w-[60%] rounded-full bg-green-400"></span>
                                                <span className="h-1.5 w-[30%] rounded-full bg-amber-400"></span>
                                            </div>
                                            <div className="text-[10px] text-text-sub-light mt-1 flex justify-between">
                                                <span>Tech</span> <span>Fin</span> <span>Agri</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hotspot: Huye */}
                                    <div className="absolute top-[75%] left-[40%] flex flex-col items-center justify-center group/marker cursor-pointer">
                                        <div className="relative flex items-center justify-center size-6">
                                            <div className="hotspot-ring bg-primary" style={{ animationDelay: '1s' }}></div>
                                            <div className="relative size-2.5 bg-primary rounded-full"></div>
                                        </div>
                                        <div className="absolute bottom-full mb-2 hidden group-hover/marker:block w-32 bg-surface-light dark:bg-surface-dark p-2 rounded-lg shadow-xl border border-border-light dark:border-border-dark z-20">
                                            <span className="font-bold text-xs block">Huye</span>
                                            <span className="text-[10px] text-text-sub-light">120 Agri-Tech</span>
                                        </div>
                                    </div>
                                    {/* Hotspot: Musanze */}
                                    <div className="absolute top-[25%] left-[40%] flex flex-col items-center justify-center group/marker cursor-pointer">
                                        <div className="relative flex items-center justify-center size-6">
                                            <div className="hotspot-ring bg-primary" style={{ animationDelay: '0.5s' }}></div>
                                            <div className="relative size-2.5 bg-primary rounded-full"></div>
                                        </div>
                                        <div className="absolute bottom-full mb-2 hidden group-hover/marker:block w-32 bg-surface-light dark:bg-surface-dark p-2 rounded-lg shadow-xl border border-border-light dark:border-border-dark z-20">
                                            <span className="font-bold text-xs block">Musanze</span>
                                            <span className="text-[10px] text-text-sub-light">85 Tourism/Tech</span>
                                        </div>
                                    </div>
                                    {/* Map Legend */}
                                    <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur p-3 rounded-lg border border-border-light dark:border-border-dark text-xs flex flex-col gap-2 shadow-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="size-2 rounded-full bg-primary"></span>
                                            <span className="font-medium">High Density (&gt;100)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="size-2 rounded-full bg-primary/40"></span>
                                            <span className="font-medium text-text-sub-light">Emerging Hub</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Charts Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-64">
                                    {/* Sector Donut */}
                                    <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm flex flex-col">
                                        <h3 className="font-bold text-sm mb-4">Talent by Sector</h3>
                                        <div className="flex items-center gap-6 flex-1">
                                            {/* CSS Donut Chart */}
                                            <div className="relative size-32 rounded-full shrink-0" style={{ background: 'conic-gradient(#1acbcb 0% 45%, #4ADF7F 45% 75%, #F59E0B 75% 90%, #e2e8f0 90% 100%)' }}>
                                                <div className="absolute inset-4 bg-surface-light dark:bg-surface-dark rounded-full flex items-center justify-center">
                                                    <div className="text-center">
                                                        <span className="block text-xl font-bold">1.2k</span>
                                                        <span className="text-[10px] text-text-sub-light uppercase">Total</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 text-xs flex-1">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary"></span> Finance/Tech</div>
                                                    <span className="font-bold">45%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#4ADF7F]"></span> Agri-Tech</div>
                                                    <span className="font-bold">30%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-amber-500"></span> Health</div>
                                                    <span className="font-bold">15%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-slate-200 dark:bg-slate-600"></span> Other</div>
                                                    <span className="font-bold">10%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Skill Bars */}
                                    <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm flex flex-col">
                                        <h3 className="font-bold text-sm mb-4">Top Skills in Demand</h3>
                                        <div className="flex flex-col justify-between flex-1 gap-3">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex justify-between text-xs">
                                                    <span>Python / Data Science</span>
                                                    <span className="font-bold">88%</span>
                                                </div>
                                                <div className="h-2 w-full bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex justify-between text-xs">
                                                    <span>Project Management</span>
                                                    <span className="font-bold">72%</span>
                                                </div>
                                                <div className="h-2 w-full bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary/80 rounded-full" style={{ width: '72%' }}></div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex justify-between text-xs">
                                                    <span>Digital Marketing</span>
                                                    <span className="font-bold">64%</span>
                                                </div>
                                                <div className="h-2 w-full bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary/60 rounded-full" style={{ width: '64%' }}></div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex justify-between text-xs">
                                                    <span>UI/UX Design</span>
                                                    <span className="font-bold">58%</span>
                                                </div>
                                                <div className="h-2 w-full bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary/40 rounded-full" style={{ width: '58%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Recruitment List */}
                            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col overflow-hidden h-full">
                                <div className="p-5 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-background-light/50 dark:bg-background-dark/50">
                                    <h3 className="font-bold text-lg">Top Candidates</h3>
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium cursor-pointer hover:bg-primary/20 transition-colors">View All</span>
                                </div>
                                <div className="overflow-y-auto flex-1 p-2 space-y-1">
                                    {/* Candidate Card 1 */}
                                    <CandidateCard
                                        name="Keza Uwase"
                                        role="FinTech Analyst"
                                        school="UR Huye"
                                        match="98%"
                                        points="2,400"
                                        score="9.8"
                                        isTopRated={true}
                                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCsGLpvyBMUXvFEJhrfZlnvpd019LNrEyUnP91veBaexhlgYl3PbDlwfBUI173PLTvGfdfDa3Ru-f58_VCW60y7pAIGlB6fOyUhPpHACNVp7W9QFwSwTrmQe1dHe1chz5E8WeUAPOo6kg47El-ez0uPqHviSgRAkKc_LJkJUtJ-fGA8J67-kHdg8CvzTZf2rzIQ60tCgRS7PpmbFnnCz86Lnvtz9a1IfB79UwuiA3ujTJwuGPwQThPSkHyHFzkxfr7x5s_X6TlP57M"
                                    />
                                    {/* Candidate Card 2 */}
                                    <CandidateCard
                                        name="David Mugisha"
                                        role="Agri-Tech Dev"
                                        school="ALU"
                                        match="94%"
                                        points="1,850"
                                        score="9.2"
                                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCo15KqNez3sXdxaz4UXbir8hHmei47-GJvFTKukqtooYlFNsg9VIzySrZ9G6mv46OAi9EWyq0FQgHx4vJRjlh_S9a3wS6fqPyE-SVXPaAkGuYG97KvZhJglCRhSkY8HHLX_JZjp9iKndVYRRKOHbLRUjc_IOD50QExbDPpqru7fdke5MvEWtDRob353jpKU30XDUrTZJIfWVLRzHNOpzYUl-1sqaLWqodwvcv9DPGoxpKAugD_0o8nmDh_bJlFi1XYnVVvPHhVk9I"
                                    />
                                    {/* Candidate Card 3 */}
                                    <CandidateCard
                                        name="Sarah Iribagiza"
                                        role="Data Scientist"
                                        school="CMU Africa"
                                        matchLabel="New"
                                        matchColor="primary"
                                        points="900"
                                        score="8.9"
                                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuA1JC3do3M60apabnbg-emsximmszXvWbeRnHMBnfAOvotgp5wRwFvq0zygMFxaGBM5TE2-ja_Mf-pjupwgl9ac5W2LCM11Ie3SfA7ZekA4YzT53E5A-gf_izoyJP1Ro4w1KzWt2w28idGKLgirVI9Hkt8T5x0SGNY3MnKVjbzzWP_l33Jf7Yb60RXprDltb6dHroGMxmeJyxbujeovADX9sSbsMw4vSLdNEOBFesj_A4KNAHBpVt8t37r7cM7Tyhlpdlvo11X89SY"
                                    />
                                    {/* Candidate Card 4 */}
                                    <CandidateCard
                                        name="Eric Nshuti"
                                        role="Mobile Dev"
                                        school="Kepler"
                                        match="89%"
                                        points="1,200"
                                        score="8.5"
                                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuA-StAekIfxADtYS1V_I314Aw6dB0I4yGBqmGecLdg9xFcD9LDpBkXKxlycsrzrueMq4d-WbxR8dP3oLuHvS8G9hLZMdT36JZRshVRITD7yhLbVWrCkIKkEAox7hOCF70gkyet0l3CTI_Igz7ZWGZgyAg8AtmX3ugXEl8XEtf83vtlKyK1Hwk2fK529D0yY_2TWo8ys8uyWqRMbO-9hd4lAv8uLk56RNDMOePeI02VGaTxFIfDa_gOoKqh7W9r7YbAIHguiUcv6o24"
                                    />
                                </div>
                                {/* Footer of list */}
                                <div className="p-3 border-t border-border-light dark:border-border-dark bg-background-light/30 dark:bg-background-dark/30 flex justify-center">
                                    <button className="text-xs font-bold text-primary hover:underline">View all 850 candidates</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Create Mission Modal */}
            <CreateMissionModal
                isOpen={showCreateMissionModal}
                onClose={() => setShowCreateMissionModal(false)}
                onMissionCreated={handleMissionCreated}
            />
        </>
    );
}

// Candidate Card Component
function CandidateCard({ name, role, school, match, matchLabel, matchColor = 'green', points, score, isTopRated, image }) {
    const matchDisplay = matchLabel || match;
    const colorClass = matchColor === 'primary'
        ? 'bg-primary/10 text-primary'
        : 'bg-green-500/10 text-green-600 dark:text-green-400';

    return (
        <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-all cursor-pointer border border-transparent hover:border-border-light dark:hover:border-border-dark">
            <div className="relative shrink-0">
                <div className="size-12 rounded-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}></div>
                {isTopRated && (
                    <div className="absolute -bottom-1 -right-1 bg-amber-400 text-white rounded-full p-0.5 border-2 border-surface-light dark:border-surface-dark">
                        <span className="material-symbols-outlined text-[10px] block">star</span>
                    </div>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold truncate">{name}</h4>
                    <span className={`text-[10px] ${colorClass} px-1.5 py-0.5 rounded font-medium`}>{matchDisplay}</span>
                </div>
                <p className="text-xs text-text-sub-light dark:text-text-sub-dark mb-1">{role} • {school}</p>
                <div className="flex items-center gap-3 text-[10px] text-text-sub-light">
                    <div className="flex items-center gap-1" title="Purpose Points">
                        <span className="material-symbols-outlined text-amber-500 text-xs">local_fire_department</span>
                        <span className="font-bold text-text-main-light dark:text-text-main-dark">{points}</span>
                    </div>
                    <div className="flex items-center gap-1" title="Skill Score">
                        <span className="material-symbols-outlined text-primary text-xs">school</span>
                        <span className="font-bold text-text-main-light dark:text-text-main-dark">{score}</span>
                    </div>
                </div>
            </div>
            <button className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg">
                <span className="material-symbols-outlined text-lg block">arrow_forward</span>
            </button>
        </div>
    );
}
