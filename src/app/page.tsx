import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">[Your Team Name]</h1>
        <p className="text-xl max-w-2xl mx-auto">Building the future, today.</p>
      </header>

      {/* About Us / Team Description */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a team focused on turning existing technologies into the future. We believe innovation doesn't always mean starting from scratch—it means rethinking, improving, and combining what already exists to create something better for tomorrow.
        </p>
      </section>

      {/* Project Description */}
      <section className="py-16 px-4 max-w-4xl mx-auto bg-white shadow-sm rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Project</h2>
        <p className="text-lg text-gray-700 text-center">
          [Project Description Goes Here - Please update with your details]
        </p>
      </section>

      {/* Domains / Roles */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Domains & Roles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            <div key={index} className="p-6 bg-white shadow-sm rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">{domain.role}</h3>
              <p className="text-sm text-gray-600">{domain.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 px-4 max-w-4xl mx-auto bg-blue-50 rounded-xl mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Open Roles</h2>
        
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Research and Development</h3>
              <p className="text-gray-600 mb-4 md:mb-0">Advanced Levitation Technology</p>
            </div>
            <Link 
              href="/apply"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} [Your Team Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}
