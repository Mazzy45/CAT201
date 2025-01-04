const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// API Routes (Example, add your own if needed)
app.get('/api/touristspots', (req, res) => {
    const touristSpots = [
        { id: 'escape', name: 'Escape Theme Park', description: 'Thrilling rides and activities.' },
        { id: 'penanghill', name: 'Penang Hill', description: 'Scenic hill with cool breeze.' },
        // Add more spots here...
    ];
    res.json(touristSpots);
});

// Catch-all route for the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Define port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
