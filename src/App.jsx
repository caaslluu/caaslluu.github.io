import { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Globe, Home, Heart } from 'lucide-react';
import './App.css';

const RootMeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <path d="M50 5 C25.1 5 5 25.1 5 50 C5 74.9 25.1 95 50 95 C74.9 95 95 74.9 95 50 C95 25.1 74.9 5 50 5 Z M50 12 C71 12 88 29 88 50 C88 71 71 88 50 88 C29 88 12 71 12 50 C12 29 29 12 50 12 Z" />
    <path d="M35 30 L35 70 L45 70 L45 55 L52 55 L62 70 L73 70 L62 53 C67 51 70 46 70 40 C70 34 65 30 58 30 Z M45 38 L57 38 C60 38 62 40 62 43 C62 46 60 48 57 48 L45 48 Z" />
  </svg>
);

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = isDark ? "bg-slate-950" : "bg-white";
  const textColor = isDark ? "text-slate-100" : "text-slate-900";
  const secondaryText = isDark ? "text-slate-400" : "text-slate-600";
  const borderColor = isDark ? "border-slate-800" : "border-slate-200";

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/caaslluu" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-rq/" },
    { icon: Mail, label: "Email", href: "mailto:contact@caslu.fr" },
    { custom: 'fa-stack-overflow', label: "Stack Overflow", href: "https://stackoverflow.com/users/32209837/caaslluu" },
    { rootme: true, label: "Root Me", href: "https://root-me.org/mall0c" },
  ];

  return (
    <div className={`${bgColor} ${textColor} min-h-screen transition-colors duration-300 relative overflow-hidden`}>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* Ubuntu Font */}
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />

      <style>{`
        .font-ubuntu {
          font-family: 'Ubuntu', sans-serif;
        }

        @keyframes neon-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 0.5;
            filter: blur(2px);
          }
          20%, 24%, 55% {
            opacity: 0.8;
            filter: blur(0px);
          }
        }

        @keyframes circuit-flow {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(20px) translateY(-10px); }
          50% { transform: translateX(-10px) translateY(15px); }
          75% { transform: translateX(15px) translateY(10px); }
        }

        .neon-light {
          position: fixed;
          pointer-events: none;
          z-index: 0;
          border-radius: 50%;
        }

        /* Smog ball - grey */
        .neon-tube-1 {
          width: 150px;
          height: 150px;
          top: 15%;
          left: 8%;
          background: radial-gradient(circle, rgba(200, 200, 200, 0.6), rgba(200, 200, 200, 0.1));
          filter: blur(40px);
          box-shadow: 0 0 40px rgba(200, 200, 200, 0.4),
                      0 0 70px rgba(200, 200, 200, 0.15);
          animation: neon-flicker 4s infinite, circuit-flow 6s ease-in-out infinite;
        }

        /* Smog ball - yellow */
        .neon-tube-2 {
          width: 130px;
          height: 130px;
          top: 55%;
          right: 12%;
          background: radial-gradient(circle, rgba(255, 223, 0, 0.7), rgba(255, 223, 0, 0.05));
          filter: blur(35px);
          box-shadow: 0 0 35px rgba(255, 223, 0, 0.5),
                      0 0 65px rgba(255, 223, 0, 0.2);
          animation: neon-flicker 5s infinite 1s, circuit-flow 7s ease-in-out infinite;
        }

        /* Smog ball - grey light */
        .neon-tube-3 {
          width: 140px;
          height: 140px;
          bottom: 20%;
          left: 5%;
          background: radial-gradient(circle, rgba(180, 180, 180, 0.5), rgba(180, 180, 180, 0.08));
          filter: blur(38px);
          box-shadow: 0 0 38px rgba(180, 180, 180, 0.35),
                      0 0 68px rgba(180, 180, 180, 0.15);
          animation: neon-flicker 3.5s infinite 0.5s, circuit-flow 8s ease-in-out infinite;
        }
      `}</style>

      {/* Smog Neon Balls - Hero Section Only */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{
        opacity: Math.max(0, 1 - (scrollY / 800)),
        transition: 'opacity 0.1s ease-out'
      }}>
        <div className="neon-light neon-tube-1" style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        <div className="neon-light neon-tube-2" style={{ transform: `translateY(${scrollY * 0.4}px)` }} />
        <div className="neon-light neon-tube-3" style={{ transform: `translateY(${scrollY * 0.35}px)` }} />
      </div>

      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 hover:opacity-70 transition-opacity rounded-full hover:bg-slate-800"
          title="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-amber-400" />
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="url(#moonGradient)" stroke="#9ca3af" strokeWidth="0.5"/>
              <defs>
                <radialGradient id="moonGradient">
                  <stop offset="0%" stopColor="#f3f4f6" />
                  <stop offset="100%" stopColor="#d1d5db" />
                </radialGradient>
              </defs>
            </svg>
          )}
        </button>
      </div>

      {/* Hero Section - Center Aligned */}
      <section className="flex items-center justify-center min-h-screen pt-48 relative z-10">
        <div className="text-center">
          {/* Avatar Circle */}
          <div className="mb-16 flex justify-center">
            <img
              src="https://aviationsmilitaires.net/media/gallery2/little%20boy/more-dumb-images-of-philip-j-fry-futurama-34257101-1440-900.png"
              alt="caslu"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>

          {/* Name & Tagline */}
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">caslu</h1>
          <p className={`text-xl md:text-2xl ${secondaryText} mb-8 max-w-2xl mx-auto font-ubuntu`}>
            cs-student who enjoys modernizing IT infrastructure
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className={`${secondaryText} hover:text-purple-500 transition-colors flex items-center justify-center`}
                title={social.label}
              >
                {social.rootme ? (
                  <img
                    src="https://www.root-me.org/IMG/logo/siteon0.svg"
                    alt="Root Me"
                    className="w-8 h-8"
                    style={{ filter: isDark ? 'invert(1) brightness(0.6)' : 'invert(0.4)' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'inline';
                    }}
                  />
                ) : social.custom ? (
                  <i className={`fab ${social.custom} text-[24px]`}></i>
                ) : (
                  <social.icon className="w-6 h-6" />
                )}
              </a>
            ))}
          </div>

          {/* Subtitle with Role */}
          <div className={`${secondaryText} text-lg font-ubuntu`}>
            <p className="mb-2">DevOps Integrator & SRE/infosec enjoyer</p>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto mb-16 pt-16">
          <h2 className="text-4xl font-bold">Insight</h2>
        </div>

        <div className="flex flex-col gap-12">
          {/* SRE */}
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-5xl mb-6"><i className="fab fa-gitlab"></i></div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">Site Reliability Engineering</h3>
            <p className={`${secondaryText} mb-4 text-sm leading-relaxed`}>
              As an SRE, I build and maintain reliable, scalable, and automated infrastructure, with strong proficiency in incident management, observability, and CI/CD.
            </p>
            <div>
              <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${secondaryText}`}>Tech stack</p>
              <div className="flex flex-wrap gap-2">
                {['Prometheus', 'Grafana', 'ELK Stack', 'Ansible', 'Puppet', 'Traefik'].map((skill, idx) => (
                  <span key={idx} className={`${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-slate-100 border border-slate-300'} rounded-full px-3 py-1 text-xs`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* DevOps */}
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-5xl mb-6"><i className="fab fa-docker"></i></div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">DevOps & Automation</h3>
            <p className={`${secondaryText} mb-4 text-sm leading-relaxed`}>
              Automated testing, optimize CI/CD pipelines, and manage containerized or cloud-native deployments for reliable, scalable delivery.
            </p>
            <div>
              <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${secondaryText}`}>Tech stack</p>
              <div className="flex flex-wrap gap-2">
                {['GitLab', 'GitHub Actions', 'Terraform', 'Red Hat Enterprise Linux', 'Kubernetes', 'Jenkins', 'SELinux', 'Jupyter', 'OpenStack'].map((skill, idx) => (
                  <span key={idx} className={`${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-slate-100 border border-slate-300'} rounded-full px-3 py-1 text-xs`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pentesting */}
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-5xl mb-6"><i className="fas fa-shield-alt"></i></div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">Pentesting</h3>
            <p className={`${secondaryText} mb-4 text-sm leading-relaxed`}>
              I conduct security assessments, perform automated and manual penetration tests, and provide remediation guidance to harden applications and infrastructure.
            </p>
            <div>
              <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${secondaryText}`}>Tech stack</p>
              <div className="flex flex-wrap gap-2">
                {['Exegol', 'Impacket', 'Networking', 'System', 'Reverse Engineering/Pwn', 'Analytical skills', 'Crisis management'].map((skill, idx) => (
                  <span key={idx} className={`${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-slate-100 border border-slate-300'} rounded-full px-3 py-1 text-xs`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${borderColor} py-8 text-center ${secondaryText} text-sm relative z-10`}>
        <p className="flex items-center justify-center gap-1">
          <i>contact@caslu.fr</i>
        </p>
      </footer>
    </div>
  );
}
