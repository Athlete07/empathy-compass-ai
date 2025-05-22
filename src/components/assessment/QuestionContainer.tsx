
import React, { useState } from 'react';
import { Question as QuestionType } from '@/data/questions';
import Question from './Question';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface QuestionContainerProps {
  questions: QuestionType[];
  onComplete: (answers: Record<number, number>) => void;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [shakeAnimation, setShakeAnimation] = useState(false);
  
  const handleAnswer = (questionId: number, score: number) => {
    setAnswers({
      ...answers,
      [questionId]: score
    });
  };
  
  const handleNext = () => {
    const isCurrentQuestionAnswered = answers[questions[currentQuestion].id] !== undefined;
    
    if (!isCurrentQuestionAnswered) {
      setShakeAnimation(true);
      setTimeout(() => setShakeAnimation(false), 500);
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <div className="animate-fade-in">
      <div className="mb-6 space-y-2">
        <div className="flex justify-between text-sm text-primary">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-200" />
      </div>
      
      <div className={`transition-all ${shakeAnimation ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}>
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          currentAnswer={answers[questions[currentQuestion].id]}
        />
      </div>
      
      <div className="mt-6 flex justify-between">
        <Button
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="border-primary text-primary hover:bg-primary/5"
        >
          Previous
        </Button>
        
        <Button 
          onClick={handleNext}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </div>
      
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default QuestionContainer;
