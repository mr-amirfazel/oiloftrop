import type { FC } from "react";

interface TimelineItem {
  image: string;
  title: string;
  subtitle?: string;
  period: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const VerticalTimeline: FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative pl-8 border-l border-yellow-400/50">
      {items.map((item, idx) => (
        <div key={idx} className="mb-10 relative">
          {/* Timeline Dot */}
          <div className="absolute -left-[10px] top-1 w-4 h-4 rounded-full bg-yellow-400 border-2 border-white shadow-md"></div>
          
          {/* Content */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/10">
            <div className="flex gap-5">
                <img className= "h-10 w-10 rounded-md" src={item.image} alt="" />
                <div>
                    <h3 className="text-lg font-semibold text-yellow-300">
                    {item.title}
                    </h3>
                    {item.subtitle && (
                    <p className="text-sm text-gray-300">{item.subtitle}</p>
                    )}
                    <p className="text-sm text-gray-400 italic">{item.period}</p>
                </div>
            </div>
            {item.description && (
              <p className="mt-2 text-gray-200 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
