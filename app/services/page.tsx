'use client';

import { useTheme } from '../context/ThemeContext';

export default function ServicesPage() {
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
      {/* Removed Navbar component as it's already in layout.tsx */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Our <span className="text-[#EE4263]">Services</span>
            </h1>
            <p className="text-xl opacity-90">
              Comprehensive solutions to elevate your brand and drive success
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Marketing Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
              <p className="opacity-75">Boost your brand's online presence with SEO, social media, and targeted advertising campaigns.</p>
            </div>

            {/* Web Development Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="opacity-75">Custom web solutions built with cutting-edge technologies to bring your vision to life.</p>
            </div>

            {/* Mobile Development Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Development</h3>
              <p className="opacity-75">Native and cross-platform mobile applications designed for seamless user experience.</p>
            </div>

            {/* UI/UX Design Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="opacity-75">Beautiful and intuitive interfaces that enhance user engagement and satisfaction.</p>
            </div>

            {/* Cloud Solutions Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="opacity-75">Scalable cloud infrastructure and services to power your digital transformation.</p>
            </div>

            {/* Technical Consulting Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Consulting</h3>
              <p className="opacity-75">Expert guidance on technology strategy and implementation for your business needs.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}