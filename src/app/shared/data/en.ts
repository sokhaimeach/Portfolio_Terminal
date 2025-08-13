import { Portfolio } from "../interface";

export const EN_DATA: Portfolio = {
  commands: ['help','about','project','experience','skill','contact','profile','clear','exit'],
  labels: [
    {
      key: 'help',
      way: 'Display help information and available commands'
    },
    {
      key: 'about',
      way: 'Show general information about topics'
    },
    {
      key: 'project',
      way: 'Display all projects I have done based on my experience!'
    },
    {
      key: 'experience',
      way: 'Display information about experience and projects I have done!'
    },
    {
      key: 'skill',
      way: 'Display information about skills and abilities'
    },
    {
      key: 'contact',
      way: 'Feel free to reach out for any inquiries, collaborations, or opportunities.'
    },
    {
      key: 'profile',
      way: 'Display personal profile information'
    },
    {
      key: 'clear',
      way: 'Clear the terminal screen'
    },
    {
      key: 'exit',
      way: 'Leave the website'
    },
  ],
  profile: {
    displayName: 'Meach Sokhai',
    alias: 'sokhai',
    tagline: 'A Software Developer who builds useful things.',
    greeting: 'Welcome to my terminal portfolio.',
    email: 'you@example.com',
    avatarUrl: '/assets/avatar.png',
    discription: "I am a motivated and adaptable individual with a strong foundation in programming, graphic design, and communication. Currently pursuing a Bachelor's degree in Management Information Systems (MIS), I bring creativity, problem-solving abilities, and a commitment to excellence in every project. My experience includes developing websites, creating innovative designs, and collaborating effectively within teams to achieve goals. With a passion for technology and continuous learning, I aim to contribute my skills to drive impactful results in a dynamic work environment.",
    socials: [
      { label: 'GitHub', url: 'https://github.com/youruser', username: 'youruser' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/youruser' }
    ]
  },
  about: [
    'I’m a developer focused on clean, fast web apps.',
    'I enjoy JavaScript, Angular, TypeScript, and thoughtful UI/UX.'
  ],
  projects: [
    {
      id: '1',
      title: 'Portfolio Terminal',
      summary: 'Interactive terminal-style portfolio with command parsing.',
      tech: 'Angular, TypeScript, Tailwind',
      links: [{ label: 'Source', url: 'https://github.com/youruser/portfolio' }]
    },
    {
      id: '2',
      title: 'Portfolio Terminal',
      summary: 'Interactive terminal-style portfolio with command parsing.',
      tech: 'Angular, TypeScript, Tailwind',
      links: [{ label: 'Source', url: 'https://github.com/youruser/portfolio' }]
    },
    {
      id: '3',
      title: 'Portfolio Terminal',
      summary: 'Interactive terminal-style portfolio with command parsing.',
      tech: 'Angular, TypeScript, Tailwind',
      links: [{ label: 'Source', url: 'https://github.com/youruser/portfolio' }]
    },
    {
      id: '4',
      title: 'Portfolio Terminal',
      summary: 'Interactive terminal-style portfolio with command parsing.',
      tech: 'Angular, TypeScript, Tailwind',
      links: [{ label: 'Source', url: 'https://github.com/youruser/portfolio' }]
    },
  ],
  experience: [
    {
      title: 'Programming',
      discription: 'Experience In Year1 Setec Institute Web Development Building Ecommerce website using HTML CSS And JAVASCRIPT (burger Coffee Shop Bread Car Shop), Portfolio Website And Clone University Website (Aupp) Loan-System, Console StudentManagement Use cSharp Experience In Year2 Setec Institute Web Development Building Loan-System(3ways Principle, LoginDigit(Dynamic) cSharp POS-System Integration with Sql-Server)'
    },
    {
      title: 'Graphic Design',
      discription: 'Graphic Design: Design Many Poster Like: Smart Poster, Khmer New Years water Festival, Leaflet, UX/UI Phone, Brochure, Banner Name Card, Caltex Logo, Hotel Promotion Poster etc....'
    }
  ],
  skills: [
    { name: 'Web Development', items: 'Experienced in creating modern, responsive websites using various technologies. Skilled in both front-end and back-end development, with a focus on creating user-friendly interfaces and efficient functionality. Proficient in HTML, CSS, JavaScript, and modern frameworks. Always staying updated with the latest web development trends and best practices.' },
    { name: 'Programming',  items: 'Strong foundation in programming concepts and multiple programming languages. Experience in problem-solving through code, developing efficient algorithms, and creating robust applications. Such as Csharp, C++, JavaScript, Typescript And Modern Framework Like Angular.' },
    { name: 'Graphic Design',  items: 'Creative approach to visual communication with experience in designing innovative and impactful graphics. Skilled in creating visual solutions that effectively communicate ideas and enhance user experience. Combining artistic creativity with technical skills to produce designs that are both aesthetically pleasing and functionally effective.' },
    { name: 'UX/UI Design',  items: 'Solid understanding of UI/UX principles with practical experience in designing user-friendly interfaces. Proficient in tools like Figma and Adobe XD for creating wireframes, prototypes, and clean visual designs that enhance user experience.' },
    { name: 'Database',  items: 'Strong foundation in database concepts and hands-on experience with both relational and non-relational databases. Skilled in designing, querying, and managing data efficiently using MySQL and MongoDB. Capable of optimizing database performance and integrating data systems into robust applications.' },
  ],
  contact: {
    email: 'you@example.com',
    phone: '+855 12 345 678',
    telegram: '@sokhaimeach',
    location: 'Phnom Penh, Cambodia',
    availability: 'Open to freelance & remote',
    socials: [
      { label: 'GitHub', url: 'https://github.com/youruser' },
      { label: 'Facebook', url: 'https://github.com/youruser' }
    ]
  }
};
