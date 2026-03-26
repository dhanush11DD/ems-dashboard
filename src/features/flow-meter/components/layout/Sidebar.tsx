"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Droplets,
  Activity,
  Settings,
  ChevronLeft,
  ChevronRight,
  Gauge,
} from 'lucide-react';

const navItems = [
  { href: '/flow-meter', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/', label: 'ATM Monitor', icon: Activity },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={`hidden md:flex flex-col fm-sidebar border-r fm-border transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-56'
        }`}
      >
        {/* Logo */}
        <div className="p-4 border-b fm-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center shrink-0">
              <Droplets className="w-4 h-4 text-cyan-400" />
            </div>
            {!collapsed && (
              <div className="overflow-hidden">
                <h1 className="text-sm font-bold fm-text-primary whitespace-nowrap">Flow Meter</h1>
                <p className="text-[10px] fm-text-secondary whitespace-nowrap">Monitoring System</p>
              </div>
            )}
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-2 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors fm-text-secondary hover:fm-text-primary hover:bg-white/5 ${
                  item.href === '/flow-meter'
                    ? 'bg-cyan-500/10 !text-cyan-400 border border-cyan-500/20'
                    : ''
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!collapsed && <span className="text-sm">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* System info footer */}
        {!collapsed && (
          <div className="p-3 border-t fm-border">
            <div className="flex items-center gap-2 px-2">
              <Gauge className="w-3.5 h-3.5 fm-text-secondary" />
              <span className="text-[10px] fm-text-secondary">FM-WTP-001</span>
            </div>
          </div>
        )}

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-3 border-t fm-border fm-text-secondary hover:fm-text-primary transition-colors flex justify-center"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </aside>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 fm-sidebar border-t fm-border flex justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg text-[10px] fm-text-secondary ${
                item.href === '/flow-meter' ? '!text-cyan-400' : ''
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
        <Link href="/flow-meter" className="flex flex-col items-center gap-1 px-3 py-1 rounded-lg text-[10px] fm-text-secondary">
          <Settings className="w-4 h-4" />
          Settings
        </Link>
      </div>
    </>
  );
}
