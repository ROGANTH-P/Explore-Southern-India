

import React, { Component } from 'react';
import axios from 'axios';

class NearbyRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: props.userLocation,
      nearbyRestaurants: [],
      loading: false,
    };
  }

  componentDidMount() {
    if (this.state.userLocation.lat !== null && this.state.userLocation.lon !== null) {
      this.fetchNearbyRestaurants();
    }
  }

  fetchNearbyRestaurants = () => {
    const { userLocation } = this.state;
    this.setState({ loading: true });
    const apiKey = 'J1AQtq1u2GRIepAvIYKowqVjKyOgUiQL';// Replace with your TomTom API key

    const endpoint = `https://api.tomtom.com/search/2/poiSearch/restaurants.json?key=${apiKey}&lat=${userLocation.lat}&lon=${userLocation.lon}`;

    axios
      .get(endpoint)
      .then((response) => {
        const nearbyRestaurants = response.data.results || [];
        this.setState({ nearbyRestaurants, loading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  };

  render() {
    const { nearbyRestaurants, loading } = this.state;

    return (
      <div className='geo container mt-5'>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-group w-100">
            {nearbyRestaurants.map((restaurant, index) => (
              <div >
              <li key={index} className="list-group-item my-2 shop-item w-100">
                <h3 className='text-center'>{restaurant.poi.name}</h3>
                <p>Address: {restaurant.address.freeformAddress}</p>

                {restaurant.poi.phone && <p>Phone: {restaurant.poi.phone}</p>}
                {restaurant.rating && <p>Rating: {restaurant.rating.toFixed(1)}</p>}
                {/* <p>Category: {restaurant.poi.category}</p> */}
                <p>Latitude: {restaurant.position.lat}</p>
                <p>Longitude: {restaurant.position.lon}</p>
                <p  className="text-center">
                <a
            href={`https://www.google.com/maps/search/?api=1&query=${restaurant.position.lat},${restaurant.position.lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >View on google maps</a></p>
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
  }
}

export default NearbyRestaurants;

