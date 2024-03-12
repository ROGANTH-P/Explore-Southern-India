import React, { Component } from 'react';
import Geocoding from '../components/Geocoding'; 
import NearbyTemples from '../components/NearbyTemples';
class ParentComponentone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: '', 
      latitude: null,
      longitude: null,
      error: null,
      temples: [
        {
          name: "Arulmigu Kapaleeswarar Temple,Chennai",
          description: "The Arulmigu Kapaleeswarar Temple, located in Chennai, is a revered Hindu temple dedicated to Lord Shiva. Known for its Dravidian architecture, it stands as a symbol of ancient heritage. Pilgrims and tourists visit to seek blessings and admire its grandeur.",
          latitude: 13.0336,
          longitude: 80.2714,
          imageSrc: "/i1.jpg"
        },
        {
          name: "Meenakshi Amman Temple,Madurai",
          description: "The Meenakshi Amman Temple, situated in Madurai, is a renowned Hindu temple devoted to Goddess Meenakshi and Lord Sundareswarar. This architectural masterpiece features towering gopurams and intricate sculptures, attracting pilgrims and tourists alike to witness its divine beauty and spirituality.",
          latitude: 9.9195,
          longitude: 78.119,
          imageSrc: "/i2.jpg"
        },
        {
          name: "Rajagopalaswamy Temple, Mannargudi",
          description: "The Rajagopalaswamy Temple, situated in Mannargudi, is a historic Hindu temple dedicated to Lord Krishna. Known for its grand architecture and spiritual significance, it attracts devotees seeking blessings and a glimpse into the rich cultural heritage of Tamil Nadu.",
          latitude: 10.6672,
          longitude: 79.4437,
          imageSrc: "/i3.jpg"
        },
        {
          name: "Rajagopalaswamy Temple, Mannargudi",
          description: "The Rajagopalaswamy Temple, situated in Mannargudi, is a historic Hindu temple dedicated to Lord Krishna. Known for its grand architecture and spiritual significance, it attract",
          latitude: 10.6672,
          longitude: 79.4437,
          imageSrc: "/i4.jpg"
        },
        {
          name: "Rajagopalaswamy",
          description: "The Rajagopalaswamy Temple, situated ",
          latitude: 10.6672,
          longitude: 79.4437,
          imageSrc: "/i5.jpg"
        },
        {
          name: "Mannargudi",
          description: "The Rajagopalaswamy Temple, situated in Manntemple dedicated to Lord Krishna. Known for its grand architecture and spiritual significance, it attracts devotees seeking blessings and a glimpse into the rich cultural heritage of Tamil Nadu.",
          latitude: 10.6672,
          longitude: 79.4437,
          imageSrc: "/i6.jpg"
        },
        {
         
          name: " Temple",
          description: "The Rajagopalaswamy Temple, situated in Mannargudi, is a historic Hindu temple dedicated to Lord Krishna. Known for its grand architecture and spiritual significance, it attracts devotees seeking blessings and a glimpse into the rich cultural heritage of Tamil Nadu.",
          latitude: 10.6672,
          longitude: 79.4437,
          imageSrc: "/i7.jpg"
        }
        // ... (add the rest of your temple data here)
      ],
      
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
    const { locationName, latitude, longitude, error ,temples} = this.state;
    
    return (
      <div className='parent_1'>
        <h2 className='t_t'>Traditional temples</h2>
        <Geocoding
          locationName={locationName}
          onLocationChange={this.handleLocationChange}
        />

        {/* Render the NearbyRestaurants component and pass latitude and longitude as props */}
        {latitude !== null && longitude !== null && (
          <NearbyTemples userLocation={{ lat: latitude, lon: longitude }} temples={temples} />
        )}
        
      </div>
    );
  }
}

export default ParentComponentone;
