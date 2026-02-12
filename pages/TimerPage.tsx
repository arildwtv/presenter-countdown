
import React, { useState, useEffect, useCallback } from 'react';
import { PresentationTemplate } from '../components/template/PresentationTemplate';
import { TimerStatus } from '../types';

export const TimerPage: React.FC = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [status, setStatus] = useState<TimerStatus>(TimerStatus.IDLE);

  // Handle the countdown timer logic
  useEffect(() => {
    let interval: number | undefined;
    // Fix: Simplified interval logic to remove redundant status check and 
    // allow the timer to continue ticking when EXPIRED (overtime).
    // The previous check "status !== TimerStatus.EXPIRED" inside the RUNNING block was 
    // flagged by TypeScript because 'status' was already known to be 'RUNNING'.
    if (status === TimerStatus.RUNNING || status === TimerStatus.EXPIRED) {
      interval = window.setInterval(() => {
        setRemainingSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  // Transition to EXPIRED if needed
  useEffect(() => {
    if (remainingSeconds < 0 && status === TimerStatus.RUNNING) {
      setStatus(TimerStatus.EXPIRED);
    }
  }, [remainingSeconds, status]);

  const handleSetTimer = useCallback((minutes: number) => {
    const seconds = minutes * 60;
    setTotalSeconds(seconds);
    setRemainingSeconds(seconds);
    setStatus(TimerStatus.RUNNING);
  }, []);

  const handleToggle = useCallback(() => {
    setStatus(prev => {
      if (prev === TimerStatus.RUNNING) return TimerStatus.PAUSED;
      if (prev === TimerStatus.PAUSED) return TimerStatus.RUNNING;
      return prev;
    });
  }, []);

  const handleReset = useCallback(() => {
    setStatus(TimerStatus.IDLE);
    setTotalSeconds(0);
    setRemainingSeconds(0);
  }, []);

  return (
    <PresentationTemplate
      remainingSeconds={remainingSeconds}
      totalSeconds={totalSeconds}
      status={status}
      onSetTimer={handleSetTimer}
      onToggle={handleToggle}
      onReset={handleReset}
    />
  );
};
