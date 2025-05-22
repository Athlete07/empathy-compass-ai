
import React from 'react';
import { Question as QuestionType } from '@/data/questions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (questionId: number, score: number) => void;
  currentAnswer: number | undefined;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer, currentAnswer }) => {
  return (
    <Card className="border border-primary/20 bg-white/80 backdrop-blur-sm shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-primary">
          {question.text}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup 
          className="space-y-3"
          value={currentAnswer !== undefined ? currentAnswer.toString() : undefined}
          onValueChange={(value) => onAnswer(question.id, parseInt(value))}
        >
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem 
                value={option.score.toString()} 
                id={`q${question.id}-opt${index}`}
                className="border-primary text-primary"
              />
              <Label 
                htmlFor={`q${question.id}-opt${index}`}
                className="text-eq-deep-navy cursor-pointer"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default Question;
