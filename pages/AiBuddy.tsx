import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService.ts';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AiBuddy: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Greetings, Commander! I'm Keke, your arcade navigator. Looking for a specific vibe or need a recommendation within Kekeyo Games?", sender: 'ai', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await geminiService.getAiBuddyChat(input, []);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: response || "My circuits are flickering... ask me again!",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col max-w-4xl mx-auto">
      <div className="flex-1 overflow-y-auto space-y-6 pr-4 mb-6 custom-scrollbar" ref={scrollRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-3xl ${
              msg.sender === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-600/20' 
                : 'bg-white/10 text-gray-100 rounded-bl-none border border-white/10 backdrop-blur-md'
            }`}>
              <p className="leading-relaxed">{msg.text}</p>
              <p className="text-[10px] mt-2 opacity-50 text-right">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-4 rounded-3xl border border-white/10 animate-pulse text-gray-500 text-sm italic">
              Keke is analyzing the stars...
            </div>
          </div>
        )}
      </div>

      <div className="relative group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask Keke for a game or just chat..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all backdrop-blur-md"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <i className="fa-solid fa-paper-plane text-sm"></i>
        </button>
      </div>
    </div>
  );
};

export default AiBuddy;