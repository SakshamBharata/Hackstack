// Sarthak AI - Advanced AI Assistant for HackStack
// Developed by Sarthak

class SarthakAI {
    constructor() {
        // Saved data for hackathon challenges
        this.hackathonChallenges = [
            {
                id: 1,
                title: "AI-Powered Healthcare Assistant",
                description: "Build an AI assistant that helps healthcare professionals diagnose and treat patients more effectively.",
                difficulty: "advanced",
                category: "ai",
                timeLimit: 48,
                techStack: ["Python", "TensorFlow", "React", "Node.js"],
                resources: ["Medical datasets", "AI model tutorials", "Healthcare APIs"]
            },
            {
                id: 2,
                title: "Decentralized Supply Chain",
                description: "Create a blockchain-based solution to track and verify the authenticity of products in a supply chain.",
                difficulty: "advanced",
                category: "blockchain",
                timeLimit: 72,
                techStack: ["Solidity", "Web3.js", "React", "Node.js"],
                resources: ["Ethereum docs", "Smart contract tutorials", "Supply chain datasets"]
            },
            {
                id: 3,
                title: "E-Learning Platform",
                description: "Develop a web application that makes learning more interactive and engaging for students.",
                difficulty: "beginner",
                category: "web",
                timeLimit: 24,
                techStack: ["HTML", "CSS", "JavaScript", "React"],
                resources: ["UI/UX tutorials", "Educational content APIs", "Video streaming guides"]
            },
            {
                id: 4,
                title: "Fitness Tracking App",
                description: "Create a mobile app that helps users track their fitness goals and progress.",
                difficulty: "intermediate",
                category: "mobile",
                timeLimit: 48,
                techStack: ["React Native", "Firebase", "Node.js"],
                resources: ["Mobile UI patterns", "Fitness APIs", "Data visualization libraries"]
            },
            {
                id: 5,
                title: "Smart Home Automation",
                description: "Build an IoT system that automates home appliances and improves energy efficiency.",
                difficulty: "advanced",
                category: "iot",
                timeLimit: 72,
                techStack: ["Arduino", "Raspberry Pi", "Python", "MQTT"],
                resources: ["IoT protocols", "Sensor integration guides", "Home automation APIs"]
            }
        ];

        // Saved data for programming questions
        this.programmingQuestions = [
            {
                id: 1,
                title: "Binary Search Implementation",
                difficulty: "intermediate",
                category: "algorithms",
                description: "Implement a binary search algorithm that finds a target element in a sorted array.",
                solution: "function binarySearch(arr, target) {\n  let left = 0;\n  let right = arr.length - 1;\n  \n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    \n    if (arr[mid] === target) return mid;\n    \n    if (arr[mid] < target) {\n      left = mid + 1;\n    } else {\n      right = mid - 1;\n    }\n  }\n  \n  return -1;\n}"
            },
            {
                id: 2,
                title: "React Component Lifecycle",
                difficulty: "intermediate",
                category: "frontend",
                description: "Explain the React component lifecycle methods and when to use each one.",
                solution: "React component lifecycle consists of three main phases:\n\n1. Mounting: componentDidMount()\n2. Updating: componentDidUpdate()\n3. Unmounting: componentWillUnmount()\n\nUse componentDidMount for initial data fetching and DOM manipulation.\nUse componentDidUpdate to respond to prop or state changes.\nUse componentWillUnmount for cleanup like removing event listeners."
            },
            {
                id: 3,
                title: "Database Indexing",
                difficulty: "advanced",
                category: "database",
                description: "Explain how database indexing works and when to use it.",
                solution: "Database indexing creates a data structure that improves the speed of data retrieval operations. It works by creating a sorted reference to the data, allowing the database to find rows without scanning the entire table.\n\nUse indexes when:\n- Columns are frequently used in WHERE clauses\n- Columns are used for JOIN conditions\n- Columns have high selectivity (many unique values)\n\nAvoid indexes when:\n- Tables are small\n- Columns are frequently updated\n- Columns have low selectivity"
            }
        ];

        // Saved data for learning resources
        this.learningResources = {
            web: [
                "MDN Web Docs - Comprehensive web development documentation",
                "freeCodeCamp - Interactive coding tutorials",
                "The Odin Project - Full-stack curriculum",
                "Frontend Masters - Advanced frontend courses"
            ],
            ai: [
                "Fast.ai - Practical deep learning courses",
                "Kaggle - Data science competitions and datasets",
                "TensorFlow tutorials - Official ML guides",
                "Andrew Ng's Machine Learning course on Coursera"
            ],
            blockchain: [
                "Ethereum documentation - Smart contract development",
                "Solidity docs - Programming language for smart contracts",
                "Web3.js docs - Ethereum JavaScript API",
                "CryptoZombies - Interactive Solidity tutorials"
            ],
            mobile: [
                "React Native documentation - Cross-platform mobile development",
                "Flutter docs - Google's UI toolkit",
                "iOS App Dev tutorials - Apple's official guides",
                "Android Developer guides - Google's official resources"
            ]
        };
    }

    generateChallenge(category = null, difficulty = null) {
        let filteredChallenges = this.hackathonChallenges;
        
        if (category) {
            filteredChallenges = filteredChallenges.filter(c => c.category === category);
        }
        
        if (difficulty) {
            filteredChallenges = filteredChallenges.filter(c => c.difficulty === difficulty);
        }
        
        if (filteredChallenges.length === 0) {
            return {
                title: "Custom Challenge",
                description: "I'll help you create a custom challenge based on your interests and skill level.",
                difficulty: difficulty || "intermediate",
                category: category || "general"
            };
        }
        
        const randomIndex = Math.floor(Math.random() * filteredChallenges.length);
        return filteredChallenges[randomIndex];
    }

    getProgrammingQuestion(category = null, difficulty = null) {
        let filteredQuestions = this.programmingQuestions;
        
        if (category) {
            filteredQuestions = filteredQuestions.filter(q => q.category === category);
        }
        
        if (difficulty) {
            filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
        }
        
        if (filteredQuestions.length === 0) {
            return {
                title: "Custom Programming Question",
                description: "I'll help you with a custom programming question based on your interests and skill level.",
                difficulty: difficulty || "intermediate",
                category: category || "general"
            };
        }
        
        const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
        return filteredQuestions[randomIndex];
    }

    getLearningResources(category) {
        if (this.learningResources[category]) {
            return this.learningResources[category];
        }
        
        return [
            "MDN Web Docs - Comprehensive web development documentation",
            "freeCodeCamp - Interactive coding tutorials",
            "The Odin Project - Full-stack curriculum",
            "Frontend Masters - Advanced frontend courses"
        ];
    }

    analyzeQuery(message) {
        const keywords = {
            challenge: ['challenge', 'hackathon', 'project', 'task', 'assignment'],
            question: ['question', 'problem', 'interview', 'coding', 'algorithm'],
            help: ['help', 'assist', 'support', 'guide', 'explain'],
            learn: ['learn', 'study', 'understand', 'tutorial', 'resource'],
            error: ['error', 'bug', 'issue', 'problem', 'fix', 'debug']
        };

        for (const [category, words] of Object.entries(keywords)) {
            if (words.some(word => message.toLowerCase().includes(word))) {
                return category;
            }
        }
        return 'general';
    }

    async generateResponse(message) {
        try {
            const queryType = this.analyzeQuery(message);
            let response = '';

            switch (queryType) {
                case 'challenge':
                    const challenge = this.generateChallenge();
                    response = `Here's an exciting hackathon challenge for you:\n\n**${challenge.title}**\n\n${challenge.description}\n\n**Difficulty:** ${challenge.difficulty}\n**Time Limit:** ${challenge.timeLimit} hours\n**Tech Stack:** ${challenge.techStack.join(', ')}\n\nWould you like me to:\n1. Break this down into smaller tasks\n2. Provide starting resources\n3. Suggest a different challenge`;
                    break;

                case 'question':
                    const question = this.getProgrammingQuestion();
                    response = `Here's a programming question to help you practice:\n\n**${question.title}**\n\n${question.description}\n\n**Difficulty:** ${question.difficulty}\n**Category:** ${question.category}\n\nWould you like me to:\n1. Provide a solution\n2. Give hints\n3. Explain the approach\n4. Suggest a different question`;
                    break;

                case 'help':
                    response = `I'll help you solve this! Let's break it down:\n\n1. First, let's understand the problem clearly\n2. Then, we'll identify the key components\n3. Finally, we'll develop a step-by-step solution\n\nWhat specific aspect would you like me to focus on?`;
                    break;

                case 'learn':
                    const categories = ['web', 'ai', 'blockchain', 'mobile'];
                    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                    const resources = this.getLearningResources(randomCategory);
                    
                    response = `Here are some excellent resources to help you learn ${randomCategory} development:\n\n${resources.map((r, i) => `${i+1}. ${r}`).join('\n')}\n\nWould you like resources for a different category?`;
                    break;

                case 'error':
                    response = `Let's debug this together:\n\n1. Can you share the error message?\n2. What were you trying to achieve?\n3. What have you tried so far?\n\nThis will help me provide a more targeted solution.`;
                    break;

                default:
                    const greetings = [
                        "I'm here to help you excel in your coding journey!",
                        "Let's turn your ideas into reality!",
                        "Together, we'll solve any coding challenge!",
                        "Ready to help you build something amazing!",
                        "Your coding companion for innovative solutions!"
                    ];
                    response = greetings[Math.floor(Math.random() * greetings.length)] + 
                               "\n\nI can help you with:\n" +
                               "1. Hackathon challenges\n" +
                               "2. Programming questions\n" +
                               "3. Learning resources\n" +
                               "4. Debugging help\n\n" +
                               "What would you like to explore today?";
            }

            // Add personalized touch
            const timestamp = new Date().getHours();
            let timeBasedGreeting = '';
            if (timestamp < 12) timeBasedGreeting = 'Good morning! ';
            else if (timestamp < 17) timeBasedGreeting = 'Good afternoon! ';
            else timeBasedGreeting = 'Good evening! ';

            return `${timeBasedGreeting}${response}`;
        } catch (error) {
            console.error('Error in Sarthak AI response:', error);
            throw new Error('Failed to generate response from Sarthak AI');
        }
    }
}

const sarthakAI = new SarthakAI();
module.exports = { generateResponse: (message) => sarthakAI.generateResponse(message) }; 