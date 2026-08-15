import { PersonalInfo, EducationItem, PersonalStrength, SkillItem, ProjectItem, CertificateItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'NIDHI KUMARI',
  firstName: 'NIDHI',
  lastName: 'KUMARI',
  title: 'Computer Science & Data Science Student',
  college: 'GL Bajaj Institute of Technology and Management',
  location: 'Greater Noida, Uttar Pradesh, India',
  year: '3rd Year',
  course: 'CSDS',
  courseFull: 'Computer Science & Data Science',
  phone: '9955862892',
  email: 'nidhikumari62014@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/nidhi-kumari1512/',
  linkedinDisplay: 'linkedin.com/in/nidhi-kumari1512',
  tagline: 'Passionate about web development, problem solving, and building practical digital experiences.',
  bio: "Hi, I'm Nidhi Kumari, a 3rd-year Computer Science & Data Science student at GL Bajaj Institute of Technology and Management, Greater Noida. I enjoy creating web experiences, solving problems, and learning new technologies.",
};

export const educationData: EducationItem[] = [
  {
    institution: 'GL Bajaj Institute of Technology and Management',
    location: 'Greater Noida',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Data Science (CSDS)',
    year: '3rd Year (Current)',
    status: 'In Progress',
    highlights: [
      'Focusing on Data Structures & Algorithms, Object-Oriented Programming in Java, Database Systems, and Web Technologies.',
      'Active participant in technical workshops, coding practice sessions, and college hackathons.',
      'Building practical full-stack and frontend web applications to solve real-world problems.',
    ],
  },
  {
    institution: 'Senior Secondary Education (Class XII)',
    location: 'India',
    degree: 'Higher Secondary School Certificate',
    field: 'Science (Physics, Chemistry, Mathematics)',
    year: 'Completed',
    status: 'Completed',
    highlights: [
      'Developed strong foundation in Mathematics, Logical Reasoning, and Analytical Thinking.',
    ],
  },
];

export const strengthsData: PersonalStrength[] = [
  {
    id: 'communication',
    title: 'Communication',
    description: 'Adept at expressing complex technical ideas clearly, collaborating with teams during project sprints, and presenting solutions effectively.',
    iconName: 'MessageSquare',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Analytical mindset with a structured approach to debugging, optimizing code logic, and breaking down complex requirements into clean modules.',
    iconName: 'Brain',
  },
  {
    id: 'quick-learner',
    title: 'Quick Learner',
    description: 'Eager to adopt new frameworks, libraries, and tools rapidly, constantly adapting to modern software engineering practices.',
    iconName: 'Zap',
  },
];

export const skillsData: SkillItem[] = [
  // Web Development
  {
    name: 'HTML',
    level: 'Advanced',
    category: 'web',
    icon: 'Code2',
    description: 'Semantic markup, accessibility standards, structured document hierarchy.',
    popular: true,
  },
  {
    name: 'CSS',
    level: 'Advanced',
    category: 'web',
    icon: 'Palette',
    description: 'Responsive layouts, Flexbox, Grid, custom styling, animations.',
    popular: true,
  },
  {
    name: 'JavaScript',
    level: 'Intermediate',
    category: 'web',
    icon: 'FileCode2',
    description: 'ES6+ syntax, async/await, DOM manipulation, functional programming patterns.',
    popular: true,
  },
  {
    name: 'React',
    level: 'Intermediate',
    category: 'web',
    icon: 'Atom',
    description: 'Component architecture, custom hooks, state management, SPA routing.',
    popular: true,
  },
  {
    name: 'TypeScript',
    level: 'Intermediate',
    category: 'web',
    icon: 'FileCheck2',
    description: 'Static typing, interfaces, generics, type-safe React applications.',
    popular: true,
  },
  {
    name: 'Node.js',
    level: 'Intermediate',
    category: 'web',
    icon: 'Server',
    description: 'Server side fundamentals, REST APIs, middleware integration.',
  },

  // Programming Languages
  {
    name: 'C',
    level: 'Intermediate',
    category: 'programming',
    icon: 'Terminal',
    description: 'Core memory management, pointers, fundamental computer science concepts.',
  },
  {
    name: 'C++',
    level: 'Intermediate',
    category: 'programming',
    icon: 'Cpu',
    description: 'Object-oriented programming, STL containers, competitive problem solving.',
    popular: true,
  },
  {
    name: 'Python',
    level: 'Intermediate',
    category: 'programming',
    icon: 'Binary',
    description: 'Data analysis scripting, OOP, data science foundational modules.',
    popular: true,
  },
  {
    name: 'Java',
    level: 'Intermediate',
    category: 'programming',
    icon: 'Coffee',
    description: 'Object-oriented design principles, Java collections, robust application building.',
    popular: true,
  },

  // Core Concepts
  {
    name: 'Object-Oriented Programming (Java)',
    level: 'Advanced',
    category: 'core',
    icon: 'Layers',
    description: 'Encapsulation, Inheritance, Polymorphism, Abstraction, Design Patterns.',
    popular: true,
  },
  {
    name: 'Problem Solving',
    level: 'Advanced',
    category: 'core',
    icon: 'Compass',
    description: 'Algorithm design, data structures selection, step-by-step problem decomposition.',
    popular: true,
  },

  // Soft Skills
  {
    name: 'Communication',
    level: 'Advanced',
    category: 'soft',
    icon: 'MessageCircle',
    description: 'Effective team coordination, technical writing, concise documentation.',
  },
  {
    name: 'Problem Solving',
    level: 'Advanced',
    category: 'soft',
    icon: 'Lightbulb',
    description: 'Root cause analysis, creative thinking under pressure, iterative optimization.',
  },
  {
    name: 'Quick Learner',
    level: 'Advanced',
    category: 'soft',
    icon: 'TrendingUp',
    description: 'Rapid tech stack adoption, self-motivated research, enthusiasm for new tools.',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'e-commerce-website',
    title: 'E-Commerce Website',
    subtitle: 'Modern & Responsive Online Store Platform',
    category: 'Web Application',
    description: 'A responsive e-commerce website designed to provide a smooth online shopping experience with a modern user interface and structured product presentation.',
    fullDescription: 'This full-featured e-commerce web application showcases a modern product showcase, interactive category filters, intuitive shopping cart management, responsive grid layouts, and structured product details. Built with focus on clean state management, sleek visual design, and fast navigation for seamless desktop and mobile shopping experiences.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'REST API'],
    keyFeatures: [
      'Interactive Product Catalog with instant search and category filtering',
      'Dynamic Shopping Cart with real-time total price calculation and item adjustments',
      'Mobile-first responsive grid layout tailored for all screen sizes',
      'Clean UI components with subtle micro-interactions and smooth transitions',
      'Structured mock checkout workflow with order summary verification',
    ],
    imagePlaceholderText: 'E-Commerce Product Showcase & Shopping Cart UI',
    bgGradient: 'from-slate-900 via-indigo-950 to-purple-950',
    githubUrl: 'https://github.com/placeholder/nidhi-ecommerce-project',
    liveUrl: '#',
  },
  {
    id: 'hackathon-frontend',
    title: 'Hackathon Project',
    subtitle: 'Frontend Developer Contribution',
    role: 'Frontend Developer',
    category: 'Hackathon / Frontend',
    description: 'Worked as a frontend developer on a hackathon-based project, contributing to the user interface, responsive design, and frontend implementation.',
    fullDescription: 'During a competitive college hackathon, served as the primary Frontend Developer responsible for translating conceptual wireframes into a functional, highly responsive web dashboard. Implemented modern UI components, smooth state transitions, and accessible form interfaces within a tight deadline, helping the team deliver a polished prototype.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Responsive Design'],
    keyFeatures: [
      'Rapid prototype development under high-pressure team hackathon conditions',
      'Custom UI components designed for high accessibility and aesthetic appeal',
      'Seamless multi-device responsiveness from mobile viewports to desktop monitors',
      'Fluid animations for interactive cards, notifications, and navigation drawers',
      'Collaborative Git workflow and clean frontend architecture',
    ],
    imagePlaceholderText: 'Hackathon Frontend Dashboard & Interactive Interface',
    bgGradient: 'from-purple-950 via-slate-900 to-indigo-950',
    githubUrl: 'https://github.com/placeholder/nidhi-hackathon-frontend',
    liveUrl: '#',
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: 'cisco-modern-ai',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    date: 'July 14, 2026',
    category: 'AI / Technology',
    recipient: 'Nidhi Kumari',
    image: 'https://res.cloudinary.com/dkduejkuj/image/upload/v1786824556/IntrotoModernAIUpdate20260714-20-iv2g19_page-0001_udfjof.jpg',
    description: 'Successfully completed the Introduction to Modern AI course from Cisco Networking Academy, mastering fundamental AI principles, LLMs, and intelligent dialogue systems.',
    topics: [
      'Basic AI and Machine Learning concepts',
      'Object classification and image segmentation',
      'Machine translation',
      'Large Language Models (LLMs)',
      'Prompting LLMs',
      'LLM-enabled chatbots',
      'Two-way chatbot dialogue',
      'Collaboration between chatbots',
      'LLM tools',
      'Multimodal prompting'
    ],
    verificationUrl: '#',
  },
  {
    id: 'cisco-intro-cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'July 27, 2026',
    category: 'Cybersecurity',
    recipient: 'Nidhi Kumari',
    image: 'https://res.cloudinary.com/dkduejkuj/image/upload/v1786825410/f6115347-1515-4d0a-b88d-82f16f07d4da.png',
    description: 'Achieved student level credential for completing the Introduction to Cybersecurity course from Cisco Networking Academy, demonstrating proficiency in online safety, threat mitigation, and organizational defense strategies.',
    topics: [
      'Basics of online safety & cybersecurity impact',
      'Common cyber threats, attacks, & vulnerabilities',
      'Personal online protection practices',
      'Organizational security & defense operations',
      'Cybersecurity career pathways & resources'
    ],
    verificationUrl: '#',
  },
  {
    id: 'gfg-career-boost',
    title: 'Career Boost Workshop',
    issuer: 'GeeksforGeeks Classroom Program',
    date: '2026',
    category: 'Workshop',
    recipient: 'Nidhi Kumari',
    image: 'https://res.cloudinary.com/dkduejkuj/image/upload/v1786825121/144891cc-e61a-4d78-860b-5600f100f35b.png',
    description: 'Successfully completed the Career Boost Workshop conducted through the GeeksforGeeks Classroom Program.',
    topics: [
      'Technical Interview Preparation',
      'Data Structures Practice',
      'Resume & Portfolio Optimization',
      'Industry Development Standards'
    ],
    verificationUrl: '#',
  },
];

