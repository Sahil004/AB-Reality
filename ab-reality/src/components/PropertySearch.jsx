import React, { useState } from 'react';

const PropertySearch = () => {
    const [location, setLocation] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/PropertySearch?location=${location}`);
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {results.map((property) => (
                    <li key={property.id}>
                        {property.name} - {property.location} - ${property.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertySearch;
