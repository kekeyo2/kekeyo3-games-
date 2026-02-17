
import React from 'react';
import { TabType } from '../types';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: TabType.HOME, icon: 'fa-house', label: 'Dashboard' },
    { id: TabType.GAMES, icon: 'fa-gamepad', label: 'Game Portal' },
    { id: TabType.AI_BUDDY, icon: 'fa-robot', label: 'AI Oracle' },
    { id: TabType.SETTINGS, icon: 'fa-gear', label: 'Config' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-56 bg-black border-r border-white/5 flex flex-col items-center md:items-stretch py-8 z-50">
      <div className="px-6 mb-12 flex items-center gap-3 justify-center md:justify-start">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg shadow-white/10 shrink-0">
          <i className="fa-solid fa-bolt text-black text-xl"></i>
        </div>
        <h1 className="hidden md:block text-xl font-black text-white tracking-tighter uppercase italic truncate">Kekeyo</h1>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeTab === tab.id
                ? 'bg-white/10 text-white border border-white/10'
                : 'text-gray-500 hover:text-white hover:bg-white/5'
            }`}
          >
            <i className={`fa-solid ${tab.icon} text-lg w-6 flex justify-center transition-transform group-hover:scale-110`}></i>
            <span className="hidden md:block font-bold text-xs uppercase tracking-widest">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="ml-auto w-1 h-4 rounded-full bg-white shadow-[0_0_8px_white]"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-auto px-4 w-full">
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-gray-600 hover:text-white transition-colors">
          <i className="fa-solid fa-right-from-bracket"></i>
          <span className="hidden md:block text-[10px] font-black uppercase tracking-tighter">Disconnect</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
