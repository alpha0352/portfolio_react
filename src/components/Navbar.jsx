import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        console.log("Menu Open State:", menuOpen);
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    })
    return (
        <nav className="fixed top-0 w-full z-40 bg-{rgba(10,10,10,0.8)} backdrop-blur-lg border-b border-gray-800 shadow-lg">
            <div className="max-w-5xl mx-auto px-4"> 
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="font-mono text-2xl font-bold text-red">
                         {" "} Alpha<span className="text-indigo-700">.Dev</span>
                         <span className="animate-blink">|</span> 
                    </a>    

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="#project" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        {/* <a href="#certificates" className="text-gray-300 hover:text-white transition-colors">Certificates</a> */}
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                    </div>

                    <div className="md:flex items-center space-x-8">
                        <a href="#contact" className="inline-block bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-full 
                        transition-colors">Contact Me</a>                    
                    </div>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen ((prev) => !prev)}>
                        &#9776;
                    </div>

                </div>
            </div>
        </nav>
    )
}