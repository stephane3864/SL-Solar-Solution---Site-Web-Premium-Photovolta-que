import React from 'react';

    interface LogoProps {
      size?: 'sm' | 'md' | 'lg' | 'xl';
      className?: string;
      showText?: boolean;
    }

    const Logo: React.FC<LogoProps> = ({ 
      size = 'md', 
      className = '', 
      showText = true 
    }) => {
      const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
      };

      const textSizeClasses = {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
        xl: 'text-3xl'
      };

      return (
        <div className={`flex items-center space-x-3 ${className}`}>
          <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main circular background */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="#F59E0B"
                className="drop-shadow-sm"
              />
              
              {/* Letter S design */}
              <path
                d="M25 30 Q25 20 35 20 L65 20 Q75 20 75 30 Q75 40 65 40 L45 40 Q35 40 35 50 Q35 60 45 60 L65 60 Q75 60 75 70 Q75 80 65 80 L35 80 Q25 80 25 70"
                fill="white"
                strokeWidth="0"
                className="opacity-90"
              />
              
              {/* Solar ray elements */}
              <g className="opacity-80">
                <rect x="82" y="48" width="8" height="4" fill="white" rx="2" />
                <rect x="10" y="48" width="8" height="4" fill="white" rx="2" />
                <rect x="48" y="10" width="4" height="8" fill="white" rx="2" />
                <rect x="48" y="82" width="4" height="8" fill="white" rx="2" />
                
                {/* Diagonal rays */}
                <rect x="73" y="20" width="6" height="3" fill="white" rx="1.5" transform="rotate(45 76 21.5)" />
                <rect x="21" y="76" width="6" height="3" fill="white" rx="1.5" transform="rotate(45 24 77.5)" />
                <rect x="73" y="76" width="6" height="3" fill="white" rx="1.5" transform="rotate(-45 76 77.5)" />
                <rect x="21" y="20" width="6" height="3" fill="white" rx="1.5" transform="rotate(-45 24 21.5)" />
              </g>
            </svg>
          </div>
          
          {showText && (
            <div className="flex flex-col">
              <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent leading-tight`}>
                SL Solar
              </span>
              <span className={`text-xs text-gray-600 font-medium tracking-wide ${size === 'sm' ? 'hidden' : ''}`}>
                SOLUTION
              </span>
            </div>
          )}
        </div>
      );
    };

    export default Logo;