
import React, { useState } from 'react';
import { ButtonsSection } from '../sections/ButtonsSection';
import { TypographySection } from '../sections/TypographySection';
import { TimerDisplaySection } from '../sections/TimerDisplaySection';
import { InputsSection } from '../sections/InputsSection';
import { Typography } from '../../components/atomic/Typography';

export const DesignSystemHome: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'buttons' | 'typography' | 'timer' | 'inputs'>('buttons');

  const menuItems = [
    { id: 'buttons', label: 'Buttons', icon: '🔘' },
    { id: 'inputs', label: 'Inputs', icon: '⌨️' },
    { id: 'timer', label: 'Timer States', icon: '⏱️' },
    { id: 'typography', label: 'Typography', icon: 'Aa' },
  ].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 flex flex-col p-6 space-y-8 overflow-y-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">DS</div>
          <Typography variant="h2" className="text-white text-lg">System</Typography>
        </div>

        <nav className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as any)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeSection === item.id 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 bg-gray-900/50 rounded-xl border border-white/5">
          <Typography variant="label" className="text-gray-500 mb-1">Shortcut</Typography>
          <Typography variant="body" className="text-xs text-gray-400 leading-relaxed">
            Double-tap <span className="text-white font-mono bg-gray-800 px-1 rounded">Tab</span> to switch apps.
          </Typography>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-950">
        {activeSection === 'buttons' && <ButtonsSection />}
        {activeSection === 'typography' && <TypographySection />}
        {activeSection === 'timer' && <TimerDisplaySection />}
        {activeSection === 'inputs' && <InputsSection />}
      </main>
    </div>
  );
};
