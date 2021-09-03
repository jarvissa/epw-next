import { FcAbout, FcIdea, FcNews } from "react-icons/fc";

const navLinks = [
  {
    key: "projects",
    title: "Projects",
    to: "/projects",
    icon: FcNews,
  },
  {
    key: "blog",
    title: "Blog",
    to: "/blog",
    icon: FcIdea,
  },
  {
    key: "about",
    title: "About",
    to: "/about",
    icon: FcAbout,
  },
];

export default navLinks;
