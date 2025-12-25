export const About = () => {

    const frontEndSkills = [
        "HTML",
        "CSS",
        "JavaScript (ES6+)",
        "React",
        "Tailwind CSS",
        "Bootstrap"
    ];
    const backEndSkills = [
        "Express.js",
        "Node.js",
        ".NET",
        "MongoDB",
        "SQL"
    ];

    return(
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="max-w-3xl mx-auto text-center align-top z-10 px-4">
                <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r to-violet-500 from-indigo-700 bg-clip-text text-transparent">About Me</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                    <p className="text-gray-300 mb-4 px-3">
                    Well-rounded developer with keen interest in the field of software development. With hands-on experience 
                    in developing web and desktop applications.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl hover:translate-y-1 transition-all">
                            <h3 className="text-xl text-gray-300 font-semibold mb-2 pb-2 text-left">Frontend</h3>
                            <div className="flex flex-wrap gap-2 px-2">
                                {frontEndSkills.map((skill, index) => (
                                    <span key={index} className="bg-indigo-700/20 text-slate-200 px-3 py-1 rounded-full text-sm hover:bg-violet-500/30 
                                    transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 rounded-xl hover:translate-y-1 transition-all">
                            <h3 className="text-xl text-gray-300 font-semibold mb-2 pb-2 text-left">Backend</h3>
                            <div className="flex flex-wrap gap-2 px-2">
                                {backEndSkills.map((skill, index) => (
                                    <span key={index} className="bg-indigo-700/20 text-slate-200 px-3 py-1 rounded-full text-sm hover:bg-violet-500/30 
                                    transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl border border-white/10 hover:translate-y-1 transition-all">
                            <h3 className="text-xl text-gray-300 font-semibold mb-2 pb-2 text-left">🎓 Education</h3>
                            <ul className="text-gray-300 text-left list-disc list-inside">
                                <li>
                                    <strong>Bachelor of Science in Computer Science</strong> - NUCES-FAST (2024)
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 rounded-xl rounded-xl border border-white/10 hover:translate-y-1 transition-all">
                            <h3 className="text-xl text-gray-300 font-semibold mb-2 pb-2 text-left">💼 Experience</h3>
                            <ul className="text-gray-300 text-left list-disc list-inside">
                                <li>TRAFiX-LLC</li>
                                <li className="list-none text-sm indent-6 italic"> Dec'2024 - Present</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}