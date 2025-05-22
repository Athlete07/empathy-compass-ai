
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-eq-gradient flex flex-col items-center justify-start py-8 px-4 ${className}`}>
      <div className="w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
