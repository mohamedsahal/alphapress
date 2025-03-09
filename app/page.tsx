'use client';

import { useTheme } from './context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';

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
      {/* Removed Navbar component as it's already in layout.tsx */}
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

              {/* Right side - 3D Spline Scene */}
              <div className="relative h-[400px] overflow-hidden">
                {/* Desktop view - 3D Spline Scene */}
                <div className="hidden lg:block absolute inset-0 w-full h-full" style={{ clipPath: 'inset(0 0 55px 0)' }}>
                  <spline-viewer loading-anim-type="none" url="https://prod.spline.design/iZ7iqyisbW8BWJH5/scene.splinecode"></spline-viewer>
                </div>
                
                {/* Mobile view - macOS window style with 'Why Choose Alpha Press?' */}
                <div className={`lg:hidden block relative p-8 rounded-xl ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm h-full w-full`}>
                  {/* macOS window dots */}
                  <div className="absolute top-4 left-4 flex space-x-2 z-10">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  
                  <div className="pt-8">
                    <h3 className="text-2xl font-bold mb-6">Why Choose Alpha Press?</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-[#EE4263] mb-2">Innovative Solutions</h4>
                        <p className="opacity-75">Merging creativity with cutting-edge technology.</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-[#EE4263] mb-2">Comprehensive Services</h4>
                        <p className="opacity-75">From printing to digital marketing, all in one place.</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-[#EE4263] mb-2">Client-Centric Approach</h4>
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
              <p className="opacity-75">Boost your brand&apos;s online presence with SEO, social media, and advertising.</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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

        {/* Brand Showcase Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">Brands We've Worked With</h2>
          <div className="relative">
            <div className="flex space-x-8 animate-scroll">
              <div className="flex items-center min-w-max">
                <Image src="/Brands/Arafat .png" alt="Arafat Hospital" width={200} height={80} className="object-contain h-20" />
                <div className="h-16 mx-4 border-l-2 border-dashed border-gray-300 opacity-30"></div>
                <Image src="/Brands/Mycash.png" alt="Mycash" width={200} height={80} className="object-contain h-20" />
                <div className="h-16 mx-4 border-l-2 border-dashed border-gray-300 opacity-30"></div>
                <Image src="/Brands/Somtel.png" alt="Somtel" width={200} height={80} className="object-contain h-20" />
                <div className="h-16 mx-4 border-l-2 border-dashed border-gray-300 opacity-30"></div>
                <Image src="/Brands/amal bank.png" alt="Amal Bank" width={200} height={80} className="object-contain h-20" />
                <div className="h-16 mx-4 border-l-2 border-dashed border-gray-300 opacity-30"></div>
                <Image src="/Brands/asal.png" alt="Asal" width={200} height={80} className="object-contain h-20" />
                <div className="h-16 mx-4 border-l-2 border-dashed border-gray-300 opacity-30"></div>
                <Image src="/Brands/kfg.png" alt="KFG" width={200} height={80} className="object-contain h-20" />
              </div>
              <div className="flex items-center min-w-max">
                <Image src="/Brands/Arafat .png" alt="Arafat Hospital" width={200} height={80} className="object-contain h-20" />
                <div className="h-16 mx-4 border-l-2 border-dashed border-gray-300 opacity-30"></div>
                <Image src="/Brands/Mycash.png" alt="Mycash" width={200} height={80} className="object-contain h-20" />
                <div className="h-16 mx-4 border-l-2 border-dashed border-gray-300 opacity-30"></div>
                <Image src="/Brands/Somtel.png" alt="Somtel" width={200} height={80} className="object-contain h-20" />
                <div className="h-16 mx-4 border-l-2 border-dashed border-gray-300 opacity-30"></div>
                <Image src="/Brands/amal bank.png" alt="Amal Bank" width={200} height={80} className="object-contain h-20" />
                <div className="h-16 mx-4 border-l-2 border-dashed border-gray-300 opacity-30"></div>
                <Image src="/Brands/asal.png" alt="Asal" width={200} height={80} className="object-contain h-20" />
                <div className="h-16 mx-4 border-l-2 border-dashed border-gray-300 opacity-30"></div>
                <Image src="/Brands/kfg.png" alt="KFG" width={200} height={80} className="object-contain h-20" />
              </div>
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

      {/* Client Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
            <div className="text-[#EE4263] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-lg mb-6 opacity-90">"Alpha Press transformed our online presence. Highly recommend their services!"</p>
            <div className="font-medium">– Ahmed M.</div>
          </div>

          {/* Testimonial 2 */}
          <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
            <div className="text-[#EE4263] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-lg mb-6 opacity-90">"The branding and printing quality is top-notch. Our business cards look amazing!"</p>
            <div className="font-medium">– Fadumo A.</div>
          </div>

          {/* Testimonial 3 */}
          <div className={`group p-8 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border border-transparent hover:border-[#EE4263]`}>
            <div className="text-[#EE4263] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-lg mb-6 opacity-90">"Their digital marketing strategies skyrocketed our engagement. Best decision ever!"</p>
            <div className="font-medium">– Mohamed H.</div>
          </div>
        </div>
      </section>

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
   
      {/* Footer Section */}
      <footer className={`${darkMode ? 'bg-[#191A17] text-white' : 'bg-white text-gray-800'} py-12 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EE4263] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Islan Mohamed road Garowe</span>
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="hover:text-[#EE4263] transition-colors" aria-label="Facebook">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="hover:text-[#EE4263] transition-colors" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="https://instagram.com" className="hover:text-[#EE4263] transition-colors" aria-label="Instagram">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="hover:text-[#EE4263] transition-colors" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-[#EE4263] transition-colors">Home</Link>
                <Link href="/services" className="hover:text-[#EE4263] transition-colors">Services</Link>
                <Link href="/products" className="hover:text-[#EE4263] transition-colors">Products</Link>
                <Link href="/about" className="hover:text-[#EE4263] transition-colors">About</Link>
                <Link href="/contact" className="hover:text-[#EE4263] transition-colors">Contact</Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="flex flex-col space-y-2">
                <a href="tel:+252905251111" className="hover:text-[#EE4263] transition-colors flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+252905251111</span>
                </a>
                <a href="mailto:ealphapress11@gmail.com" className="hover:text-[#EE4263] transition-colors flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>ealphapress11@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p>© 2025 Alpha Press. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

