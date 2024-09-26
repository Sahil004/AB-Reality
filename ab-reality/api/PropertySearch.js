const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors()); // Enable CORS

// Serve static files (images) from the "public/properties" folder
app.use('/images', express.static(path.join(__dirname, '../public/properties')));

// Example property data with relative image paths
const properties = [
    { id: 1, name: "Luxury Apartment", location: "New York", price: "$300,000", type: "For Sale", image: "/images/Property1.jpg" },
    { id: 2, name: "Beach House", location: "California", price: "$500,000", type: "For Sale", image: "/images/Property2.jpg" },
    { id: 3, name: "Mountain Cabin", location: "Colorado", price: "$250,000", type: "For Rent", image: "/images/Property3.jpg" }
];

// Route for checking if the server is running
app.get('/', (req, res) => {
    res.send('API is running');
});

// API route to return property data
app.get('/api/PropertySearch', (req, res) => {
    res.status(200).json(properties);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
