import { useNavigate } from 'react-router-dom';

/*
  IKIRARO Landing Page
  Bridging the Gap Between Learning and Earning
*/

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 antialiased">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex h-20 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-2xl">account_tree</span>
                        </div>
                        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white uppercase">IKIRARO</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-white" href="#how-it-works">How it Works</a>
                        <a className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-white" href="#experiences">Portals</a>
                        <a className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-white" href="#stats">Impact</a>
                    </nav>
                    <div className="flex items-center gap-3 lg:gap-6">
                        <div className="hidden lg:flex items-center gap-6 border-r border-gray-200 dark:border-gray-700 pr-6 mr-2">
                            <button onClick={() => navigate('/student')} className="text-sm font-bold text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">Student Login</button>
                            <button onClick={() => navigate('/company')} className="text-sm font-bold text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">Company Login</button>
                        </div>
                        <button className="hidden sm:inline-flex px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-primary/20">
                            Get Started
                        </button>
                        <button className="md:hidden p-2 text-gray-600 dark:text-gray-400">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1 space-y-8 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                    Empowering Rwanda's Future
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                                    Bridging the Gap Between <span className="text-primary">Learning</span> and <span className="text-primary">Earning</span>
                                </h1>
                                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                    The AI-powered career pathing platform designed for the next generation of Rwandan talent. Turn your skills into a professional career.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                    <button
                                        onClick={() => navigate('/student')}
                                        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-xl transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2"
                                    >
                                        Student Portal
                                        <span className="material-symbols-outlined">school</span>
                                    </button>
                                    <button
                                        onClick={() => navigate('/company')}
                                        className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 border-2 border-primary/20 hover:border-primary/50 text-primary dark:text-white text-lg font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        Company Portal
                                        <span className="material-symbols-outlined">business_center</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">
                                <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                                <div className="relative rounded-2xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl rotate-2">
                                    <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPFHJd8tlU4quJ8k0Y4vS2vqQf7_AE7Lqt038lQueczaoYqs2hdtosBfEUgzcjSkeW7hpJzpch-u_bjPTk8GwnbQkYJlLILOtnlbDD51YAhzxnvOtEmj1ghDt2J-By_ci5_IUBJxAfpUF__ENixKhZeo0-Mrx2Qdc5U4OyIyaQb8yJ1QQxx0ISUQgsy45La6jcrItfj6uKKnI9Wy6IxhIjmbk3DiewEu9KJ2KGSFBsDzNEH7p3tzS4UmGBsAXekTVnGmLQNYBDOyA')" }}>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-xl border border-white/20 shadow-lg">
                                        <div className="flex items-center gap-4">
                                            <div className="size-10 rounded-full bg-accent-green flex items-center justify-center text-white">
                                                <span className="material-symbols-outlined text-sm">verified</span>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Success Story</p>
                                                <p className="text-sm font-bold text-gray-900 dark:text-white">Software Engineering Internship @ Irembo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="py-12 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 overflow-hidden" id="partners">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                        <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-10">Trusted by Rwanda's industry leaders</p>
                        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors">account_balance</span>
                                <span className="text-xl font-black text-gray-500 group-hover:text-gray-900 transition-colors">BANK OF KIGALI</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors">smartphone</span>
                                <span className="text-xl font-black text-gray-500 group-hover:text-gray-900 transition-colors">MARA PHONES</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors">shield_with_heart</span>
                                <span className="text-xl font-black text-gray-500 group-hover:text-gray-900 transition-colors">IREMBO</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors">wifi_tethering</span>
                                <span className="text-xl font-black text-gray-500 group-hover:text-gray-900 transition-colors">MTN RWANDA</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 lg:py-32" id="stats">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center text-center group hover:border-accent-green transition-colors">
                                <div className="size-16 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl">group_add</span>
                                </div>
                                <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-2">500+</h3>
                                <p className="text-lg font-bold text-accent-green uppercase tracking-widest">Students Placed</p>
                                <p className="mt-4 text-gray-600 dark:text-gray-400">Transforming education into meaningful career opportunities across Rwanda's digital economy.</p>
                            </div>
                            <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center text-center group hover:border-accent-gold transition-colors">
                                <div className="size-16 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl">emoji_events</span>
                                </div>
                                <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-2">1,200+</h3>
                                <p className="text-lg font-bold text-accent-gold uppercase tracking-widest">Missions Solved</p>
                                <p className="mt-4 text-gray-600 dark:text-gray-400">Real-world challenges solved by our talented community, bridging the skill gap one task at a time.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-24 bg-gray-50 dark:bg-background-dark/50" id="how-it-works">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="text-center mb-20 space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight">How It Works</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Your journey from learning to professional success in three simple steps.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="relative group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-all duration-300">
                                <div className="absolute -top-4 -left-4 size-12 bg-primary text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-primary/30">1</div>
                                <div className="mb-8 p-4 bg-primary/5 rounded-2xl inline-block text-primary">
                                    <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mission</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    Complete AI-curated challenges tailored to real industry needs. Master technologies that Rwandan employers are actually looking for.
                                </p>
                                <div className="h-1 w-12 bg-primary/20 group-hover:w-full transition-all duration-500 rounded-full"></div>
                            </div>
                            <div className="relative group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-all duration-300">
                                <div className="absolute -top-4 -left-4 size-12 bg-accent-gold text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-accent-gold/30">2</div>
                                <div className="mb-8 p-4 bg-accent-gold/5 rounded-2xl inline-block text-accent-gold">
                                    <span className="material-symbols-outlined text-4xl">military_tech</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Achievement</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    Earn verified credentials and build a digital portfolio that speaks louder than a traditional CV. Prove your skills through action.
                                </p>
                                <div className="h-1 w-12 bg-accent-gold/20 group-hover:w-full transition-all duration-500 rounded-full"></div>
                            </div>
                            <div className="relative group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-all duration-300">
                                <div className="absolute -top-4 -left-4 size-12 bg-accent-green text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-accent-green/30">3</div>
                                <div className="mb-8 p-4 bg-accent-green/5 rounded-2xl inline-block text-accent-green">
                                    <span className="material-symbols-outlined text-4xl">work_history</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Internship</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    Get matched with top Rwandan employers based on your proven performance. Skip the queue and enter the workforce with confidence.
                                </p>
                                <div className="h-1 w-12 bg-accent-green/20 group-hover:w-full transition-all duration-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tailored Experiences Section */}
                <section className="py-24 bg-white dark:bg-gray-950" id="experiences">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Tailored Experiences</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Specialized tools designed to empower both rising talent and growing organizations.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Students Card */}
                            <div className="relative group p-10 lg:p-14 bg-primary/5 dark:bg-primary/10 rounded-3xl border border-primary/10 hover:border-primary/30 transition-all flex flex-col justify-between overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <span className="material-symbols-outlined text-9xl">school</span>
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="size-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                                        <span className="material-symbols-outlined text-4xl">person_search</span>
                                    </div>
                                    <h3 className="text-4xl font-black text-gray-900 dark:text-white">Students</h3>
                                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                                        Supercharge your career with AI-guided missions. Solve real problems, earn verified badges, and showcase your skills to the world.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            AI-Curated Missions
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            Skill-Based Badges
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            Direct Internship Matches
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12">
                                    <button
                                        onClick={() => navigate('/student')}
                                        className="w-full sm:w-auto px-10 py-5 bg-primary text-white text-lg font-black rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                                    >
                                        Access Dashboard
                                        <span className="material-symbols-outlined">dashboard</span>
                                    </button>
                                </div>
                            </div>
                            {/* Companies Card */}
                            <div className="relative group p-10 lg:p-14 bg-accent-green/5 dark:bg-accent-green/10 rounded-3xl border border-accent-green/10 hover:border-accent-green/30 transition-all flex flex-col justify-between overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <span className="material-symbols-outlined text-9xl">corporate_fare</span>
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="size-16 rounded-2xl bg-accent-green flex items-center justify-center text-white shadow-lg">
                                        <span className="material-symbols-outlined text-4xl">hub</span>
                                    </div>
                                    <h3 className="text-4xl font-black text-gray-900 dark:text-white">Companies</h3>
                                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                                        Discover Rwanda's best talent through our interactive talent map. Hire based on proven performance and verified mission achievements.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold">
                                            <span className="material-symbols-outlined text-accent-green">check_circle</span>
                                            Real-time Talent Map
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold">
                                            <span className="material-symbols-outlined text-accent-green">check_circle</span>
                                            Performance Verification
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold">
                                            <span className="material-symbols-outlined text-accent-green">check_circle</span>
                                            Seamless Hiring Pipeline
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12">
                                    <button
                                        onClick={() => navigate('/company')}
                                        className="w-full sm:w-auto px-10 py-5 bg-accent-green text-white text-lg font-black rounded-2xl hover:bg-accent-green/90 transition-all shadow-xl shadow-accent-green/20 flex items-center justify-center gap-2"
                                    >
                                        Access Dashboard
                                        <span className="material-symbols-outlined">insights</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="relative overflow-hidden bg-primary rounded-3xl p-12 lg:p-24 text-center">
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 size-96 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-96 bg-black/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                                <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">Ready to build your bridge to success?</h2>
                                <p className="text-xl text-white/80 font-medium">Join thousands of Rwandan students and hundreds of companies already shaping their future on IKIRARO.</p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <button
                                        onClick={() => navigate('/student')}
                                        className="w-full sm:w-auto px-10 py-5 bg-white text-primary text-xl font-black rounded-2xl hover:bg-gray-50 transition-all shadow-2xl"
                                    >
                                        Join Now for Free
                                    </button>
                                    <button className="w-full sm:w-auto px-10 py-5 bg-primary border-2 border-white/30 text-white text-xl font-black rounded-2xl hover:bg-white/10 transition-all">
                                        Partner With Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-950 py-16 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="col-span-1 md:col-span-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined text-xl">account_tree</span>
                                </div>
                                <h2 className="text-lg font-extrabold text-gray-900 dark:text-white uppercase">IKIRARO</h2>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                                Building the infrastructure for Rwanda's digital talent ecosystem. Empowerment through verified achievement.
                            </p>
                            <div className="flex gap-4">
                                <a className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all" href="#">
                                    <span className="material-symbols-outlined">public</span>
                                </a>
                                <a className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all" href="#">
                                    <span className="material-symbols-outlined">share</span>
                                </a>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">Platform</h4>
                            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                                <li><button onClick={() => navigate('/student')} className="hover:text-primary transition-colors">Student Portal</button></li>
                                <li><button onClick={() => navigate('/company')} className="hover:text-primary transition-colors">Company Portal</button></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Talent Leaderboard</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">Company</h4>
                            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                                <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Partnership</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">© 2024 IKIRARO. Made in Kigali, Rwanda.</p>
                        <p className="text-sm text-gray-400 flex items-center gap-1">
                            Connecting <span className="text-primary font-bold">Talent</span> with <span className="text-accent-green font-bold">Impact</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
