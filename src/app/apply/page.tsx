'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
        setFormData({ firstName: '', lastName: '', whatsapp: '', email: '', description: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">R&D Team – Advanced Levitation Technology</h1>
        
        <div className="prose max-w-none text-gray-700 mb-10">
          <p className="mb-4">
            We are looking for a multidisciplinary R&D team to research and develop a <strong>practical levitation system</strong>, exploring the underlying technologies, feasibility, control, and potential applications.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Team members should have knowledge or interest in:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Electromagnetics & Levitation</strong> – Electromagnetic suspension (EMS), electrodynamic suspension (EDS), permanent magnets, electromagnets, Halbach arrays, magnetic forces and levitation principles.</li>
            <li><strong>Mechanical Engineering</strong> – Structural design, materials, weight distribution, CAD modelling, mechanical stability and system dynamics.</li>
            <li><strong>Electronics & Power Systems</strong> – Batteries, power electronics, MOSFETs/IGBTs, drivers, power management, current/voltage control and electrical safety.</li>
            <li><strong>Embedded & Control Systems</strong> – ESP32/STM32, sensors, PID control, feedback systems, real-time control and stabilization.</li>
            <li><strong>Propulsion & Motion Systems</strong> – BLDC motors, linear motors, electromagnetic propulsion, motion control, braking and efficiency.</li>
            <li><strong>Simulation & Research</strong> – MATLAB/Simulink, ANSYS, COMSOL or similar tools for electromagnetic, mechanical and control simulations.</li>
            <li><strong>Prototyping & Testing</strong> – Experimental setup development, sensor integration, data collection, testing, troubleshooting and iterative prototyping.</li>
          </ul>

          <p className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <strong>Primary objective:</strong><br />
            Investigate existing levitation technologies, identify the most feasible approach, develop simulations and experimental prototypes, validate the concept, and establish the technical foundation for future applications.
          </p>
        </div>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mb-6">Apply Now</h2>
        
        {status === 'success' ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
            Thank you for applying! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
              <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Short Description (What you know & how you can contribute)</label>
              <textarea required name="description" rows={5} value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            </div>

            {status === 'error' && (
              <div className="text-red-600 text-sm">Something went wrong. Please try again.</div>
            )}

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
