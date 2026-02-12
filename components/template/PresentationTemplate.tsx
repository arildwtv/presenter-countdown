
import React from 'react';
import { TimerOverlay } from '../organism/TimerOverlay';
import { ShortcutGroup } from '../molecular/ShortcutGroup';
import { ManualTimerInput } from '../molecular/ManualTimerInput';
import { Button } from '../atomic/Button';
import { TimerStatus } from '../../types';

interface PresentationTemplateProps {
  remainingSeconds: number;
  totalSeconds: number;
  status: TimerStatus;
  onSetTimer: (minutes: number) => void;
  onToggle: () => void;
  onReset: () => void;
}

export const PresentationTemplate: React.FC<PresentationTemplateProps> = ({
  remainingSeconds,
  totalSeconds,
  status,
  onSetTimer,
  onToggle,
  onReset
}) => {
  const isIdle = status === TimerStatus.IDLE;

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background / Main View */}
      <TimerOverlay 
        remainingSeconds={remainingSeconds} 
        totalSeconds={totalSeconds} 
        status={status}
      />

      {/* Control Layer (Appears mostly on hover/focus to stay minimal) */}
      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col gap-6 items-center transition-opacity duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 z-20">
        <div className="bg-black/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl max-w-2xl w-full flex flex-col gap-8">
          {isIdle ? (
            <>
              <div className="space-y-4">
                <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em] text-center">Quick Select</p>
                <ShortcutGroup onSelect={onSetTimer} />
              </div>

              <div className="relative flex items-center gap-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Or set manually</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <div className="space-y-4">
                <ManualTimerInput onStart={onSetTimer} />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <Button onClick={onReset} variant="secondary" size="lg" className="flex-1 h-16 rounded-2xl">
                Stop / New
              </Button>
              <Button onClick={onToggle} variant="primary" size="lg" className="flex-1 h-16 rounded-2xl text-xl">
                {status === TimerStatus.RUNNING ? 'Pause' : 'Resume'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
