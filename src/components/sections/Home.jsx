export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center z-10 px-4">
                <h1 className="mb-4 bg-linear-to-r to-purple-500 from-violet-600 bg-clip-text text-5xl font-extrabold text-transparent">Hi, I'm Anas</h1>
                <p className="text-gray-400 text-lg mb-8 max-w-140 mx-auto text-pretty">
                    I’m a full-stack developer experienced in building modern web application, focused on creating scalable web applications
                    that balance technical excellence with real-world impact.</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#project" className="bg-linear-to-r to-purple-500 from-violet-600 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View My Projects
                        </a>
                        <a href="#contactme" className="border text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden 
                        hover:bg-linear-to-r to-purple-500 from-violet-600 hover:border-none hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Contact Me
                        </a>
                    </div>
            </div>
        </section>
    );
}