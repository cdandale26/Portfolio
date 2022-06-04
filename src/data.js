//  icons
import {
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";

// projects images
import Project1 from "./assets/img/projects/Sound&Silence.png";
import Project2 from "./assets/img/projects/anytext.png";
import Project3 from "./assets/img/projects/portfolio.png";
import Project4 from "./assets/img/projects/newsoholic.png";
import Project5 from "./assets/img/projects/PostItAll.png";
import Project6 from "./assets/img/projects/Aisha.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },

  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/cvdandale/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/cdandale26",
  },
  {
    icon: <FiTwitter />,
    href: "https://twitter.com/cudandale",
  },
  {
    icon: <FiDownload />,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project3,
    name: "My Portfolio",
    category: "UI/UX design",
    description:
      "My portfolio is a website that any developer/ designer can use to make their custom portfolio once the sections are edited  ",
    href: "",
    git_link: "",
  },
  {
    id: "5",
    image: Project5,
    name: "PostItAll",
    category: "web development",
    description:
      " The website is designed to make small notes of our day to day tasks like list of grocery or reminders for a birthday or any pending tasks ",
    href: "https://cdandale26.github.io/PostItAll/",
    git_link: "https://github.com/cdandale26/PostItAll",
  },

  {
    id: "3",
    image: Project2,
    name: "AnyText",
    category: "web development",
    description:
      "The website does some mundane text manipulation tasks: convertion to upper or lower case, copies and removes extra spaces.",
    href: "https://cdandale26.github.io/AnyTextutils/",
    git_link: "https://github.com/cdandale26/AnyTextutils",
  },
  {
    id: "4",
    image: Project4,
    name: "News-O-holic",
    category: "web development",
    description:
      "The website is developed to show us day to day news at comfort of a click. You can browse through different categories of the news and stay up-to-date ",
    href: "",
    git_link: "https://github.com/cdandale26/newsapp",
  },
  {
    id: "2",
    image: Project1,
    name: "Sound&Silence",
    category: "UI/UX design",
    description:
      "Sound and Silence is designed for a client based in LA for their musical band that allows people to book their services online ",
    href: "https://www.figma.com/proto/wBXZLORPerNgUUhYHBhu3p/S%26S?node-id=14%3A27",
    git_link: "",
  },

  {
    id: "6",
    image: Project6,
    name: "Ayesha's hair-Salon",
    category: "web development",
    description:
      "Ayesha's hair-salon is a website for local business that facilitates the booking of their services hassle free and online ",
    href: "https://hairsalon-ayesha.netlify.app/",
    git_link: "https://github.com/cdandale26/HairSalon",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Design engaging and interactive layout for the landing pages for my client's businesses which combines texts with sound,pictures,graphics and video clips.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Write production ready code for the websites as well as test it, monitor website traffic, troubleshoot website problems when they arise, and update websites as necessary.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Design logos for my clients to improve the brand elements like logo, color theme, typography and other design aspects that can improve the visibility of the client's brand.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Develop optimization strategies to ensure increase in the company's websites search engine results ranking, content marketing and brand building.",
  },
];

// testimonials

// contact
export const contact = [
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Ontario,Canada",
    description: "Serving clients worldwide",
  },
];
