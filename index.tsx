
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Terminal, Shield, Code, Cpu, Globe, Server, Lock, 
  Github, Linkedin, Mail, ExternalLink, Award, BookOpen, 
  Target, Gamepad2, Mountain, Coffee, User, AlertCircle,
  Wifi, Radio, Database, Fingerprint, Command, Minimize2,
  Music, Play, FastForward, Rewind, Mic, Film, Tv, Book,
  Trophy, Youtube, Newspaper, ArrowUpRight
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

// --- Section Components ---

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Compromising systems to learn how to protect them.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Moving Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-transparent to-cyber-black z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-cyber-dark border border-slate-700 rounded-sm text-xs font-mono tracking-widest animate-pulse-fast">
            <span className="text-team-blue drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">DEFENSE</span>
            <span className="text-slate-600">//</span>
            <span className="text-team-red drop-shadow-[0_0_5px_rgba(255,70,84,0.8)]">OFFENSE</span>
            <span className="text-slate-600">//</span>
            <span className="text-team-purple drop-shadow-[0_0_5px_rgba(189,0,255,0.8)]">ANALYTICS</span>
          </div>
          
          <div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-4">
              ALEX<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-team-red via-team-purple to-team-blue animate-text-shimmer">RIVERA</span>
            </h1>
            <div className="h-8 font-mono text-lg text-team-red typing-cursor">{text}</div>
          </div>

          <p className="text-slate-400 text-lg max-w-md leading-relaxed font-light border-l-2 border-slate-800 pl-6">
            Undergraduate specialist focusing on <span className="text-team-red font-semibold">Red Team</span> operations, <span className="text-team-blue font-semibold">Blue Team</span> defense, and bridging the gap.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <NeonButton primary color="red" icon={Target} onClick={() => window.location.href='#projects'}>Red Team Ops</NeonButton>
            <NeonButton primary color="blue" icon={Shield} onClick={() => window.location.href='#skills'}>Blue Team Def</NeonButton>
          </div>
        </div>

        {/* Interactive Terminal Graphic */}
        <div className="hidden lg:block relative">
          {/* Abstract decoration behind terminal */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-team-blue/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-team-red/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>

          <div className="relative bg-[#050810] border border-slate-800 rounded-sm overflow-hidden font-mono text-sm shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 group hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:border-slate-600">
            {/* Terminal Header */}
            <div className="bg-[#0f1623] px-4 py-2 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700 group-hover:bg-team-red transition-colors duration-300 shadow-[0_0_5px_rgba(255,70,84,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700 group-hover:bg-team-yellow transition-colors duration-300 shadow-[0_0_5px_rgba(250,204,21,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700 group-hover:bg-team-green transition-colors duration-300 shadow-[0_0_5px_rgba(0,255,159,0.5)]"></div>
              </div>
              <div className="text-slate-600 text-xs tracking-widest uppercase">kali-linux — root — zsh</div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 text-slate-300 space-y-3 h-[420px] overflow-hidden relative font-mono text-sm leading-relaxed">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] z-10 pointer-events-none bg-[length:100%_4px]"></div>
              
              <div className="flex flex-col gap-1">
                 <p className="text-slate-600"># Identity Check</p>
                 <p><span className="text-team-red">root@kali</span>:<span className="text-team-blue">~</span>$ whoami</p>
                 <p className="text-white">alex_rivera</p>
              </div>

              <div className="flex flex-col gap-1 mt-4">
                 <p><span className="text-team-red">root@kali</span>:<span className="text-team-blue">~</span>$ cat mission_profile.json | jq</p>
                 <p className="text-team-green">
                   {`{
  "role": "Student_Operator",
  "specialization": "Network_Penetration",
  "status": "Active_Learning",
  "tools": ["Metasploit", "Wireshark", "Python"],
  "objective": "Full_Stack_Security"
}`}
                 </p>
              </div>

              <div className="flex flex-col gap-1 mt-4">
                 <p><span className="text-team-red">root@kali</span>:<span className="text-team-blue">~</span>$ ./initiate_attack_sim.sh</p>
                 <p className="text-slate-500">Loading payloads...</p>
                 <p className="text-slate-500">Target acquired: <span className="text-team-purple">10.10.14.35</span></p>
                 <p className="text-team-yellow animate-pulse">[!] VULNERABILITY DETECTED: CVE-2024-XXXX</p>
                 <p className="text-team-red">Access Granted. Shell established.</p>
              </div>
              
              <div className="animate-pulse mt-2 text-team-red">_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { 
      category: "Red Team / Offensive", 
      icon: Target, 
      colorClass: "text-team-red", 
      accent: "red",
      shadow: "drop-shadow-[0_0_10px_rgba(255,70,84,0.6)]",
      items: ["Metasploit Framework", "Burp Suite Pro", "Hydra & John", "Nmap Scripting", "SQLMap"] 
    },
    { 
      category: "Blue Team / Defensive", 
      icon: Shield, 
      colorClass: "text-team-blue", 
      accent: "blue",
      shadow: "drop-shadow-[0_0_10px_rgba(0,240,255,0.6)]",
      items: ["Wireshark Analysis", "Snort/Suricata", "Splunk SIEM", "Firewall Config", "Memory Forensics"] 
    },
    { 
      category: "Purple / Cloud Ops", 
      icon: Server, 
      colorClass: "text-team-purple", 
      accent: "purple",
      shadow: "drop-shadow-[0_0_10px_rgba(189,0,255,0.6)]",
      items: ["Linux (Kali/Ubuntu)", "Windows AD", "Docker Containers", "AWS EC2/S3", "Bash/Powershell"] 
    },
    { 
      category: "Dev & Scripting", 
      icon: Code, 
      colorClass: "text-team-green", 
      accent: "green",
      shadow: "drop-shadow-[0_0_10px_rgba(0,255,159,0.6)]",
      items: ["Python (Automation)", "C++ (Basics)", "JavaScript", "HTML/CSS", "Assembly (x86)"] 
    },
  ] as const;

  return (
    <section id="skills" className="py-32 bg-cyber-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading number="01" title="System Capabilities" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, idx) => (
            <Card3D key={idx} className="h-full flex flex-col" accentColor={s.accent}>
              <div className={`flex items-center gap-3 mb-6 ${s.colorClass} group-hover:scale-105 transition-transform duration-300 origin-left`}>
                <div className={`${s.shadow}`}>
                   <s.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-lg uppercase tracking-wide leading-tight">{s.category}</h3>
              </div>
              <div className="space-y-3 flex-1">
                {s.items.map(item => (
                  <div key={item} className="flex items-center justify-between group/item cursor-crosshair hover:bg-slate-800/50 p-1 rounded transition-colors border border-transparent hover:border-slate-700">
                    <span className="text-slate-400 text-sm group-hover/item:text-white transition-colors font-mono">{item}</span>
                    <div className={`w-1.5 h-1.5 bg-slate-700 group-hover/item:bg-current transition-colors rounded-sm ${s.colorClass} shadow-[0_0_5px_currentColor]`}></div>
                  </div>
                ))}
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading number="02" title="Operations Log" />

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Project 1: Red Team (Offensive) */}
          <div className="col-span-1 md:col-span-2">
            <Card3D className="h-full !p-0 overflow-hidden group" accentColor="red">
              <div className="relative h-64 overflow-hidden bg-[#1a0505]">
                <div className="absolute inset-0 bg-team-red/5 group-hover:scale-105 transition-transform duration-700">
                  {/* Visual representation of code/network traffic */}
                  <div className="w-full h-full opacity-20 p-6 font-mono text-xs text-team-red overflow-hidden leading-none select-none">
                    {Array(40).fill(0).map((_, i) => (
                      <div key={i} className="whitespace-nowrap">
                        FF{Math.floor(Math.random()*99)} 0A{Math.floor(Math.random()*99)} 1B{Math.floor(Math.random()*99)} -- EXPLOIT_STAGE_1 -- HANDSHAKE_INIT
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#02040a] via-[#02040a]/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Target className="text-team-red drop-shadow-[0_0_10px_rgba(255,70,84,0.8)]" size={24} />
                      <h3 className="text-3xl font-display font-bold text-white mb-1">Red Team Scanner</h3>
                    </div>
                    <Github className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                  </div>
                  <div className="flex gap-3 mt-3">
                    <span className="text-[10px] font-mono px-2 py-1 border border-team-red/30 text-team-red rounded-sm bg-team-red/5">PYTHON 3</span>
                    <span className="text-[10px] font-mono px-2 py-1 border border-team-red/30 text-team-red rounded-sm bg-team-red/5">SCAPY</span>
                    <span className="text-[10px] font-mono px-2 py-1 border border-team-red/30 text-team-red rounded-sm bg-team-red/5">SOCKETS</span>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-2">
                <p className="text-slate-400 leading-relaxed mb-6">
                  Custom multi-threaded network scanner. Features include SYN scanning, OS fingerprinting based on TTL/Window size, and service banner grabbing.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-team-red hover:text-white font-mono text-sm uppercase tracking-wider group/link">
                  > View Source <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </Card3D>
          </div>

          <div className="space-y-6">
            {/* Project 2: Blue Team (Defensive) */}
            <Card3D className="flex flex-col justify-between" accentColor="blue">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <Shield className="text-team-blue drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]" size={20} />
                    <h3 className="text-xl font-display font-bold text-white">Home Lab SIEM</h3>
                  </div>
                  <span className="text-xs font-mono text-team-blue/60">DEFENSE</span>
                </div>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  Deployed ELK Stack (Elastic, Logstash, Kibana) with Wazuh agents. Detected simulated brute-force attacks and configured discord alerts.
                </p>
              </div>
              <div className="flex gap-2 mt-auto">
                <span className="text-[10px] font-mono border border-team-blue/30 px-1.5 py-0.5 text-team-blue/80">ELASTIC</span>
                <span className="text-[10px] font-mono border border-team-blue/30 px-1.5 py-0.5 text-team-blue/80">DOCKER</span>
              </div>
            </Card3D>

            {/* Project 3: Purple Team (Audit) */}
            <Card3D className="flex flex-col justify-between" accentColor="purple">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <Lock className="text-team-purple drop-shadow-[0_0_10px_rgba(189,0,255,0.8)]" size={20} />
                    <h3 className="text-xl font-display font-bold text-white">Vuln Audit</h3>
                  </div>
                  <span className="text-xs font-mono text-team-purple/60">MIXED</span>
                </div>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  Comprehensive vulnerability assessment on Metasploitable 2. Identified 15+ critical CVEs and wrote a NIST-compliant remediation report.
                </p>
              </div>
              <div className="flex gap-2 mt-auto">
                <span className="text-[10px] font-mono border border-team-purple/30 px-1.5 py-0.5 text-team-purple/80">NESSUS</span>
                <span className="text-[10px] font-mono border border-team-purple/30 px-1.5 py-0.5 text-team-purple/80">REPORTING</span>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
       
       <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading number="03" title="Personal_Manifest.json" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
          
          {/* Education - Large Block (Top Left) */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#0b101a] to-[#02040a] rounded-lg p-8 border border-slate-800 hover:border-team-blue hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.2)] transition-all duration-500 relative overflow-hidden group">
             <div className="absolute -bottom-4 -right-4 p-4 opacity-5 rotate-12 group-hover:opacity-10 transition-opacity text-team-blue">
               <BookOpen size={200} />
             </div>
             <h3 className="text-2xl font-display font-bold text-white mb-1">Education</h3>
             <p className="text-team-blue font-mono text-lg mb-8 drop-shadow-[0_0_5px_rgba(0,240,255,0.6)]">CSU San Bernardino</p>
             
             <div className="space-y-6 relative z-10">
               <div className="flex items-start gap-4 group/item">
                 <div className="mt-1 w-2 h-2 bg-team-blue rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)] group-hover/item:bg-white transition-colors"></div>
                 <div>
                   <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">Degree Path</p>
                   <p className="text-white font-bold text-lg">BS Cybersecurity</p>
                   <p className="text-slate-400 text-sm">Technical Track</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4 group/item">
                 <div className="mt-1 w-2 h-2 bg-team-purple rounded-full shadow-[0_0_10px_rgba(189,0,255,0.8)] group-hover/item:bg-white transition-colors"></div>
                 <div>
                   <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">Key Coursework</p>
                   <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-900/50 border border-slate-700 px-2 py-1 rounded text-xs text-slate-300 font-mono hover:border-team-blue transition-colors">Network Defense</span>
                      <span className="bg-slate-900/50 border border-slate-700 px-2 py-1 rounded text-xs text-slate-300 font-mono hover:border-team-blue transition-colors">Ethical Hacking</span>
                      <span className="bg-slate-900/50 border border-slate-700 px-2 py-1 rounded text-xs text-slate-300 font-mono hover:border-team-blue transition-colors">OS Internals</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Media Logs - Enhanced Visuals (Spans 2 rows) */}
          <div className="md:col-span-1 md:row-span-2 bg-cyber-dark rounded-lg p-0 border border-slate-800 flex flex-col relative overflow-hidden group hover:border-team-purple hover:shadow-[0_0_20px_-5px_rgba(189,0,255,0.2)] transition-all duration-300">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-team-purple via-pink-500 to-team-purple"></div>
             <div className="p-4 border-b border-slate-800 bg-[#0f1623]">
                <div className="flex items-center gap-2">
                  <Film size={16} className="text-team-purple" />
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">Media_Logs</h3>
                </div>
             </div>
             
             <div className="p-5 space-y-6 overflow-y-auto custom-scrollbar flex-1">
               <div>
                 <p className="text-[10px] text-team-purple font-mono mb-2 border-b border-slate-800 pb-1">/// TOP_TIER_SERIES</p>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3 group/item cursor-pointer">
                      <Tv size={14} className="text-slate-600 group-hover/item:text-team-purple transition-colors" />
                      <div>
                        <span className="text-sm text-slate-300 font-mono group-hover/item:text-white block leading-none">Mr. Robot</span>
                        <span className="text-[10px] text-slate-600">FSociety_Archives</span>
                      </div>
                   </li>
                   <li className="flex items-center gap-3 group/item cursor-pointer">
                      <Tv size={14} className="text-slate-600 group-hover/item:text-team-purple transition-colors" />
                      <div>
                        <span className="text-sm text-slate-300 font-mono group-hover/item:text-white block leading-none">Silicon Valley</span>
                        <span className="text-[10px] text-slate-600">PiedPiper_Compression</span>
                      </div>
                   </li>
                 </ul>
               </div>

               <div>
                 <p className="text-[10px] text-team-purple font-mono mb-2 border-b border-slate-800 pb-1">/// REQUIRED_VIEWING</p>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3 group/item cursor-pointer">
                      <Film size={14} className="text-slate-600 group-hover/item:text-team-purple transition-colors" />
                      <span className="text-sm text-slate-300 font-mono group-hover/item:text-white">The Matrix (1999)</span>
                   </li>
                   <li className="flex items-center gap-3 group/item cursor-pointer">
                      <Film size={14} className="text-slate-600 group-hover/item:text-team-purple transition-colors" />
                      <span className="text-sm text-slate-300 font-mono group-hover/item:text-white">Who Am I</span>
                   </li>
                    <li className="flex items-center gap-3 group/item cursor-pointer">
                      <Film size={14} className="text-slate-600 group-hover/item:text-team-purple transition-colors" />
                      <span className="text-sm text-slate-300 font-mono group-hover/item:text-white">Tron: Legacy</span>
                   </li>
                 </ul>
               </div>
             </div>
          </div>

          {/* Sports Highlights - New Section (Top Right) */}
          <div className="md:col-span-1 bg-cyber-dark rounded-lg p-5 border border-slate-800 flex flex-col relative overflow-hidden hover:border-team-red hover:shadow-[0_0_20px_-5px_rgba(255,70,84,0.2)] transition-all duration-300 group">
             <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-2">
                 <Trophy size={16} className="text-team-red drop-shadow-[0_0_5px_rgba(255,70,84,0.8)]" />
                 <h3 className="font-display font-bold text-white text-sm uppercase">Highlight_Reel</h3>
               </div>
               <span className="text-[10px] bg-team-red/10 text-team-red px-1.5 py-0.5 rounded border border-team-red/30 animate-pulse">LIVE</span>
             </div>
             <div className="space-y-3">
               <a href="https://www.youtube.com/watch?v=pT-I8jQDQ7c" target="_blank" rel="noreferrer" className="block bg-slate-900/50 hover:bg-slate-800 p-2 rounded border border-slate-800 hover:border-team-red/30 transition-all group/link">
                 <div className="flex items-center justify-between mb-1">
                   <span className="text-xs text-slate-300 font-bold group-hover/link:text-white">LeBron James Block</span>
                   <Youtube size={12} className="text-team-red" />
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">NBA Finals 2016 Game 7</span>
               </a>
               <a href="https://www.youtube.com/watch?v=yCjJyiqpAuU" target="_blank" rel="noreferrer" className="block bg-slate-900/50 hover:bg-slate-800 p-2 rounded border border-slate-800 hover:border-team-red/30 transition-all group/link">
                 <div className="flex items-center justify-between mb-1">
                   <span className="text-xs text-slate-300 font-bold group-hover/link:text-white">Faker's Shockwave</span>
                   <Youtube size={12} className="text-team-red" />
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">League of Legends Worlds</span>
               </a>
             </div>
          </div>

          {/* Books - Small Block (Second Row Right) */}
          <div className="md:col-span-1 bg-cyber-dark rounded-lg p-5 border border-slate-800 flex flex-col relative overflow-hidden hover:border-team-yellow hover:shadow-[0_0_20px_-5px_rgba(250,204,21,0.2)] transition-all duration-300">
             <div className="flex items-center gap-2 mb-3">
               <Book size={16} className="text-team-yellow drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" />
               <h3 className="font-display font-bold text-white text-sm uppercase">Library_DB</h3>
             </div>
             <ul className="space-y-2">
               <li className="text-xs text-slate-400 font-mono border-l-2 border-slate-800 pl-2 hover:border-team-yellow hover:text-white transition-colors cursor-help">
                 Neuromancer <span className="text-slate-600 block text-[10px]">Wm. Gibson</span>
               </li>
               <li className="text-xs text-slate-400 font-mono border-l-2 border-slate-800 pl-2 hover:border-team-yellow hover:text-white transition-colors cursor-help">
                 Sandworm <span className="text-slate-600 block text-[10px]">Andy Greenberg</span>
               </li>
               <li className="text-xs text-slate-400 font-mono border-l-2 border-slate-800 pl-2 hover:border-team-yellow hover:text-white transition-colors cursor-help">
                 Ghost in the Wires <span className="text-slate-600 block text-[10px]">Kevin Mitnick</span>
               </li>
             </ul>
          </div>

          {/* Intel Feed / Innovations - New Wide Block (Third Row) */}
          <div className="md:col-span-2 bg-cyber-dark rounded-lg p-0 border border-slate-800 flex flex-col relative overflow-hidden hover:border-team-green hover:shadow-[0_0_20px_-5px_rgba(0,255,159,0.2)] transition-all duration-300">
             <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/30">
               <div className="flex items-center gap-2">
                 <Newspaper size={16} className="text-team-green" />
                 <h3 className="font-display font-bold text-white text-sm uppercase">Current_Intel_Feed</h3>
               </div>
               <div className="flex gap-1">
                 <div className="w-1 h-1 bg-team-green rounded-full animate-pulse"></div>
                 <div className="w-1 h-1 bg-team-green rounded-full animate-pulse delay-75"></div>
                 <div className="w-1 h-1 bg-team-green rounded-full animate-pulse delay-150"></div>
               </div>
             </div>
             <div className="p-4 grid grid-cols-1 gap-3">
               <a href="https://arxiv.org/abs/2302.04235" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-2 hover:bg-slate-800 rounded transition-colors group">
                 <div className="mt-1 min-w-[4px] h-4 bg-slate-700 group-hover:bg-team-green transition-colors"></div>
                 <div>
                   <h4 className="text-sm text-slate-200 font-bold leading-tight group-hover:text-team-green transition-colors flex items-center gap-1">
                     Adversarial Attacks on LLMs <ArrowUpRight size={10} />
                   </h4>
                   <p className="text-[11px] text-slate-500 font-mono mt-1">Reading about prompt injection and jailbreaking techniques in modern AI models.</p>
                 </div>
               </a>
               <a href="https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-2 hover:bg-slate-800 rounded transition-colors group">
                 <div className="mt-1 min-w-[4px] h-4 bg-slate-700 group-hover:bg-team-green transition-colors"></div>
                 <div>
                   <h4 className="text-sm text-slate-200 font-bold leading-tight group-hover:text-team-green transition-colors flex items-center gap-1">
                     Post-Quantum Cryptography <ArrowUpRight size={10} />
                   </h4>
                   <p className="text-[11px] text-slate-500 font-mono mt-1">Tracking NIST's standardization of CRYSTALS-Kyber and Dilithium algorithms.</p>
                 </div>
               </a>
             </div>
          </div>

          {/* Hobbies (Third Row) */}
          <div className="md:col-span-2 bg-cyber-dark rounded-lg p-6 border border-slate-700/50 flex flex-col justify-between hover:border-team-purple hover:shadow-[0_0_20px_-5px_rgba(189,0,255,0.2)] transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="text-team-purple group-hover:rotate-12 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(189,0,255,0.6)]" size={20} />
              <h3 className="font-display font-bold text-white">Offline / Downtime</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-slate-800 hover:bg-team-purple/10 border border-slate-700 hover:border-team-purple transition-colors rounded text-xs text-slate-300 font-mono cursor-help flex items-center gap-2 shadow-sm hover:shadow-[0_0_10px_rgba(189,0,255,0.2)]">
                FPS Gaming <span className="text-team-purple text-[10px]">VALORANT</span>
              </span>
              <span className="px-3 py-1.5 bg-slate-800 hover:bg-team-purple/10 border border-slate-700 hover:border-team-purple transition-colors rounded text-xs text-slate-300 font-mono cursor-help shadow-sm hover:shadow-[0_0_10px_rgba(189,0,255,0.2)]">
                Mechanical Keyboards
              </span>
              <span className="px-3 py-1.5 bg-slate-800 hover:bg-team-purple/10 border border-slate-700 hover:border-team-purple transition-colors rounded text-xs text-slate-300 font-mono cursor-help shadow-sm hover:shadow-[0_0_10px_rgba(189,0,255,0.2)]">
                Hiking Local Trails
              </span>
              <span className="px-3 py-1.5 bg-slate-800 hover:bg-team-purple/10 border border-slate-700 hover:border-team-purple transition-colors rounded text-xs text-slate-300 font-mono cursor-help shadow-sm hover:shadow-[0_0_10px_rgba(189,0,255,0.2)]">
                Def Con Docs
              </span>
            </div>
          </div>

          {/* Clubs - Wide Block (Bottom Row) */}
          <div className="md:col-span-3 bg-cyber-dark rounded-lg p-6 border border-slate-700/50 flex flex-row items-center justify-between hover:border-team-blue hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.2)] transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User className="text-team-blue drop-shadow-[0_0_5px_rgba(0,240,255,0.6)]" size={20} />
                <h3 className="font-display font-bold text-white">Campus Involvement</h3>
              </div>
              <p className="text-sm text-slate-400 font-mono mb-1"><span className="text-white font-bold">InfoSec Club</span> — Vice President</p>
              <p className="text-xs text-slate-500">Organizing weekly workshops and semester CTFs.</p>
            </div>
            <div className="hidden sm:flex h-12 w-12 bg-team-blue/10 border border-team-blue/30 rounded-full items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.1)]">
               <span className="font-bold text-team-blue text-xs">VP</span>
            </div>
          </div>

          {/* GPA / Stats - Small Block (Bottom Row) */}
          <div className="md:col-span-1 bg-cyber-dark rounded-lg p-6 border border-slate-700/50 flex flex-col justify-center items-center text-center relative overflow-hidden hover:border-team-green hover:shadow-[0_0_20px_-5px_rgba(0,255,159,0.2)] transition-all duration-300">
             <div className="absolute inset-0 bg-team-green/5 mask-image-gradient"></div>
             <div className="text-5xl font-display font-bold text-white mb-2 relative z-10 drop-shadow-[0_0_10px_rgba(0,255,159,0.4)]">3.8</div>
             <div className="text-xs text-team-green font-mono uppercase tracking-widest relative z-10">Current GPA</div>
          </div>

        </div>
       </div>
    </section>
  );
};

const Contact = () => (
  <footer className="bg-slate-950 border-t border-slate-800/50 pt-24 pb-32">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-5xl font-display font-bold text-white mb-8 tracking-tight">INITIATE_HANDSHAKE</h2>
      <p className="text-slate-400 mb-12 max-w-lg mx-auto text-lg font-light">
        Currently looking for internships for Summer 2025. 
        <br />Open to collaboration on CTFs or Open Source projects.
      </p>
      
      <div className="flex justify-center gap-8 mb-16">
        <a href="#" className="group p-5 bg-slate-900 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-team-red hover:shadow-[0_0_20px_rgba(255,70,84,0.6)] hover:scale-110 transition-all duration-300">
          <Mail size={28} className="group-hover:text-team-red transition-colors" />
        </a>
        <a href="#" className="group p-5 bg-slate-900 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-team-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:scale-110 transition-all duration-300">
          <Linkedin size={28} className="group-hover:text-team-blue transition-colors" />
        </a>
        <a href="#" className="group p-5 bg-slate-900 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-team-purple hover:shadow-[0_0_20px_rgba(189,0,255,0.6)] hover:scale-110 transition-all duration-300">
          <Github size={28} className="group-hover:text-team-purple transition-colors" />
        </a>
      </div>

      <div className="text-xs font-mono text-slate-600 uppercase tracking-widest">
        <p>SYSTEM_ID: ALEX_RIVERA // SECURE_CONNECTION</p>
      </div>
    </div>
  </footer>
);

const MusicWidget = () => (
  <div className="hidden md:flex items-center gap-4 px-4 py-2 bg-slate-900/80 border-r border-slate-800">
    <div className="flex items-center justify-center w-8 h-8 bg-green-500/10 rounded text-green-400">
      <Music size={14} className="animate-pulse" />
    </div>
    <div className="flex flex-col min-w-[120px]">
      <span className="text-[10px] text-slate-400 font-mono uppercase leading-none mb-1">Now Playing</span>
      <div className="relative overflow-hidden h-4 w-32">
        <div className="whitespace-nowrap text-xs text-white font-bold animate-marquee">
          Lofi Hip Hop Radio - Beats to Relax/Study To
        </div>
      </div>
    </div>
    <div className="flex gap-2 text-slate-400">
      <Rewind size={12} className="hover:text-white cursor-pointer" />
      <Play size={12} className="hover:text-white cursor-pointer" />
      <FastForward size={12} className="hover:text-white cursor-pointer" />
    </div>
  </div>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-cyber-black min-h-screen text-slate-200 selection:bg-team-red/30 selection:text-white font-sans">
      {/* Fixed Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#02040a]/90 backdrop-blur-md py-3 border-b border-slate-800' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-display font-bold text-2xl tracking-tight flex items-center gap-2">
            <Terminal className="text-team-blue drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" size={24} />
            <span className="text-white">ALEX<span className="text-slate-600">_SEC</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono font-medium">
            <a href="#home" className="text-slate-400 hover:text-team-blue transition-colors hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">_HOME</a>
            <a href="#skills" className="text-slate-400 hover:text-team-red transition-colors hover:drop-shadow-[0_0_5px_rgba(255,70,84,0.5)]">_SKILLS</a>
            <a href="#projects" className="text-slate-400 hover:text-team-purple transition-colors hover:drop-shadow-[0_0_5px_rgba(189,0,255,0.5)]">_PROJECTS</a>
            <a href="#about" className="text-slate-400 hover:text-team-green transition-colors hover:drop-shadow-[0_0_5px_rgba(0,255,159,0.5)]">_ABOUT</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <BentoGrid />
        <Contact />
      </main>

      {/* System Status Bar (Fixed Bottom) */}
      <div className="fixed bottom-0 left-0 w-full bg-[#050810] border-t border-slate-800 h-10 z-40 flex justify-between items-stretch">
        <div className="flex items-center">
           <MusicWidget />
           <div className="px-4 flex items-center gap-2 border-r border-slate-800 h-full">
             <div className="w-1.5 h-1.5 bg-team-green rounded-full animate-pulse shadow-[0_0_5px_#00ff9f]"></div>
             <span className="text-[10px] font-mono text-slate-500">ONLINE</span>
           </div>
        </div>
        
        <div className="flex items-center px-4 gap-6 text-[10px] font-mono text-slate-500">
          <span className="hidden sm:inline">CPU: 12%</span>
          <span className="hidden sm:inline">RAM: 8.2GB</span>
          <span className="text-team-blue">IP: 192.168.1.105</span>
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
