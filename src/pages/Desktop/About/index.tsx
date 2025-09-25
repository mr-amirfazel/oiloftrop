import type { FC } from "react";
import LetterGlitch from '../../../components/LetterGlitch';
import Silk from '../../../components/Silk';
import BlurText from "@/components/BlurText";
import ScrambledText from "@/components/ScrambledText";
import { GlowDivider } from "@/components/Divider";
import { AboutSection } from "./AboutSection";
import LogoLoop from '../../../components/LogoLoop';
import { SiReact, SiAngular, 
  SiTypescript, SiTailwindcss, 
  SiGnubash, SiRedux, SiReactivex, 
  SiDocker, SiKubernetes, SiPython, SiFlask,
  SiMysql , SiGit, SiGo
} from 'react-icons/si';
import { VerticalTimeline } from "@/components/VerticalTimeLine";
import { education, workExperience } from "@/constants/about";


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiAngular />, title: "Angular", href: "" },
  { node: <SiGnubash />, title: "Bash", href: "" },

  { node: <SiRedux />, title: "Redux", href: "" },
  { node: <SiReactivex />, title: "RxJs", href: "" },
  { node: <SiDocker />, title: "Docker", href: "" },
  { node: <SiKubernetes />, title: "Kubernetes", href: "" },

  { node: <SiPython />, title: "Python", href: "" },
  { node: <SiFlask />, title: "Flask", href: "" },
  { node: <SiMysql />, title: "Mysql", href: "" },

  { node: <SiGit />, title: "Git", href: "" },
  { node: <SiGo />, title: "Golang", href: "" },
];

export const About = () => {
    return (

        <div className="relative w-full h-full overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0">
        <Silk
                    speed={5}
                    scale={1}
                    color="#2263b3"
                    noiseIntensity={1.5}
                    rotation={0}
                >
                </Silk>
        </div>

        {/* Foreground content */}
      <div className="relative z-10 max-w-5xl mx-auto my-8 h-full overflow-y-auto pr-2 scrollbar-hide ">
        <div className="flex flex-col items-center gap-6 p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
          
          {/* Avatar */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <img
                className="w-28 h-28 rounded-full ring-4 ring-white/20 shadow-md"
                src="https://media.licdn.com/dms/image/v2/C4E03AQFNEFmmV-lo7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1644563621354?e=1761177600&v=beta&t=riMB_yMDdkR24ET9S4m03yfxlb-_JHzVS_GfiUiK8OI"
                alt="Amirfazel"
              />
            </div>

            {/* Intro Text */}
            <div className="flex-1">
              <BlurText
                text="Hi! I'm Amirfazel"
                delay={150}
                animateBy="letters"
                direction="top"
                className="text-3xl font-bold mb-2 text-yellow-400"
              />
              <ScrambledText
                radius={30}
                duration={1.2}
                speed={0.7}
                scrambleChars='**'
                >
                    A software developer passionate about building delightful & creative apps
                    and exploring system desing challanges.
                </ScrambledText>
            </div>

          </div>

          <GlowDivider />

          <AboutSection title="My Skills">
            {/* <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}> */}
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#8dbcf7"
                ariaLabel="Technology partners"
              />
            {/* </div> */}
          </AboutSection>

          <AboutSection title="Experience">
            <VerticalTimeline items={workExperience}/>
          </AboutSection>

          <AboutSection title="Education">
            <VerticalTimeline items={education}/>
          </AboutSection>
          
      </div>
       
      </div>

      </div>
    )
}

