
import React from 'react';
import { Typography } from '../../components/atomic/Typography';

export const TypographySection: React.FC = () => {
  return (
    <div className="space-y-12 p-8 bg-gray-900 min-h-screen text-white">
      <section>
        <Typography variant="h1" className="mb-4">Typography</Typography>
        <Typography variant="body" className="text-gray-400">
          Our typography system uses Inter with specific scale for legibility on presentation screens.
        </Typography>
      </section>

      <div className="space-y-8">
        <div>
          <Typography variant="label" className="text-blue-400 mb-2">Display</Typography>
          <Typography variant="display">09:59</Typography>
        </div>
        <div>
          <Typography variant="label" className="text-blue-400 mb-2">Heading 1</Typography>
          <Typography variant="h1">Presentation Settings</Typography>
        </div>
        <div>
          <Typography variant="label" className="text-blue-400 mb-2">Heading 2</Typography>
          <Typography variant="h2">Preset Shortcuts</Typography>
        </div>
        <div>
          <Typography variant="label" className="text-blue-400 mb-2">Body</Typography>
          <Typography variant="body">The quick brown fox jumps over the lazy dog.</Typography>
        </div>
      </div>
    </div>
  );
};
