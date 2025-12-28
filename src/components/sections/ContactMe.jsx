import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
export const Contact = () => {

    const [formData, setFormData] = useState({from_name: "", from_email: "", message: ""});
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (success || error) {
          const timer = setTimeout(() => {
            setSuccess("");
            setError("");
          }, 3000);
      
          return () => clearTimeout(timer);
        }
      }, [success, error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target, 
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            setSuccess("Your message has been received, I'll get in touch shortly.");
            setFormData({from_name: "", from_email: "", message: ""});
        }).catch((error) => {
            setError("Oops! Unable to send message, Please try again.");
        });
    };

    return(
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="fixed top-18 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
            {error && (
                    <div role="alert">
                        <div class="rounded bg-red-100 px-4 py-3 text-red-700 animate-slideDown">
                          <p>{error}</p>
                        </div>
                    </div>
                  )}

                {success && (
                    <div role="alert">
                        <div class="rounded bg-green-100 px-4 py-3 text-green-700 animate-slideDown">
                          <p>{success}</p>
                        </div>
                    </div>
                )}
            </div>
           
            <div className="px-4 w-150">
                <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r to-violet-500 from-indigo-700 bg-clip-text text-transparent text-center">Get in touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="from_name" name="from_name" placeholder="Your Name"
                        value={formData.from_name} onChange={(e) => setFormData({...formData, from_name: e.target.value})} 
                        className="w-full bg-blue/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5" />
                    </div>
                    <div className="relative">
                        <input type="email" id="from_email" name="from_email" required placeholder="example@email.com" 
                        value={formData.from_email} onChange={(e) => setFormData({...formData, from_email: e.target.value})} 
                        className="w-full bg-blue/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5"/>
                    </div>
                    <div className="relative">
                        <textarea id="message" name="message" required rows={6} placeholder="Your Message..." 
                        value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-blue/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5"/>
                    </div>

                    <div className="flex justify-end">
                        
                    <button type="submit" className="bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition relative overflow-hidden hover:-translate-y-0.5">
                        Send Message
                    </button>
                    </div>
                </form>
                
            </div>
        </section>
    )
}