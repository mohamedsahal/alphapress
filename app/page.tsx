'use client';

import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <div 
      className={`min-h-screen ${darkMode ? 'bg-[#191A17] text-white' : 'bg-white text-gray-800'} transition-colors duration-300`}
      style={{
        backgroundImage: darkMode ?
          'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)' :
          'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '150px 150px'
      }}
    >
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight animate-fade-in">
                Transforming Ideas into <span className="text-[#EE4263]">Impact</span>
              </h1>
              <p className="text-xl opacity-90">
                Your one-stop creative agency for digital marketing, branding, and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/get-started" className="bg-[#EE4263] text-white px-8 py-3 rounded-lg hover:bg-[#d93b58] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-medium">
                  Get Started
                </a>
                <a href="/services" className={`${darkMode ? 'bg-white text-[#191A17]' : 'bg-[#191A17] text-white'} px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-medium`}>
                  Explore Our Services
                </a>
              </div>
            </div>

            {/* Right side - Feature List */}
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm`}>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-8">Why Choose Alpha Press?</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-[#EE4263] hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EE4263] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Innovative Solutions</h3>
                      <p className="opacity-75">Merging creativity with cutting-edge technology.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-[#EE4263] hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EE4263] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Comprehensive Services</h3>
                      <p className="opacity-75">From printing to digital marketing, all in one place.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-[#EE4263] hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EE4263] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Client-Centric Approach</h3>
                      <p className="opacity-75">Tailored solutions to bring your vision to life.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-[#EE4263] hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EE4263] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Industry Experts</h3>
                      <p className="opacity-75">A team of skilled professionals dedicated to excellence.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-[#EE4263] hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EE4263] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Sustainable Practices</h3>
                      <p className="opacity-75">Responsible and eco-friendly operations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
