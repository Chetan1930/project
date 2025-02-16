import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code2, Terminal, Database, Award, ExternalLink, BookOpen, Code, Globe, Brain, Cpu, Cog as Yoga, Map, Book, Blocks, Phone, MapPin, Twitter, Trophy, Briefcase, GraduationCap, Heart, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "Chetan71",
      stats: "350+ DSA problems solved |(maxRating 1582)",
      link: "https://leetcode.com/u/Chetan71/",
      icon: <Code2 className="w-12 h-12 text-primary mb-4" />
    },
    {
      platform: "GeeksforGeeks",
      username: "chetan71",
      stats: "4⭐ rating | Institute Rank: 23 | 640+ DSA problems solved",
      link: "https://www.geeksforgeeks.org/user/chetan71/",
      icon: <Code className="w-12 h-12 text-primary mb-4" />
    },
    {
      platform: "HackerRank",
      username: "Chetan71",
      stats: "Strong proficiency in SQL and problem-solving",
      link: "https://www.hackerrank.com/profile/Chetan71",
      icon: <Terminal className="w-12 h-12 text-primary mb-4" />
    },
    {
      platform: "CodeChef",
      username: "chetan_71",
      stats: "2⭐ with rating of 1561",
      link: "https://www.codechef.com/users/chetan_71",
      icon: <Brain className="w-12 h-12 text-primary mb-4" />
    }
  ];

  const certificates = [
    {
      title: "Software Engineer Intern",
      issuer: "HackerRank",
      description: "Proficiency in SQL, DSA, and problem-solving",
      link: "https://www.hackerrank.com/certificates/fb2526b6fe44"
    },
    {
      title: "SQL Intermediate",
      issuer: "HackerRank",
      description: "Advanced skills in writing and optimizing SQL queries",
      link: "https://www.hackerrank.com/certificates/130ee0b780d9"
    },
    {
      title: "Linux Basics",
      issuer: "Coursera",
      description: "Foundational understanding of Linux operations",
      link: "https://coursera.org/share/fdd5c6d391b4684d82cac5562f0f18a5"
    },
    {
      title: "Algorithm Toolbox",
      issuer: "Coursera",
      description: "Advanced algorithmic problem-solving skills",
      link: "https://coursera.org/share/f64985040b0504a5c4fccfb1a05f8c09"
    }
  ];

  const courses = [
    {
      title: "Object-Oriented Programming",
      description: "Learn the principles of OOP, including encapsulation, inheritance, polymorphism, and abstraction",
      icon: <Code className="w-12 h-12 text-primary mb-4" />
    },
    {
      title: "Computer Networks",
      description: "Understand network architecture, protocols, and data communication in real-world applications",
      icon: <Globe className="w-12 h-12 text-primary mb-4" />
    },
    {
      title: "Data Structures & Algorithms",
      description: "Master data organization, optimization techniques, and efficient problem-solving strategies",
      icon: <Brain className="w-12 h-12 text-primary mb-4" />
    },
    {
      title: "Operating Systems",
      description: "Explore the concepts of process management, memory management, and file systems",
      icon: <Cpu className="w-12 h-12 text-primary mb-4" />
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["C", "C++", "Java", "JavaScript", "Python", "Solidity"]
    },
    {
      category: "Libraries/Frameworks",
      items: ["Truffle", "Python libraries", "Oracle", "Web3.js"]
    },
    {
      category: "Tools",
      items: ["Git", "Oracle", "Visual Studio"]
    }
  ];

  const hobbies = [
    {
      name: "Yoga",
      icon: <Yoga className="w-8 h-8" />,
      description: "Practicing mindfulness and leading yoga sessions"
    },
    {
      name: "Traveling",
      icon: <Map className="w-8 h-8" />,
      description: "Exploring new places and cultures"
    },
    {
      name: "Reading",
      icon: <Book className="w-8 h-8" />,
      description: "Diving into books across various genres"
    },
    {
      name: "Web3 Exploration",
      icon: <Blocks className="w-8 h-8" />,
      description: "Learning blockchain and decentralized technologies"
    }
  ];

  const projects = [  
      {
        title: 'StudentHub',
        description: 'A comprehensive student management platform built with React and TypeScript, featuring attendance tracking, note management, and portfolio building capabilities',
        deployedLink: 'https://studenthub2025.netlify.app/', 
        codeLink: 'https://github.com/Chetan1930/StudentHub', // Example link
        icon: (
          <div className="relative">
            {/* Ongoing Badge */}
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              Ongoing
            </div>
            <GraduationCap className="w-12 h-12 text-primary mb-4" />
          </div>
        ),
        tech: [
          'React',
          'TypeScript',
          'Tailwind CSS',
          'React Router',
          'Lucide Icons',
          'Vite',
          'Firebase'
        ]
      }
    ,
    {
      title: 'Learning Platform',
      description: 'A frontend website built with HTML, CSS, and JavaScript.',
      deployedLink: 'https://chetan1930.github.io/Learnign-platform/',
      codeLink: 'https://github.com/Chetan1930/Learnign-platform',
      icon: <Globe className="w-12 h-12 text-primary mb-4" />,
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'A Python-based functional game showcasing programming skills.',
      deployedLink: 'https://github.com/Chetan1930/tic-TAc-toe',
      codeLink: 'https://github.com/Chetan1930/tic-TAc-toe',
      icon: <Code2 className="w-12 h-12 text-primary mb-4" />,
      tech: ['Python']
    },
    {
      title: 'JS Calculator',
      description: 'A JavaScript-based functional Calculator showcasing my JavaScript skills.',
      deployedLink: 'https://chetan1930.github.io/Calculator/',
      codeLink: 'https://github.com/Chetan1930/Calculator',
      icon: <Terminal className="w-12 h-12 text-primary mb-4" />,
      tech: ['JavaScript', 'HTML', 'CSS']
    }
    
  ];

  return (
    <div className="bg-background text-text">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-50 border-b border-primary/10">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-light gradient-text">Chetan Chauhan</a>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-primary hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop menu */}
            <div className="hidden lg:flex space-x-8">
              <a href="#about" className="nav-link hover-underline">About</a>
              <a href="#skills" className="nav-link hover-underline">Skills</a>
              <a href="#coding-profiles" className="nav-link hover-underline">Profiles</a>
              <a href="#work" className="nav-link hover-underline">Projects</a>
              <a href="#courses" className="nav-link hover-underline">Courses</a>
              <a href="#certificates" className="nav-link hover-underline">Certificates</a>
              <a href="#hobbies" className="nav-link hover-underline">Hobbies</a>
              <a href="#contact" className="nav-link hover-underline">Contact</a>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col space-y-4">
              <a href="#about" className="nav-link hover-underline block py-2 text-center" onClick={toggleMenu}>About</a>
              <a href="#skills" className="nav-link hover-underline block py-2 text-center" onClick={toggleMenu}>Skills</a>
              <a href="#coding-profiles" className="nav-link hover-underline block py-2 text-center" onClick={toggleMenu}>Profiles</a>
              <a href="#work" className="nav-link hover-underline block py-2 text-center" onClick={toggleMenu}>Projects</a>
              <a href="#courses" className="nav-link hover-underline block py-2 text-center" onClick={toggleMenu}>Courses</a>
              <a href="#certificates" className="nav-link hover-underline block py-2 text-center" onClick={toggleMenu}>Certificates</a>
              <a href="#hobbies" className="nav-link hover-underline block py-2 text-center" onClick={toggleMenu}>Hobbies</a>
              <a href="#contact" className="nav-link hover-underline block py-2 text-center" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-48 pb-24 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <img
                src="https://uc2a874bc148fbb2687dca105339.previews.dropboxusercontent.com/p/thumb/ACjm0PpTwSX1Tgh83XDwOdxEvGeamE0J95o98iN4VOBvSPs1RO5bhguIMdwpscTFnLXCtgOGC39X4i6hCZ-98ldGVh1cpHwfBC_ReMpbU3Vj5ZPADyx8yojWWzIXlAwXMzLr3-nWGyNYuf-p5k6pdq6_4YSG5RKr-AfnuqbHtcP8U5ytKAblJAihGP7qLaetJLb2UcVC3_C1k7QZ1C3pV7pYFv_-z3pJ46WmeJfVZZeGDHkNw6X_jzjEr95M2YGjsk8BzMM2qKcSRxMSVktQmnBO_FLGT0b5yDxI6xnZPhEf9mSO3auuMefalqCbDSokegPTWogb4oH87ReluPWUHzrLCIx0pNU-vHg7kdsNZRE6z9sTYuxINnhbBL8NJPiv6zqlMV36VkII40plGueyHDFk/p.png?is_prewarmed=true"
                alt="Chetan Chauhan"
                className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl"
              />
            </div>
            <h1 className="text-6xl font-light mb-8 fade-in gradient-text">
              Software Engineer crafting digital experiences with code and creativity
            </h1>
            <p className="text-xl text-text-light mb-12 fade-in">
              Aspiring Software Engineer | Web Development Enthusiast
            </p>
            <div className="flex justify-center space-x-6 fade-in">
              <a href="https://github.com/Chetan1930" target="_blank" rel="noopener noreferrer" 
                 className="text-primary hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/chetan71/" target="_blank" rel="noopener noreferrer"
                 className="text-primary hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/Chetan571" target="_blank" rel="noopener noreferrer"
                 className="text-primary hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:chetanchauhan1930@gmail.com"
                 className="text-primary hover:text-accent transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8">
              <a href="https://www.dropbox.com/scl/fi/s7aacjw6q7npctkofupma/Chetan_SDE-1.pdf?rlkey=p0igp6q9zi3r62huk6byzzhqx&e=1&st=cfltiq4w&dl=1" download 
                 className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-3 rounded-full text-center hover:shadow-lg transition-all duration-300">
                <span className="mr-2">Download Resume</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading mb-12 gradient-text text-center">About Me</h2>
            <div className="space-y-6 text-lg text-text-light">
              <ul className="space-y-4 bg-white/80 p-6 rounded-xl backdrop-blur-sm">
                <li>• I am a disciplined and eager-to-learn individual, <strong>pursuing B.Tech in Information Technology</strong>.</li>
                <li>• Passionate about solving real-world problems using technology.</li>
                <li>• <strong>Proficient in C/C++</strong> with additional knowledge in Python and JavaScript.</li>
                <li>• Currently learning frameworks such as <strong>React and tools like Git</strong>.</li>
                <li>• Strong foundation in <strong>Object-oriented programming, Data Structures, and Algorithms</strong>.</li>
                <li>• Experience in blockchain development.</li>
                <li>• Committed to applying technical skills and an innovative mindset to develop cutting-edge solutions.</li>
                <li>• Leverages leadership and <strong>problem-solving abilities to enhance team development</strong> and drive impactful projects.</li>
                <li>• Dedicated to continuously advancing personal expertise and supporting organizational growth.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-16 gradient-text text-center">Technologies & Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {index === 0 && <Code2 className="w-8 h-8 text-primary mr-3" />}
                  {index === 1 && <Blocks className="w-8 h-8 text-primary mr-3" />}
                  {index === 2 && <Briefcase className="w-8 h-8 text-primary mr-3" />}
                  <h3 className="text-xl font-semibold text-primary">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tech-tag px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding-profiles" className="py-24 gradient-bg">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-16 gradient-text text-center">Coding Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {codingProfiles.map((profile, index) => (
              <a 
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="group bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {profile.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{profile.platform}</h3>
                <p className="text-text-light mb-2">{profile.username}</p>
                <p className="text-sm font-medium text-accent">{profile.stats}</p>
                <div className="mt-4 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-16 gradient-text text-center">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card p-8 rounded-xl">
                <div className="mb-6">{project.icon}</div>
                <h3 className="text-2xl font-light mb-4 text-primary">{project.title}</h3>
                <p className="text-text-light mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag px-3 py-1 rounded-full text-sm text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href={project.deployedLink} target="_blank" rel="noopener noreferrer"
                     className="flex items-center text-primary hover:text-accent transition-colors hover-underline">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                     className="flex items-center text-primary hover:text-accent transition-colors hover-underline">
                    <span>Source Code</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 gradient-bg">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-16 gradient-text text-center">Course Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary text-center">{course.title}</h3>
                <p className="text-text-light text-center">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-16 gradient-text text-center">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <a 
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Trophy className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">{cert.title}</h3>
                <p className="text-text-light mb-2 text-center">{cert.issuer}</p>
                <p className="text-sm text-text-light mb-4 text-center">{cert.description}</p>
                <div className="flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">View Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-24 gradient-bg">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-16 gradient-text text-center">Hobbies & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{hobby.name}</h3>
                <p className="text-text-light">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background-alt">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-12 gradient-text text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-text-light mb-8 text-center">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            <div className="space-y-6">
              <div className="flex flex-col space-y-4 items-center">
                <a href="mailto:chetanchauhan1930@gmail.com" 
                   className="block text-lg text-primary hover:text-accent transition-colors">
                  chetanchauhan1930@gmail.com
                </a>
                <a href="https://twitter.com/Chetan571" 
                   target="_blank" 
                   className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white font-semibold px-6 py-3 rounded-full text-center hover:shadow-lg transition-all duration-300">
                  <Twitter className="w-5 h-5 mr-2" />
                  Connect with me on Twitter
                </a>
              </div>
              <div className="flex justify-center space-x-6 pt-6">
                <a href="https://github.com/Chetan1930" target="_blank" rel="noopener noreferrer"
                   className="text-primary hover:text-accent transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/chetan71/" target="_blank" rel="noopener noreferrer"
                   className="text-primary hover:text-accent transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/Chetan571" target="_blank" rel="noopener noreferrer"
                   className="text-primary hover:text-accent transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-text-light border-t border-primary/10">
        <p>© 2024 Chetan Chauhan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;