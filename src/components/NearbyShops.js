
import React, { Component } from 'react';
import axios from 'axios';


class NearbyShops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: props.userLocation,
      nearbyTraditionalDressShops: [],
      loading: false,
    };
  }

  componentDidMount() {
    if (this.state.userLocation.lat !== null && this.state.userLocation.lon !== null) {
      this.fetchNearbyTraditionalDressShops();
    }
  }

  fetchNearbyTraditionalDressShops = () => {
    const { userLocation } = this.state;
    this.setState({ loading: true });
    const apiKey = 'J1AQtq1u2GRIepAvIYKowqVjKyOgUiQL'; // Replace with your TomTom API key

    // TomTom Places API endpoint to search for nearby traditional dress shops
    const endpoint = `https://api.tomtom.com/search/2/poiSearch/shops.json?key=${apiKey}&lat=${userLocation.lat}&lon=${userLocation.lon}&category=traditional+dress`;

    axios
      .get(endpoint)
      .then((response) => {
        const nearbyTraditionalDressShops = response.data.results || [];
        this.setState({ nearbyTraditionalDressShops, loading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  };

  render() {
    const { nearbyTraditionalDressShops, loading } = this.state;

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
                {/* <p>Category: {shop.poi.category}</p> */}
                <p>Latitude: {shop.position.lat}</p>
                <p>Longitude: {shop.position.lon}</p>
                <p className='text-center'>
                <a
            href={`https://www.google.com/maps/search/?api=1&query=${shop.position.lat},${shop.position.lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >View on google maps</a></p>
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
  }
}

export default NearbyShops;

