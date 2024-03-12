import React, { Component } from 'react';
import Geocoding from '../components/Geocoding'; 
import NearbyRestaurants from '../components/NearbyRestaurants'; 
class ParentComponent extends Component {
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
      <div className='parent w-75'>
        <h2 className='t_r'>Traditional Restaurants</h2>
        <Geocoding 
          locationName={locationName}
          onLocationChange={this.handleLocationChange}
        />

        {/* Render the NearbyRestaurants component and pass latitude and longitude as props */}
        {latitude !== null && longitude !== null && (
          <NearbyRestaurants userLocation={{ lat: latitude, lon: longitude }} />
        )}
        
      </div>
    );
  }
}

export default ParentComponent;
