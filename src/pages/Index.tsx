
import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Logo from '@/components/common/Logo';
import Assessment from '@/components/assessment/Assessment';

const Index: React.FC = () => {
  return (
    <PageContainer>
      <div className="mb-8">
        <Logo />
      </div>
      <Assessment />
    </PageContainer>
  );
};

export default Index;
