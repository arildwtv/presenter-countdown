
import React from 'react';
import { Input } from '../../components/atomic/Input';
import { ManualTimerInput } from '../../components/molecular/ManualTimerInput';
import { Typography } from '../../components/atomic/Typography';

export const InputsSection: React.FC = () => {
  return (
    <div className="space-y-12 p-8 bg-gray-950 min-h-screen text-white">
      <section>
        <Typography variant="h1" className="mb-4">Inputs</Typography>
        <Typography variant="body" className="text-gray-400">
          The input components provide various ways for users to provide data, primarily for custom timer durations.
        </Typography>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <Typography variant="h2">Atomic Input</Typography>
          <div className="space-y-4 max-w-sm">
            <Input label="Standard" placeholder="Type here..." />
            <Input label="With Error" placeholder="Check this" error="Invalid duration" />
            <Input label="Numeric (Monospace)" type="number" placeholder="00" />
          </div>
        </section>

        <section className="space-y-6">
          <Typography variant="h2">Manual Timer Molecule</Typography>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <ManualTimerInput onStart={(m) => alert(`Started with ${m} mins`)} />
          </div>
        </section>
      </div>
    </div>
  );
};
