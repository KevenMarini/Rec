'use client';

import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Dashboard state
  const [applications, setApplications] = useState<any[]>([]);
  const [fetchError, setFetchError] = useState('');

  // Check auth and fetch on load
  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/applications');
      if (res.status === 401) {
        setIsAuthenticated(false);
      } else if (res.ok) {
        const data = await res.json();
        setApplications(data.applications || []);
        setIsAuthenticated(true);
      } else {
        setFetchError('Failed to load applications. Make sure Vercel Postgres is connected.');
      }
    } catch (err) {
      setFetchError('Network error while loading data.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        setIsAuthenticated(true);
        fetchApplications();
      } else {
        setLoginError('Invalid username or password');
      }
    } catch (err) {
      setLoginError('Network error');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    setIsAuthenticated(false);
    setApplications([]);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this application?')) return;
    
    try {
      const res = await fetch(`/api/admin/applications?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setApplications(apps => apps.filter(app => app.id !== id));
      } else {
        alert('Failed to delete application.');
      }
    } catch (err) {
      alert('Network error while deleting.');
    }
  };

  const exportToExcel = () => {
    if (applications.length === 0) {
      alert('No applications to export');
      return;
    }
    
    // Formatting data for Excel
    const dataToExport = applications.map(app => ({
      ID: app.id,
      'First Name': app.first_name,
      'Last Name': app.last_name,
      'WhatsApp': app.whatsapp,
      'Email': app.email,
      'Description': app.description,
      'Date Applied': new Date(app.created_at).toLocaleString()
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Applications');
    
    XLSX.writeFile(workbook, `applications-${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  if (loading) {
    return <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center font-mono uppercase tracking-widest">Loading Telemetry...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-900 text-gray-100 font-sans selection:bg-red-600 selection:text-white flex items-center justify-center p-4 relative overflow-hidden">
        {/* Carbon Fiber Background */}
        <div className="fixed inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.1
        }}></div>

        <div className="bg-black border border-neutral-800 p-8 max-w-md w-full relative z-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-2 h-full bg-red-600"></div>
          <h1 className="text-3xl font-black uppercase italic tracking-tight mb-6 text-white">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Username</label>
              <input 
                type="text" 
                required 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                required 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
              />
            </div>

            {loginError && <p className="text-red-500 text-sm font-mono">{loginError}</p>}

            <button 
              type="submit" 
              disabled={isLoggingIn}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 uppercase tracking-wider transition-colors disabled:opacity-50"
            >
              {isLoggingIn ? 'Authenticating...' : 'Access Terminal'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 font-sans selection:bg-red-600 selection:text-white p-4 md:p-8 relative">
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: 0.1
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-neutral-800 pb-6">
          <div>
            <h1 className="text-4xl font-black uppercase italic tracking-tight text-white mb-2 flex items-center">
              <span className="w-8 h-[2px] bg-red-600 mr-3 inline-block"></span>
              Admin Dashboard
            </h1>
            <p className="text-neutral-400 font-mono text-sm tracking-widest uppercase">Team Applications</p>
          </div>
          <button 
            onClick={handleLogout}
            className="mt-4 md:mt-0 text-red-500 hover:text-red-400 uppercase tracking-wider text-sm font-bold transition-colors"
          >
            Logout
          </button>
        </header>

        {fetchError && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 font-mono text-sm uppercase mb-8">
            {fetchError}
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="bg-black border-l-4 border-red-600 p-4 px-6 flex items-center shadow-lg">
            <span className="text-neutral-400 uppercase text-xs font-bold tracking-widest mr-4">Total Forms</span>
            <span className="text-3xl font-black text-white">{applications.length}</span>
          </div>

          <button 
            onClick={exportToExcel}
            className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 transform skew-x-[-10deg] uppercase tracking-wider transition-all"
          >
            <span className="block transform skew-x-[10deg]">Export to Excel</span>
          </button>
        </div>

        <div className="bg-black border border-neutral-800 overflow-x-auto shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 uppercase text-xs font-bold tracking-widest">
                <th className="p-4">Applicant</th>
                <th className="p-4">Comms (WhatsApp)</th>
                <th className="p-4">Email</th>
                <th className="p-4 min-w-[300px]">Telemetry Data</th>
                <th className="p-4">Timestamp</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-neutral-500 font-mono uppercase tracking-widest">
                    No applications received yet.
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app.id} className="border-b border-neutral-800/50 hover:bg-neutral-900/50 transition-colors">
                    <td className="p-4 align-top">
                      <div className="font-bold text-white">{app.first_name} {app.last_name}</div>
                    </td>
                    <td className="p-4 align-top font-mono text-sm text-neutral-300">{app.whatsapp}</td>
                    <td className="p-4 align-top text-neutral-300">{app.email}</td>
                    <td className="p-4 align-top text-sm text-neutral-400 leading-relaxed max-w-md whitespace-pre-wrap">
                      {app.description}
                    </td>
                    <td className="p-4 align-top font-mono text-xs text-neutral-500">
                      {new Date(app.created_at).toLocaleString()}
                    </td>
                    <td className="p-4 align-top text-center">
                      <button 
                        onClick={() => handleDelete(app.id)}
                        className="text-red-500 hover:text-red-400 uppercase text-xs font-bold tracking-wider transition-colors bg-red-500/10 hover:bg-red-500/20 px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
