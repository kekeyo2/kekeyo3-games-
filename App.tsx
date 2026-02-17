import React, { useState } from 'react';
import StarBackground from './components/StarBackground.tsx';
import Sidebar from './components/Sidebar.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import Home from './pages/Home.tsx';
import GamePortal from './pages/GamePortal.tsx';
import AiBuddy from './pages/AiBuddy.tsx';
import { TabType } from './types.ts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case TabType.HOME:
        return <Home onEnterPortal={() => setActiveTab(TabType.GAMES)} />;
      case TabType.GAMES:
        return <GamePortal />;
      case TabType.AI_BUDDY:
        return <AiBuddy />;
      default:
        return <Home onEnterPortal={() => setActiveTab(TabType.GAMES)} />;
    }
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-white selection:text-black">
      <StarBackground />
      <CustomCursor />
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="pl-20 md:pl-56 min-h-screen transition-all duration-300">
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 md:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="md:hidden w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-bolt text-black text-xs"></i>
            </div>
            <div className="h-10 px-4 bg-white/5 rounded-full border border-white/10 flex items-center gap-3">
              <i className="fa-solid fa-magnifying-glass text-gray-600 text-sm"></i>
              <input 
                type="text" 
                placeholder="Search sectors..." 
                className="bg-transparent border-none outline-none text-sm w-32 md:w-64 placeholder:text-gray-700 text-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <button className="relative w-10 h-10 flex items-center justify-center text-gray-600 hover:text-white transition-colors">
              <i className="fa-solid fa-bell text-lg"></i>
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="p-6 md:p-12 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;