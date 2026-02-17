import React, { useState } from 'react';
import { GameMetadata } from '../types.ts';

const GAMES_LIST: GameMetadata[] = [
  {
    id: 'truffled-biolume',
    title: 'TRUFFLED',
    description: 'Unearth the secrets of the bioluminescent undergrowth. Survival in a neon-shroom landscape.',
    thumbnail: 'https://images.unsplash.com/photo-1549492423-400259a2e574?q=80&w=600&auto=format&fit=crop',
    portalUrl: 'https://windows.wincheapguesthouse.com/#google_vignette',
    category: 'Survival RPG',
    themeColor: 'blue',
    tags: ['Neon']
  },
  {
    id: 'temporal-nexus',
    title: 'TEMPORAL NEXUS',
    description: 'Chronological shifts and time-bending platforming mechanics.',
    thumbnail: '',
    portalUrl: 'https://windows.wincheapguesthouse.com/#google_vignette',
    category: 'Action',
    themeColor: 'blue',
    tags: ['Nexus']
  },
  {
    id: 'cosmic-legacy',
    title: 'COSMIC LEGACY',
    description: 'A bridge to the ancient digital frontier. Classic computing and legacy gaming.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
    portalUrl: 'https://v86.js.org/',
    category: 'Simulator',
    themeColor: 'blue',
    tags: ['Retro']
  },
  {
    id: 'neon-shadow',
    title: 'NEON SHADOW',
    description: 'High-speed data theft in a synthwave dystopia. Run the grid or be deleted.',
    thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=600&auto=format&fit=crop',
    portalUrl: 'https://poki.com/en/g/cyber-cars-punk-racing',
    category: 'Racing',
    themeColor: 'blue',
    tags: ['Cyberpunk']
  },
  {
    id: 'void-runner',
    title: 'VOID RUNNER',
    description: 'Infinite procedural platforms in the silent vacuum of deep space.',
    thumbnail: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop',
    portalUrl: 'https://www.google.com/logos/2010/pacman10-i.html',
    category: 'Arcade',
    themeColor: 'blue',
    tags: ['Classic']
  }
];

interface SectorButtonProps {
  game: GameMetadata;
  active: boolean;
  onClick: () => void;
}

const SectorButton: React.FC<SectorButtonProps> = ({ game, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-3 px-6 py-3 rounded-2xl font-black text-xs tracking-widest uppercase transition-all duration-300
      border border-white/10 shrink-0
      ${active 
        ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105' 
        : 'bg-zinc-900/80 text-gray-400 hover:text-white hover:border-white/30 hover:bg-zinc-800'
      }
    `}
  >
    <i className={`fa-solid fa-globe text-sm ${active ? 'text-white' : 'text-gray-500'}`}></i>
    <span>{game.title}</span>
  </button>
);

const GamePortal: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameMetadata | null>(null);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl font-black text-white mb-4 italic tracking-tighter uppercase">Game Portal</h2>
          <p className="text-gray-400 text-lg">Initialize bridge to localized sectors.</p>
        </div>
        
        {selectedGame && (
          <button 
            onClick={() => setSelectedGame(null)}
            className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Return to Sector Hub
          </button>
        )}
      </header>

      <div className="flex flex-wrap gap-4 p-4 rounded-[2.5rem] bg-black/20 border border-white/5 backdrop-blur-sm">
        {GAMES_LIST.map((game) => (
          <SectorButton 
            key={game.id} 
            game={game} 
            active={selectedGame?.id === game.id} 
            onClick={() => setSelectedGame(game)}
          />
        ))}
      </div>

      <div className={`transition-all duration-500 transform ${selectedGame ? 'opacity-100 translate-y-0 h-[600px]' : 'opacity-0 translate-y-10 h-0 pointer-events-none'}`}>
        {selectedGame && (
          <div className="h-full flex flex-col space-y-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-4">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                 <h3 className="text-xl font-bold text-white tracking-tighter uppercase italic">{selectedGame.title} // ONLINE</h3>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => window.open(selectedGame.portalUrl, '_blank')}
                  className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 hover:text-white transition-all uppercase"
                >
                  External Link
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative rounded-[2rem] overflow-hidden border border-blue-500/20 bg-black shadow-2xl shadow-blue-900/20">
              <iframe 
                src={selectedGame.portalUrl}
                className="w-full h-full border-none"
                title={selectedGame.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {!selectedGame && (
        <div className="h-[200px] flex items-center justify-center border border-dashed border-white/10 rounded-[2rem] text-gray-600 italic">
          Select a sector to bridge consciousness...
        </div>
      )}
    </div>
  );
};

export default GamePortal;