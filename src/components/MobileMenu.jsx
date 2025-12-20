import { useEffect } from "react"

export const MobileMenu = ({menuOpen, setMenuOpen}) => {

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-{rgba(10,10,10,0.8)} backdrop-blur-lg z-40 flex flex-col items-center justify-center
             transform transition-transform duration-300 ease-in-out 
            ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}> 

            <button className="absolute top-5 right-5 text-4xl text-white focus:outline-none cursor-pointer" 
                aria-label="Close Menu"
                onClick={() => setMenuOpen(false)}>&times;
            </button>


            <a href="#home" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                                        ${menuOpen? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                            onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#project" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                                        ${menuOpen? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                            onClick={() => setMenuOpen(false)}>Project</a>
            <a href="#certificates" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                                        ${menuOpen? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                            onClick={() => setMenuOpen(false)}>Certificates</a>
            <a href="#about" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                                        ${menuOpen? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                            onClick={() => setMenuOpen(false)}>About</a>
        </div>       


    )
}