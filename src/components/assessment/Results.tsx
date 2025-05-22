
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Chart as ChartComponent,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { Separator } from '@/components/ui/separator';

interface ResultsProps {
  totalScore: number;
  categoryScores: Record<string, number>;
  persona: {
    type: string;
    description: string;
  };
  growthPlan: {
    focusAreas: string[];
    sevenDayPlan: {
      area1: { name: string; plan: string[] };
      area2: { name: string; plan: string[] };
    };
    exercises: string[];
    mindfulnessPractices: string[];
    recommendedResources: string[];
  };
  onRestart: () => void;
}

const formatCategoryName = (name: string): string => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Results: React.FC<ResultsProps> = ({ 
  totalScore, 
  categoryScores, 
  persona, 
  growthPlan, 
  onRestart 
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const scoreLevel = 
    totalScore >= 86 ? { label: "EQ-Driven Leader", color: "#6366F1" } :
    totalScore >= 66 ? { label: "Emotionally Agile", color: "#3B82F6" } :
    totalScore >= 41 ? { label: "Emotionally Aware", color: "#F59E0B" } :
    { label: "Developing EQ", color: "#DC2626" };
    
  const chartData = Object.entries(categoryScores).map(([category, score]) => ({
    subject: formatCategoryName(category),
    score: score,
    fullMark: 20,
  }));

  return (
    <div className="animate-fade-in space-y-8">
      <Card className="border border-primary/20 bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardTitle className="text-center text-2xl">Your EQ Assessment Results</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium text-gray-600">Overall EQ Score</h3>
              <div className="flex items-center gap-3 mt-1">
                <div 
                  className="h-24 w-24 rounded-full flex items-center justify-center border-4"
                  style={{ borderColor: scoreLevel.color }}
                >
                  <span className="text-3xl font-bold" style={{ color: scoreLevel.color }}>
                    {totalScore}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-lg" style={{ color: scoreLevel.color }}>
                    {scoreLevel.label}
                  </p>
                  <p className="text-sm text-gray-500">(Score out of 100)</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium text-gray-600 mb-2">Your EQ Persona</h3>
              <div className="bg-eq-light-purple p-3 rounded-lg text-center">
                <p className="font-bold text-primary text-xl">{persona.type}</p>
                <p className="text-sm text-gray-700 mt-1">{persona.description}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start bg-white/60 backdrop-blur-sm p-0">
          <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-white" value="overview">EQ Dimensions</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-white" value="growth-plan">7-Day Growth Plan</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-white" value="mindfulness">Mindfulness Toolkit</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-4">
          <Card className="border border-primary/20 bg-white/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 20]} />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="#6366F1"
                      fill="#6366F1"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {Object.entries(categoryScores).map(([category, score]) => (
                  <div key={category} className="p-3 border rounded-lg bg-white">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-eq-deep-navy">
                        {formatCategoryName(category)}
                      </h4>
                      <span 
                        className="font-bold"
                        style={{ color: score >= 15 ? '#22C55E' : score >= 10 ? '#3B82F6' : '#F59E0B' }}
                      >
                        {score}/20
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div 
                        className="h-2.5 rounded-full" 
                        style={{ 
                          width: `${(score / 20) * 100}%`,
                          backgroundColor: score >= 15 ? '#22C55E' : score >= 10 ? '#3B82F6' : '#F59E0B'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="growth-plan" className="mt-4">
          <Card className="border border-primary/20 bg-white/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Personalized Growth Plan</h3>
              <div className="space-y-2">
                <p className="text-eq-deep-navy">
                  Your growth plan focuses on developing these key areas:
                </p>
                <div className="flex flex-wrap gap-2 my-3">
                  {growthPlan.focusAreas.map((area, i) => (
                    <span 
                      key={i} 
                      className="bg-secondary text-white px-3 py-1 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    {growthPlan.sevenDayPlan.area1.name} Plan:
                  </h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    {growthPlan.sevenDayPlan.area1.plan.map((item, i) => (
                      <li key={i} className="text-sm text-eq-deep-navy">{item}</li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-2">
                    {growthPlan.sevenDayPlan.area2.name} Plan:
                  </h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    {growthPlan.sevenDayPlan.area2.plan.map((item, i) => (
                      <li key={i} className="text-sm text-eq-deep-navy">{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-eq-light-purple rounded-lg">
                <h4 className="font-semibold text-primary">Key Exercises:</h4>
                <ul className="mt-2 space-y-1">
                  {growthPlan.exercises.map((exercise, i) => (
                    <li key={i} className="text-sm text-eq-deep-navy">• {exercise}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mindfulness" className="mt-4">
          <Card className="border border-primary/20 bg-white/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Mindfulness Toolkit</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-secondary mb-2">Mindfulness Practices:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {growthPlan.mindfulnessPractices.map((practice, i) => (
                      <div key={i} className="p-3 bg-white rounded-lg shadow-sm border">
                        <p className="text-eq-deep-navy">{practice}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold text-lg text-secondary mb-2">Recommended Resources:</h4>
                  <ul className="space-y-2">
                    {growthPlan.recommendedResources.map((resource, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-accent">•</span>
                        <span className="text-eq-deep-navy">{resource}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-eq-light-purple rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Emotion Regulation Script</h4>
                  <p className="text-sm text-eq-deep-navy">
                    When you feel overwhelmed by emotions, try this sequence:
                  </p>
                  <ol className="list-decimal pl-5 mt-2 space-y-1 text-sm text-eq-deep-navy">
                    <li>Pause and take three deep breaths</li>
                    <li>Name the emotion you're feeling specifically</li>
                    <li>Locate where you feel it in your body</li>
                    <li>Ask yourself: "What do I need right now?"</li>
                    <li>Choose a response aligned with your values, not just your emotions</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="text-center">
        <Button 
          variant="outline" 
          onClick={onRestart}
          className="border-primary text-primary hover:bg-primary/5"
        >
          Restart Assessment
        </Button>
      </div>
    </div>
  );
};

export default Results;
