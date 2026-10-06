'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Home() {
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

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 font-sans selection:bg-red-600 selection:text-white overflow-hidden">
      {/* Carbon Fiber Background Pattern (Simulated with CSS) */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: 0.1
      }}></div>

      {/* Hero Section */}
      <header className="relative bg-black border-b-[4px] border-red-600 overflow-hidden py-32 px-4">
        {/* Dynamic diagonal cuts */}
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: '8rem' }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900 transform skew-x-12 -z-10 opacity-50"
        ></motion.div>
        
        <motion.div 
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '12rem', opacity: 0.2 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
          className="absolute top-0 right-0 w-1/3 h-full bg-red-600 transform skew-x-12 -z-20 blur-xl"
        ></motion.div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm"
          >
            Pole Position Team
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tight italic"
          >
            Drive the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Future</span><br/>With Us.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl max-w-2xl text-neutral-400 mb-8 italic"
          >
            Claim Your Spot on the Grid.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
          >
            <Link href="#grid" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 transform skew-x-[-10deg] uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              <span className="block transform skew-x-[10deg]">Explore The Grid</span>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Pit Crew (Who We Are) */}
      <section className="py-24 px-4 max-w-6xl mx-auto relative overflow-hidden">
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
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
          }}
          className="bg-black/50 p-8 md:p-12 border-l-4 border-red-600 backdrop-blur-sm shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-600 opacity-5 blur-2xl rounded-full"></div>
          <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10">
            We are a team focused on turning existing technologies into the future. We believe innovation doesn't always mean starting from scratch—it means rethinking, improving, and combining what already exists to create something better for tomorrow.
          </p>
        </motion.div>
      </section>

      {/* Telemetry (Project / Domains) */}
      <section className="py-24 px-4 bg-black relative border-y border-neutral-800 overflow-hidden">
        <div className="max-w-6xl mx-auto">
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
                whileHover={{ scale: 1.05, borderColor: '#dc2626' }}
                key={index} 
                className="group p-6 bg-neutral-900 transition-all border border-neutral-800 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-red-600 transform translate-x-4 -translate-y-4 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="font-bold text-lg text-white mb-3 uppercase tracking-wide">{domain.role}</h3>
                <p className="text-sm text-neutral-400">{domain.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Grid (Open Roles) */}
      <section id="grid" className="py-24 px-4 max-w-6xl mx-auto relative overflow-hidden">
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
          className="bg-gradient-to-r from-neutral-900 to-black p-8 md:p-10 border border-neutral-800 hover:border-red-500 transition-colors group"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tight group-hover:text-red-500 transition-colors">Research and Development</h3>
              <p className="text-red-500 font-mono tracking-widest text-sm uppercase">Advanced Levitation Technology</p>
            </div>
            <Link 
              href="/apply"
              className="mt-6 md:mt-0 inline-block bg-transparent border-2 border-red-600 hover:bg-red-600 text-white font-bold py-3 px-8 transform skew-x-[-10deg] uppercase tracking-wider transition-all hover:scale-105"
            >
              <span className="block transform skew-x-[10deg]">Enter Qualifying Round</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="bg-black py-12 text-center border-t-2 border-red-600 relative overflow-hidden">
        <p className="text-neutral-500 uppercase tracking-widest text-sm font-bold italic relative z-10">© {new Date().getFullYear()} Pole Position Team.</p>
      </footer>
    </div>
  );
}
