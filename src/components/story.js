import React from "react";
import Video from '../video/video.mp4';
import '../CSS/story.css';
import { useState } from "react";
import Thanjavur from '../img/thanvajur.jpeg';
import Madurai from '../img/meenasi_temple.jpg'
import Adikumbeswarar from '../img/Adi_Kumbeswarar_Temple.jpg'
import SriRanganathaswamy from '../img/Sri_Ranganathaswamy.jpg'
import SriRajagopala from '../img/Sri_Rajagopala.jpg';
import Kanchi_Kailasanathar from '../img/Kanchi_Kailasanathar.jpg';
import Srivilliputhur_Andal from '../img/Srivilliputhur_Andal.jpg';
import Kumari_Amman from '../img/Kumari_Amman.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import Dropdown from 'react-bootstrap/Dropdown';

import ExplorePage from "./ExplorePage";

function Story()
{   
  

    const [clicked, setClicked] = useState(false);

    const handleToggleClick = () => {
      setClicked(!clicked);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  

      const images = [
        {image : Madurai,place:"Meenashi Amman Temple",note:'Meenakshi Amman Temple, also known as Minakshi-Sundareshwara Temple, is one of the oldest and most important temples in India.'},
        {image : Thanjavur,place:"Thanjavur Periya Kovil",note:'The Thanjavur Temple, also known as the Brihadeeswarar Temple and Rajarajeswara Temple, is one of the most significant temples in India.'},
        {image : Adikumbeswarar,place:" Adikumbeswarar Temple",note:'Adi Kumbeswarar Temple, Kumbakonam is a Hindu temple dedicated to Shiva, located in the town of Kumbakonam in Thanjavur District Tamil Nadu, India.'},
        {image : SriRanganathaswamy,place:"Sri Ranganathaswamy Temple",note:' The Sri Ranganathaswamy Temple or Thiruvarangam is a Hindu sanctuary committed to Ranganatha, a leaning-back structure Shri Vishnu. '},

        {image : SriRajagopala,place:"Sri RajagopalaTemple",note:'Sri Rajagopalaswamy Temple, also referred to as Santhana Rajagopalaswamy Temple, is a Hindu temple in Rajamadam Village in the Indian state of Tamil Nadu.'},
        {image : Kanchi_Kailasanathar,place:"Kanchi Kailasanathar Temple",note:'Kanchi Kailasanathar Temple is an important religious site is located on the banks of the Vedavathi River, at the western limits, facing the east side in the Kanchipuram city of Tamil Nadu.'},
        {image : Srivilliputhur_Andal,place:"Srivilliputhur Andal Temple",note:'The Srivilliputhur Andal Temple in Srivilliputhur, a town in Virudhunagar district in the South Indian state of Tamil Nadu, is dedicated to the Hindu god Vishnu.'},
        {image : Kumari_Amman,place:"Kumari Amman Temple, Kanyakumari",note:'Kumari Amman temple is 3000 years old and is for Devi Kanyakumari. She is the virgin goddess who stands strong protecting her devotees'},
      
      ];

  
    return(
        <>
   
   <nav>
      <div>
        
      </div>
      <div>
        <ul id="navbar" className={clicked ? 'active' : ''}>
        <li className="my-2">
            <Link to='/'>Home</Link>
          </li>
          <li className="my-2">
          <Link to='/food'>Food</Link>
          </li>
          <li>
          <Dropdown style={{border:'none'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{border:'none',fontSize:20}}>
       Weddings
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-info">
      <Dropdown.Item ><Link to='/tamilnadu_wedding'>Tamil Nadu</Link></Dropdown.Item>
      <Dropdown.Item ><Link to='/kerala_wedding'>Kerala</Link></Dropdown.Item>
      <Dropdown.Item ><Link to='/karnataka_wedding'>Karnataka</Link></Dropdown.Item>
      <Dropdown.Item ><Link to='/Andhra_wedding'>Andhra Pradesh</Link></Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>
          </li>
          <li>
          <Dropdown style={{border:'none'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{border:'none',fontSize:20}}>
       Traditions
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-info">
      <Dropdown.Item ><Link to='/dance'>Dance</Link></Dropdown.Item>
      <Dropdown.Item ><Link to='/games'>Games</Link></Dropdown.Item>
     
      
      </Dropdown.Menu>
    </Dropdown>
          </li>
          <li>
         
          <Dropdown style={{border:'none'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{border:'none',fontSize:20}}>
       Places to Visit
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-info">
      <Dropdown.Item ><Link to='/temples'>Temples</Link></Dropdown.Item>
      <Dropdown.Item ><Link to='/story'>Historic Places</Link></Dropdown.Item>
      <Dropdown.Item ><Link to='/video'>Festivals</Link></Dropdown.Item>
      <Dropdown.Item ><Link to='/nearby'>Near By Places</Link></Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>

          </li>
          <li className="my-2">
            <Link to='/quiz'>Tech Corners</Link>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={handleToggleClick}>
        <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>





<div className='myvideo'>
      <video src={Video} autoPlay loop muted />
      
      <div className="content m-0">
      <div className="text-center">
      <h1 style={{fontSize:50}}>Welcome to the TamilNadu Culture and Heritage</h1>
      <p style={{padding:10,backgroundColor:"transparent"}}>Tamil Nadu is a southern state of India which is supremely rich in culture and heritage. Known to be one of the oldest civilisations in the world, the people of Tamil Nadu belong to the prestigious Dravidian Family. Tamilians also, like other South Indians, take much pride in their rooted Tamil culture and make great efforts to protect their 2000 years old history. The state has been ruled by the Cholas, Pandyas and the Pallavas and has been flourishing since. The art and architecture have been their creations which are used and maintained even today.</p>
      </div>
     
      </div>
      </div>

  <div className="w-100" style={{borderBottom:'2px solid black'}}>
    <h1 className="text-center" style={{fontSize:30,letterSpacing:2}}>TamilNadu Heritage Temples</h1>
    </div>

  
    



  <div className="image-grid">
      {images.map((image, index) => (
        <div className="image-item">
       
          
          
          <div className="card" style={{width:288, boxShadow: '0 4px 100px 0 rgba(0, 0, 0, 0.2), 0 15px 10px 0 rgba(0, 0, 0, 0.19)'}}>
            
      <img src={image.image} className="mx-5" style={{height:200,marginLeft:42}} alt={`Image ${index}`} class="card-img-top"/>
     <div className="card-body">
    <h5 className="card-title text-center" >{image.place}</h5>
    <p className="card-text">{image.note}</p>
    <div className="d-flex justify-content-around">
      
    

   
  {/* <a href="#" className="btn btn-info">Explore</a> */}
  <Link to={`/explore/${index}`} className="btn btn-info">
        Explore
      </Link>

  



    <i className='fas fa-map-marker-alt float-inline-end' style={{marginTop:7,fontSize:20}}></i>

    </div>
  </div>
</div>

        </div>
      ))}
    </div>
  
        </>
    );
}

export default Story;