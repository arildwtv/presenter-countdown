
import React from 'react';
import { TimerOverlay } from '../../components/organism/TimerOverlay';
import { TimerStatus } from '../../types';
import { Typography } from '../../components/atomic/Typography';

export const TimerDisplaySection: React.FC = () => {
  return (
    <div className="p-8 space-y-12 bg-gray-950 min-h-screen text-white">
       <section>
        <Typography variant="h1" className="mb-4 text-white">Timer States</Typography>
        <Typography variant="body" className="text-gray-400">
          Visualizing how the timer looks at various stages of completion.
        </Typography>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="relative h-[300px] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <TimerOverlay remainingSeconds={300} totalSeconds={300} status={TimerStatus.RUNNING} />
          <div className="absolute top-4 left-4 z-20 bg-black/50 px-3 py-1 rounded text-xs">Start (100%)</div>
        </div>

        <div className="relative h-[300px] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <TimerOverlay remainingSeconds={150} totalSeconds={300} status={TimerStatus.RUNNING} />
          <div className="absolute top-4 left-4 z-20 bg-black/50 px-3 py-1 rounded text-xs">Middle (50%)</div>
        </div>

        <div className="relative h-[300px] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <TimerOverlay remainingSeconds={30} totalSeconds={300} status={TimerStatus.RUNNING} />
          <div className="absolute top-4 left-4 z-20 bg-black/50 px-3 py-1 rounded text-xs">Critical (10% - Blinking)</div>
        </div>

        <div className="relative h-[300px] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <TimerOverlay remainingSeconds={-30} totalSeconds={300} status={TimerStatus.EXPIRED} />
          <div className="absolute top-4 left-4 z-20 bg-black/50 px-3 py-1 rounded text-xs">Expired (Negative)</div>
        </div>
      </div>
    </div>
  );
};
