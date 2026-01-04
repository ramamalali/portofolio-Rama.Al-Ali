import { Wifi, Bluetooth, House, Sun, Moon, Keyboard, Airplay, ChevronDown , CircleUser , Search , Settings2} from "lucide-react";

export const ar = { common: { languageName: "العربية", rtl: true,}

const navLinks = [
    {
      id: 1,
      name: "المشاريع",
      type: "finder",
    },
    {
      id: 3,
      name: "تواصل",
      type: "contact",
    },
    {
      id: 4,
      name: "السيرة الذاتية",
      type: "resume",
    },
  ];
  
  const navIcons = [
    {
      id: 1,
      icon: Wifi,
      type :"wifi"
    },
    {
      id: 2,
      icon: Search,
      type :"search"
    },
    {
      id: 3,
      icon: CircleUser,
      type :"user"
    },
    {
      id: 4,
      icon: Settings2,
      type :"mode"
    },
  ];
  
  const dockApps = [
    {
      id: "finder",
      name: "معرض الأعمال", // was "Finder"
      icon: "images/finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "المقالات", // was "Safari"
      icon: "images/safari.png",
      canOpen: true,
    },
    {
      id: "photos",
      name: "المعرض", // was "Photos"
      icon: "images/photos.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "تواصل", // or "Get in touch"
      icon: "images/contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "المهارات", // was "Terminal"
      icon: "images/terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "الأرشيف", // was "Trash"
      icon: "images/trash.png",
      canOpen:true ,
    },
  ];
  
  const blogPosts = [
    {
      id: 1,
      date: "Sep 2, 2025",
      title:
        "شرح TypeScript: ما هو، لماذا يهم، وكيف تتقنهt",
      image: "/images/blog1.png",
      link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
      id: 2,
      date: "Aug 28, 2025",
      title: "الدليل الشامل لإتقان Three.js  لتطوير ثلاثي الأبعاد",
      image: "/images/blog2.png",
      link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
      id: 3,
      date: "Aug 15, 2025",
      title: "الدليل الشامل لإتقان تحريك GSAP",
      image: "/images/blog3.png",
      link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
  ];
  
  const techStack = [
    {
      category: "الواجهة الأمامية",
      items: ["React.js", "Next.js", "TypeScript"],
    },
    {
      category: "تطبيقات الموبايل",
      items: ["React Native", "Expo"],
    },
    {
      category: "التنسيقات",
      items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
      category: "الواجهة الخلفية",
      items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
      category: "قواعد البيانات",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: " أدوات التطوير",
      items: ["Git", "GitHub", "Docker"],
    },
  ];
  
  const socials = [
    {
      id: 1,
      text: "غيت هَب",
      icon: "/icons/github.svg",
      bg: "#f4656b",
      link: "https://github.com/JavaScript-Mastery-Pro",
    },
    {
      id: 2,
      text: "المنصة",
      icon: "/icons/atom.svg",
      bg: "#4bcb63",
      link: "https://jsmastery.com/",
    },
    {
      id: 3,
      text: "تويتر / إكس",
      icon: "/icons/twitter.svg",
      bg: "#ff866b",
      link: "https://x.com/jsmasterypro",
    },
    {
      id: 4,
      text: "لينكد إن",
      icon: "/icons/linkedin.svg",
      bg: "#05b6f6",
      link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
    },
  ];
  
  
  
  
  // Library
   const PHOTOS_LIBRARY = {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "المكتبة",
    children: [
      { id: 1,fileType: "img", imageUrl: "/images/gal1.png" },
      { id: 2,fileType: "img", imageUrl: "/images/gal2.png" },
      { id: 3,fileType: "img", imageUrl: "/images/gal3.png" },
      { id: 4,fileType: "img", imageUrl: "/images/gal4.png" },
    ],
  };
  
  // Memories
   const PHOTOS_MEMORIES = {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "الذكريات",
    children: [
      { id: 1,fileType: "img", imageUrl: "/images/gal1.png" },
      { id: 2,fileType: "img", imageUrl: "/images/gal2.png" },
      { id: 3,fileType: "img", imageUrl: "/images/gal3.png" },
      { id: 4,fileType: "img", imageUrl: "/images/gal4.png" },
    ],
  };
  
  // Places
   const PHOTOS_PLACES = {
    id: 3,
    icon: "/icons/file.svg",
    title: " الأماكن",
    children: [
      { id: 1,fileType: "img", imageUrl: "/images/gal2.png" },
      { id: 2,fileType: "img", imageUrl: "/images/gal4.png" },
      { id: 3,fileType: "img", imageUrl: "/images/gal1.png" },
      { id: 4,fileType: "img", imageUrl: "/images/gal3.png" },
    ],
  };
  
  // People
   const  PHOTOS_PEOPLE = {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "الأشخاص",
    children: [
      { id: 1,fileType: "img", imageUrl: "/images/gal1.png" },
      { id: 2,fileType: "img", imageUrl: "/images/gal2.png" },
      { id: 3,fileType: "img", imageUrl: "/images/gal3.png" },
      { id: 4,fileType: "img", imageUrl: "/images/gal4.png" },
    ],
  };
  
  // Favorites
   const PHOTOS_FAVORITES = {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "المفضلة",
    children: [
      { id: 1,fileType: "img", imageUrl: "/images/gal1.png" },
      { id: 2,fileType: "img", imageUrl: "/images/gal2.png" },
      { id: 3,fileType: "img", imageUrl: "/images/gal3.png" },
      { id: 4,fileType: "img", imageUrl: "/images/gal4.png" },
    ],
  };
  
  
  
  
  
  export const photosLinks = {
    Library : PHOTOS_LIBRARY,
     Memories : PHOTOS_MEMORIES,
    Places : PHOTOS_PLACES,
   People : PHOTOS_PEOPLE,
   Favorites : PHOTOS_FAVORITES,
  };
  
  
  
  export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    PHOTOS_LIBRARY, PHOTOS_MEMORIES, PHOTOS_PLACES, PHOTOS_PEOPLE, PHOTOS_FAVORITES
  };
  
  const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "العمل",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
      // ▶️ Project 1
      {
        id: 5,
        name: "تطبيق متجر نايك الإلكتروني",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-15 left-7", // icon position inside Finder
        windowPosition: "top-[45px] left-7", // optional: Finder window position
        children: [
          {
            id: 1,
            name: "Nike Project.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "وقع نايك الإلكتروني هو منصة حديثة وأنيقة للتسوق من أحدث مجموعات نايك.",
              "بدل متجر بسيط، بيقدم تجربة غامرة مع صور قوية، عرض منتجات تفاعلي، وتنقل سلس.",
              "كأنك داخل متجر نايك الرئيسي لكن من جهازك.",
              "مبني باستخدام Next.js  و Tailwind لضمان سرعة الأداء، التصميم المتجاوب، والمظهر النظيف.",
            ],
          },
          {
            id: 2,
            name: "nike.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
            position: "top-10 right-20",
          },
          {
            id: 4,
            name: "nike.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-1.png",
          },
          {
            id: 5,
            name: "Design.fig",
            icon: "/images/plain.png",
            kind: "file",
            fileType: "fig",
            href: "https://google.com",
            position: "top-60 right-20",
          },
        ],
      },
  
      // ▶️ Project 2
      {
        id: 6,
        name: "محلل السيرة الذاتية بالذكاء الاصطناعي",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-52 right-80",
        windowPosition: "top-[158px] left-9",
        children: [
          {
            id: 1,
            name: "AI Resume Analyzer Project.txt  → مشروع محلل السيرة الذاتية.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 right-10",
            description: [
              "أداة ذكية تساعدك على تحسين سيرتك الذاتية بتغذية راجعة فورية",
              "بدل التخمين، بتعطيك رؤى مدعومة بالذكاء الاصطناعي حول الكلمات المفتاحية والتنسيق والأثر العام..",
              "كأن عندك مدرب وظيفي يوضح نقاط القوة ويصلح الضعف.",
              "مبني بـ Next.js  و Tailwind ليكون سريع واحترافي ويعمل على أي جهاز",
            ],
          },
          {
            id: 2,
            name: "ai-resume-analyzer.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
            position: "top-20 left-20",
          },
          {
            id: 4,
            name: "ai-resume-analyzer.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/project-2.png",
          },
          {
            id: 5,
            name: "Design.fig",
            icon: "/images/plain.png",
            kind: "file",
            fileType: "fig",
            href: "https://google.com",
            position: "top-60 left-5",
          },
        ],
      },
  
      // ▶️ Project 3
      {
        id: 7,
        name: "Food Delivery App",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 left-80",
        windowPosition: "top-[265px] left-9 ",
        children: [
          {
            id: 1,
            name: "Food Delivery App Project.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
              "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
              "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
              "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
              "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
            ],
          },
          {
            id: 2,
            name: "food-delivery-app.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
            position: "top-10 right-20",
          },
          {
            id: 4,
            name: "food-delivery-app.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/project-3.png",
          },
          {
            id: 5,
            name: "Design.fig",
            icon: "/images/plain.png",
            kind: "file",
            fileType: "fig",
            href: "https://google.com",
            position: "top-60 right-20",
          },
        ],
      },
    ],
  };
  
  const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "عني",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-5",
        imageUrl: "/images/adrian.jpg",
      },
      {
        id: 2,
        name: "casual-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-28 right-72",
        imageUrl: "/images/adrian-2.jpg",
      },
      {
        id: 3,
        name: "conference-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 left-80",
        imageUrl: "/images/adrian-3.jpeg",
      },
      {
        id: 4,
        name: "about-me.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-60 left-5",
        subtitle: "Meet the Developer Behind the Code",
        image: "/images/adrian.jpg",
        description: [
          "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
          "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
          "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
          "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
        ],
      },
    ],
  };
  
  const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "السيرة الذاتية",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "Resume.pdf",
        icon: "/images/pdf.png",
        kind: "file",
        fileType: "pdf",
        // you can add href if you want to open a hosted resume
        // href: "/your/resume/path.pdf",
      },
    ],
  };
  
  const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "المهملات",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "trash1.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-10",
        imageUrl: "/images/trash-1.png",
      },
      {
        id: 2,
        name: "trash2.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-40 left-80",
        imageUrl: "/images/trash-2.png",
      },
    ],
  };
  
  export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
  };
  
  const INITIAL_Z_INDEX = 1000;
  
  const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  };
  
  export { INITIAL_Z_INDEX, WINDOW_CONFIG };
}