
import React from 'react';
import { Typography } from '../atomic/Typography';
import { TimerStatus } from '../../types';
import { COLORS } from '../../constants';

interface TimerOverlayProps {
  remainingSeconds: number;
  totalSeconds: number;
  status: TimerStatus;
}

export const TimerOverlay: React.FC<TimerOverlayProps> = ({ 
  remainingSeconds, 
  totalSeconds,
  status 
}) => {
  const percentage = totalSeconds > 0 ? remainingSeconds / totalSeconds : 1;
  const isLastMinute = remainingSeconds <= 60 && remainingSeconds > 0 && status === TimerStatus.RUNNING;
  
  // Color interpolation logic
  const h = COLORS.END.h + (COLORS.START.h - COLORS.END.h) * percentage;
  const s = COLORS.END.s + (COLORS.START.s - COLORS.END.s) * percentage;
  const l = COLORS.END.l + (COLORS.START.l - COLORS.END.l) * percentage;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(Math.abs(seconds) / 60);
    const secs = Math.abs(seconds) % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;

  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center transition-colors duration-1000 overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Progress Bar (Subtle dark background moving from right to left) */}
      <div 
        className="absolute top-0 right-0 h-full bg-black/20 transition-all duration-1000 ease-linear pointer-events-none"
        style={{ width: `${(1 - percentage) * 100}%` }}
      />

      <div className="relative z-10 text-center text-white">
        <Typography 
          variant="display" 
          className={`${isLastMinute ? 'animate-blink' : ''} ${status === TimerStatus.EXPIRED ? 'text-red-200' : ''}`}
        >
          {status === TimerStatus.EXPIRED && '-'}
          {formatTime(remainingSeconds)}
        </Typography>
        
        {status === TimerStatus.PAUSED && (
          <Typography variant="h2" className="mt-4 opacity-50 uppercase tracking-[1em]">
            Paused
          </Typography>
        )}
      </div>
    </div>
  );
};
