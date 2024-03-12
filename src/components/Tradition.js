import React, { useState } from 'react';
import a from '../img/sab/garadi-tn.jpg';
import b from '../img/sab/up-1.jpg';
import c from '../img/sab/garudi-ka.jpg';
import d from '../img/sab/kl-1.jpg';
import e from '../img/sab/kl-1.jpg';
import f from  '../img/sab/tn-1.jpg';
import h from '../img/sab/up-1.jpg';
import g from  '../img/sab/paid-kl.jpg';
import i from  '../img/sab/paid-kl.jpg';
import '../CSS/food.css';

function Tradition(){
    const [clicked, setClicked] = useState(false);
    const [selectedTerm, setSelectedTerm] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const handleToggleClick = () => {
      setClicked(!clicked);
    };


    const Card=[
        {
          img:a,
          title:"Tamil Nadu",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
          
        },
        {
          img:c,
          title:"Andhra pradesh",
          description:"Andhar has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
        {
          img:d,
          title:"kerala",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
        {
          img:e,
          title:"Tamil Nadu",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
        {
          img:f,
          title:"kerala",
          description:"andhar staples, tomato rice, Paruppu, sambar, rasam, kuzhambu, poriyal and koottu are added with buttermilk or curd to prepare pachadi"
        },
        {
          img:h,
          title:"Andhra Pradesh",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
        {
          img:g,
          title:"Tamil Nadu",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
        {
          img:i,
          title:"Kerala",
          description:"Tamil Nadu has always been a hub for food connoisseurs to take a great pleasure of some of the finest traditional cuisine in the country"
        },
    
    ]

    const filteredCards = Card.filter((card) => {
      const titleMatch = selectedTerm ? card.title.includes(selectedTerm) : true;
      const descriptionMatch = searchTerm
        ? card.description.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      
      return titleMatch && descriptionMatch;
    });
    


    return(
        <>

{/* <nav>
      <div>
        
      </div>
      <div>
        <ul id="navbar" className={clicked ? 'active' : ''}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/food'>Food</Link>
          </li>
          <li>
            <a href="#">Places</a>
          </li>
          <li>
          <Link to='/video'>Festivals</Link>
          </li>
          <li>
          <Link to='/temples'>Temples</Link>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={handleToggleClick}>
        <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav> */}



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

{/* <div className="image-grid">
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
    </div> */}
     <div className="search-select bg-dark text-center"style={{height:50}}>
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{height:30,}}
                    className='mx-2 p-3 my-2'
                />
                <select
                    className="form-select"
                    value={selectedTerm}
                    onChange={(e) => setSelectedTerm(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    {/* Add more options as needed */}
                </select>
            </div>

            <div className="image-grid my-4">
                {filteredCards.map((card, index) => (
                    <div className="image-item" key={index}>
                        <div class="card" style={{ width: 288, boxShadow: '0 4px 100px 0 rgba(0, 0, 0, 0.2), 0 15px 10px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={card.img} className="mx-5" style={{ height: 200, marginLeft: 42 }} alt={`Image ${index}`} class="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title text-center">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                                <a href="#" class="btn btn-primary w-50 mx-5">Find</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}
export default Tradition;