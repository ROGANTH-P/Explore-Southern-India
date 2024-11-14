import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Home.css';
import img_1 from "../img/images/temple_default.jpeg";

const NearbyTemples = ({ userLocation, temples }) => {
  const [nearbyTemples, setNearbyTemples] = useState([]);
  const [loading, setLoading] = useState(false);
  const [randomTempleIndices, setRandomTempleIndices] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (userLocation.lat !== null && userLocation.lon !== null) {
      fetchNearbyTemples();
      fetchWeatherData();
    }
  }, [userLocation]);

  // Generate random indices for each nearby temple
  const selectRandomTempleIndices = () => {
    const randomIndices = nearbyTemples.map(() =>
      Math.floor(Math.random() * temples.length)
    );
    setRandomTempleIndices(randomIndices);
  };

  const fetchWeatherData = () => {
    setLoading(true);
    const apiKey = 'J1AQtq1u2GRIepAvIYKowqVjKyOgUiQL'; // Replace with your TomTom API key
    const endpoint = `https://api.tomtom.com/weather/1/current/${userLocation.lat},${userLocation.lon}.json?key=${apiKey}`;

    axios
      .get(endpoint)
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  };

  const fetchNearbyTemples = () => {
    setLoading(true);
    const apiKey = 'J1AQtq1u2GRIepAvIYKowqVjKyOgUiQL'; // Replace with your TomTom API key
    const endpoint = `https://api.tomtom.com/search/2/poiSearch/temple.json?key=${apiKey}&lat=${userLocation.lat}&lon=${userLocation.lon}`;

    axios
      .get(endpoint)
      .then((response) => {
        const temples = response.data.results || [];
        setNearbyTemples(temples);
        setLoading(false);
        selectRandomTempleIndices(); // Select random indices after fetching nearby temples
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  // Define a fixed width and height for the images
  const imageWidth = '300px';
  const imageHeight = '200px';

  return (
    <div className='row'>
      <div className="temple container mt-4" style={{ width: '90%' }}>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div>
            <ul className="list-group">
              {nearbyTemples.map((temple, index) => (
                <li key={index} className="list-group-item my-2 shop-item">
                  <h3 className='text-center'>{temple.poi.name}</h3>
                  <p>Address: {temple.address.freeformAddress}</p>
                  {temple.poi.category && <p>Category: {temple.poi.category}</p>}
                  {randomTempleIndices.length > index && (
                    <img
                      src={img_1}
                      alt={`Image of ${temple.poi.name}`}
                      className="img-fluid rounded mx-auto d-block mt-3"
                      style={{ width: imageWidth, height: imageHeight }}
                    />
                  )}
                  <p>Latitude: {temple.position.lat}</p>
                  <p>Longitude: {temple.position.lon}</p>
                  <p className="text-center">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${temple.position.lat},${temple.position.lon}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <style>
          {`
            .shop-item {
              margin: 10px;
              transition: background-color 0.3s;
            }
            .shop-item:hover {
              background-color: #f5f5f5;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default NearbyTemples;
