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

const NeonButton = ({ children, primary = false, icon: Icon, onClick }: { children?: React.ReactNode; primary?: boolean; icon?: any; onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`
      relative group px-6 py-3 font-display font-bold text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 clip-path-slant
      ${primary 
        ? 'bg-cyber-primary/10 text-cyber-primary border-l-4 border-cyber-primary hover:bg-cyber-primary hover:text-black' 
        : 'bg-slate-900/50 text-slate-400 border-l-4 border-slate-700 hover:border-white hover:text-white'}
    `}
    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
  >
    <span className="relative z-10 flex items-center gap-2">
      {Icon && <Icon size={18} />}
      {children}
    </span>
    {primary && <div className="absolute inset-0 bg-cyber-primary/20 blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>}
  </button>
);

const Card3D = ({ children, className = "", glowColor = "cyan" }: { children?: React.ReactNode; className?: string; glowColor?: string; key?: any }) => {
  return (
    <div className={`
      group relative bg-slate-900/60 backdrop-blur-md border border-slate-800/60 p-6 transition-all duration-300
      hover:border-${glowColor}-400/40 hover:bg-slate-800/80
      ${className}
    `}>
      {/* Tech Decor Corners */}
      <div className="absolute top-0 left-0 w-px h-4 bg-slate-600 group-hover:bg-cyber-primary transition-colors"></div>
      <div className="absolute top-0 left-0 h-px w-4 bg-slate-600 group-hover:bg-cyber-primary transition-colors"></div>
      
      <div className="absolute bottom-0 right-0 w-px h-4 bg-slate-600 group-hover:bg-cyber-primary transition-colors"></div>
      <div className="absolute bottom-0 right-0 h-px w-4 bg-slate-600 group-hover:bg-cyber-primary transition-colors"></div>
      
      {children}
    </div>
  );
};

const SectionHeading = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-baseline gap-4 mb-16 relative">
    <span className="text-5xl font-display font-bold text-slate-800 select-none absolute -top-8 -left-4 z-0 opacity-50">
      {number}
    </span>
    <h2 className="text-3xl font-display font-bold text-white uppercase tracking-wide relative z-10 pl-4 border-l-2 border-cyber-accent">
      {title}
    </h2>
    <div className="flex-1 h-px bg-slate-800 self-center ml-4"></div>
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
      <div className="absolute inset-0 cyber-grid opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-transparent to-cyber-black z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-slate-900 border border-slate-700 rounded-sm text-cyber-primary text-xs font-mono tracking-widest">
            <div className="w-2 h-2 bg-cyber-accent rounded-full animate-pulse"></div>
            CSUSB // CYBER_SECURITY_MAJOR
          </div>
          
          <div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-4">
              ALEX<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">RIVERA</span>
            </h1>
            <div className="h-8 font-mono text-lg text-cyber-primary typing-cursor">{text}</div>
          </div>

          <p className="text-slate-400 text-lg max-w-md leading-relaxed font-light">
            Undergraduate specialist focusing on offensive security, network defense, and breaking things (legally).
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <NeonButton primary icon={Terminal} onClick={() => window.location.href='#projects'}>View Operations</NeonButton>
            <NeonButton icon={Github}>GitHub</NeonButton>
          </div>
        </div>

        {/* Interactive Terminal Graphic */}
        <div className="hidden lg:block relative">
          {/* Abstract decoration behind terminal */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyber-secondary/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyber-primary/10 rounded-full blur-[100px]"></div>

          <div className="relative bg-[#0a0f1c] border border-slate-700 rounded-sm overflow-hidden font-mono text-sm shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Terminal Header */}
            <div className="bg-[#161b29] px-4 py-2 flex items-center justify-between border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              </div>
              <div className="text-slate-500 text-xs tracking-widest uppercase">kali-linux — zsh — 80x24</div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 text-slate-300 space-y-3 h-[420px] overflow-hidden relative font-mono text-sm leading-relaxed">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-10 pointer-events-none bg-[length:100%_4px]"></div>
              
              <div className="flex flex-col gap-1">
                 <p className="text-slate-500"># System Identification</p>
                 <p><span className="text-cyber-accent">root@csusb-cyber</span>:<span className="text-blue-400">~</span>$ whoami</p>
                 <p className="text-white">alex_rivera</p>
              </div>

              <div className="flex flex-col gap-1 mt-4">
                 <p><span className="text-cyber-accent">root@csusb-cyber</span>:<span className="text-blue-400">~</span>$ cat skills.json | jq</p>
                 <p className="text-green-400">
                   {`{
  "status": "student",
  "year": "Junior",
  "focus": ["Pentesting", "Network Security"],
  "tools": ["Burp Suite", "Wireshark", "Python"],
  "caffeine_level": "CRITICAL"
}`}
                 </p>
              </div>

              <div className="flex flex-col gap-1 mt-4">
                 <p><span className="text-cyber-accent">root@csusb-cyber</span>:<span className="text-blue-400">~</span>$ ./run_ctf.sh --target=flag</p>
                 <p className="text-slate-400">Initializing exploit chain...</p>
                 <p className="text-slate-400">Payload delivery: <span className="text-green-500">SUCCESS</span></p>
                 <p className="text-yellow-400">[!] FLAG CAPTURED: CTF{"{cyb3r_c0y0t3_2025}"}</p>
              </div>
              
              <div className="animate-pulse mt-2 text-cyber-accent">_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { category: "Red Team / Offensive", icon: Target, color: "text-red-400", items: ["Metasploit Framework", "Burp Suite Pro", "Hydra & John", "Nmap Scripting", "SQLMap"] },
    { category: "Blue Team / Defensive", icon: Shield, color: "text-blue-400", items: ["Wireshark Analysis", "Snort Ruleset", "Splunk SIEM", "Firewall Config", "Memory Forensics"] },
    { category: "SysAdmin & Cloud", icon: Server, color: "text-purple-400", items: ["Linux (Kali/Ubuntu)", "Windows Server AD", "Docker Containers", "AWS EC2/S3", "Bash/Powershell"] },
    { category: "Code & Scripting", icon: Code, color: "text-green-400", items: ["Python (Automation)", "C++ (Basics)", "JavaScript", "HTML/CSS", "Assembly (x86)"] },
  ];

  return (
    <section id="skills" className="py-32 bg-cyber-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading number="01" title="Loadout & Capabilities" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, idx) => (
            <Card3D key={idx} className="h-full flex flex-col">
              <div className={`flex items-center gap-3 mb-6 ${s.color}`}>
                <s.icon size={28} strokeWidth={1.5} />
                <h3 className="font-display font-bold text-lg uppercase tracking-wide leading-tight">{s.category}</h3>
              </div>
              <div className="space-y-3 flex-1">
                {s.items.map(item => (
                  <div key={item} className="flex items-center justify-between group/item cursor-crosshair hover:bg-slate-800/50 p-1 rounded transition-colors">
                    <span className="text-slate-400 text-sm group-hover/item:text-white transition-colors font-mono">{item}</span>
                    <div className={`w-1.5 h-1.5 bg-slate-700 group-hover/item:bg-white transition-colors rounded-sm`}></div>
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
        <SectionHeading number="02" title="Project Archives" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Card3D className="h-full bg-slate-900/50 !p-0 overflow-hidden group hover:border-cyber-primary/50">
              <div className="relative h-64 overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700">
                  {/* Visual representation of code/network traffic */}
                  <div className="w-full h-full opacity-10 p-6 font-mono text-xs text-cyber-primary overflow-hidden leading-none select-none">
                    {Array(40).fill(0).map((_, i) => (
                      <div key={i} className="whitespace-nowrap">
                        FF{Math.floor(Math.random()*99)} 0A{Math.floor(Math.random()*99)} 1B{Math.floor(Math.random()*99)} -- PACKET_LOSS_DETECTED -- RETRY_CONNECTION
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-display font-bold text-white mb-1">Python Network Scanner</h3>
                    <Github className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                  </div>
                  <div className="flex gap-3 mt-3">
                    <span className="text-xs font-mono px-2 py-1 border border-blue-500/30 text-blue-400 rounded-sm">PYTHON 3</span>
                    <span className="text-xs font-mono px-2 py-1 border border-blue-500/30 text-blue-400 rounded-sm">SCAPY</span>
                    <span className="text-xs font-mono px-2 py-1 border border-blue-500/30 text-blue-400 rounded-sm">SOCKETS</span>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-2">
                <p className="text-slate-400 leading-relaxed mb-6">
                  A custom multi-threaded network scanner built from scratch. Features include SYN scanning, OS fingerprinting based on TTL/Window size, and service banner grabbing. Used to audit local home lab vulnerabilities.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-cyber-primary hover:text-white font-mono text-sm uppercase tracking-wider group/link">
                  > Access Repository <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </Card3D>
          </div>

          <div className="space-y-6">
            <Card3D className="bg-slate-900/50 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Database className="text-cyber-secondary" size={24} />
                  <span className="text-xs font-mono text-slate-500">2024</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Home Lab SIEM Stack</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  Deployed a full ELK (Elasticsearch, Logstash, Kibana) stack combined with Wazuh agents on 3 VMs. Successfully detected simulated brute-force attacks and generated automated alerts.
                </p>
              </div>
              <div className="flex gap-2 mt-auto">
                <span className="text-[10px] font-mono border border-slate-700 px-1.5 py-0.5 text-slate-500">ELASTIC</span>
                <span className="text-[10px] font-mono border border-slate-700 px-1.5 py-0.5 text-slate-500">DOCKER</span>
              </div>
            </Card3D>

            <Card3D className="bg-slate-900/50 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Lock className="text-cyber-accent" size={24} />
                  <span className="text-xs font-mono text-slate-500">2023</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Metasploitable Audit</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  Conducted a comprehensive vulnerability assessment on a Metasploitable 2 target. Identified 15+ critical vulnerabilities and wrote a professional remediation report following NIST guidelines.
                </p>
              </div>
              <div className="flex gap-2 mt-auto">
                <span className="text-[10px] font-mono border border-slate-700 px-1.5 py-0.5 text-slate-500">NESSUS</span>
                <span className="text-[10px] font-mono border border-slate-700 px-1.5 py-0.5 text-slate-500">REPORTING</span>
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
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700/50 hover:border-cyber-primary/50 transition-colors relative overflow-hidden group">
             <div className="absolute -bottom-4 -right-4 p-4 opacity-5 rotate-12">
               <BookOpen size={200} />
             </div>
             <h3 className="text-2xl font-display font-bold text-white mb-1">Education</h3>
             <p className="text-cyber-primary font-mono text-lg mb-8">CSU San Bernardino</p>
             
             <div className="space-y-6 relative z-10">
               <div className="flex items-start gap-4">
                 <div className="mt-1 w-2 h-2 bg-cyber-secondary rounded-full"></div>
                 <div>
                   <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Degree Path</p>
                   <p className="text-white font-bold text-lg">BS Cybersecurity</p>
                   <p className="text-slate-500 text-sm">Technical Track</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <div className="mt-1 w-2 h-2 bg-cyber-accent rounded-full"></div>
                 <div>
                   <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Key Coursework</p>
                   <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-900/50 border border-slate-700 px-2 py-1 rounded text-xs text-slate-300 font-mono">Network Defense</span>
                      <span className="bg-slate-900/50 border border-slate-700 px-2 py-1 rounded text-xs text-slate-300 font-mono">Ethical Hacking</span>
                      <span className="bg-slate-900/50 border border-slate-700 px-2 py-1 rounded text-xs text-slate-300 font-mono">OS Internals</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Media Logs - Enhanced Visuals (Spans 2 rows) */}
          <div className="md:col-span-1 md:row-span-2 bg-[#050505] rounded-lg p-0 border border-slate-800 flex flex-col relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"></div>
             <div className="p-4 border-b border-slate-800 bg-[#0a0f1c]">
                <div className="flex items-center gap-2">
                  <Film size={16} className="text-pink-500" />
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">Media_Logs</h3>
                </div>
             </div>
             
             <div className="p-5 space-y-6 overflow-y-auto custom-scrollbar flex-1">
               <div>
                 <p className="text-[10px] text-pink-500/70 font-mono mb-2 border-b border-slate-800 pb-1">/// TOP_TIER_SERIES</p>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3 group/item cursor-pointer">
                      <Tv size={14} className="text-slate-600 group-hover/item:text-pink-400 transition-colors" />
                      <div>
                        <span className="text-sm text-slate-300 font-mono group-hover/item:text-white block leading-none">Mr. Robot</span>
                        <span className="text-[10px] text-slate-600">FSociety_Archives</span>
                      </div>
                   </li>
                   <li className="flex items-center gap-3 group/item cursor-pointer">
                      <Tv size={14} className="text-slate-600 group-hover/item:text-pink-400 transition-colors" />
                      <div>
                        <span className="text-sm text-slate-300 font-mono group-hover/item:text-white block leading-none">Silicon Valley</span>
                        <span className="text-[10px] text-slate-600">PiedPiper_Compression</span>
                      </div>
                   </li>
                 </ul>
               </div>

               <div>
                 <p className="text-[10px] text-pink-500/70 font-mono mb-2 border-b border-slate-800 pb-1">/// REQUIRED_VIEWING</p>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3 group/item cursor-pointer">
                      <Film size={14} className="text-slate-600 group-hover/item:text-pink-400 transition-colors" />
                      <span className="text-sm text-slate-300 font-mono group-hover/item:text-white">The Matrix (1999)</span>
                   </li>
                   <li className="flex items-center gap-3 group/item cursor-pointer">
                      <Film size={14} className="text-slate-600 group-hover/item:text-pink-400 transition-colors" />
                      <span className="text-sm text-slate-300 font-mono group-hover/item:text-white">Who Am I</span>
                   </li>
                    <li className="flex items-center gap-3 group/item cursor-pointer">
                      <Film size={14} className="text-slate-600 group-hover/item:text-pink-400 transition-colors" />
                      <span className="text-sm text-slate-300 font-mono group-hover/item:text-white">Tron: Legacy</span>
                   </li>
                 </ul>
               </div>
             </div>
          </div>

          {/* Sports Highlights - New Section (Top Right) */}
          <div className="md:col-span-1 bg-[#0e121b] rounded-lg p-5 border border-slate-700/50 flex flex-col relative overflow-hidden hover:border-orange-500/50 transition-colors group">
             <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-2">
                 <Trophy size={16} className="text-orange-500" />
                 <h3 className="font-display font-bold text-white text-sm uppercase">Highlight_Reel</h3>
               </div>
               <span className="text-[10px] bg-orange-900/20 text-orange-400 px-1.5 py-0.5 rounded border border-orange-500/30">LIVE</span>
             </div>
             <div className="space-y-3">
               <a href="https://www.youtube.com/watch?v=pT-I8jQDQ7c" target="_blank" rel="noreferrer" className="block bg-slate-900 hover:bg-slate-800 p-2 rounded border border-slate-800 hover:border-orange-500/50 transition-all group/link">
                 <div className="flex items-center justify-between mb-1">
                   <span className="text-xs text-slate-300 font-bold group-hover/link:text-white">LeBron James Block</span>
                   <Youtube size={12} className="text-red-500" />
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">NBA Finals 2016 Game 7</span>
               </a>
               <a href="https://www.youtube.com/watch?v=yCjJyiqpAuU" target="_blank" rel="noreferrer" className="block bg-slate-900 hover:bg-slate-800 p-2 rounded border border-slate-800 hover:border-orange-500/50 transition-all group/link">
                 <div className="flex items-center justify-between mb-1">
                   <span className="text-xs text-slate-300 font-bold group-hover/link:text-white">Faker's Shockwave</span>
                   <Youtube size={12} className="text-red-500" />
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">League of Legends Worlds</span>
               </a>
             </div>
          </div>

          {/* Books - Small Block (Second Row Right) */}
          <div className="md:col-span-1 bg-[#0e121b] rounded-lg p-5 border border-slate-700/50 flex flex-col relative overflow-hidden hover:border-yellow-500/30 transition-colors">
             <div className="flex items-center gap-2 mb-3">
               <Book size={16} className="text-yellow-500" />
               <h3 className="font-display font-bold text-white text-sm uppercase">Library_DB</h3>
             </div>
             <ul className="space-y-2">
               <li className="text-xs text-slate-400 font-mono border-l-2 border-slate-800 pl-2 hover:border-yellow-500 hover:text-white transition-colors cursor-help">
                 Neuromancer <span className="text-slate-600 block text-[10px]">Wm. Gibson</span>
               </li>
               <li className="text-xs text-slate-400 font-mono border-l-2 border-slate-800 pl-2 hover:border-yellow-500 hover:text-white transition-colors cursor-help">
                 Sandworm <span className="text-slate-600 block text-[10px]">Andy Greenberg</span>
               </li>
               <li className="text-xs text-slate-400 font-mono border-l-2 border-slate-800 pl-2 hover:border-yellow-500 hover:text-white transition-colors cursor-help">
                 Ghost in the Wires <span className="text-slate-600 block text-[10px]">Kevin Mitnick</span>
               </li>
             </ul>
          </div>

          {/* Intel Feed / Innovations - New Wide Block (Third Row) */}
          <div className="md:col-span-2 bg-[#080a10] rounded-lg p-0 border border-slate-800 flex flex-col relative overflow-hidden hover:border-green-500/30 transition-colors">
             <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/30">
               <div className="flex items-center gap-2">
                 <Newspaper size={16} className="text-green-400" />
                 <h3 className="font-display font-bold text-white text-sm uppercase">Current_Intel_Feed</h3>
               </div>
               <div className="flex gap-1">
                 <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                 <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-75"></div>
                 <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-150"></div>
               </div>
             </div>
             <div className="p-4 grid grid-cols-1 gap-3">
               <a href="https://arxiv.org/abs/2302.04235" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-2 hover:bg-slate-800 rounded transition-colors group">
                 <div className="mt-1 min-w-[4px] h-4 bg-slate-700 group-hover:bg-green-400 transition-colors"></div>
                 <div>
                   <h4 className="text-sm text-slate-200 font-bold leading-tight group-hover:text-green-400 transition-colors flex items-center gap-1">
                     Adversarial Attacks on LLMs <ArrowUpRight size={10} />
                   </h4>
                   <p className="text-[11px] text-slate-500 font-mono mt-1">Reading about prompt injection and jailbreaking techniques in modern AI models.</p>
                 </div>
               </a>
               <a href="https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-2 hover:bg-slate-800 rounded transition-colors group">
                 <div className="mt-1 min-w-[4px] h-4 bg-slate-700 group-hover:bg-green-400 transition-colors"></div>
                 <div>
                   <h4 className="text-sm text-slate-200 font-bold leading-tight group-hover:text-green-400 transition-colors flex items-center gap-1">
                     Post-Quantum Cryptography <ArrowUpRight size={10} />
                   </h4>
                   <p className="text-[11px] text-slate-500 font-mono mt-1">Tracking NIST's standardization of CRYSTALS-Kyber and Dilithium algorithms.</p>
                 </div>
               </a>
             </div>
          </div>

          {/* Hobbies (Third Row) */}
          <div className="md:col-span-2 bg-[#0e121b] rounded-lg p-6 border border-slate-700/50 flex flex-col justify-between hover:border-purple-500/50 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="text-purple-400 group-hover:rotate-12 transition-transform duration-300" size={20} />
              <h3 className="font-display font-bold text-white">Offline / Downtime</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-slate-800 hover:bg-purple-900/20 border border-slate-700 hover:border-purple-500/50 transition-colors rounded text-xs text-slate-300 font-mono cursor-help flex items-center gap-2">
                FPS Gaming <span className="text-purple-500 text-[10px]">VALORANT // OW2</span>
              </span>
              <span className="px-3 py-1.5 bg-slate-800 hover:bg-purple-900/20 border border-slate-700 hover:border-purple-500/50 transition-colors rounded text-xs text-slate-300 font-mono cursor-help">
                Mechanical Keyboards
              </span>
              <span className="px-3 py-1.5 bg-slate-800 hover:bg-purple-900/20 border border-slate-700 hover:border-purple-500/50 transition-colors rounded text-xs text-slate-300 font-mono cursor-help">
                Hiking Local Trails
              </span>
              <span className="px-3 py-1.5 bg-slate-800 hover:bg-purple-900/20 border border-slate-700 hover:border-purple-500/50 transition-colors rounded text-xs text-slate-300 font-mono cursor-help">
                Def Con Documentaries
              </span>
            </div>
          </div>

          {/* Clubs - Wide Block (Bottom Row) */}
          <div className="md:col-span-3 bg-[#0e121b] rounded-lg p-6 border border-slate-700/50 flex flex-row items-center justify-between hover:border-green-500/50 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User className="text-green-400" size={20} />
                <h3 className="font-display font-bold text-white">Campus Involvement</h3>
              </div>
              <p className="text-sm text-slate-400 font-mono mb-1"><span className="text-white font-bold">InfoSec Club</span> — Vice President</p>
              <p className="text-xs text-slate-500">Organizing weekly workshops and semester CTFs.</p>
            </div>
            <div className="hidden sm:flex h-12 w-12 bg-green-900/20 border border-green-500/30 rounded-full items-center justify-center">
               <span className="font-bold text-green-400 text-xs">VP</span>
            </div>
          </div>

          {/* GPA / Stats - Small Block (Bottom Row) */}
          <div className="md:col-span-1 bg-[#0e121b] rounded-lg p-6 border border-slate-700/50 flex flex-col justify-center items-center text-center relative overflow-hidden hover:border-cyber-primary/30 transition-colors">
             <div className="absolute inset-0 bg-cyber-primary/5 mask-image-gradient"></div>
             <div className="text-5xl font-display font-bold text-white mb-2 relative z-10">3.8</div>
             <div className="text-xs text-cyber-primary font-mono uppercase tracking-widest relative z-10">Current GPA</div>
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
        <a href="#" className="group p-5 bg-slate-900 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-cyber-primary hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
          <Mail size={28} className="group-hover:scale-110 transition-transform" />
        </a>
        <a href="#" className="group p-5 bg-slate-900 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-cyber-primary hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
          <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
        </a>
        <a href="#" className="group p-5 bg-slate-900 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-cyber-primary hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
          <Github size={28} className="group-hover:scale-110 transition-transform" />
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
    <div className="bg-cyber-black min-h-screen text-slate-200 selection:bg-cyber-accent/30 selection:text-white font-sans">
      {/* Fixed Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030305]/90 backdrop-blur-md py-3 border-b border-slate-800' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-display font-bold text-2xl tracking-tight flex items-center gap-2">
            <Terminal className="text-cyber-primary" size={24} />
            <span className="text-white">ALEX<span className="text-slate-600">_SEC</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono font-medium">
            <a href="#home" className="text-slate-400 hover:text-cyber-primary transition-colors">_HOME</a>
            <a href="#skills" className="text-slate-400 hover:text-cyber-primary transition-colors">_SKILLS</a>
            <a href="#projects" className="text-slate-400 hover:text-cyber-primary transition-colors">_PROJECTS</a>
            <a href="#about" className="text-slate-400 hover:text-cyber-primary transition-colors">_ABOUT</a>
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
      <div className="fixed bottom-0 left-0 w-full bg-[#0a0f1c] border-t border-slate-800 h-10 z-40 flex justify-between items-stretch">
        <div className="flex items-center">
           <MusicWidget />
           <div className="px-4 flex items-center gap-2 border-r border-slate-800 h-full">
             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-[10px] font-mono text-slate-500">ONLINE</span>
           </div>
        </div>
        
        <div className="flex items-center px-4 gap-6 text-[10px] font-mono text-slate-500">
          <span className="hidden sm:inline">CPU: 12%</span>
          <span className="hidden sm:inline">RAM: 8.2GB</span>
          <span className="text-cyber-primary">IP: 192.168.1.105</span>
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);