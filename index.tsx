import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Terminal, Shield, Code, Cpu, Globe, Server, Lock, 
  Github, Linkedin, Mail, ExternalLink, Award, BookOpen, 
  Target, Gamepad2, Mountain, Coffee, User, AlertCircle,
  Wifi, Radio, Database, Fingerprint, Command, Minimize2,
  Music, Play, FastForward, Rewind, Mic, Film, Tv, Book,
  Trophy, Youtube, Newspaper, ArrowUpRight, Heart, Power
} from 'lucide-react';

// --- Utility Components ---

const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => (
  <span className={`glitch-text font-display font-black uppercase tracking-normal ${className}`} data-text={text}>
    {text}
  </span>
);

const NeonButton = ({ children, primary = false, color = "blue", icon: Icon, onClick }: { children?: React.ReactNode; primary?: boolean; color?: "red" | "blue" | "purple"; icon?: any; onClick?: () => void }) => {
  const colorStyles = {
    red: "border-team-red text-team-red bg-team-red/10 hover:bg-team-red hover:text-black hover:shadow-[0_0_20px_rgba(255,70,84,0.5)]",
    blue: "border-team-blue text-team-blue bg-team-blue/10 hover:bg-team-blue hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]",
    purple: "border-team-purple text-team-purple bg-team-purple/10 hover:bg-team-purple hover:text-white hover:shadow-[0_0_20px_rgba(189,0,255,0.5)]"
  };

  const secondaryClass = "bg-cyber-dark/50 text-slate-400 border-l-4 border-slate-700 hover:border-white hover:text-white";
  const primaryClass = `border-l-4 ${colorStyles[color]}`;

  return (
    <button 
      onClick={onClick}
      className={`
        relative group px-6 py-3 font-display font-bold text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 clip-path-slant
        ${primary ? primaryClass : secondaryClass}
      `}
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon size={18} />}
        {children}
      </span>
    </button>
  );
};

type Card3DProps = {
  children?: React.ReactNode;
  className?: string;
  accentColor?: "red" | "blue" | "purple" | "green" | "slate";
};

const Card3D: React.FC<Card3DProps> = ({ children, className = "", accentColor = "slate" }) => {
  
  const accentStyles = {
    red: "hover:border-team-red hover:shadow-[0_0_30px_-5px_rgba(255,70,84,0.3)]",
    blue: "hover:border-team-blue hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.3)]",
    purple: "hover:border-team-purple hover:shadow-[0_0_30px_-5px_rgba(189,0,255,0.3)]",
    green: "hover:border-team-green hover:shadow-[0_0_30px_-5px_rgba(0,255,159,0.3)]",
    slate: "hover:border-slate-500",
  };

  const cornerColor = {
    red: "group-hover:bg-team-red",
    blue: "group-hover:bg-team-blue",
    purple: "group-hover:bg-team-purple",
    green: "group-hover:bg-team-green",
    slate: "group-hover:bg-slate-400",
  };

  const scanLineColor = {
    red: "bg-team-red shadow-[0_0_10px_#ff4654]",
    blue: "bg-team-blue shadow-[0_0_10px_#00f0ff]",
    purple: "bg-team-purple shadow-[0_0_10px_#bd00ff]",
    green: "bg-team-green shadow-[0_0_10px_#00ff9f]",
    slate: "bg-slate-400",
  };

  const bgGradient = {
    red: "from-team-red/10",
    blue: "from-team-blue/10",
    purple: "from-team-purple/10",
    green: "from-team-green/10",
    slate: "from-slate-700/10",
  };

  return (
    <div className={`
      group relative bg-cyber-dark/80 backdrop-blur-sm border border-slate-800/60 p-6 transition-all duration-500 overflow-hidden
      ${accentStyles[accentColor]}
      ${className}
    `}>
      {/* Background Gradient Fade In */}
      <div className={`absolute inset-0 bg-gradient-to-b ${bgGradient[accentColor]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

      {/* Scanner Line Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none">
        <div className={`absolute left-0 right-0 h-[2px] ${scanLineColor[accentColor]} -top-full opacity-0 group-hover:opacity-100 group-hover:animate-scan-line z-0`}></div>
      </div>

      {/* Tech Decor Corners */}
      <div className={`absolute top-0 left-0 w-px h-4 bg-slate-700 ${cornerColor[accentColor]} transition-colors duration-300 z-10`}></div>
      <div className={`absolute top-0 left-0 h-px w-4 bg-slate-700 ${cornerColor[accentColor]} transition-colors duration-300 z-10`}></div>
      
      <div className={`absolute bottom-0 right-0 w-px h-4 bg-slate-700 ${cornerColor[accentColor]} transition-colors duration-300 z-10`}></div>
      <div className={`absolute bottom-0 right-0 h-px w-4 bg-slate-700 ${cornerColor[accentColor]} transition-colors duration-300 z-10`}></div>
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

const SectionHeading = ({ number, title, color = "text-white" }: { number: string; title: string; color?: string }) => (
  <div className="flex items-baseline gap-4 mb-16 relative group">
    <span className="text-5xl font-display font-bold text-slate-800 select-none absolute -top-8 -left-4 z-0 opacity-30 group-hover:text-slate-700 transition-colors">
      {number}
    </span>
    <h2 className={`text-3xl font-display font-bold uppercase tracking-wide relative z-10 pl-4 border-l-4 border-slate-700 group-hover:border-white transition-colors ${color}`}>
      {title}
    </h2>
    <div className="flex-1 h-px bg-slate-800 self-center ml-4 group-hover:bg-slate-700 transition-colors"></div>
  </div>
);

const BootScreen = ({ onEnter }: { onEnter: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [bootComplete, setBootComplete] = useState(false);
  
  const bootText = [
    { text: "Initializing BIOS...", delay: 100, color: "text-slate-500" },
    { text: "Checking Memory... 32GB OK", delay: 200, color: "text-slate-500" },
    { text: "Loading Kernel Modules...", delay: 400, color: "text-team-blue" },
    { text: "Mounting File Systems... [OK]", delay: 600, color: "text-team-green" },
    { text: "Connecting to Network Node 192.168.1.X...", delay: 800, color: "text-slate-400" },
    { text: "Verifying Security Certificates...", delay: 1000, color: "text-team-yellow" },
    { text: "Firewall Status: ACTIVE", delay: 1200, color: "text-team-green" },
    { text: "Detecting User Signature...", delay: 1600, color: "text-team-purple" },
    { text: "Decryption Key Found.", delay: 2000, color: "text-team-green" },
    { text: "Accessing Profile: ALEX RIVERA", delay: 2500, color: "text-team-red font-bold" },
  ];

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    
    bootText.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, item]);
        // Scroll to bottom
        const container = document.getElementById('boot-terminal');
        if(container) container.scrollTop = container.scrollHeight;
      }, item.delay);
      timeouts.push(timeout);
    });

    const finalTimeout = setTimeout(() => {
      setBootComplete(true);
    }, 3000);
    timeouts.push(finalTimeout);

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center font-mono overflow-hidden crt">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
      
      {/* Boot Terminal Text */}
      <div id="boot-terminal" className={`absolute top-10 left-10 bottom-32 right-10 overflow-hidden flex flex-col justify-end pb-4 transition-opacity duration-500 ${bootComplete ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
        {lines.map((line, idx) => (
          <div key={idx} className={`${line.color} mb-1 text-sm md:text-base tracking-wider`}>
            <span className="mr-2 text-slate-700">{`>`}</span>
            {line.text}
          </div>
        ))}
        <div className="animate-pulse text-team-red mt-1">_</div>
      </div>

      {/* Main Reveal */}
      <div className={`relative z-10 text-center transition-all duration-1000 transform ${bootComplete ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <h1 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter mb-2 glitch-text" data-text="ALEX RIVERA">
          ALEX RIVERA
        </h1>
        <p className="text-team-blue text-