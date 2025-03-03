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
              <div className={`relative p-8 rounded-xl ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm`}>
                {/* macOS window dots */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                
                <div className="space-y-6 mt-6">
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
                  </div>
                </div>
              </div>
            </div>
         
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
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
              <p className="opacity-75">Boost your brand's online presence with SEO, social media, and advertising.</p>
            </div>

            {/* Printing & Branding Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Printing & Branding</h3>
              <p className="opacity-75">High-quality prints, promotional materials, and custom branding.</p>
            </div>

            {/* Graphic Design & Videography Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Graphic Design & Videography</h3>
              <p className="opacity-75">Engaging visuals and videos that tell your story.</p>
            </div>

            {/* Photography Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Photography</h3>
              <p className="opacity-75">Professional shoots for portraits, events, and commercial needs.</p>
            </div>

            {/* Web Development Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="opacity-75">Stunning and functional websites tailored to your brand.</p>
            </div>

            {/* Event Management Service */}
            <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
              <div className="w-12 h-12 mb-6 text-[#EE4263] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Event Management</h3>
              <p className="opacity-75">Seamless planning and execution of corporate and social events.</p>
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">Our Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Branding Project */}
            <div className={`group relative overflow-hidden rounded-xl aspect-video ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
              <video
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                poster="/work/video-thumbnail.jpg"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/work/Edahab.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Edahab Financial Services</h3>
                <p className="text-sm opacity-90">Innovative digital payment solutions transforming financial accessibility.</p>
              </div>
            </div>

            {/* Website Design */}
            <div className={`group relative overflow-hidden rounded-xl aspect-video ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
              <video
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                poster="/work/video-thumbnail.jpg"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/work/alpha.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Tech Startup Website</h3>
                <p className="text-sm opacity-90">Modern, responsive website design for an AI-powered startup.</p>
              </div>
            </div>

            {/* Marketing Campaign - Mycash */}
            <div className={`group relative overflow-hidden rounded-xl aspect-video ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
              <video
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                poster="/work/video-thumbnail.jpg"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/work/Mycash.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Mycash Digital Wallet</h3>
                <p className="text-sm opacity-90">Revolutionary mobile payment solution with enhanced user experience.</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-xs bg-[#EE4263] px-2 py-1 rounded">300% Engagement</span>
                  <span className="text-xs bg-[#EE4263] px-2 py-1 rounded">5M Reach</span>
                </div>
              </div>
            </div>

            {/* Video Ad - Amal */}
            <div className={`group relative overflow-hidden rounded-xl aspect-video ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
              <video
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                poster="/work/video-thumbnail.jpg"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/work/amal.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Amal Mastercard</h3>
                <p className="text-sm opacity-90">Compelling video narrative showcasing brand values and impact.</p>
              </div>
            </div>

            {/* Video Ad - Somtel */}
            <div className={`group relative overflow-hidden rounded-xl aspect-video ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
              <video
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                poster="/work/video-thumbnail.jpg"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/work/somtel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Somtel Telecommunications</h3>
                <p className="text-sm opacity-90">Dynamic video showcasing telecom services and connectivity solutions.</p>
              </div>
            </div>

            {/* Video Ad - Arafat Hospital */}
            <div className={`group relative overflow-hidden rounded-xl aspect-video ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
              <video
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                poster="/work/video-thumbnail.jpg"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/work/arafat hospital.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Arafat Hospital</h3>
                <p className="text-sm opacity-90">Innovative healthcare marketing showcasing medical excellence and patient care.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-20">
        <div className={`${darkMode ? 'bg-white/5' : 'bg-black/5'} rounded-2xl p-12 text-center backdrop-blur-sm`}>
          <h2 className="text-4xl font-bold mb-6">Ready to take your brand to the next level?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today and let's bring your vision to life!</p>
          
          <div className="flex flex-col items-center space-y-4 mb-8">
            <a href="tel:+252905251111" className="flex items-center space-x-2 hover:text-[#EE4263] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+252905251111</span>
            </a>
            <a href="mailto:ealphapress11@gmail.com" className="flex items-center space-x-2 hover:text-[#EE4263] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>ealphapress11@gmail.com</span>
            </a>
          </div>
          
          <a href="/contact" className="inline-block bg-[#EE4263] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#d93b58] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

