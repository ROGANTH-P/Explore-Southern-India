// import React, { Component } from 'react';
// import axios from 'axios';

// class Geocoding extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       locationName: '',
//       latitude: null,
//       longitude: null,
//       error: null,
//     };
//   }

//   handleLocationNameChange = (event) => {
//     this.setState({ locationName: event.target.value });
//   };

//   handleGeocode = () => {
//     const { locationName } = this.state;
//     const apiKey = 'J1AQtq1u2GRIepAvIYKowqVjKyOgUiQL'; // Replace with your TomTom API key

//     // Make a request to the TomTom Geocoding API
//     axios
//       .get(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(locationName)}.json?key=${apiKey}`)
//       .then((response) => {
//         const result = response.data.results[0];
//         if (result) {
//           const { lat, lon } = result.position;
//           this.props.onLocationChange(lat, lon);

//           this.setState({
//             latitude: lat,
//             longitude: lon,
//             error: null,
//           });
//         } else {
//           this.setState({
//             latitude: null,
//             longitude: null,
//             error: 'Location not found',
//           });
//         }
//       })
//       .catch((error) => {
//         this.setState({
//           latitude: null,
//           longitude: null,
//           error: 'Error geocoding location',
//         });
//         console.error(error);
//       });
//   };

//   render() {
//     const { locationName, latitude, longitude, error } = this.state;

//     return (
//       <div>
//         <h2>Geocoding</h2>
//         <div>
//           <label>
//             Enter Location Name:
//             <input
//               type="text"
//               value={locationName}
//               onChange={this.handleLocationNameChange}
//             />
//           </label>
//           <button onClick={this.handleGeocode}>Geocode</button>
//         </div>
//         {latitude !== null && longitude !== null && (
//           <div>
//             <p>Latitude: {latitude}</p>
//             <p>Longitude: {longitude}</p>
//           </div>
//         )}
//         {error && <p>Error: {error}</p>}
//       </div>
//     );
//   }
// }

// export default Geocoding;
import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/Home.css';
class Geocoding extends Component {
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

  handleGeocode = () => {
    const { locationName } = this.state;
    const apiKey = 'J1AQtq1u2GRIepAvIYKowqVjKyOgUiQL'; // Replace with your TomTom API key

    axios
      .get(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(locationName)}.json?key=${apiKey}`)
      .then((response) => {
        const result = response.data.results[0];
        if (result) {
          const { lat, lon } = result.position;
          this.props.onLocationChange(lat, lon);

          this.setState({
            latitude: lat,
            longitude: lon,
            error: null,
          });
        } else {
          this.setState({
            latitude: null,
            longitude: null,
            error: 'Location not found',
          });
        }
      })
      .catch((error) => {
        this.setState({
          latitude: null,
          longitude: null,
          error: 'Error geocoding location',
        });
        console.error(error);
      });
  };

  render() {
    const { locationName, latitude, longitude, error } = this.state;

    return (
      <div className='geocoding'>
        <div className=''>
          <div>
          <label>
            Enter Location Name:  
            </label>
            </div>
          <div>
            <input 
              type="text"
              value={locationName}
              onChange={this.handleLocationNameChange}
              style={{borderColor:'1px solid ',backgroundColor:'gray'}}
            />
          
          
          <button className='btn btn-primary' onClick={this.handleGeocode}>Submit</button>
          </div>
          
        </div>
        {latitude !== null && longitude !== null && (
          <div>
            <p className='w-50'>Latitude: {latitude}</p>
            <p className='w-50'>Longitude: {longitude}</p>
          </div>
        )}
        {error && <p>Error: {error}</p>}
      </div>
    );
  }
}

export default Geocoding;
