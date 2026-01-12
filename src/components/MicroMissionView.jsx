import { useState } from 'react';

/*
  Active Micro-Mission View Component
  Shows detailed mission context, AI data, and solution workspace
*/

export default function MicroMissionView({ mission, onBack, onSubmit }) {
    const [steps, setSteps] = useState({
        analysis: '',
        intervention: '',
        metrics: ''
    });

    const handleStepChange = (step, value) => {
        setSteps(prev => ({ ...prev, [step]: value }));
    };

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(steps);
        }
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
                        <span className="material-symbols-outlined text-xl">link</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight">IKIRARO</h2>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-red-50 dark:bg-red-900/20 rounded-full border border-red-100 dark:border-red-900/30">
                        <span className="material-symbols-outlined text-red-500 text-[18px]">timer</span>
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 font-body">48h Remaining</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center size-10 rounded-xl bg-[#e8f3f3] dark:bg-white/10 text-text-main dark:text-white hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="size-10 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBy-sOiGmwVOwcYe99cZGKhYE-Te3319xb7k8LXRMj_qIzshkW8PJnJn0uHpb_j8rGtA_yyGh6CJTdsPmcgiUguuYI5wF5y9Vjz_6RcifWGsaW9NWC_1GwVHD8vy1G98p1HkjW6g5quNCONnH4egbV9knDA3kkcJK3ms1A6JiPVFr9oNZph1ChIFMEsCdXzpMxC_wzHi3792H3Knak8MbON3DM0HUq6MWauCR3ungmlzZgdwRfkRvDp-YoPv_J5VTp9vbbgvhLGtHY')" }}></div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                {/* Background Decorative Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] pointer-events-none z-0"></div>

                {/* Left Column: Context (Scrollable) */}
                <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 border-r border-[#e8f3f3] dark:border-white/10">
                    {/* Hero Header */}
                    <div className="relative w-full h-[280px] bg-gray-200">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFDmmeDFuJYsfZi6yoHk6vCzBW_XS5ppTtBhj-srz2gsqybYSLqykfEgAiMSXyOQvVvypEMjJWa0uzsuu9lNDC5GtBNQ5fdK0UuFP6enatyq94i4pNBsd5CDlvfhILabYLNx_KNWN2FgPJVjN6jrXIZAE7TRVUig0V37n8JH0ZAa-o-smR0MVCfjKKShjOqFBynSiafRyaHNOi79KbYZU187xqiTET0zfHhjrWclSywD_zod25kwNEZsrRxG6Jf_8gc97CSVMUdcw')" }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-black/40"></div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex gap-2 mb-3">
                                <span className="px-2.5 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">Active Mission</span>
                                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 text-xs font-bold uppercase tracking-wider">Level 3 Difficulty</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-md">
                                {mission?.title || "Akagera Park Water Imbalance"}
                            </h1>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-8 pb-32">
                        {/* Chips */}
                        <div className="flex gap-3 flex-wrap">
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/10 pl-2 pr-4 border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-[18px]">water_drop</span>
                                <p className="text-text-main dark:text-white text-sm font-medium font-body">Hydrology</p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 pl-2 pr-4 border border-orange-200 dark:border-orange-800">
                                <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-[18px]">pets</span>
                                <p className="text-text-main dark:text-white text-sm font-medium font-body">Wildlife Impact</p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 pl-2 pr-4 border border-blue-200 dark:border-blue-800">
                                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[18px]">analytics</span>
                                <p className="text-text-main dark:text-white text-sm font-medium font-body">Data Analysis</p>
                            </div>
                        </div>

                        {/* AI Context Block */}
                        <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 p-5 relative overflow-hidden group">
                            <div className="absolute -right-6 -top-6 bg-primary/10 size-24 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
                            <div className="flex items-center gap-2 mb-3 text-primary">
                                <span className="material-symbols-outlined">temp_preferences_custom</span>
                                <h3 className="font-bold text-sm tracking-widest uppercase">Gemini AI Context</h3>
                            </div>
                            <p className="text-text-main/80 dark:text-white/80 font-body leading-relaxed text-base">
                                Recent satellite telemetry from Sentinel-2 indicates a 20% reduction in Lake Ihema's surface area over the last dry season, deviating from the 5-year mean. This recession is disrupting the grazing patterns of hippos and increasing territorial conflict among crocodiles.
                            </p>
                            <div className="mt-4 pt-4 border-t border-primary/10 flex items-center justify-between">
                                <span className="text-xs font-mono text-primary/70">Source: RW-SAT-DATA-24b</span>
                                <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                                    Ask Gemini to expand <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-card-light dark:bg-card-dark p-4 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase mb-1">Water Level Drop</p>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-red-500">-1.2m</span>
                                    <span className="text-sm text-gray-400 mb-1">vs 2023</span>
                                </div>
                            </div>
                            <div className="bg-card-light dark:bg-card-dark p-4 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase mb-1">Affected Zone</p>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-text-main dark:text-white">45<span className="text-lg">km²</span></span>
                                    <span className="text-sm text-gray-400 mb-1">Wetlands</span>
                                </div>
                            </div>
                        </div>

                        {/* Mission Brief Text */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Mission Objective</h2>
                            <p className="font-body text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Your task is to analyze the provided hydrological data and propose a sustainable, low-tech intervention that can be implemented by local park rangers using readily available resources.
                            </p>
                            <p className="font-body text-gray-600 dark:text-gray-300 leading-relaxed">
                                Solutions must prioritize ecological balance and minimal disruption to tourism activities.
                            </p>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Field Resources</h3>
                            <div className="space-y-2">
                                <a className="flex items-center gap-3 p-3 rounded-lg bg-card-light dark:bg-card-dark border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors group cursor-pointer" href="#">
                                    <div className="size-8 rounded bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">description</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-text-main dark:text-white">Lake Ihema Hydrology Report 2023.pdf</p>
                                        <p className="text-xs text-gray-400">2.4 MB • PDF</p>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300">download</span>
                                </a>
                                <a className="flex items-center gap-3 p-3 rounded-lg bg-card-light dark:bg-card-dark border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-colors group cursor-pointer" href="#">
                                    <div className="size-8 rounded bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">map</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-text-main dark:text-white">Topographic Map of Eastern Sector</p>
                                        <p className="text-xs text-gray-400">High Res • JPG</p>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Workspace (Scrollable) */}
                <div className="flex-1 flex flex-col bg-white dark:bg-[#1a1d21] relative z-10 overflow-hidden">
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 pb-32">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-text-main dark:text-white">Solution Workspace</h2>
                                <p className="text-sm text-gray-500 font-body mt-1">Draft your 3-step intervention plan below.</p>
                            </div>
                            <button className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark text-sm font-bold bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-lg">lightbulb</span>
                                Ask AI for a Hint
                            </button>
                        </div>

                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="relative group">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 dark:bg-white/10 group-focus-within:bg-primary transition-colors rounded-full"></div>
                                <div className="pl-6">
                                    <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center justify-between">
                                        Step 01: Analysis
                                        <span className="text-xs normal-case bg-gray-100 dark:bg-white/5 text-gray-500 px-2 py-0.5 rounded">Identify root cause</span>
                                    </label>
                                    <textarea
                                        value={steps.analysis}
                                        onChange={(e) => handleStepChange('analysis', e.target.value)}
                                        className="w-full min-h-[140px] p-4 rounded-xl bg-[#f8fbfb] dark:bg-[#22252a] border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-base resize-none placeholder:text-gray-400"
                                        placeholder="Based on the satellite data and hydrology report, what is driving the water loss? Be specific about environmental factors..."
                                    ></textarea>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative group">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 dark:bg-white/10 group-focus-within:bg-primary transition-colors rounded-full"></div>
                                <div className="pl-6">
                                    <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center justify-between">
                                        Step 02: Strategic Intervention
                                        <span className="text-xs normal-case bg-gray-100 dark:bg-white/5 text-gray-500 px-2 py-0.5 rounded">Propose solution</span>
                                    </label>
                                    <textarea
                                        value={steps.intervention}
                                        onChange={(e) => handleStepChange('intervention', e.target.value)}
                                        className="w-full min-h-[140px] p-4 rounded-xl bg-[#f8fbfb] dark:bg-[#22252a] border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-base resize-none placeholder:text-gray-400"
                                        placeholder="Describe your intervention. How does it utilize local resources? How does it protect the wildlife during implementation?"
                                    ></textarea>
                                    S</div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative group">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 dark:bg-white/10 group-focus-within:bg-primary transition-colors rounded-full"></div>
                                <div className="pl-6">
                                    <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center justify-between">
                                        Step 03: Success Metrics
                                        <span className="text-xs normal-case bg-gray-100 dark:bg-white/5 text-gray-500 px-2 py-0.5 rounded">Implementation &amp; Measurement</span>
                                    </label>
                                    <textarea
                                        value={steps.metrics}
                                        onChange={(e) => handleStepChange('metrics', e.target.value)}
                                        className="w-full min-h-[140px] p-4 rounded-xl bg-[#f8fbfb] dark:bg-[#22252a] border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-base resize-none placeholder:text-gray-400"
                                        placeholder="How will park rangers measure the success of this intervention over the next 6 months?"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Mobile AI Hint Button */}
                        <button className="flex md:hidden w-full mt-6 items-center justify-center gap-2 text-primary border border-primary/30 text-sm font-bold bg-primary/5 hover:bg-primary/10 px-4 py-3 rounded-xl transition-colors">
                            <span className="material-symbols-outlined text-lg">lightbulb</span>
                            Ask AI for a Hint
                        </button>
                    </div>
                </div>
            </main>

            {/* Sticky Bottom HUD */}
            <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
                <div className="container mx-auto max-w-full px-4 md:px-0 pb-4 md:pb-0">
                    <div className="bg-white/90 dark:bg-[#121417]/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 pointer-events-auto shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4 max-w-[1920px] mx-auto">
                            {/* Left: Reward Info */}
                            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center size-8 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/30">
                                        <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Potential Reward</span>
                                        <span className="text-sm font-bold text-text-main dark:text-white font-mono">+500 Purpose Points</span>
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-gray-200 dark:bg-white/10 hidden md:block"></div>
                                <div className="hidden md:flex items-center gap-2">
                                    <span className="material-symbols-outlined text-gray-400 text-[18px]">military_tech</span>
                                    <span className="text-sm text-gray-500 font-medium">Unlock Badge: Water Guardian</span>
                                </div>
                            </div>

                            {/* Right: Actions */}
                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <button className="hidden md:block px-6 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-text-main dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    Save Draft
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/20 group"
                                >
                                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-[20px]">temp_preferences_custom</span>
                                    Submit to Gemini AI
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
