
import React, { useState } from 'react';
import Introduction from './Introduction';
import QuestionContainer from './QuestionContainer';
import Results from './Results';
import { questions, calculateCategoryScore, calculateTotalScore, getEQPersona, getGrowthPlan } from '@/data/questions';

enum AssessmentStage {
  INTRODUCTION,
  QUESTIONS,
  RESULTS
}

const Assessment: React.FC = () => {
  const [stage, setStage] = useState<AssessmentStage>(AssessmentStage.INTRODUCTION);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [results, setResults] = useState<{
    totalScore: number;
    categoryScores: Record<string, number>;
    persona: { type: string; description: string };
    growthPlan: any;
  } | null>(null);
  
  const handleStartAssessment = () => {
    setStage(AssessmentStage.QUESTIONS);
  };
  
  const handleCompleteAssessment = (answers: Record<number, number>) => {
    const categoryScores = {
      'self-awareness': calculateCategoryScore(answers, 'self-awareness'),
      'self-regulation': calculateCategoryScore(answers, 'self-regulation'),
      'motivation': calculateCategoryScore(answers, 'motivation'),
      'empathy': calculateCategoryScore(answers, 'empathy'),
      'relationship-management': calculateCategoryScore(answers, 'relationship-management')
    };
    
    const totalScore = calculateTotalScore(categoryScores);
    const persona = getEQPersona(categoryScores);
    const growthPlan = getGrowthPlan(categoryScores);
    
    setAnswers(answers);
    setResults({
      totalScore,
      categoryScores,
      persona,
      growthPlan
    });
    
    setStage(AssessmentStage.RESULTS);
  };
  
  const handleRestart = () => {
    setAnswers({});
    setResults(null);
    setStage(AssessmentStage.INTRODUCTION);
  };
  
  return (
    <>
      {stage === AssessmentStage.INTRODUCTION && (
        <Introduction onStart={handleStartAssessment} />
      )}
      
      {stage === AssessmentStage.QUESTIONS && (
        <QuestionContainer 
          questions={questions} 
          onComplete={handleCompleteAssessment} 
        />
      )}
      
      {stage === AssessmentStage.RESULTS && results && (
        <Results
          totalScore={results.totalScore}
          categoryScores={results.categoryScores}
          persona={results.persona}
          growthPlan={results.growthPlan}
          onRestart={handleRestart}
        />
      )}
    </>
  );
};

export default Assessment;
