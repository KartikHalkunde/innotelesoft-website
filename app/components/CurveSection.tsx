import React from 'react';

interface CurveSectionProps {
  showScrollButton?: boolean;
}

export default function CurveSection({ 
  showScrollButton = false 
}: CurveSectionProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10">
      <svg 
        viewBox="0 0 1440 160" 
        className="w-full h-auto relative"
        preserveAspectRatio="none"
        fill="#FAFAFA"
      >
        <path 
          d="M0,160 C480,80 960,80 1440,160 L1440,160 L0,160 Z"
        />
      </svg>

      {showScrollButton && (
        <button 
          onClick={() => {
            const curveEnd = document.querySelector('.curve-end');
            curveEnd?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute left-1/2 top-[calc(50%+20px)] -translate-x-1/2 -translate-y-1/2 transform z-20 bg-[#FFFFFF] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#FFB300] group"
          aria-label="Scroll Down"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-[#0F1C30] group-hover:text-white transition-colors duration-300 group-hover:animate-bounceArrow sm:w-6 sm:h-6"
          >
            <path 
              d="M4.5 9L12 16.5L19.5 9" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
} 