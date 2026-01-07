import {Wifi ,Search ,CircleUser , Settings2 } from "lucide-react"

const navLinks = [ 
  { id: 1, nameKey: "nav.Projects", type: "finder" },
   { id: 3, nameKey: "nav.Contact", type: "contact" },
    { id: 4, nameKey: "nav.Resume", type: "resume" },
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
    name: "dock.Portfolio", // was "Finder"
    icon: "images/finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "dock.Articles", // was "Safari"
    icon: "images/safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "dock.Gallery", // was "Photos"
    icon: "images/photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "dock.Contact", // or "Get in touch"
    icon: "images/contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "dock.Skills", // was "Terminal"
    icon: "images/terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "dock.Archive", // was "Trash"
    icon: "images/trash.png",
    canOpen:true ,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title: "blog.ts",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "blog.threejs",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "blog.gsap",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "tech.Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "tech.Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "tech.Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "tech.Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "tech.Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "tech.Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "social.Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "social.Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "social.Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "social.LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];




// Library
 const PHOTOS_LIBRARY = {
  id: 1,
  icon: "/icons/gicon1.svg",
  title: "photos.Library",
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
  title: "photos.Memories",
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
  title: "photos.Places",
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
  title: "photos.People",
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
  title: "photos.Favorites",
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
  name: "work", // مفتاح ترجمة بدل كلمة Work
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶️ Project 1
    {
      id: 5,
      name: "nikeProject", // مفتاح ترجمة
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-15 left-7",
      windowPosition: "top-[45px] left-7",
      children: [
        {
          id: 1,
          name: "nikeProjectTxt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "nike.desc1",
            "nike.desc2",
            "nike.desc3",
            "nike.desc4",
          ],
        },
        {
          id: 2,
          name: "nikeUrl",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nikeImage",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "nikeDesign",
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
      name: "aiResumeAnalyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[158px] left-9",
      children: [
        {
          id: 1,
          name: "aiResumeAnalyzerTxt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "aiResume.desc1",
            "aiResume.desc2",
            "aiResume.desc3",
            "aiResume.desc4",
          ],
        },
        {
          id: 2,
          name: "aiResumeUrl",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "aiResumeImage",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "aiResumeDesign",
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
      name: "foodDeliveryApp",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[265px] left-9",
      children: [
        {
          id: 1,
          name: "foodDeliveryAppTxt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "food.desc1",
            "food.desc2",
            "food.desc3",
            "food.desc4",
          ],
        },
        {
          id: 2,
          name: "foodDeliveryUrl",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "foodDeliveryImage",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "foodDeliveryDesign",
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

export default WORK_LOCATION;


const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
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
        "about.desc1",
         "about.desc2",
        "about.desc3",
        "about.desc4",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",

    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
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
