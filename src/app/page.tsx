'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const slideRightVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideLeftVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const navLinks = [
    { name: 'Pit Crew', href: '#pit-crew' },
    { name: 'Project', href: '#project' },
    { name: 'Telemetry', href: '#telemetry' },
    { name: 'The Grid', href: '#grid' },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 font-sans selection:bg-red-600 selection:text-white overflow-hidden relative">
      {/* Carbon Fiber Background Pattern */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: 0.1
      }}></div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-red-600/50 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Team Aeolus Logo" 
              width={50} 
              height={50} 
              className="object-contain"
            />
            <div className="text-red-500 font-black italic tracking-widest uppercase text-xl">
              Team Aeolus
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setShowPopup(true)}
            className="bg-transparent border border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-bold py-2 px-6 transform skew-x-[-10deg] uppercase tracking-wider transition-all text-xs"
          >
            <span className="block transform skew-x-[10deg]">Visit Main Website</span>
          </button>
        </div>
      </nav>

      {/* Main Website Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowPopup(false)}></div>
          <div className="relative bg-neutral-900 border-l-4 border-red-600 p-8 max-w-md w-full shadow-2xl">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white font-bold"
            >
              ✕
            </button>
            <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-white">Incoming Transmission...</h3>
            <p className="text-red-500 font-mono text-sm tracking-widest mb-6">Status: In Development</p>
            <p className="text-neutral-300 font-light">
              Our main website is currently in development and will be out soon with more of our projects. Stay tuned!
            </p>
            <button 
              onClick={() => setShowPopup(false)}
              className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative border-b-[4px] border-red-600 overflow-hidden py-40 px-4 mt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Levitation Race Pod" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Dynamic diagonal cuts */}
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: '8rem' }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900/90 transform skew-x-12 -z-10"
        ></motion.div>
        
        <motion.div 
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '12rem', opacity: 0.4 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
          className="absolute top-0 right-0 w-1/3 h-full bg-red-600 transform skew-x-12 -z-20 blur-xl"
        ></motion.div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm drop-shadow-lg"
          >
            Team Aeolus | Engineering & Innovation
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tight italic drop-shadow-xl"
          >
            Drive the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Future</span><br/>With Us.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl max-w-2xl text-neutral-300 mb-8 italic drop-shadow-md"
          >
            Claim Your Spot on the Grid.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
          >
            <Link href="#grid" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 transform skew-x-[-10deg] uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              <span className="block transform skew-x-[10deg]">Explore The Grid</span>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Pit Crew (Who We Are) */}
      <section id="pit-crew" className="py-24 px-4 max-w-6xl mx-auto relative overflow-hidden pt-32 -mt-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideRightVariants}
          className="flex items-center mb-12"
        >
          <div className="w-12 h-1 bg-red-600 mr-4"></div>
          <h2 className="text-4xl font-bold uppercase italic tracking-wider">Pit Crew</h2>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
            className="lg:w-1/2 bg-black/80 p-8 md:p-12 border-l-4 border-red-600 backdrop-blur-sm shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600 opacity-5 blur-2xl rounded-full"></div>
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10">
              We are a team focused on turning existing technologies into the future. We believe innovation doesn't always mean starting from scratch—it means rethinking, improving, and combining what already exists to create something better for tomorrow.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
            }}
            className="lg:w-1/2 relative h-[400px] w-full border border-neutral-800 transform skew-x-[-5deg] overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute inset-0 transform skew-x-[5deg] scale-110">
              <Image 
                src="/pit_crew.jpg" 
                alt="Engineering Pit Crew" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Description */}
      <section id="project" className="py-24 px-4 max-w-6xl mx-auto relative overflow-hidden pt-32 -mt-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideRightVariants}
          className="flex items-center mb-12"
        >
          <div className="w-12 h-1 bg-red-600 mr-4"></div>
          <h2 className="text-4xl font-bold uppercase italic tracking-wider">Project Description</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900/50 p-8 md:p-12 border border-neutral-800 backdrop-blur-sm relative"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
          <p className="text-xl text-neutral-300 font-light italic text-center leading-relaxed">
            We are engineering an experimental personal levitation vehicle designed to bring frictionless, zero-contact transport to everyday mobility. Moving away from conventional wheels and high-friction contact points, the platform utilizes dynamic electromagnetic induction to float cleanly over a passive conductive surface at ambient temperatures. Designed with decoupled electric thrust vectoring, it combines high-speed transit physics with omnidirectional 2D control and pure power-slide dynamics—delivering a safe, low-wear riding experience without complex cryogenic infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Telemetry (Project / Domains) */}
      <section id="telemetry" className="py-24 px-4 bg-black relative border-y border-neutral-800 overflow-hidden pt-32 -mt-8">
        {/* Abstract Tech Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <Image 
            src="/tech_grid.jpg" 
            alt="Telemetry HUD" 
            fill 
            className="object-cover object-center mix-blend-screen"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeftVariants}
            className="flex items-center mb-16 justify-end"
          >
            <h2 className="text-4xl font-bold uppercase italic tracking-wider text-right">Telemetry</h2>
            <div className="w-12 h-1 bg-yellow-500 ml-4"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {[
              { role: "Mechanical Engineer", desc: "Chassis/frame design, CAD, materials, vehicle dynamics" },
              { role: "Magnetic/EM Engineer", desc: "Electromagnetism, Halbach arrays, EMS, levitation" },
              { role: "Power Electronics Engineer", desc: "Batteries, MOSFETs/IGBTs, motor drivers, thermal management" },
              { role: "Control Systems Engineer", desc: "PID control, stability, sensor fusion, real-time balance" },
              { role: "Embedded Engineer", desc: "ESP32/STM32, C/C++, PWM, real-time sensor reading" },
              { role: "Motor/Propulsion Engineer", desc: "BLDC/AC motors, regenerative braking, linear motors" },
              { role: "Sensor Engineer", desc: "Hall-effect, IMU, position sensors, calibration" },
              { role: "Software/AI Engineer", desc: "Python/C++, ROS 2, computer vision, simulation" },
              { role: "Safety Engineer", desc: "Fail-safe systems, emergency braking, battery protection" },
              { role: "Track/Infrastructure Engineer", desc: "Track geometry, magnetic track design, power delivery" },
              { role: "Simulation/Testing Engineer", desc: "MATLAB/Simulink, ANSYS, stress analysis, data analysis" },
              { role: "UI/Monitoring Engineer", desc: "Real-time dashboard, telemetry, remote diagnostics" }
            ].map((domain, index) => (
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05, borderColor: '#dc2626', backgroundColor: 'rgba(20,20,20,0.9)' }}
                key={index} 
                className="group p-6 bg-neutral-900/80 backdrop-blur-sm transition-all border border-neutral-800/80 relative overflow-hidden shadow-lg"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-red-600 transform translate-x-4 -translate-y-4 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Simulated HUD elements inside cards */}
                <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-30 transition-opacity font-mono text-[10px] text-red-500">
                  SYS_OK // {Math.floor(Math.random() * 9999)}
                </div>

                <h3 className="font-bold text-lg text-white mb-3 uppercase tracking-wide group-hover:text-red-400 transition-colors">{domain.role}</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">{domain.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Grid (Open Roles) */}
      <section id="grid" className="py-24 px-4 max-w-6xl mx-auto relative overflow-hidden pt-32 -mt-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideRightVariants}
          className="flex items-center mb-12"
        >
          <div className="w-12 h-1 bg-red-600 mr-4"></div>
          <h2 className="text-4xl font-bold uppercase italic tracking-wider">The Grid</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-neutral-900 to-black p-8 md:p-10 border border-neutral-800 hover:border-red-500 transition-colors group shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[bg-scroll_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
            <div>
              <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tight group-hover:text-red-500 transition-colors">Research and Development</h3>
              <p className="text-red-500 font-mono tracking-widest text-sm uppercase">Advanced Levitation Technology</p>
            </div>
            <Link 
              href="/apply"
              className="mt-6 md:mt-0 inline-block bg-transparent border-2 border-red-600 hover:bg-red-600 text-white font-bold py-3 px-8 transform skew-x-[-10deg] uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
            >
              <span className="block transform skew-x-[10deg]">Enter Qualifying Round</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black relative border-t-2 border-red-600/30 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl font-black uppercase italic tracking-wider mb-6">Join The Pit Wall</h2>
          
          <div className="bg-neutral-900/50 p-8 border border-neutral-800 backdrop-blur-sm shadow-2xl relative mb-8">
            <div className="absolute top-0 right-0 w-8 h-8 bg-green-500 opacity-20 blur-xl rounded-full"></div>
            
            <p className="text-xl text-neutral-300 font-light mb-8">
              For more details, join our WhatsApp group and stay updated.
            </p>
            
            <a 
              href="https://chat.whatsapp.com/Dy5unI1CRR7EVwhgPDat98" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-10 transform skew-x-[-10deg] uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <span className="block transform skew-x-[10deg]">Join WhatsApp Group</span>
            </a>
          </div>

          <div className="text-left bg-neutral-900/30 p-8 border border-neutral-800 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
            <p className="text-red-500 font-mono tracking-widest text-sm uppercase mb-6">
              // For further queries, tag the below in the WhatsApp community:
            </p>
            <ul className="space-y-4">
              <li className="flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-800 pb-4">
                <span className="text-lg font-bold text-white uppercase tracking-wide">M. Keven</span>
                <span className="text-neutral-400 font-mono">+91 78100 16443</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center justify-between pt-2">
                <span className="text-lg font-bold text-white uppercase tracking-wide">Maxime</span>
                <span className="text-neutral-400 font-mono">+91 97909 06337</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 text-center border-t border-neutral-800 relative overflow-hidden">
        <p className="text-neutral-500 uppercase tracking-widest text-sm font-bold italic relative z-10">© {new Date().getFullYear()} Team Aeolus.</p>
      </footer>
    </div>
  );
}
