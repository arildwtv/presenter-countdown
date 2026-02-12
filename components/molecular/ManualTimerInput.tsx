
import React, { useState } from 'react';
import { Input } from '../atomic/Input';
import { Button } from '../atomic/Button';

interface ManualTimerInputProps {
  onStart: (minutes: number) => void;
}

export const ManualTimerInput: React.FC<ManualTimerInputProps> = ({ onStart }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mins = parseInt(value, 10);
    if (!isNaN(mins) && mins > 0) {
      onStart(mins);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full">
      <div className="flex-1">
        <Input
          type="number"
          placeholder="Minutes..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min="1"
          max="999"
          required
        />
      </div>
      <Button type="submit" variant="primary" className="px-8 shadow-lg shadow-white/5">
        Start
      </Button>
    </form>
  );
};
