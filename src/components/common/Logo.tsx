
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
        <span className="text-white font-bold text-xl">EQ</span>
      </div>
      <span className="text-2xl font-bold text-eq-deep-navy">EQ Evaluator</span>
    </div>
  );
};

export default Logo;
