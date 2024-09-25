const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const properties = [
    { id: 1, name: "Luxury Apartment", location: "New York", price: "$300,000", type: "For Sale", image: "https://example.com/image1.jpg" },
    { id: 2, name: "Beach House", location: "California", price: "$500,000", type: "For Sale", image: "https://example.com/image2.jpg" },
    { id: 3, name: "Mountain Cabin", location: "Colorado", price: "$250,000", type: "For Rent", image: "https://example.com/image3.jpg" }
];

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/PropertySearch', (req, res) => {
    res.status(200).json(properties);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
