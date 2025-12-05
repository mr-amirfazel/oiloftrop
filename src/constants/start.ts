import type { StartMenuIconModel } from "./models";

import  profile  from "../assets/images/profile.png";
import  resume  from "../assets/images/resume.png";
import  projects  from "../assets/images/projects.png";
import  edge  from "../assets/images/edge.png";
import  chrome  from "../assets/images/chrome.svg";
import  github  from "../assets/images/github.svg";
import  linkedin  from "../assets/images/linkedin.svg";
import {About} from "../pages/Desktop/About";
import  {Resume}  from "../pages/Desktop/Resume";
import  {Projects} from "../pages/Desktop/projects";
import { SearchEngine } from "@/components/Apps/SearchEngine";

export const startMenuItems: StartMenuIconModel[] = [
    { 
        id: "about", 
        title: "About", 
        image: profile, 
        component: About
    },
    { 
        id: "resume", 
        title: "Resume", 
        image: resume, 
        component: Resume
    },
    { 
        id: "projects", 
        title: "Projects", 
        image: projects , 
        component: Projects
    },
    { 
        id: "Edge", 
        title: "edge", 
        image: edge , 
        component: SearchEngine
    },
    { 
        id: "Chrome", 
        title: "chrome", 
        image: chrome , 
        component: SearchEngine
    },
    { 
        id: "Github", 
        title: "github", 
        image: github , 
        onClick: () => {window.open("https://www.github.com/mr-amirfazel", "_blank", "noopener,noreferrer");}
    },
    { 
        id: "LinkedIn", 
        title: "linkedIn", 
        image: linkedin , 
        onClick: () => {window.open("https://www.linkedin.com/in/amirfazel-koozegar-kaleji-229682227/", "_blank", "noopener,noreferrer");}
    },
]