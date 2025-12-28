export const Projects = () => {
    const fms_techstack = [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "Tailwind CSS"
    ];
        const ims_techstack = [
            "Flask",
            "SQL-Alchemy",
            "MySQL",
            "AWS",
            "JavaScript",
            "Bootstrap CSS",
    ];
    const crowdHawk_techstack = [
        "Python",
        "YOLOv8",
        "Flask",
        "React",
        "MonogoDB",
        "Azure",
    ];

    const EMS_techstack = [
        "C#",
        ".NET",
        "WPF",
        "DevExpress",
        "MVVM",
    ];
    return(
        <section id="project" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="max-w-3xl mx-auto text-center align-top z-10 px-4">
                <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r to-violet-500 from-indigo-700 bg-clip-text text-transparent">Projects</h2>
                
                <div className="mt-6">
                    <div className="grid grid-row-1 grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl border border-white/10 hover:translate-y-1 transition-all">
                            <h3 className="text-xl text-gray-300 font-semibold mb-2 pb-2 text-left">Flight Management System</h3>
                            <p className="text-gray-400 text-sm text-left">A web-based application for managing flight bookings, schedules, and customer information.</p>
                            <div className="flex flex-wrap mt-4 gap-2">
                                {fms_techstack.map((techstack, index) => (
                                    <span key={index} className="bg-indigo-700/20 text-slate-200 px-3 py-1 rounded-full text-sm hover:bg-violet-500/30 
                                    transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition">
                                        {techstack}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                            <a className="text-indigo-700 text-sm mt-3 animate-bounce" href="#project1"> View Project ➔</a>
                            </div>
                        </div>
                        <div className="p-4 rounded-xl border border-white/10 hover:translate-y-1 transition-all">
                            <h3 className="text-xl text-gray-300 font-semibold mb-2 pb-2 text-left">Crowd Hawk</h3>
                            <p className="text-gray-400 text-sm text-left">AI powered security model that detects anomalies (shoplifting and robbery) in real-time.</p>
                            <div className="flex flex-wrap mt-4 gap-2">
                                {crowdHawk_techstack.map((techstack, index) => (
                                    <span key={index} className="bg-indigo-700/20 text-slate-200 px-3 py-1 rounded-full text-sm hover:bg-violet-500/30 
                                    transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition">
                                        {techstack}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                            <a className="text-indigo-700 text-sm mt-3 animate-bounce" href="#project1"> View Project ➔</a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-row-2 grid-cols-2 mt-6 gap-6">
                        <div className="p-4 rounded-xl border border-white/10 hover:translate-y-1 transition-all">
                            <h3 className="text-xl text-gray-300 font-semibold mb-2 pb-2 text-left">Investment Portfolio Management</h3>
                            <p className="text-gray-400 text-sm text-left">One-stop solution to manage all the investment operations including transactions tracking and real-time
                                portfolio display with profit/loss statements.</p>
                            <div className="flex flex-wrap mt-4 gap-2">
                                {ims_techstack.map((techstack, index) => (
                                    <span key={index} className="bg-indigo-700/20 text-slate-200 px-3 py-1 rounded-full text-sm hover:bg-violet-500/30 
                                    transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition">
                                        {techstack}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a className="text-indigo-700 text-sm mt-3 animate-bounce" href="https://github.com/alpha0352/InvestmentPortfolioApp.git"> View Project ➔</a>
                            </div>
                        </div>
                        <div className="p-4 rounded-xl border border-white/10 hover:translate-y-1 transition-all">
                            <h3 className="text-xl text-gray-300 font-semibold mb-2 pb-2 text-left">Employee Management</h3>
                            <p className="text-gray-400 text-sm text-left">Scalable HRMS to streamline employee registration, attendance tracking, and leave management.</p>
                            <div className="flex flex-wrap mt-4 gap-2">
                                {EMS_techstack.map((techstack, index) => (
                                    <span key={index} className="bg-indigo-700/20 text-slate-200 px-3 py-1 rounded-full text-sm hover:bg-violet-500/30 
                                    transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition">
                                        {techstack}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                            <a className="text-indigo-700 text-sm mt-3 animate-bounce" href="#project1"> View Project ➔</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}