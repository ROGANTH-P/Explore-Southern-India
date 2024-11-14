import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NearbyRestaurants = ({ userLocation }) => {
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userLocation.lat !== null && userLocation.lon !== null) {
      fetchNearbyRestaurants();
    }
  }, [userLocation]);

  const fetchNearbyRestaurants = () => {
    setLoading(true);
    const apiKey = 'J1AQtq1u2GRIepAvIYKowqVjKyOgUiQL'; // Replace with your TomTom API key

    const endpoint = `https://api.tomtom.com/search/2/poiSearch/restaurants.json?key=${apiKey}&lat=${userLocation.lat}&lon=${userLocation.lon}`;

    axios
      .get(endpoint)
      .then((response) => {
        const nearbyRestaurants = response.data.results || [];
        setNearbyRestaurants(nearbyRestaurants);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className='geo container mt-5'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group w-100">
          {nearbyRestaurants.map((restaurant, index) => (
            <div key={index}>
              <li className="list-group-item my-2 shop-item w-100">
                <h3 className='text-center'>{restaurant.poi.name}</h3>
                <p>Address: {restaurant.address.freeformAddress}</p>

                {restaurant.poi.phone && <p>Phone: {restaurant.poi.phone}</p>}
                {restaurant.rating && <p>Rating: {restaurant.rating.toFixed(1)}</p>}
                <p>Latitude: {restaurant.position.lat}</p>
                <p>Longitude: {restaurant.position.lon}</p>
                <p className="text-center">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${restaurant.position.lat},${restaurant.position.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View on Google Maps
                  </a>
                </p>
              </li>
            </div>
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

export default NearbyRestaurants;
