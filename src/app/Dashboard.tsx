"use client";
import { useState, useEffect } from 'react';
import { Activity, Zap, Wind, Power, AlertTriangle, CheckCircle, WifiOff, Wifi, ChevronDown, MapPin } from 'lucide-react';
import sampleData from '@/constants/sampleData';

const ATMDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedSiteIndex, setSelectedSiteIndex] = useState(0);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const data = sampleData[selectedSiteIndex];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'online': 'text-green-400',
      'offline': 'text-red-400',
      'warning': 'text-yellow-400',
      'excellent': 'text-green-400',
      'good': 'text-cyan-400',
      'running': 'text-green-400',
      'standby': 'text-blue-400',
      'error': 'text-red-400'
    };
    return colors[status?.toLowerCase()] || 'text-gray-400';
  };

  const getStatusBg = (status: string) => {
    const colors: { [key: string]: string } = {
      'online': 'bg-green-500/20 border-green-500/50',
      'offline': 'bg-red-500/20 border-red-500/50',
      'running': 'bg-green-500/20 border-green-500/50',
      'standby': 'bg-blue-500/20 border-blue-500/50',
      'error': 'bg-red-500/20 border-red-500/50'
    };
    return colors[status?.toLowerCase()] || 'bg-gray-500/20 border-gray-500/50';
  };

  const getStatusDot = (status: string) => {
    const colors: { [key: string]: string } = {
      'online': 'bg-green-400',
      'offline': 'bg-red-400',
      'warning': 'bg-yellow-400',
      'error': 'bg-red-400',
    };
    return colors[status?.toLowerCase()] || 'bg-gray-400';
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-gray-100 p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3 sm:gap-0">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              ATM POWER MONITORING SYSTEM
            </h1>
            <p className="text-gray-400 mt-1 text-xs sm:text-sm">Real-time Performance & Control Dashboard</p>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-xl sm:text-2xl md:text-3xl font-mono text-cyan-400">
                <span>
              {currentTime.toLocaleTimeString()}
              </span>
            </div>
            <div className="text-xs sm:text-sm text-gray-400">
              {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>

        {/* Site Selector */}
        <div className="mb-3 sm:mb-4 relative">
          <button
            onClick={() => setIsSelectorOpen(!isSelectorOpen)}
            className="w-full bg-linear-to-r from-gray-800/70 to-gray-900/70 border border-cyan-500/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm flex items-center justify-between hover:border-cyan-500/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400 uppercase tracking-wider">Selected Site</div>
                <div className="text-white font-semibold text-sm sm:text-base">
                  {data.location.atm_id} — {data.bank_details.bank_name}
                </div>
              </div>
              <div className={`ml-2 w-2.5 h-2.5 rounded-full ${getStatusDot(data.site_status.overall_status)} ${data.site_status.overall_status === 'online' ? 'animate-pulse' : ''}`}></div>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isSelectorOpen ? 'rotate-180' : ''}`} />
          </button>

          {isSelectorOpen && (
            <div className="absolute z-50 w-full mt-2 bg-gray-900/95 border border-cyan-500/30 rounded-lg backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden">
              {sampleData.map((site, index) => (
                <button
                  key={site.variant_id}
                  onClick={() => {
                    setSelectedSiteIndex(index);
                    setIsSelectorOpen(false);
                  }}
                  className={`w-full text-left p-3 sm:p-4 flex items-center justify-between hover:bg-cyan-500/10 transition-colors border-b border-gray-800/50 last:border-b-0 ${
                    index === selectedSiteIndex ? 'bg-cyan-500/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${getStatusDot(site.site_status.overall_status)} ${site.site_status.overall_status === 'online' ? 'animate-pulse' : ''}`}></div>
                    <div>
                      <div className="text-white font-semibold text-sm">{site.location.atm_id}</div>
                      <div className="text-gray-400 text-xs">{site.bank_details.bank_name} — {site.location.address}</div>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded uppercase font-semibold ${getStatusBg(site.site_status.overall_status)}`}>
                    {site.site_status.overall_status}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Location Bar */}
        <div className="bg-linear-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">ATM ID</div>
              <div className="text-cyan-400 font-mono font-semibold text-sm sm:text-base">{data.location.atm_id}</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Bank</div>
              <div className="text-white font-semibold text-sm sm:text-base">{data.bank_details.bank_name}</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Service Provider</div>
              <div className="text-white font-semibold text-sm sm:text-base">{data.service_provider.company_name}</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</div>
              <div className="text-white font-semibold truncate text-sm sm:text-base">{data.location.address}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className={`${getStatusBg(data.site_status.overall_status)} border rounded-lg p-3 sm:p-4 backdrop-blur-sm relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-400 uppercase tracking-wider">Site Status</div>
              {data.site_status.overall_status === 'online' ? <Wifi className="w-5 h-5 text-green-400" /> : <WifiOff className="w-5 h-5 text-red-400" />}
            </div>
            <div className={`text-lg md:text-xl lg:text-2xl font-bold ${getStatusColor(data.site_status.overall_status)} uppercase`}>
              {data.site_status.overall_status}
            </div>
            <div className="text-xs text-gray-400 mt-1">Uptime: {data.site_status.uptime_percentage}%</div>
          </div>
        </div>

        <div className={`${getStatusBg(data.atm_status.operational_status)} border rounded-lg p-3 sm:p-4 backdrop-blur-sm relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-green-500/10 to-transparent rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-400 uppercase tracking-wider">ATM Status</div>
              <Activity className="w-5 h-5 text-green-400" />
            </div>
            <div className={`text-xl sm:text-2xl font-bold ${getStatusColor(data.atm_status.operational_status)} uppercase`}>
              {data.atm_status.operational_status}
            </div>
            <div className="text-xs text-gray-400 mt-1">Transactions: {data.atm_status.transactions_today}</div>
          </div>
        </div>

        <div className="bg-linear-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-purple-500/10 to-transparent rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-400 uppercase tracking-wider">Power Source</div>
              <Zap className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-yellow-400 uppercase">
              {data.current_power_source.replace('_', ' ')}
            </div>
            <div className="text-xs text-gray-400 mt-1">3-Phase Active</div>
          </div>
        </div>

        <div className="bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-400 uppercase tracking-wider">Device Health</div>
              <CheckCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <div className={`text-xl sm:text-2xl font-bold ${getStatusColor(data.site_status.device_health)} uppercase`}>
              {data.site_status.device_health}
            </div>
            <div className="text-xs text-gray-400 mt-1">All Systems OK</div>
          </div>
        </div>
      </div>

      {/* Power Monitoring Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Voltage Panel */}
        <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-red-500/30 rounded-lg p-4 sm:p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <h3 className="text-base sm:text-lg font-semibold text-red-400">INPUT VOLTAGE</h3>
          </div>
          <div className="space-y-3">
            {(['red_phase', 'yellow_phase', 'blue_phase'] as const).map((phase, idx) => {
              const colors = ['red', 'yellow', 'blue'];
              const colorClasses = ['text-red-400', 'text-yellow-400', 'text-blue-400'];
              const gradientColors = [
                { from: '#ef4444', to: '#f87171' },
                { from: '#eab308', to: '#facc15' },
                { from: '#3b82f6', to: '#60a5fa' }
              ];
              const voltage = data.power_monitoring.input_voltage[phase].voltage;
              return (
                <div key={phase} className="bg-black/30 rounded p-3 border border-gray-700/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`${colorClasses[idx]} uppercase font-semibold text-sm`}>
                      {colors[idx]} Phase
                    </span>
                    <span className={`${colorClasses[idx]} text-lg sm:text-xl font-bold font-mono`}>
                      {voltage}V
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${(voltage / 250) * 100}%`,
                        background: `linear-gradient(to right, ${gradientColors[idx].from}, ${gradientColors[idx].to})`
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Panel */}
        <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-lg p-4 sm:p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <h3 className="text-base sm:text-lg font-semibold text-blue-400">INPUT CURRENT</h3>
          </div>
          <div className="space-y-3">
            {(['red_phase', 'yellow_phase', 'blue_phase'] as const).map((phase, idx) => {
              const colors = ['red', 'yellow', 'blue'];
              const colorClasses = ['text-red-400', 'text-yellow-400', 'text-blue-400'];
              const gradientColors = [
                { from: '#ef4444', to: '#f87171' },
                { from: '#eab308', to: '#facc15' },
                { from: '#3b82f6', to: '#60a5fa' }
              ];
              const current = data.power_monitoring.input_current[phase].current;
              return (
                <div key={phase} className="bg-black/30 rounded p-3 border border-gray-700/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`${colorClasses[idx]} uppercase font-semibold text-sm`}>
                      {colors[idx]} Phase
                    </span>
                    <span className={`${colorClasses[idx]} text-lg sm:text-xl font-bold font-mono`}>
                      {current}A
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${(current / 15) * 100}%`,
                        background: `linear-gradient(to right, ${gradientColors[idx].from}, ${gradientColors[idx].to})`
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Earth & UPS Panel */}
        <div className="space-y-3 sm:space-y-3">
          {/* Earth Voltage */}
          <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-green-500/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Power className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <h3 className="text-xs sm:text-sm font-semibold text-green-400">EARTH VOLTAGE</h3>
            </div>
            <div className="bg-black/30 rounded p-3 border border-gray-700/50">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Status:</span>
                <span className={`${getStatusColor(data.power_monitoring.earth_voltage.status)} font-bold uppercase`}>
                  {data.power_monitoring.earth_voltage.status}
                </span>
              </div>
              <div className="mt-2 text-center">
                <span className="text-3xl sm:text-4xl font-bold text-green-400 font-mono">
                  {data.power_monitoring.earth_voltage.value}V
                </span>
              </div>
            </div>
          </div>

          {/* UPS Status */}
          <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Power className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <h3 className="text-xs sm:text-sm font-semibold text-purple-400">UPS SYSTEM</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Battery:</span>
                <span className="text-cyan-400 font-bold">{data.ups_system.battery_charge}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">AC Output:</span>
                <span className="text-cyan-400 font-bold">{data.ups_system.output_ac.voltage}V</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">DC Output:</span>
                <span className="text-cyan-400 font-bold">{data.ups_system.output_dc.voltage}V</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Load:</span>
                <span className="text-cyan-400 font-bold">{data.ups_system.load_percentage}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AC and Temperature Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* AC Units */}
        <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/30 rounded-lg p-4 sm:p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Wind className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <h3 className="text-base sm:text-lg font-semibold text-cyan-400">AIR CONDITIONING</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {data.air_conditioning.ac_units.map((ac) => (
              <div key={ac.ac_id} className={`${getStatusBg(ac.status)} border rounded-lg p-3 sm:p-4`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-base sm:text-lg font-bold text-white">{ac.ac_id}</span>
                  <span className={`text-xs px-2 py-1 rounded ${getStatusBg(ac.status)} uppercase font-semibold`}>
                    {ac.status}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Health:</span>
                    <span className={getStatusColor(ac.health)}>{ac.health}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Temp:</span>
                    <span className="text-cyan-400 font-mono">{ac.current_temperature}°C</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 sm:mt-4 bg-black/30 rounded p-3 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm sm:text-base">Room Temperature:</span>
              <span className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">
                {data.air_conditioning.room_temperature}°C
              </span>
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-orange-500/30 rounded-lg p-4 sm:p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            <h3 className="text-base sm:text-lg font-semibold text-orange-400">EMERGENCY CONTACTS</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-black/30 rounded p-3 border border-gray-700/50">
              <div className="text-xs text-gray-400 uppercase mb-1">Regional Manager</div>
              <div className="text-white font-semibold text-sm sm:text-base">{data.contacts.regional_manager.name}</div>
              <div className="text-cyan-400 font-mono text-xs sm:text-sm">{data.contacts.regional_manager.contact_number}</div>
            </div>
            <div className="bg-black/30 rounded p-3 border border-gray-700/50">
              <div className="text-xs text-gray-400 uppercase mb-1">Channel Manager</div>
              <div className="text-white font-semibold text-sm sm:text-base">{data.contacts.channel_manager.name}</div>
              <div className="text-cyan-400 font-mono text-xs sm:text-sm">{data.contacts.channel_manager.contact_number}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMDashboard;
