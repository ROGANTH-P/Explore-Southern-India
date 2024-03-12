
import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/Home.css';
import img_1 from "../img/images/temple_default.jpeg";
class NearbyTemples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: props.userLocation,
      nearbyTemples: [],
      loading: false,
      randomTempleIndices: [],
      weatherData: null, // Added to store random indices for each nearby temple
    };
  }

  componentDidMount() {
    // Check if userLocation has latitude and longitude
    if (this.state.userLocation.lat !== null && this.state.userLocation.lon !== null) {
      this.fetchNearbyTemples();
      this.fetchWeatherData();
    }
  }

  // Generate random indices for each nearby temple
  selectRandomTempleIndices = () => {
    const { nearbyTemples } = this.state;
    const randomIndices = nearbyTemples.map(() =>
      Math.floor(Math.random() * this.props.temples.length)
    );
    this.setState({ randomTempleIndices: randomIndices });
  };
  fetchWeatherData = () => {
    const { userLocation } = this.state;
    this.setState({ loading: true });
    const apiKey = 'J1AQtq1u2GRIepAvIYKowqVjKyOgUiQL';  // Replace with your TomTom API key
    const endpoint = `https://api.tomtom.com/weather/1/current/${userLocation.lat},${userLocation.lon}.json?key=${apiKey}`;

    axios
      .get(endpoint)
      .then((response) => {
        const weatherData = response.data;
        this.setState({ weatherData, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        this.setState({ loading: false });
      });
  };
  fetchNearbyTemples = () => {
    const { userLocation } = this.state;
    this.setState({ loading: true });
    const apiKey = 'J1AQtq1u2GRIepAvIYKowqVjKyOgUiQL'; // Replace with your TomTom API key

    const endpoint = `https://api.tomtom.com/search/2/poiSearch/temple.json?key=${apiKey}&lat=${userLocation.lat}&lon=${userLocation.lon}`;

    axios
      .get(endpoint)
      .then((response) => {
        const nearbyTemples = response.data.results || [];
        this.setState({ nearbyTemples, loading: false }, () => {
          this.selectRandomTempleIndices(); // Select random temple indices after fetching nearby temples
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  };

  render() {
    const { nearbyTemples, loading, randomTempleIndices } = this.state;
    const { temples } = this.props;

    // Define a fixed width and height for the images
    const imageWidth = '300px';
    const imageHeight = '200px';

    return (
      <div className='row'>
      <div className="temple container mt-4" style={{width:'90%'}}>
        
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div>
          <ul className="list-group " >
            {nearbyTemples.map((temple, index) => (
              <li key={index} className="list-group-item my-2 shop-item ">
                <h3 className='text-center'>{temple.poi.name}</h3>
                <p>Address: {temple.address.freeformAddress}</p>
                {temple.poi.category && <p>Category: {temple.poi.category}</p>}
                {/* Display the random temple's image based on the random index */}
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
              margin: 10px; /* Add margin to create a gap between list items */
              transition: background-color 0.3s; /* Add a smooth hover effect transition */
        
            }

            .shop-item:hover {
              background-color: #f5f5f5; /* Change the background color on hover */
            }
          `}
        </style>
      </div>
      </div>
    );
  }
}

export default NearbyTemples;
