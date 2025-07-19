import React, { useEffect, useState } from 'react';
import { Gamepad2 } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: 'Loading servers...' },
      { progress: 40, text: 'Connecting to data centers...' },
      { progress: 60, text: 'Optimizing performance...' },
      { progress: 80, text: 'Preparing your experience...' },
      { progress: 100, text: 'Ready to launch!' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setProgress(loadingSteps[currentStep].progress);
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center z-50">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Animated logo */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto animate-bounce">
            <Gamepad2 className="h-12 w-12 text-white" />
          </div>
          <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto animate-ping opacity-20"></div>
        </div>

        {/* Brand name with typing effect */}
        <h1 className="text-4xl font-bold text-white mb-2 animate-pulse">
          GameHost.in
        </h1>
        <p className="text-blue-300 mb-8 animate-fade-in">India's Premier Gaming Host</p>

        {/* Progress bar */}
        <div className="w-80 mx-auto mb-4">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <p className="text-gray-300 text-sm animate-pulse">{loadingText}</p>
        
        {/* Progress percentage */}
        <p className="text-blue-400 text-lg font-semibold mt-2">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;