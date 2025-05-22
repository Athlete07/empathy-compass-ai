
export interface Question {
  id: number;
  text: string;
  category: 'self-awareness' | 'self-regulation' | 'motivation' | 'empathy' | 'relationship-management';
  options: {
    text: string;
    score: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "How often do you reflect on why you felt a certain way during the day?",
    category: "self-awareness",
    options: [
      { text: "Multiple times daily", score: 4 },
      { text: "Once a day", score: 3 },
      { text: "A few times a week", score: 2 },
      { text: "Rarely", score: 1 },
      { text: "Almost never", score: 0 },
    ]
  },
  {
    id: 2,
    text: "When you feel a strong emotion (anger, joy, anxiety), how easy is it for you to name exactly what you're feeling?",
    category: "self-awareness",
    options: [
      { text: "Very easy - I can pinpoint the specific emotion", score: 4 },
      { text: "Somewhat easy - I can identify the general feeling", score: 3 },
      { text: "Neutral", score: 2 },
      { text: "Somewhat difficult", score: 1 },
      { text: "Very difficult - I just know I feel 'good' or 'bad'", score: 0 },
    ]
  },
  {
    id: 3,
    text: "How accurately can you predict how you'll emotionally respond to future situations?",
    category: "self-awareness",
    options: [
      { text: "Very accurately", score: 4 },
      { text: "Somewhat accurately", score: 3 },
      { text: "Sometimes accurately", score: 2 },
      { text: "Not very accurately", score: 1 },
      { text: "Not at all", score: 0 },
    ]
  },
  {
    id: 4,
    text: "When under stress, I tend to:",
    category: "self-awareness",
    options: [
      { text: "Immediately recognize I'm stressed and identify the cause", score: 4 },
      { text: "Notice my stress after a short while", score: 3 },
      { text: "Only realize I'm stressed when someone points it out", score: 2 },
      { text: "Only recognize my stress after it becomes overwhelming", score: 1 },
      { text: "Deny or ignore feelings of stress", score: 0 },
    ]
  },
  {
    id: 5,
    text: "How often do you seek feedback about your emotional impact on others?",
    category: "self-awareness",
    options: [
      { text: "Regularly and proactively", score: 4 },
      { text: "Sometimes, when I think it's needed", score: 3 },
      { text: "Only during formal reviews", score: 2 },
      { text: "Rarely", score: 1 },
      { text: "Never", score: 0 },
    ]
  },
  {
    id: 6,
    text: "When something upsets you, how long does it typically take to regain emotional balance?",
    category: "self-regulation",
    options: [
      { text: "Minutes - I can rebalance quickly", score: 4 },
      { text: "About an hour", score: 3 },
      { text: "A few hours", score: 2 },
      { text: "A day or more", score: 1 },
      { text: "Several days", score: 0 },
    ]
  },
  {
    id: 7,
    text: "When someone disagrees with you, what's your internal reaction?",
    category: "self-regulation",
    options: [
      { text: "Curiosity about their perspective", score: 4 },
      { text: "Brief frustration, then openness", score: 3 },
      { text: "Defensive but I try to listen", score: 2 },
      { text: "Strong disagreement and desire to convince them", score: 1 },
      { text: "Anger or immediate dismissal", score: 0 },
    ]
  },
  {
    id: 8,
    text: "When faced with a high-pressure situation, how do you typically respond?",
    category: "self-regulation",
    options: [
      { text: "I remain calm and think clearly", score: 4 },
      { text: "I feel pressure but manage it effectively", score: 3 },
      { text: "I become somewhat anxious but function", score: 2 },
      { text: "I become noticeably stressed and less effective", score: 1 },
      { text: "I feel overwhelmed and struggle to cope", score: 0 },
    ]
  },
  {
    id: 9,
    text: "How often do you use specific techniques (breathing, pause, etc.) to manage emotions?",
    category: "self-regulation",
    options: [
      { text: "Regularly, as part of my daily routine", score: 4 },
      { text: "Often, especially in challenging situations", score: 3 },
      { text: "Sometimes, when I remember", score: 2 },
      { text: "Rarely", score: 1 },
      { text: "Never", score: 0 },
    ]
  },
  {
    id: 10,
    text: "When receiving criticism, how do you typically respond?",
    category: "self-regulation",
    options: [
      { text: "Listen carefully and respond thoughtfully", score: 4 },
      { text: "Feel initially defensive but open to feedback", score: 3 },
      { text: "Variable - depends on who's giving criticism", score: 2 },
      { text: "Become defensive or justify my actions", score: 1 },
      { text: "React emotionally or reject the criticism", score: 0 },
    ]
  },
  {
    id: 11,
    text: "What drives you most when pursuing challenging goals?",
    category: "motivation",
    options: [
      { text: "Personal growth and meaningful achievement", score: 4 },
      { text: "A mix of personal satisfaction and recognition", score: 3 },
      { text: "Recognition and rewards", score: 2 },
      { text: "Avoiding negative consequences or failure", score: 1 },
      { text: "External pressure or obligation", score: 0 },
    ]
  },
  {
    id: 12,
    text: "When facing a major setback, how do you typically respond?",
    category: "motivation",
    options: [
      { text: "View it as a learning opportunity and persist", score: 4 },
      { text: "Feel disappointed but quickly refocus", score: 3 },
      { text: "Take some time to recover then continue", score: 2 },
      { text: "Feel discouraged and question continuing", score: 1 },
      { text: "Give up or look for an easier alternative", score: 0 },
    ]
  },
  {
    id: 13,
    text: "How easy is it for you to maintain enthusiasm on long-term projects?",
    category: "motivation",
    options: [
      { text: "Very easy - I stay consistently engaged", score: 4 },
      { text: "Mostly easy - with occasional dips in motivation", score: 3 },
      { text: "Moderate - I have regular ups and downs", score: 2 },
      { text: "Difficult - my motivation often fades", score: 1 },
      { text: "Very difficult - I struggle with sustained effort", score: 0 },
    ]
  },
  {
    id: 14,
    text: "How often do you try new approaches or skills outside your comfort zone?",
    category: "motivation",
    options: [
      { text: "Regularly - I actively seek growth opportunities", score: 4 },
      { text: "Often - when good opportunities arise", score: 3 },
      { text: "Sometimes - when necessary", score: 2 },
      { text: "Rarely - I prefer staying with what I know", score: 1 },
      { text: "Almost never - I avoid unfamiliar situations", score: 0 },
    ]
  },
  {
    id: 15,
    text: "How do you approach tasks that don't interest you but are necessary?",
    category: "motivation",
    options: [
      { text: "Find meaning or learning opportunities within them", score: 4 },
      { text: "Focus on the bigger purpose they serve", score: 3 },
      { text: "Just get them done efficiently", score: 2 },
      { text: "Procrastinate but eventually complete them", score: 1 },
      { text: "Avoid them or do minimal effort", score: 0 },
    ]
  },
  {
    id: 16,
    text: "What's your first instinct when someone shares bad news or distress?",
    category: "empathy",
    options: [
      { text: "Listen attentively and try to understand their feelings", score: 4 },
      { text: "Show concern and offer support", score: 3 },
      { text: "Offer advice or solutions", score: 2 },
      { text: "Acknowledge briefly and move on", score: 1 },
      { text: "Feel uncomfortable and change the subject", score: 0 },
    ]
  },
  {
    id: 17,
    text: "How accurately can you identify others' emotions from their body language?",
    category: "empathy",
    options: [
      { text: "Very accurately - I notice subtle cues", score: 4 },
      { text: "Quite accurately - I notice obvious signs", score: 3 },
      { text: "Somewhat accurately", score: 2 },
      { text: "Not very accurately", score: 1 },
      { text: "I rarely notice body language cues", score: 0 },
    ]
  },
  {
    id: 18,
    text: "In disagreements, how well do you understand others' perspectives?",
    category: "empathy",
    options: [
      { text: "Very well - I can articulate their position fairly", score: 4 },
      { text: "Well - I try to see where they're coming from", score: 3 },
      { text: "Moderately - I understand major points", score: 2 },
      { text: "Somewhat - but I focus more on my view", score: 1 },
      { text: "Not well - I focus on why they're wrong", score: 0 },
    ]
  },
  {
    id: 19,
    text: "How comfortable are you with others expressing strong emotions?",
    category: "empathy",
    options: [
      { text: "Very comfortable - I can be present and supportive", score: 4 },
      { text: "Comfortable - though intense anger may be challenging", score: 3 },
      { text: "Moderately comfortable with most emotions", score: 2 },
      { text: "Somewhat uncomfortable - I prefer emotional restraint", score: 1 },
      { text: "Very uncomfortable - I avoid emotional situations", score: 0 },
    ]
  },
  {
    id: 20,
    text: "When interacting with people from different backgrounds, how attentive are you to cultural differences in emotional expression?",
    category: "empathy",
    options: [
      { text: "Very attentive - I adapt my interpretation", score: 4 },
      { text: "Quite attentive - I'm aware of major differences", score: 3 },
      { text: "Somewhat attentive", score: 2 },
      { text: "Minimally attentive", score: 1 },
      { text: "Not attentive - I assume emotions are universal", score: 0 },
    ]
  },
  {
    id: 21,
    text: "How do you typically handle conflicts with others?",
    category: "relationship-management",
    options: [
      { text: "Address directly with empathy and openness to resolution", score: 4 },
      { text: "Address with focus on compromise", score: 3 },
      { text: "Address but sometimes struggle to stay calm", score: 2 },
      { text: "Try to avoid confrontation", score: 1 },
      { text: "Become confrontational or withdraw completely", score: 0 },
    ]
  },
  {
    id: 22,
    text: "How comfortable are you sharing your emotions with others?",
    category: "relationship-management",
    options: [
      { text: "Very comfortable with appropriate vulnerability", score: 4 },
      { text: "Comfortable with trusted people", score: 3 },
      { text: "Somewhat comfortable with basic emotions", score: 2 },
      { text: "Uncomfortable - I rarely share feelings", score: 1 },
      { text: "Very uncomfortable - I avoid emotional disclosure", score: 0 },
    ]
  },
  {
    id: 23,
    text: "How do you prepare emotionally before giving difficult feedback?",
    category: "relationship-management",
    options: [
      { text: "Thoughtfully plan with empathy and clear points", score: 4 },
      { text: "Consider how to be constructive and supportive", score: 3 },
      { text: "Focus mainly on delivering the message clearly", score: 2 },
      { text: "Minimal preparation - just deliver the feedback", score: 1 },
      { text: "Avoid giving difficult feedback when possible", score: 0 },
    ]
  },
  {
    id: 24,
    text: "How effective are you at motivating or inspiring others?",
    category: "relationship-management",
    options: [
      { text: "Very effective - I connect to others' values and goals", score: 4 },
      { text: "Effective with most people", score: 3 },
      { text: "Somewhat effective with certain people", score: 2 },
      { text: "Not very effective", score: 1 },
      { text: "Ineffective - I focus on tasks, not motivation", score: 0 },
    ]
  },
  {
    id: 25,
    text: "When someone is struggling emotionally, how do you typically respond?",
    category: "relationship-management",
    options: [
      { text: "Offer presence and support tailored to their needs", score: 4 },
      { text: "Listen and show concern", score: 3 },
      { text: "Try to cheer them up or solve their problem", score: 2 },
      { text: "Acknowledge but feel uncertain how to help", score: 1 },
      { text: "Feel uncomfortable and distance myself", score: 0 },
    ]
  },
];

export const getCategoryQuestions = (category: string) => {
  return questions.filter(q => q.category === category);
};

export const calculateCategoryScore = (answers: Record<number, number>, category: string) => {
  const categoryQuestions = getCategoryQuestions(category);
  
  if (categoryQuestions.length === 0) return 0;
  
  let totalScore = 0;
  let answeredQuestions = 0;
  
  categoryQuestions.forEach(question => {
    if (answers[question.id] !== undefined) {
      totalScore += answers[question.id];
      answeredQuestions++;
    }
  });

  // Normalize to 0-20 range
  return answeredQuestions > 0 
    ? Math.round((totalScore / (answeredQuestions * 4)) * 20) 
    : 0;
};

export const calculateTotalScore = (categoryScores: Record<string, number>) => {
  const categories = [
    'self-awareness',
    'self-regulation',
    'motivation',
    'empathy',
    'relationship-management'
  ];
  
  let total = 0;
  categories.forEach(category => {
    total += categoryScores[category] || 0;
  });
  
  return total;
};

export const getEQPersona = (categoryScores: Record<string, number>) => {
  // Get highest scoring categories
  const categories = [
    { name: 'self-awareness', score: categoryScores['self-awareness'] || 0 },
    { name: 'self-regulation', score: categoryScores['self-regulation'] || 0 },
    { name: 'motivation', score: categoryScores['motivation'] || 0 },
    { name: 'empathy', score: categoryScores['empathy'] || 0 },
    { name: 'relationship-management', score: categoryScores['relationship-management'] || 0 }
  ];
  
  categories.sort((a, b) => b.score - a.score);
  
  const totalScore = calculateTotalScore(categoryScores);
  
  // Determine persona based on top strengths and overall score
  if (totalScore >= 86) {
    return {
      type: "EQ-Driven Leader",
      description: "You excel at understanding and managing both your own emotions and those of others. You leverage emotional intelligence strategically in leadership and relationships, making you highly effective at navigating complex interpersonal dynamics."
    };
  }
  
  if (totalScore >= 66) {
    if (categories[0].name === 'empathy' || categories[1].name === 'empathy') {
      if (categories[0].name === 'self-awareness' || categories[1].name === 'self-awareness') {
        return {
          type: "Reflective Empath",
          description: "You combine strong self-awareness with genuine empathy, making you highly attuned to both your own emotional landscape and the feelings of others. This allows you to form authentic connections while maintaining emotional boundaries."
        };
      }
      
      if (categories[0].name === 'relationship-management' || categories[1].name === 'relationship-management') {
        return {
          type: "Harmonizing Connector",
          description: "Your empathy and relationship skills allow you to build bridges between people and create harmonious environments. You excel at understanding others' perspectives and facilitating positive interactions."
        };
      }
    }
    
    if (categories[0].name === 'self-regulation' || categories[1].name === 'self-regulation') {
      return {
        type: "Calm Strategist",
        description: "You excel at emotional regulation and thoughtful responses, even in high-pressure situations. Your ability to stay composed allows you to think clearly and make sound decisions when others might react impulsively."
      };
    }
    
    if (categories[0].name === 'motivation') {
      return {
        type: "Purpose-Driven Achiever",
        description: "Your strong internal motivation drives you to persist through challenges and inspire others. You find meaning in your work and maintain enthusiasm even during difficult periods."
      };
    }
    
    return {
      type: "Emotionally Agile",
      description: "You have a well-balanced emotional toolkit that allows you to adapt to various situations. Your ability to understand emotions and respond appropriately makes you effective across different contexts."
    };
  }
  
  if (totalScore >= 41) {
    if (categories[0].score >= 15) {
      return {
        type: `${categories[0].name === 'self-awareness' ? 'Self-Aware' : categories[0].name === 'empathy' ? 'Empathic' : categories[0].name === 'self-regulation' ? 'Regulated' : categories[0].name === 'motivation' ? 'Motivated' : 'Relationship-Oriented'} Developer`,
        description: `You show particular strength in ${categories[0].name.replace('-', ' ')}, while having room to develop other emotional competencies. By building on this foundation, you can expand your emotional intelligence in complementary areas.`
      };
    }
    
    return {
      type: "Emotionally Aware",
      description: "You have developed moderate emotional awareness and skills across several dimensions. With continued practice, you can strengthen your emotional intelligence into a more powerful tool for personal and professional growth."
    };
  }
  
  return {
    type: "Emotional Explorer",
    description: "You're at the beginning of your emotional intelligence journey, with opportunities to develop greater awareness and skills. Focusing on self-awareness is an excellent starting point for growth."
  };
};

export const getGrowthPlan = (categoryScores: Record<string, number>) => {
  // Find lowest scoring categories for development focus
  const categories = [
    { name: 'self-awareness', score: categoryScores['self-awareness'] || 0, label: 'Self-Awareness' },
    { name: 'self-regulation', score: categoryScores['self-regulation'] || 0, label: 'Self-Regulation' },
    { name: 'motivation', score: categoryScores['motivation'] || 0, label: 'Motivation' },
    { name: 'empathy', score: categoryScores['empathy'] || 0, label: 'Empathy' },
    { name: 'relationship-management', score: categoryScores['relationship-management'] || 0, label: 'Relationship Management' }
  ];
  
  categories.sort((a, b) => a.score - b.score);
  
  const focusAreas = categories.slice(0, 2);
  
  const plans = {
    'self-awareness': {
      weekPlan: [
        "Day 1: Spend 5 minutes listing the emotions you experienced today and their triggers",
        "Day 2: Notice your physical responses to different emotions (heart rate, tension, etc.)",
        "Day 3: Identify one situation where your emotional reaction surprised you and reflect on why",
        "Day 4: Practice labeling emotions with specific words beyond just 'good' or 'bad'",
        "Day 5: Ask a trusted person for feedback on how you express emotions",
        "Day 6: Journal about patterns in what triggers strong emotional responses for you",
        "Day 7: Reflect on how your emotions influenced your decisions this week"
      ],
      exercises: [
        "Emotion journaling - track emotions and their intensity throughout the day",
        "Body scan meditation - connect physical sensations to emotional states",
        "'Name it to tame it' - practice precisely naming emotions as they arise",
        "Values clarification - identify what matters most and how it relates to emotional responses"
      ]
    },
    'self-regulation': {
      weekPlan: [
        "Day 1: Practice 4-7-8 breathing when you feel stress arising (4 sec inhale, 7 sec hold, 8 sec exhale)",
        "Day 2: When triggered emotionally, pause for 10 seconds before responding",
        "Day 3: Identify one emotional 'hot button' and plan an alternative response",
        "Day 4: Practice reframing a challenging situation from multiple perspectives",
        "Day 5: Set an intention for emotional state before important interactions",
        "Day 6: Notice and interrupt negative thought patterns as they start",
        "Day 7: Reflect on situations where you successfully regulated your emotions"
      ],
      exercises: [
        "Box breathing technique (4-4-4-4 pattern) before stressful events",
        "Cognitive reframing - practice finding alternative interpretations",
        "Emotion-body connection - physical activity to shift emotional state",
        "Pre-meeting centering routine - develop a 30-second reset ritual"
      ]
    },
    'motivation': {
      weekPlan: [
        "Day 1: Write down your 'why' behind a current goal or project",
        "Day 2: Identify one small win from today and celebrate it",
        "Day 3: Connect a routine task to a larger purpose or value",
        "Day 4: Visualize successful completion of a challenging goal",
        "Day 5: Reframe one 'have to' task as a 'get to' opportunity",
        "Day 6: Set one boundary that protects your energy and focus",
        "Day 7: Reflect on what intrinsically motivates you vs. external rewards"
      ],
      exercises: [
        "Values-goals alignment check - connect daily actions to core values",
        "Motivation journaling - track energy levels and what influences them",
        "Creating meaningful milestones and micro-celebrations",
        "Energy management audit - identify what depletes and restores motivation"
      ]
    },
    'empathy': {
      weekPlan: [
        "Day 1: Practice active listening without preparing your response",
        "Day 2: Notice non-verbal cues in one conversation and what they might indicate",
        "Day 3: Ask curious questions about someone's experience or perspective",
        "Day 4: Read about or learn about a culture or background different from yours",
        "Day 5: Practice perspective-taking from someone you disagree with",
        "Day 6: Notice when you make assumptions and practice suspending judgment",
        "Day 7: Reflect on moments when you felt deeply understood by others"
      ],
      exercises: [
        "Perspective-taking practice with news stories or discussions",
        "Non-verbal cues observation in meetings or conversations",
        "Reflective listening exercise - paraphrase before responding",
        "Empathy mapping - visualize others' thoughts, feelings, needs, and goals"
      ]
    },
    'relationship-management': {
      weekPlan: [
        "Day 1: Express specific appreciation to someone in your life or work",
        "Day 2: Practice giving feedback using the situation-behavior-impact model",
        "Day 3: Address a small conflict or misunderstanding directly and calmly",
        "Day 4: Identify one relationship you'd like to strengthen and take action",
        "Day 5: Practice saying 'no' constructively to a request that doesn't align with your priorities",
        "Day 6: Notice how your emotional state affects others and adjust accordingly",
        "Day 7: Reflect on your communication patterns and their effectiveness"
      ],
      exercises: [
        "Feedback preparation template - structure difficult conversations",
        "Influence mapping - understand what matters to key stakeholders",
        "Conflict resolution script - prepare for addressing tensions",
        "Relationship network analysis - map key relationships and their quality"
      ]
    }
  };
  
  return {
    focusAreas: focusAreas.map(area => area.label),
    sevenDayPlan: {
      area1: {
        name: focusAreas[0].label,
        plan: plans[focusAreas[0].name].weekPlan
      },
      area2: {
        name: focusAreas[1].label,
        plan: plans[focusAreas[1].name].weekPlan
      }
    },
    exercises: [
      ...plans[focusAreas[0].name].exercises.slice(0, 2),
      ...plans[focusAreas[1].name].exercises.slice(0, 2)
    ],
    mindfulnessPractices: [
      "Box breathing (4-4-4-4): Inhale 4 counts, hold 4 counts, exhale 4 counts, hold 4 counts",
      "Body scan meditation: Progressive awareness from toes to head",
      "Loving-kindness meditation: Direct well-wishes to self and others",
      "Mindful observation: Focus fully on experiencing one object or activity"
    ],
    recommendedResources: [
      "Emotional Agility by Susan David",
      "Permission to Feel by Marc Brackett",
      "Atlas of the Heart by Brené Brown",
      "Search Inside Yourself by Chade-Meng Tan"
    ]
  };
};
