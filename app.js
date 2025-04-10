const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { generateResponse } = require('./sarthaku');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static('public'));
app.use(express.json());

// Sample challenges data
const challenges = [
    {
        id: 1,
        title: "AI-Powered Healthcare Assistant",
        description: "Build an AI assistant that helps healthcare professionals diagnose and treat patients more effectively.",
        difficulty: "advanced",
        category: "ai",
        timeLimit: 48
    },
    {
        id: 2,
        title: "Decentralized Supply Chain",
        description: "Create a blockchain-based solution to track and verify the authenticity of products in a supply chain.",
        difficulty: "advanced",
        category: "blockchain",
        timeLimit: 72
    },
    {
        id: 3,
        title: "E-Learning Platform",
        description: "Develop a web application that makes learning more interactive and engaging for students.",
        difficulty: "beginner",
        category: "web",
        timeLimit: 24
    },
    {
        id: 4,
        title: "Fitness Tracking App",
        description: "Create a mobile app that helps users track their fitness goals and progress.",
        difficulty: "intermediate",
        category: "mobile",
        timeLimit: 48
    },
    {
        id: 5,
        title: "Smart Home Automation",
        description: "Build an IoT system that automates home appliances and improves energy efficiency.",
        difficulty: "advanced",
        category: "iot",
        timeLimit: 72
    }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'HackStack - Home',
        path: '/'
    });
});

app.get('/challenges', (req, res) => {
    res.render('challenges', { 
        title: 'HackStack - Challenges',
        path: '/challenges',
        challenges: challenges
    });
});

app.get('/ai-assistant', (req, res) => {
    res.render('ai-assistant', { 
        title: 'HackStack - AI Assistant',
        path: '/ai-assistant'
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'HackStack - About Us',
        path: '/about'
    });
});

// API endpoint for AI responses
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    
    try {
        const response = await generateResponse(message);
        res.json({ success: true, response });
    } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message || 'An error occurred while generating the response'
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 