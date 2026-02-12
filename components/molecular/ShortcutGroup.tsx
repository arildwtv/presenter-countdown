
import React from 'react';
import { Button } from '../atomic/Button';
import { TIMER_PRESETS } from '../../constants';

interface ShortcutGroupProps {
  onSelect: (minutes: number) => void;
}

export const ShortcutGroup: React.FC<ShortcutGroupProps> = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
      {TIMER_PRESETS.map((mins) => (
        <Button 
          key={mins} 
          variant="secondary" 
          onClick={() => onSelect(mins)}
          size="lg"
        >
          {mins}m
        </Button>
      ))}
    </div>
  );
};
