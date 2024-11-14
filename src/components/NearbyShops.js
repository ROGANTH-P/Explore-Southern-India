import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NearbyShops = ({ userLocation }) => {
  const [nearbyTraditionalDressShops, setNearbyTraditionalDressShops] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userLocation.lat !== null && userLocation.lon !== null) {
      fetchNearbyTraditionalDressShops();
    }
  }, [userLocation]);

  const fetchNearbyTraditionalDressShops = () => {
    setLoading(true);
    const apiKey = 'J1AQtq1u2GRIepAvIYKowqVjKyOgUiQL'; // Replace with your TomTom API key

    const endpoint = `https://api.tomtom.com/search/2/poiSearch/shops.json?key=${apiKey}&lat=${userLocation.lat}&lon=${userLocation.lon}&category=traditional+dress`;

    axios
      .get(endpoint)
      .then((response) => {
        const nearbyTraditionalDressShops = response.data.results || [];
        setNearbyTraditionalDressShops(nearbyTraditionalDressShops);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="shop container mt-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {nearbyTraditionalDressShops.map((shop, index) => (
            <li key={index} className="list-group-item my-2 shop-item">
              <h3 className='text-center'>{shop.poi.name}</h3>
              <p>Address: {shop.address.freeformAddress}</p>
              <p>Latitude: {shop.position.lat}</p>
              <p>Longitude: {shop.position.lon}</p>
              <p className='text-center'>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${shop.position.lat},${shop.position.lon}`}
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
      )}
      <style>
        {`
          .shop-item {
            margin: 10px; /* Add margin to create a gap between list items */
            transition: background-color 0.3s; /* Add a smooth hover effect transition */
          }

          .shop-item:hover {
            background-color: #f5f5f5; /* Change the background color on hover */
          }
        `}
      </style>
    </div>
  );
};

export default NearbyShops;
