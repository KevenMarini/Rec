'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    college: '',
    department: '',
    yearOfStudy: '',
    otherYear: '',
    whatsapp: '',
    email: '',
    description: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', college: '', department: '', yearOfStudy: '', otherYear: '', whatsapp: '', email: '', description: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 font-sans selection:bg-red-600 selection:text-white py-12 px-4 overflow-hidden">
      {/* Carbon Fiber Background Pattern */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: 0.1
      }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-400 uppercase tracking-wider text-sm font-bold mb-12 group transition-colors">
            <span className="transform transition-transform group-hover:-translate-x-2 mr-2">&larr;</span> Back to Paddock
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-black border-l-4 border-red-600 p-8 md:p-12 mb-12 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-5 blur-3xl rounded-full"></div>
          
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight mb-4">R&D Team</h1>
          <p className="text-red-500 font-mono tracking-widest text-sm uppercase mb-8">Advanced Levitation Technology</p>
          
          <div className="prose prose-invert max-w-none text-neutral-300">
            <p className="mb-6 text-lg font-light leading-relaxed">
              We are looking for a multidisciplinary R&D team to research and develop a <strong className="text-white">practical levitation system</strong>, exploring the underlying technologies, feasibility, control, and potential applications.
            </p>

            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mt-10 mb-6 uppercase tracking-wide flex items-center"
            >
              <span className="w-8 h-[2px] bg-red-600 mr-3 inline-block"></span>
              Core Competencies
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10"
            >
              {[
                { title: "Electromagnetics & Levitation", desc: "EMS, EDS, permanent magnets, electromagnets, Halbach arrays" },
                { title: "Mechanical Engineering", desc: "Structural design, weight distribution, CAD, system dynamics" },
                { title: "Electronics & Power", desc: "Batteries, MOSFETs/IGBTs, drivers, power management" },
                { title: "Embedded & Control", desc: "ESP32/STM32, sensors, PID control, real-time stabilization" },
                { title: "Propulsion & Motion", desc: "BLDC, linear motors, electromagnetic propulsion" },
                { title: "Simulation & Testing", desc: "MATLAB/Simulink, ANSYS, COMSOL, iterative prototyping" }
              ].map((comp, idx) => (
                <motion.div key={idx} variants={itemVariants} className="border border-neutral-800 p-4 bg-neutral-900/50 hover:bg-neutral-800/80 transition-colors">
                  <strong className="text-red-500 block mb-1">{comp.title}</strong>
                  <span className="text-sm">{comp.desc}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-red-600/10 p-6 border border-red-600/30 text-red-50 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
              <strong className="uppercase tracking-widest text-red-500 block mb-2 text-sm">Primary Directive</strong>
              Investigate existing levitation technologies, identify the most feasible approach, develop simulations and experimental prototypes, validate the concept, and establish the technical foundation for future applications.
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-10"
        >
          <div className="w-12 h-1 bg-red-600 mr-4"></div>
          <h2 className="text-4xl font-bold uppercase italic tracking-wider">Qualifying Round</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900 border border-neutral-800 p-8 md:p-10 shadow-xl"
        >
          {true ? ( // Applications Closed Flag
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-red-500/10 border border-red-500/50 text-red-400 p-8 flex flex-col items-center text-center uppercase tracking-widest"
            >
              <div className="mb-6 font-bold text-xl">Applications Closed</div>
              
              <div className="w-full h-px bg-red-500/20 mb-6"></div>
              
              <p className="text-neutral-300 font-sans normal-case tracking-normal mb-6">
                Thank you for your interest in Team Aeolus! The R&D recruitment phase has concluded. 
              </p>
              
              <p className="text-neutral-400 text-sm font-sans normal-case mb-6">
                Stay tuned for future updates and project milestones.
              </p>
            </motion.div>
          ) : status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-500/10 border border-green-500/50 text-green-400 p-8 flex flex-col items-center text-center uppercase tracking-widest"
            >
              <div className="mb-6 font-bold text-lg">Application Transmitted Successfully. Stand By.</div>
              
              <div className="w-full h-px bg-green-500/20 mb-6"></div>
              
              <p className="text-neutral-300 font-sans normal-case tracking-normal mb-6">
                Don't miss out! Join our WhatsApp group to stay updated on the selection process and meet the team.
              </p>
              
              <a 
                href="https://chat.whatsapp.com/Dy5unI1CRR7EVwhgPDat98" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-10 transform skew-x-[-10deg] uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              >
                <span className="block transform skew-x-[10deg]">Join WhatsApp Group</span>
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">First Name</label>
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Last Name</label>
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">College</label>
                  <input required type="text" name="college" value={formData.college} onChange={handleChange} className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Department / Course</label>
                  <input required type="text" name="department" value={formData.department} onChange={handleChange} className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Year of Study</label>
                  <select required name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors appearance-none">
                    <option value="" disabled>Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="Other">Other (Specify)</option>
                  </select>
                </div>
                
                {formData.yearOfStudy === 'Other' ? (
                  <div>
                    <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Specify Other Year</label>
                    <input required type="text" name="otherYear" value={formData.otherYear} onChange={handleChange} className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" />
                  </div>
                ) : <div className="hidden md:block"></div>}
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Comms (WhatsApp Number)</label>
                <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Email Address (Personal Mail ID)</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Telemetry Data (What you know & how you can contribute)</label>
                <textarea required name="description" rows={5} value={formData.description} onChange={handleChange} className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors resize-none"></textarea>
              </div>

              {status === 'error' && (
                <div className="text-red-500 text-sm font-mono uppercase">Transmission failed. Please retry.</div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 transform skew-x-[-10deg] uppercase tracking-wider transition-all disabled:opacity-50 disabled:hover:scale-100 hover:scale-[1.02] mt-4 shadow-lg shadow-red-900/20"
              >
                <span className="block transform skew-x-[10deg]">
                  {status === 'submitting' ? 'Transmitting...' : 'Submit Application'}
                </span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
