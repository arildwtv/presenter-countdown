
import React, { useState, useEffect, useRef } from 'react';
import { TimerPage } from './pages/TimerPage';
import { DesignSystemHome } from './design-system/pages/DesignSystemHome';
import { AppMode } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.PRESENTATION);
  const lastTabPressRef = useRef<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const now = Date.now();
        if (now - lastTabPressRef.current < 300) {
          e.preventDefault();
          setMode(prev => prev === AppMode.PRESENTATION ? AppMode.DESIGN_SYSTEM : AppMode.PRESENTATION);
        }
        lastTabPressRef.current = now;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen">
      {mode === AppMode.PRESENTATION ? (
        <TimerPage />
      ) : (
        <DesignSystemHome />
      )}
    </div>
  );
};

export default App;
