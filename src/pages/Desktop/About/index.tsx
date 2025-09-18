import type { FC } from "react";
import LetterGlitch from '../../../components/LetterGlitch';
import Silk from '../../../components/Silk';

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
        <div className="relative z-10 p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">About Me</h1>
        <p className="leading-relaxed">
            Hi, I’m Fazel 👋 I’m a software engineer passionate about frontend and system design...
        </p>
        </div>
        </div>
    )
}

