"use client";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoadingComplete?.();
    }, 900); // 0.9 seconds
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 bg-[#007DC5] ${
        loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Content Container */}
      <div className="flex flex-col items-center justify-center h-24 relative">
        {/* Logo Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-3xl font-bold text-[#ffffff] whitespace-nowrap">
            Innotelesoft
          </h1>
        </div>
        
        {/* Loading Line Container */}
        <div className="absolute bottom-0 w-36 h-[2px] overflow-hidden">
          {/* Background Line */}
          <div className="absolute inset-0 bg-white/20" />
          
          {/* Animated Line */}
          <div 
            className={`absolute inset-0 bg-[#FFB300] transition-all ${
              loading ? 'animate-preloaderLine' : ''
            }`}
          />
        </div>
      </div>

      {/* Add loading animation keyframes to globals.css */}
      <style jsx global>{`
        @keyframes preloaderLine {
          0% {
            transform: translateX(-100%);
          }
          15% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
} 