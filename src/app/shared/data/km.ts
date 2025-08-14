import { Portfolio } from "../interface";

export const KM_DATA: Portfolio = {
  commands: ['help','about','project','experience','skill','contact','profile','clear','exit'],
  labels: [
    {
      key: 'ជំនួយ',
      way: 'Display help information and available commands'
    },
    {
      key: 'អំពី',
      way: 'Show general information about topics'
    },
    {
      key: 'ទម្រង់',
      way: 'Display all projects I have done based on my experience!'
    },
    {
      key: 'បទពិសោធន៍',
      way: 'Display information about experience and projects I have done!'
    },
    {
      key: 'ជំនាញ',
      way: 'Display information about skills and abilities'
    },
    {
      key: 'ទំនាក់ទំនង',
      way: 'Feel free to reach out for any inquiries, collaborations, or opportunities.'
    },
    {
      key: 'profile',
      way: 'Display personal profile information'
    },
    {
      key: 'សម្អាត',
      way: 'Clear the terminal screen'
    },
    {
      key: 'ចាកចេញ',
      way: 'Leave the website'
    }
  ],
  profile: {
    displayName: 'ឈ្មោះ​របស់​អ្នក',
    alias: 'ឈ្មោះហៅក្រៅ',
    tagline: 'អ្នកអភិវឌ្ឍន៍កម្មវិធី ដែលស្រឡាញ់ការបង្កើតអ្វីដែលមានប្រយោជន៍។',
    greeting: 'សូមស្វាគមន៍មកកាន់តើមីណលរបស់ខ្ញុំ។',
    email: 'you@example.com',
    avatarUrl: '/assets/avatar.png',
    discription: "I am a motivated and adaptable individual with a strong foundation in programming, graphic design, and communication. Currently pursuing a Bachelor's degree in Management Information Systems (MIS), I bring creativity, problem-solving abilities, and a commitment to excellence in every project. My experience includes developing websites, creating innovative designs, and collaborating effectively within teams to achieve goals. With a passion for technology and continuous learning, I aim to contribute my skills to drive impactful results in a dynamic work environment.",
    socials: [
      { label: 'GitHub', url: 'https://github.com/youruser', username: 'youruser' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/youruser' }
    ]
  },
  about: [
    'ខ្ញុំគឺជានិយោជិកអភិវឌ្ឍន៍ដែលផ្តោតលើគេហទំព័រលឿន និងស្អាត។',
    'ខ្ញុំចូលចិត្ត Angular, TypeScript និងការរចនាបទពិសោធន៍អ្នកប្រើ។'
  ],
  projects: [
    {
      id: 'p1',
      title: 'តើមីណលផតហ្វូលីយ៉ូ',
      summary: 'គេហទំព័រប្រភេទតើមីណលអន្តរកម្ម មានការបកស្រាយពាក្យបញ្ជា។',
      tech: 'Angular, TypeScript, Tailwind',
      links: [{ label: 'កូដ', url: 'https://github.com/youruser/portfolio' }]
    }
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
    location: 'ភ្នំពេញ ប្រទេសកម្ពុជា',
    availability: 'ទទួលការងារក្រៅម៉ោង និងពីចម្ងាយ',
    socials: [{ label: 'GitHub', url: 'https://github.com/youruser' }]
  },
  default: "This command doesn't have, please type $help$ to view all commands"
};
