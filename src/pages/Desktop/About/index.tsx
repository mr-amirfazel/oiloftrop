import type { FC } from "react";
import LetterGlitch from '../../../components/LetterGlitch';
import Silk from '../../../components/Silk';
import BlurText from "@/components/BlurText";
import ScrambledText from "@/components/ScrambledText";

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
        <div className="relative z-10 max-w-4xl mx-auto my-8">
  <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
    
    {/* Avatar */}
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
      {/* <p className="text-gray-200 text-lg leading-relaxed">
        A software engineer passionate about building delightful user
        experiences and exploring creative ways to merge design with
        technology.
      </p> */}
      <ScrambledText
        radius={30}
        duration={1.2}
        speed={0.7}
        scrambleChars='**'
        >
            A software engineer passionate about building delightful user
            experiences and exploring creative ways to merge design with
            technology.
        </ScrambledText>

        <div className="mt-6 flex flex-wrap gap-2">
  {["React", "Angular", "Go", "Cryptography", "Distributed Systems"].map(skill => (
    <span
      key={skill}
      className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-pink-500/20 text-sm text-white border border-white/20"
    >
      {skill}
    </span>
  ))}
</div>

    </div>
  </div>
</div>

        </div>
    )
}

