import type { DesktopIconModel } from "./models";

import  profile  from "../assets/images/profile.png";
import  resume  from "../assets/images/resume.png";
import  projects  from "../assets/images/projects.png";
import {About} from "../pages/Desktop/About";
import  {Resume}  from "../pages/Desktop/Resume";
import  {Projects} from "../pages/Desktop/projects";


export const desktopItems: DesktopIconModel[] = [
    { 
        id: "about", 
        title: "About Me", 
        image: profile, 
        component: About
    },
    { 
        id: "resume", 
        title: "My Resume", 
        image: resume, 
        component: Resume
    },
    { 
        id: "projects", 
        title: "Projects", 
        image: projects , 
        component: Projects
    },
]