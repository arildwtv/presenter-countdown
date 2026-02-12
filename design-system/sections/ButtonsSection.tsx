
import React from 'react';
import { Button } from '../../components/atomic/Button';
import { Typography } from '../../components/atomic/Typography';

export const ButtonsSection: React.FC = () => {
  return (
    <div className="space-y-8 p-8 bg-gray-900 min-h-screen text-white">
      <section>
        <Typography variant="h1" className="mb-4">Buttons</Typography>
        <Typography variant="body" className="text-gray-400 mb-8">
          The button component is used for primary actions, navigation, and preset selection.
        </Typography>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="space-y-4">
          <Typography variant="h2">Variants</Typography>
          <div className="flex flex-wrap gap-4 items-center">
            <Button onClick={() => {}} variant="primary">Primary</Button>
            <Button onClick={() => {}} variant="secondary">Secondary</Button>
            <Button onClick={() => {}} variant="ghost">Ghost</Button>
            <Button onClick={() => {}} variant="danger">Danger</Button>
          </div>
        </section>

        <section className="space-y-4">
          <Typography variant="h2">Sizes</Typography>
          <div className="flex flex-wrap gap-4 items-end">
            <Button onClick={() => {}} size="sm">Small</Button>
            <Button onClick={() => {}} size="md">Medium</Button>
            <Button onClick={() => {}} size="lg">Large</Button>
            <Button onClick={() => {}} size="xl">Extra Large</Button>
          </div>
        </section>
      </div>
    </div>
  );
};
