
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface IntroductionProps {
  onStart: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onStart }) => {
  return (
    <div className="animate-fade-in">
      <Card className="border border-primary/20 bg-white/80 backdrop-blur-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-primary">Emotional Intelligence Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-eq-deep-navy">
            This assessment will evaluate your emotional intelligence (EQ) based on Stanford's framework
            and provide a personalized growth plan.
          </p>
          
          <div className="space-y-4 text-eq-deep-navy">
            <h3 className="font-semibold text-lg">What you'll discover:</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Your overall EQ score (0-100)</li>
              <li>Detailed analysis across 5 EQ dimensions</li>
              <li>Your unique EQ persona type</li>
              <li>A customized 7-day growth plan</li>
              <li>Strategies for emotional regulation</li>
              <li>Mindfulness toolkit for ongoing development</li>
            </ul>
          </div>
          
          <div className="bg-eq-light-purple p-4 rounded-md">
            <p className="text-sm italic">
              "This quiz helps uncover how emotionally aware, resilient, and empathic you are. Please answer 
              honestly to reflect your natural emotional tendencies."
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            onClick={onStart}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-2"
          >
            Begin Assessment
          </Button>
        </CardFooter>
      </Card>
      
      <div className="mt-8 px-4 py-6 bg-white/60 backdrop-blur-sm rounded-lg border border-primary/10 shadow-sm">
        <h3 className="font-semibold text-lg text-primary mb-3">About Emotional Intelligence</h3>
        <p className="text-eq-deep-navy">
          Emotional Intelligence (EQ) is the ability to recognize, understand, and manage our own emotions,
          as well as identify and influence the emotions of others. Research from Stanford and Harvard
          shows that EQ is often a stronger predictor of success than IQ, especially in leadership roles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-4">
          {[
            "Self-Awareness",
            "Self-Regulation",
            "Motivation",
            "Empathy",
            "Relationship Management"
          ].map((dimension, index) => (
            <div key={index} className="bg-white/80 p-2 rounded-md text-center shadow-sm border border-primary/10">
              <span className="text-sm font-medium text-primary">{dimension}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
