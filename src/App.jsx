import React, { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Laptop2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Server,
  Sparkles,
  Terminal,
  Wrench,
  X
} from 'lucide-react';
import {
  SiPython,
  SiJavascript,
  SiDart,
  SiReact,
  SiFlutter,
  SiHtml5,
  SiFirebase,
  SiMysql,
  SiSqlite,
  SiDocker,
  SiGithub,
  SiGit,
  SiStreamlit
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

const email = 'aymanelaakel5@gmail.com';
const github = 'https://github.com/aymanelaakel';
const linkedIn = 'https://www.linkedin.com/in/ayman-laakel';

const sections = [
  ['intro', 'intro'],
  ['about', 'about me'],
  ['skills', 'skills'],
  ['projects', 'projects'],
  ['experience', 'experience'],
  ['education', 'education'],
  ['contact', 'contact']
];

const skills = {
  'Programming Languages': [
    { name: 'Python', icon: SiPython, color: '#FFD43B' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Dart', icon: SiDart, color: '#0175C2' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Java (basics)', icon: Code2, color: '#E76F51' }
  ],

  'Frontend & Mobile': [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' }
  ],

  'Backend & Data': [
    { name: 'FastAPI', icon: Server, color: '#00C7B7' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Firestore', icon: Database, color: '#F6C343' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'SQLite', icon: SiSqlite, color: '#003B57' }
  ],

  'AI & Developer Tools': [
    { name: 'LangChain', icon: Sparkles, color: '#A3E635' },
    { name: 'Groq', icon: Sparkles, color: '#FB7185' },
    { name: 'Tavily', icon: Globe2, color: '#2DD4BF' },
    { name: 'LangSmith', icon: CheckCircle2, color: '#C084FC' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#E5E7EB' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' }
  ]
};

const projects = [
  {
    id: 'tangierguide',
    image: '/projects/tangierguide.png',
    repo: 'https://github.com/aymanelaakel/TangierGuide',
    name: 'TangierGuide',
    tag: "Final Year Project · Professional Bachelor's",
    sub: 'A smart mobile tourism companion for Tangier',
    year: '2026',
    color: 'violet',
    previewType: 'mobile',
    details: [
      'Built a Flutter mobile app to help visitors discover attractions, beaches, transport and local services in Tangier.',
      'Integrated Firebase/Firestore, favourites, reviews and map-based exploration.',
      'Added an AI assistant to answer tourism and transport questions in a practical way.'
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'Mapbox', 'AI']
  },
  {
    id: 'cvanalyzer',
    image: '/projects/cv-analyzer.JPG',
    repo: 'https://github.com/aymanelaakel/LangchainPr-CV-Analyzer',
    name: 'CV Analyzer',
    tag: 'Personal · AI Application',
    sub: 'AI-assisted resume analysis and job matching',
    year: '2026',
    color: 'teal',
    previewType: 'desktop',
    details: [
      'Developed a Streamlit interface to upload and analyse resumes.',
      'Used LangChain and Groq to identify strengths, skill gaps and suggested jobs.',
      'Structured the results into practical improvement recommendations.'
    ],
    stack: ['Python', 'Streamlit', 'LangChain', 'Groq']
  },
  {
    id: 'pdfrag',
    image: '/projects/ai-job-agent.jpeg',
    repo: 'https://github.com/aymanelaakel/PDF-RAG-Groq',
    name: 'PDF RAG Assistant',
    tag: 'Personal · Document AI',
    sub: 'Ask questions about PDF files with an AI-powered assistant',
    year: '2026',
    color: 'indigo',
    previewType: 'desktop',
    details: [
      'Built a document assistant that lets users upload PDF files and chat with their content.',
      'Used embeddings, retrieval and Groq-powered generation to produce grounded answers.',
      'Prepared the foundation for richer document workflows and generated outputs.'
    ],
    stack: ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'Groq']
  },
  {
    id: 'library',
    image: '/projects/library-management.png',
    repo: 'https://github.com/aymanelaakel/LibraryManagementSystem',
    name: 'Library Management',
    tag: 'Final Year Project · Technical Diploma',
    sub: 'Desktop library management system',
    year: '2025',
    color: 'coral',
    previewType: 'desktop',
    details: [
      'Developed a JavaFX desktop application for books, members and loans.',
      'Connected the interface to a relational database for storing records.',
      'Implemented the essential workflows of a small library management system.'
    ],
    stack: ['Java', 'JavaFX', 'MySQL']
  },
  {
    id: 'ragadmin',
    image: '/projects/rag-admin-client.jpeg',
    repo: 'https://github.com/aymanelaakel/RAG-Admin-Client',
    name: 'RAG Admin Client',
    tag: 'Personal · Document AI Platform',
    sub: 'Secure document management and AI-powered question answering',
    year: '2026',
    color: 'indigo',
    previewType: 'desktop',
    details: [
      'Developed secure user and administrator dashboards with JWT authentication.',
      'Implemented document retrieval and question answering with FastAPI, ChromaDB and Groq.',
      'Added PDF report and PowerPoint presentation generation.'
    ],
    stack: ['Python', 'FastAPI', 'ChromaDB', 'Groq', 'RAG']
  },
  {
    id: 'geomind',
    image: '/projects/geomind-ai.JPG',
    repo: 'https://github.com/aymanelaakel/GeoMindAI',
    name: 'GeoMind AI',
    tag: 'Personal · Multilingual Geography',
    sub: 'Explore cities and countries through an interactive graph',
    year: '2026',
    color: 'teal',
    previewType: 'desktop',
    details: [
      'Built an interactive geography graph with Flask and HTML Canvas.',
      'Added multilingual search, autocomplete and geographical information cards.',
      'Integrated optional Groq-assisted smart search with a local fallback mode.'
    ],
    stack: ['Python', 'Flask', 'JavaScript', 'HTML Canvas', 'Groq']
  },
  {
    id: 'generativeui',
    image: '/projects/generative-ui.jpeg',
    repo: 'https://github.com/aymanelaakel/Generative-UI',
    name: 'Generative UI',
    tag: 'Personal · AI Workflow Interface',
    sub: 'A visual workflow for AI-assisted job search',
    year: '2026',
    color: 'violet',
    previewType: 'desktop',
    details: [
      'Created a FastAPI-based interface for staged AI job searches.',
      'Displayed live search steps, result snapshots and model-output previews.',
      'Included LangSmith trace synchronization and execution metrics.'
    ],
    stack: ['Python', 'FastAPI', 'Groq', 'Tavily', 'LangSmith']
  }

];

const work = [
  {
    role: 'Maintenance Technician',
    company: 'INDET GROUP LABEL MAKERS',
    date: 'Feb 2022 – Jul 2026',
    text: 'Diagnosed and repaired industrial equipment; performed preventive and corrective maintenance of label-printing machines.'
  },
  {
    role: 'Methods Department Intern',
    company: 'SNOP Tangier',
    date: 'Jan 2020 – Feb 2020',
    text: 'Assisted with industrial automation programs and equipment for welding and assembly processes.'
  }
];

const education = [
  {
    title: 'Professional Bachelor’s Degree',
    subject: 'Computer Engineering & Software Development',
    school: 'Groupe IKI',
    date: '2025 – 2026'
  },
  {
    title: 'Specialized Technician Diploma',
    subject: 'Computer Development',
    school: 'Groupe IKI',
    date: '2023 – 2025'
  },
  {
    title: 'Specialized Technician Diploma',
    subject: 'Mechatronics',
    school: 'ISTA – TFZ',
    date: '2018 – 2020'
  },
  {
    title: 'Baccalaureate',
    subject: 'Physical Sciences',
    school: 'Lycée Abdelkhaleq Torres',
    date: '2017'
  }
];

function ProjectVisual({ project }) {
  return (
    <div className={'visual ' + project.color} aria-label={project.name + ' illustrative preview'}>
      <div className="visual-glow" />
      <div className="browser-shell">
        <div className="browser-top">
          <span />
          <span />
          <span />
          <small>
            {project.id === 'tangierguide'
              ? 'tangierguide.app'
              : project.id === 'cvanalyzer'
              ? 'cv-insight.ai'
              : project.id === 'jobagent'
              ? 'job-agent.ai'
              : 'library.manager'}
          </small>
        </div>

        {project.id === 'tangierguide' ? (
          <div className="map-mock">
            <div className="map-nav">
              EXPLORE TANGIER <span>☼</span>
            </div>
            <div className="sea" />
            <div className="land">
              <i className="road r1" />
              <i className="road r2" />
              <i className="road r3" />
            </div>
            <b className="pin p1">⌖</b>
            <b className="pin p2">⌖</b>
            <b className="pin p3">⌖</b>
            <div className="place-box">
              📍 Cap Spartel <small>Explore places nearby</small>
            </div>
          </div>
        ) : project.id === 'cvanalyzer' ? (
          <div className="cv-mock">
            <div className="mock-sidebar">
              CV<span>INSIGHT</span>
              <i />
              <i />
              <i />
            </div>
            <div className="mock-main">
              <strong>Resume Analysis</strong>
              <small>Your profile at a glance</small>
              <div className="scores">
                <div>
                  <b>84%</b>
                  <small>Profile match</small>
                </div>
                <div>
                  <b>12</b>
                  <small>Skills found</small>
                </div>
              </div>
              <div className="mini-bars">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        ) : project.id === 'jobagent' ? (
          <div className="agent-mock">
            <div className="terminal-label">◉ AI JOB SEARCH AGENT</div>
            <p>
              <span>›</span> Find Python / AI jobs in Morocco
            </p>
            <p>
              <span>✓</span> Searching listings with Tavily...
            </p>
            <p>
              <span>✓</span> Analysing opportunities...
            </p>
            <div className="agent-result">
              <b>Search complete</b>
              <small>Matching positions • Summarised by AI</small>
            </div>
          </div>
        ) : (
          <div className="lib-mock">
            <div className="lib-side">
              <b>LIBRARY</b>
              <p>Dashboard</p>
              <p>Books</p>
              <p>Members</p>
              <p>Loans</p>
            </div>
            <div className="lib-content">
              <strong>Library Overview</strong>
              <div className="book-tiles">
                <div>📕<b>Books</b></div>
                <div>📘<b>Members</b></div>
                <div>📗<b>Loans</b></div>
              </div>
              <div className="book-line" />
              <div className="book-line short" />
            </div>
          </div>
        )}
      </div>
      <span className="preview-caption">ILLUSTRATIVE PREVIEW · REPLACE WITH REAL SCREENSHOT</span>
    </div>
  );
}

function App() {
  const [tab, setTab] = useState('Programming Languages');
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('intro');
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: '', from: '', subject: '', message: '' });

  useEffect(() => {
    const update = () => {
      let denom = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(denom ? Math.min(100, Math.max(0, Math.round((window.scrollY / denom) * 100))) : 100);

      let current = 'intro';
      sections.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.46) {
          current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'Portfolio enquiry');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.from}\n\n${form.message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#intro">
          A<span>.</span> LAAKEL
        </a>
        <nav className={menu ? 'nav open' : 'nav'}>
          {[
            ['about', 'About'],
            ['skills', 'Skills'],
            ['projects', 'Projects'],
            ['experience', 'Experience'],
            ['education', 'Education'],
            ['contact', 'Contact']
          ].map(([id, title]) => (
            <a href={'#' + id} onClick={() => setMenu(false)} key={id}>
              {title}
            </a>
          ))}
        </nav>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* Intro Section */}
        <section id="intro" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow blue">Hey, I'm Ayman</div>
            <h1 className="name">
              Ayman Laakel<span className="cursor">|</span>
            </h1>
            <h2>
              Junior Software Developer across <span>Web, Mobile & AI</span>
            </h2>
            <p>
              I build useful applications, from Flutter mobile experiences and web interfaces to AI-powered tools. I enjoy turning practical problems into thoughtful software solutions.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">
                Get in Touch <ArrowRight size={17} />
              </a>
              <a className="btn outline" href="/Ayman_Laakel_CV_original.pdf" download>
                Download Resume <Download size={16} />
              </a>
            </div>
            <div className="socials">
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github />
              </a>
              <a href={linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href={`mailto:${email}`} aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame developer-portrait-frame">
              <div className="portrait-inner developer-art">
                <img
                  className="developer-image"
                  src="/developer-art.png"
                  alt="Illustration of a software developer working with web, mobile and AI technologies"
                />
                <div className="developer-image-overlay">
                </div>
              </div>
            </div>
            <div className="floating-pill">
              <span className="status-dot" /> Open to opportunities
            </div>
          </div>
          <a className="scroll-arrow" href="#about" aria-label="Scroll to about">
            <ArrowDown size={19} />
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="section section-slate">
          <div className="container">
            <h2 className="section-heading">My Professional Side</h2>
            <div className="about-layout">
              <div className="about-card">
                <p>
                  I'm a software developer with a Professional Bachelor's Degree in Computer Engineering and Software Development. I work on web and mobile applications and explore practical applications of artificial intelligence.
                </p>
                <p>
                  My previous experience in industrial maintenance sharpened my problem-solving skills, attention to detail and persistence.
                </p>
                <div className="about-facts">
                  <div>
                    <Mail size={19} />
                    <span>
                      <b>Email</b>
                      {email}
                    </span>
                  </div>
                  <div>
                    <MapPin size={19} />
                    <span>
                      <b>Location</b>Tangier, Morocco
                    </span>
                  </div>
                  <div>
                    <GraduationCap size={19} />
                    <span>
                      <b>Qualification</b>Professional Bachelor's · 2026
                    </span>
                  </div>
                </div>
                <strong className="core-title">Core Areas</strong>
                <div className="chips">
                  {['Web Development', 'Flutter Applications', 'AI / LLM Integrations', 'Firebase / Firestore', 'Problem Solving'].map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
              <div className="about-education">
                <div className="panel-heading">
                  <GraduationCap size={19} /> Education{' '}
                  <a href="#education">
                    Full education <ArrowUpRight size={14} />
                  </a>
                </div>
                {education.slice(0, 3).map((ed, i) => (
                  <div className="education-mini" key={i}>
                    <b>{ed.title}</b>
                    <span>{ed.subject}</span>
                    <small>
                      {ed.school} · {ed.date}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section section-slate skills-section">
          <div className="container">
            <div className="skills-intro">
              <span className="skills-eyebrow"><Sparkles size={14} /> TECH STACK / WHAT I WORK WITH</span>
              <h2 className="section-heading">Tools behind <span>my work.</span></h2>
              <p>Technologies I've learned and used while building web, mobile, and AI projects. Each tool is part of my learning journey.</p>
            </div>
            <div className="skills-showcase">
              <div className="skill-tabs" role="tablist" aria-label="Skill categories">
                {Object.keys(skills).map((key, i) => (
                  <button
                    key={key}
                    id={'skill-tab-' + i}
                    type="button"
                    role="tab"
                    aria-controls="skill-content"
                    aria-selected={tab === key}
                    className={tab === key ? 'selected' : ''}
                    onClick={() => setTab(key)}
                  >
                    {[<Code2 size={18} />, <Globe2 size={18} />, <Server size={18} />, <Cloud size={18} />][i]}
                    <span>{key}</span>
                  </button>
                ))}
              </div>
              <div className="skills-panel" id="skill-content" role="tabpanel">
                <div className="skills-panel-head">
                  <div>
                    <span className="skills-caption">SELECTED CATEGORY</span>
                    <h3>{tab}</h3>
                  </div>
                  <span className="skills-count">{String(skills[tab].length).padStart(2, '0')} TECHNOLOGIES</span>
                </div>
                <div className="skills-grid" key={tab}>
                  {skills[tab].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div className="skill-tile" key={item.name} style={{'--skill-accent':item.color, '--tile-index':i}}>
                        <span className="skill-symbol icon-only">
                          <Icon size={32} aria-hidden="true" />
                        </span>
                        <span className="skill-name">{item.name}</span>
                        <span className="skill-tile-line" aria-hidden="true" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="tools-panel">
              <div className="tools-heading">
                <span className="tools-mark"><Wrench size={19}/></span>
                <div><h3>Tools &amp; Platforms</h3><p>My everyday development environment</p></div>
              </div>
              <div className="tools-tags">
                {['VS Code', 'Git', 'GitHub', 'Docker', 'LangChain', 'LangSmith', 'Google Maps', 'Mapbox'].map((x) => (
                  <span className="tool-pill" key={x}><CheckCircle2 size={13}/>{x}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="container">
            <h2 className="section-heading projects-title">Stuff I Built</h2>
            <p className="projects-lead">
              Seven selected academic and personal projects across mobile development, AI features, document intelligence and web applications.
            </p>
            {projects.map((project) => (
              <article className="project-row" key={project.id}>
                <div className={`project-image-frame ${project.previewType === 'mobile' ? 'mobile-preview' : 'desktop-preview'}`}>
                  {project.previewType === 'mobile' ? (
                    <div className="mobile-image-display">
                      <img src={project.image} alt={`${project.name} mobile app preview`} loading="lazy" />
                    </div>
                  ) : (
                    <div className="screen-stage">
                      <div className="screen-device">
                        <div className="screen-topbar">
                          <span /><span /><span />
                        </div>
                        <img src={project.image} alt={`${project.name} project preview`} loading="lazy" />
                      </div>
                    </div>
                  )}
                  <span className="project-image-label">PROJECT PREVIEW</span>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    {project.tag} <span>· {project.year}</span>
                  </div>
                  <div className="project-head">
                    <h3>{project.name}</h3>
                    <div className="project-links">
                      <span className="private-repo-tag" title="Only authorized GitHub users can view this repository">Private</span>
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="repo-button" title="Private GitHub repository — access requires permission">
                        <Github size={16} /> GitHub <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                  <p className="project-sub">{project.sub}</p>
                  <ul>
                    {project.details.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <div className="tech-list">
                    {project.stack.map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
            <div className="projects-end">
              <a className="btn primary" href={github} target="_blank" rel="noreferrer">
                Explore my GitHub <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section section-slate">
          <div className="container">
            <h2 className="section-heading">Work Experience</h2>
            <div className="timeline">
              {work.map((w, i) => (
                <div className={'timeline-item ' + (i % 2 ? 'right' : 'left')} key={i}>
                  <div className="timeline-card">
                    <div className="timeline-card-title">
                      <BriefcaseBusiness size={17} />
                      <b>{w.role}</b>
                    </div>
                    <div className="company">{w.company}</div>
                    <p>{w.text}</p>
                    <span className="date-chip">{w.date}</span>
                  </div>
                  <span className="timeline-node" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section education-section">
          <div className="container">
            <h2 className="section-heading">Education</h2>
            <p className="section-intro">My academic journey, from mechatronics to software engineering.</p>
            <div className="education-grid">
              {education.map((ed, i) => (
                <div className="education-card" key={i}>
                  <div className="ed-icon">
                    <GraduationCap size={19} />
                  </div>
                  <div>
                    <h3>{ed.title}</h3>
                    <p>{ed.subject}</p>
                    <span>{ed.school}</span>
                  </div>
                  <small>{ed.date}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section section-slate contact-section">
          <div className="container">
            <h2 className="section-heading">Say Hi, Don't Be Shy</h2>
            <div className="contact-grid">
              <div>
                <div className="contact-detail">
                  <div className="contact-icon">
                    <Mail />
                  </div>
                  <span>
                    <b>Email</b>
                    {email}
                  </span>
                </div>
                <div className="contact-detail">
                  <div className="contact-icon">
                    <Phone />
                  </div>
                  <span>
                    <b>Phone</b>+212 6 06 59 30 97
                  </span>
                </div>
                <div className="contact-detail">
                  <div className="contact-icon">
                    <MapPin />
                  </div>
                  <span>
                    <b>Location</b>Tangier, Morocco
                  </span>
                </div>
                <h3 className="connect-title">Connect With Me</h3>
                <div className="socials round">
                  <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github />
                  </a>
                  <a href={linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin />
                  </a>
                  <a href={`mailto:${email}`} aria-label="Email">
                    <Mail />
                  </a>
                </div>
              </div>
              <form className="contact-form" onSubmit={send}>
                <div className="form-two">
                  <label>
                    Your Name
                    <input
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </label>
                  <label>
                    Your Email
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.from}
                      onChange={(e) => setForm({ ...form, from: e.target.value })}
                    />
                  </label>
                </div>
                <label>
                  Subject
                  <input
                    required
                    placeholder="How can I help you?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </label>
                <label>
                  Message
                  <textarea
                    required
                    rows="6"
                    placeholder="Your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </label>
                <button type="submit" className="btn primary submit-btn">
                  <Send size={18} /> Compose Email
                </button>
                <small>This opens your email application; no message is sent directly by this website.</small>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Ayman Laakel · Built with React <a href="#intro">Back to top ↑</a>
      </footer>

      {/* Progress Footer Bar */}
      <div className="progress-wrap">
        <div className="progress-left">
          ➜ <span>{progress}%</span>
        </div>
        <div className="progress-track" aria-label="Page scroll progress">
          <div className="progress-fill" style={{ width: progress + '%' }}>
            <span>
              {'{'}
              {sections
                .slice(0, sections.findIndex(([id]) => id === active) + 1)
                .map((x) => x[1])
                .join('}{')}
              {'}_'}
            </span>
          </div>
          <div className="progress-remaining">{100 - progress}% remaining</div>
        </div>
        <a
          href={'#' + sections[Math.min(sections.findIndex(([id]) => id === active) + 1, sections.length - 1)][0]}
          className="progress-next"
          title="Next section"
        >
          <ChevronDown size={16} />
        </a>
      </div>
    </>
  );
}

export default App;