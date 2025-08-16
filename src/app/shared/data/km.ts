import { Portfolio } from "../interface";

export const KM_DATA: Portfolio = {
  commands: ['help', 'about', 'project', 'experience', 'skill', 'contact', 'profile', 'clear', 'exit', 'setting'],
  labels: [
    { key: 'help', way: 'បង្ហាញព័ត៌មានជំនួយ និងពាក្យបញ្ជាទាំងអស់ដែលមាន' },
    { key: 'about', way: 'បង្ហាញព័ត៌មានទូទៅអំពីប្រធានបទ' },
    { key: 'project', way: 'បង្ហាញគម្រោងទាំងអស់ដែលខ្ញុំបានធ្វើផ្អែកលើបទពិសោធន៍របស់ខ្ញុំ!' },
    { key: 'experience', way: 'បង្ហាញព័ត៌មានអំពីបទពិសោធន៍ និងគម្រោងដែលខ្ញុំបានធ្វើ!' },
    { key: 'skill', way: 'បង្ហាញព័ត៌មានអំពីជំនាញ និងសមត្ថភាព' },
    { key: 'contact', way: 'អញ្ជើញទាក់ទងមកសម្រាប់សំណួរ ការសហការឬឱកាសផ្សេងៗ។' },
    { key: 'profile', way: 'បង្ហាញព័ត៌មានប្រវត្តិផ្ទាល់ខ្លួន' },
    { key: 'clear', way: 'សម្អាតអេក្រង់ terminal' },
    { key: 'exit', way: 'ចាកចេញពីគេហទំព័រ' },
    { key: 'setting', way: 'កែប្រែ terminal នៅក្នុងការកំណត់' }
  ],
  profile: {
    displayName: 'មៀច សុខហៃ',
    alias: 'សុខហៃ',
    tagline: 'អ្នកអភិវឌ្ឍកម្មវិធីដែលបង្កើតអ្វីៗមានប្រយោជន៍។',
    greeting: 'សូមស្វាគមន៍មកកាន់ terminal portfolio របស់ខ្ញុំ។',
    email: 'dshhshh750@gmail.com',
    avatarUrl: 'images/sokhai.jpg',
    discription: 'ខ្ញុំជាមនុស្សមានមហិច្ឆតា និងអាចបត់បែនបាន ដែលមានមូលដ្ឋានរឹងមាំក្នុងការសរសេរកម្មវិធី ការរចនាក្រាហ្វិក និងការទំនាក់ទំនង។ បច្ចុប្បន្នកំពុងសិក្សាបរិញ្ញាបត្រផ្នែក Management Information Systems (MIS) ខ្ញុំយកចិត្តទុកដាក់លើភាពច្នៃប្រឌិត ការដោះស្រាយបញ្ហា និងភាពឧស្សាហ៍ព្យាយាមក្នុងគម្រោងនីមួយៗ។ បទពិសោធន៍រួមមានការអភិវឌ្ឍគេហទំព័រ ការរចនាថ្មីៗ និងការសហការល្អក្នុងក្រុមដើម្បីសម្រេចគោលដៅ។ មានចំណង់ចំណូលចិត្តចំពោះបច្ចេកវិទ្យា និងការរៀនសូត្រទៅជាបន្ត ខ្ញុំមានបំណងប្រើជំនាញដើម្បីបង្កើតលទ្ធផលមានឥទ្ធិពលក្នុងបរិស្ថានការងារដែលមានភាពសកម្ម។',
    socials: [
      { label: 'GitHub', url: 'https://github.com/sokhaimeach', username: 'youruser' },
      { label: 'Facebook', url: 'https://web.facebook.com/sok.hai.142035' }
    ]
  },
  about: [
    'ខ្ញុំជាអ្នកអភិវឌ្ឍដែលផ្តោតលើកម្មវិធីវេបដែលស្អាត និងលឿន។',
    'ខ្ញុំចូលចិត្ត JavaScript, Angular, TypeScript និងការរចនាផ្នែក UI/UX ដែលមានគំនិត។'
  ],
  projects: [
    {
      id: '1',
      title: 'Snake Game',
      summary: 'ហ្គេមពស់ក្នុងកម្មវិធីរុករក ដែលអ្នកលេងត្រូវគ្រប់គ្រងពស់ឲ្យធំឡើងដោយញ៉ាំអាហារនិងជៀសវាងការប៉ះទង្គិច។',
      tech: 'Javascript, HTML, CSS',
      links: [{ label: 'Source', url: 'https://snake-game-five-red.vercel.app/' }]
    },
    {
      id: '2',
      title: 'To do list',
      summary: 'កម្មវិធីគ្រប់គ្រងភារកិច្ចសាមញ្ញ អនុញ្ញាតឱ្យអ្នកបន្ថែម កែប្រែ និងលុបភារកិច្ចជាមួយការរចនាឆ្លាតវៃ និងឆបគ្នាទូរស័ព្ទ។',
      tech: 'Angular, TypeScript, Tailwind',
      links: [{ label: 'Source', url: 'https://to-do-list-one-alpha-98.vercel.app/' }]
    },
    {
      id: '3',
      title: 'Calculator',
      summary: 'ម៉ាស៊ីនគិតលេខលើវេប ដែលគាំទ្រគណនាមូលដ្ឋានជាមួយផ្ទៃមើលងាយស្រួលប្រើ។',
      tech: 'Angular, TypeScript, CSS, HTML',
      links: [{ label: 'Source', url: 'https://calculator-angular-iota.vercel.app/' }]
    },
    {
      id: '4',
      title: 'Depreciation website',
      summary: 'ឧបករណ៍គណនាការថយចុះតម្លៃទ្រព្យសកម្មក្នុងរយៈពេល ដោយផ្តល់លទ្ធផលលឿន និងត្រឹមត្រូវ។',
      tech: 'Angular, TypeScript, HTML, Boostrap',
      links: [{ label: 'Source', url: 'https://depreciation-website.vercel.app/' }]
    }
  ],
  experience: [
    {
      title: 'Programming',
      discription: 'បទពិសោធន៍ឆ្នាំទី១ នៅ Setec Institute Web Development — បង្កើតគេហទំព័រ Ecommerce ដោយប្រើ HTML CSS និង JavaScript (Burger, Coffee Shop, Bread, Car Shop), គេហទំព័រ Portfolio និង Clone គេហទំព័រ សាកលវិទ្យាល័យ (AUPP) Loan-System, Console Student Management ដោយប្រើ C#. បទពិសោធន៍ឆ្នាំទី២ — បង្កើត Loan-System (3ways Principle, Login Digit Dynamic) ដោយប្រើ C#, POS-System ភ្ជាប់ជាមួយ SQL Server។'
    },
    {
      title: 'Graphic Design',
      discription: 'រចនាក្រាហ្វិក៖ រចនាប៉ូស្ទ័រច្រើនដូចជា Smart Poster, បុណ្យចូលឆ្នាំខ្មែរ, បុណ្យអំបិលទឹក, Leaflet, UX/UI ទូរស័ព្ទ, Brochure, Banner, Name Card, Caltex Logo, Hotel Promotion Poster ជាដើម។'
    }
  ],
  skills: [
    { name: 'Web Development', items: 'មានបទពិសោធន៍ក្នុងការបង្កើតគេហទំព័រទំនើប និងឆបគ្នាទូរស័ព្ទ ដោយប្រើបច្ចេកវិទ្យាផ្សេងៗ។ ជំនាញទាំងផ្នែកមុខនិងផ្នែកក្រោយ ដោយផ្តោតលើផ្ទៃមើលងាយស្រួលប្រើ និងមុខងារប្រសើរ។ មានជំនាញក្នុង HTML, CSS, JavaScript និង framework ទំនើប។ តែងតែធ្វើបច្ចុប្បន្នភាពជាមួយនិន្នាការចុងក្រោយ។' },
    { name: 'Programming', items: 'មានមូលដ្ឋានរឹងមាំក្នុងគោលការណ៍ Programming និងភាសា Programming ច្រើន។ មានបទពិសោធន៍ក្នុងការដោះស្រាយបញ្ហាតាមរយៈកូដ បង្កើត algorithms ប្រសើរ និងអភិវឌ្ឍកម្មវិធីមានស្ថេរភាព។ រួមទាំង C#, C++, JavaScript, TypeScript និង Framework ទំនើបដូចជា Angular។' },
    { name: 'Graphic Design', items: 'មានវិធីសាស្រ្តច្នៃប្រឌិតក្នុងការទំនាក់ទំនងតាមរូបភាព និងបទពិសោធន៍ក្នុងការរចនាក្រាហ្វិកដែលមានឥទ្ធិពល។ បញ្ចូលភាពច្នៃប្រឌិតសិល្បៈជាមួយជំនាញបច្ចេកទេស ដើម្បីបង្កើតការរចនាដែលទាក់ទាញ និងមានប្រសិទ្ធភាព។' },
    { name: 'UX/UI Design', items: 'យល់ដឹងល្អអំពីគោលការណ៍ UI/UX និងបទពិសោធន៍ក្នុងការរចនាផ្ទៃមើលងាយស្រួលប្រើ។ ជំនាញក្នុងការប្រើ Figma និង Adobe XD ដើម្បីបង្កើត wireframe, prototype និងការរចនាដែលស្អាត។' },
    { name: 'Database', items: 'មានមូលដ្ឋានរឹងមាំក្នុងគោលការណ៍ Database និងបទពិសោធន៍ក្នុងការប្រើ MySQL និង MongoDB។ មានជំនាញក្នុងការរចនា សាកសួរ និងគ្រប់គ្រងទិន្នន័យប្រកបដោយប្រសិទ្ធភាព។ អាចបង្កើនប្រសិទ្ធភាព Database និងភ្ជាប់វាជាមួយកម្មវិធី។' }
  ],
  contact: {
    title: 'សូមទាក់ទងមកខ្ញុំដោយសេរី',
    email: 'dshhshh750@gmail.com',
    phone: '+855 96 549 6481',
    telegram: '@sokhaimeach',
    location: 'ភ្នំពេញ ប្រទេសកម្ពុជា',
    availability: 'បើកទទួលការងារ freelance និង remote',
    e_title: 'អ៊ីម៉ែល',
    p_title: 'លេខទូរស័ព្ទ',
    t_title: 'តេឡេក្រាម',
    a_title: 'ទីតាំង',
    socials: [
      { label: 'GitHub', url: 'https://github.com/sokhaimeach' },
      { label: 'Facebook', url: 'https://web.facebook.com/sok.hai.142035' }
    ]
  },
  default: 'ពាក្យបញ្ជានេះមិនមានទេ សូមវាយ $help$ ដើម្បីមើលពាក្យបញ្ជាទាំងអស់'

};
