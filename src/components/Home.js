import React from 'react';
import ParentComponent from '../components/ParentComponent';
import NearbyTemples from '../components/NearbyTemples'; 
import ParentComponentone from '../components/ParentComponentone';
import ParentComponenttwo from '../components/ParentComponenttwo';
import "../CSS/Home.css"

function Home() {
  return (
    <div className='d-flex home'>
        <div className='d-flex sidebar flex-column flex-shrink-0  bg-dark'>
            <ul className='nav nav-pills flex-column mb-auto px-0 mt-3 nav nav-tabs' id="myTab"> 
                <li className='nav-item '>                    
                    <a href="#first" className='nav-link text-white active' data-bs-toggle="tab">
                        <span className='ms-1 mt-5'>Nearby Hotels</span>
                    </a>
                </li>
                <li className='nav-item '>                    
                    <a href="#second" className='nav-link text-white' data-bs-toggle="tab">
                         <span className='ms-2'>Nearby Temples</span>
                    </a>
                </li>
                <li className='nav-item '>                    
                    <a href="#third" className='nav-link text-white'  data-bs-toggle="tab">
                         <span className='ms-2'>Nearby Shops</span>
                    </a>
                </li>
                {/* <li className='nav-item '>                    
                    <a href="#fourth" className='nav-link text-white'  data-bs-toggle="tab">
                         <span className='ms-2'>Report</span>
                    </a>
                </li> */}
            </ul>

        </div>
        <div class="tab-content">
        <div class="tab-pane fade show active " id="first">
            
            <ParentComponent />
        </div>
        <div class="tab-pane fade show" id="second">
        <ParentComponentone />
        </div>
        <div class="tab-pane fade show" id="third">
            <ParentComponenttwo />
        </div>
        
        </div>
    </div>
  )
}

export default Home