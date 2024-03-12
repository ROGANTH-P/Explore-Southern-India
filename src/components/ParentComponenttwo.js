import React, { Component } from 'react';
import Geocoding from '../components/Geocoding'; 
import NearbyShops from '../components/NearbyShops';
class ParentComponentone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: '', 
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  handleLocationNameChange = (event) => {
    this.setState({ locationName: event.target.value });
  };

  handleLocationChange = (lat, lon) => {
    this.setState({
      latitude: lat,
      longitude: lon,
    });
  };

  render() {
    const { locationName, latitude, longitude, error } = this.state;

    return (
      <div>
        <h2>Traditional Shops</h2>
        <Geocoding
          locationName={locationName}
          onLocationChange={this.handleLocationChange}
        />

        {/* Render the NearbyRestaurants component and pass latitude and longitude as props */}
        {latitude !== null && longitude !== null && (
          <NearbyShops userLocation={{ lat: latitude, lon: longitude }} />
        )}
        
      </div>
    );
  }
}

export default ParentComponentone;
