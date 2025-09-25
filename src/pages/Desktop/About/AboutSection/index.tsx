interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  export const AboutSection = ({ title, children }: SectionProps) => {
    return (
      <div className="flex flex-col gap-4 w-full p-6 rounded-2xl bg-white/5 border border-white/10 shadow-md">
        <h2 className="text-xl font-semibold text-yellow-300 tracking-wide mb-2">
          {title}
        </h2>
        <div className="text-gray-200 leading-relaxed">{children}</div>
      </div>
    );
  };
  