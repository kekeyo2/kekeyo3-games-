
import React from 'react';

interface HomeProps {
  onEnterPortal?: () => void;
}

const Home: React.FC<HomeProps> = ({ onEnterPortal }) => {
  const truffledUrl = "https://windows.wincheapguesthouse.com/#google_vignette";

  const handlePlayGame = () => {
    window.open(truffledUrl, '_blank');
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* Featured Section - TRUFFLED */}
      <section className="relative h-[400px] rounded-[2.5rem] overflow-hidden group border border-blue-900/20 shadow-2xl shadow-blue-950/40">
        <img 
          src="https://images.unsplash.com/photo-1549492423-400259a2e574?q=80&w=1200&auto=format&fit=crop" 
          alt="Truffled" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 p-12 flex flex-col justify-center">
          <span className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <i className="fa-solid fa-sparkles animate-pulse"></i>
            Premium Discovery
          </span>
          
          <a 
            href={truffledUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group/title"
          >
            <h2 className="text-6xl font-black text-white mb-4 tracking-tighter uppercase italic group-hover/title:text-blue-500 transition-colors duration-300">
              TRUFFLED
            </h2>
          </a>

          <div className="mb-6 flex gap-2">
             <span className="px-3 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-[10px] text-blue-400 font-bold uppercase">Biolume Edition</span>
             <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 font-bold uppercase">Survival RPG</span>
          </div>
          <p className="text-gray-300 max-w-md text-lg mb-8 leading-relaxed">
            Unearth the secrets of the bioluminescent undergrowth. Navigate a neon-shroom landscape where every spore tells a story of survival and evolution.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={handlePlayGame}
              className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-blue-500 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-blue-600/30"
            >
              Play Game
            </button>
          </div>
        </div>
      </section>

      {/* Game Request Section */}
      <section className="bg-gradient-to-r from-blue-900/10 to-black/40 rounded-[2.5rem] p-12 border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <i className="fa-solid fa-ghost text-8xl text-blue-500"></i>
        </div>
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-3xl font-bold text-white mb-4 italic tracking-tighter uppercase">Request a Portal</h3>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            Have a specific sector or legacy system you want to see integrated into the Game portal? We're always expanding the grid. Submit your game requests below.
          </p>
          <a 
            href="mailto:josenava2@greenbaystudent.com"
            className="inline-flex items-center gap-3 bg-white hover:bg-blue-600 text-black hover:text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-white/5 hover:scale-105 active:scale-95"
          >
            <i className="fa-solid fa-paper-plane"></i>
            Request Game: josenava2@greenbaystudent.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
