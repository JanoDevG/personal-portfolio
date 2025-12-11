'use client'

import Image from 'next/image'
import MarqueeWrapper from './MarqueeWrapper'

type TechItem = {
  name: string
  icon: string
  className?: string
}

type TechMarqueeProps = {
  items: TechItem[]
}

const TechMarquee: React.FC<TechMarqueeProps> = ({ items }) => {
  return (
    <MarqueeWrapper className="bg-transparent">
      <div className="flex items-center gap-10 lg:gap-20">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              flex items-center gap-3 font-inter 
              text-primary-content text-sm lg:text-lg
              opacity-90 hover:opacity-100 transition-opacity duration-300
            "
          >
            <div
              className="
                flex items-center justify-center rounded-xl 
                bg-[--s] p-2 shadow-md shadow-[--s]/50 
                hover:shadow-[--a]/40 hover:scale-105 
                transition-transform duration-300
              "
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={48}
                height={48}
                className={`w-10 h-10 lg:w-14 lg:h-14 object-contain ${
                  item.className ?? ""
                }`}
              />
            </div>

            <span className="font-medium tracking-wide">{item.name}</span>
          </div>
        ))}
      </div>
    </MarqueeWrapper>
  );
};


export default TechMarquee
