import React, { useState } from 'react';
import a from '../img/images/a.jpg';
import c from '../img/images/c.jpg';
import d from '../img/images/d.jpg';
import e from '../img/images/e.jpg';
import f from '../img/images/f.webp';
import h from '../img/images/h.webp';
import g from  '../img/images/g.jpg';
import i from '../img/images/i.avif';
import '../CSS/food.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Dropdown } from 'react-bootstrap';

function Food(){
    const [clicked, setClicked] = useState(false);

    const handleToggleClick = () => {
      setClicked(!clicked);
    };


    const Card=[
        {
          img:a,
          title:"முறுக்கு",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
          
        },
        {
          img:c,
          title:"மோர்",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
        {
          img:d,
          title:"இட்லி",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
        {
          img:e,
          title:"கலி",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
        {
          img:f,
          title:"முழு உணவு",
          description:"Rice staples, tomato rice, Paruppu, sambar, rasam, kuzhambu, poriyal and koottu are added with buttermilk or curd to prepare pachadi"
        },
        {
          img:h,
          title:"சாம்பார்",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
        {
          img:g,
          title:"பொங்கல்",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
        {
          img:i,
          title:"கலி",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
    
    ]


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



           {/* <div className='header'>
             <h3>Traditional Foods</h3>
           </div>
           {Card.map((val,ind)=>(
           <div className='card' key={ind}>
                <div className='card-image'>
                    <img src={val.img }/>
                </div>
             <div>
              <p className='card-title'>{val.title}</p>
              <p className='description'>
                {val.description}
              </p>
              </div>
              <button type='submit'>Location</button>
           </div>
           ))}; */}

<div className="image-grid">
      {Card.map((Card, index) => (
        <div className="image-item">
       
          
          
          <div class="card" style={{width:288, boxShadow: '0 4px 100px 0 rgba(0, 0, 0, 0.2), 0 15px 10px 0 rgba(0, 0, 0, 0.19)'}}>
            
      <img src={Card.img} className="mx-5" style={{height:200,marginLeft:42}} alt={`Image ${index}`} class="card-img-top"/>
     <div className="card-body">
    <h5 className="card-title text-center" >{Card.title}</h5>
    <p className="card-text">{Card.description}</p>
    <a href="#" class="btn btn-primary w-50 mx-5">Find</a>
  </div>
</div>

        </div>
      ))}
    </div>
        </>
    )

}
export default Food;