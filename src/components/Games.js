import React, { useState } from 'react';
import a from '../img/sab/t1kabaddi.jpg';
import b from '../img/sab/t2kho.jpg';
import c from '../img/sab/t3nondi.jpg';
import d from '../img/sab/t4ghilli.jpg';
import e from '../img/sab/t5latto.jpg';
import f from  '../img/sab/t6.jpg';
import h from '../img/sab/t7.jpg';
import g from  '../img/sab/t8snake.jpg';
import i from  '../img/sab/t2kho.jpg';
import '../CSS/food.css';

function Games(){
    const [clicked, setClicked] = useState(false);
    const [selectedTerm, setSelectedTerm] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [showFullDescription, setShowFullDescription] = useState(false);
    const handleToggleClick = () => {
      setClicked(!clicked);
    };


    const Card=[
        {
          img:a,
          title:"Tamil Nadu",
          description:"Let’s begin with one of the best-known games of the country. A game played without any gear or equipment it is based on pure strength and strategy. Played between two teams the game involves a single player from each team trying to touch down and break into the area of the opponent team. The player needs to touch as many players of the opposite team while reaching the line. And all of this while humming ‘kabaddi’. It certainly is a game that can keep you on the edge of your seat.  "
          
        },
        {
          img:c,
          title:"Andhra pradesh",
          description:"The Indian version of one of the most well-known childhood games of all time, nondi (in Tamil Nadu) is also called stapoo and kith kith. A ladder grid is drawn on the floor and numbered. A stone or any other object is then thrown on any of the numbers, and the player has to hop their way to the numbered block without stepping on the edges or any other block. Played inside apartment stairways or flat surfaces, this game sticks out as an easy game to play in both large and small groups"
        },
        {
          img:d,
          title:"kerala",
          description:"Alright, we have probably heard this phrase several times. But how many of us really know what this game entails? Gilli Danda is a sort of fusion game between cricket and baseball. The Gilli is a small stick that needs to be hit by the danda or the longer stick as far as one can. After hitting the Gilli, the player needs to run to a particular point before the opponent team can retrieve the Gilli. Gilli danda is also known as Lippa in some parts of India.  "
        },
        {
          img:e,
          title:"Tamil Nadu",
          description:"Another popular term lattoo quite literally means the spinning top. Though the word is also used often in various other meanings and forms, the game itself is pretty simple. It is all about making the top spin for the longest amount of time. And also, mastering the skill of lifting the moving top off with the string. The tops were initially made of clay and later replaced with wood. However, one can find many different tops today in the market, some even with lights and sound effects. "
        },
        {
          img:f,
          title:"kerala",
          description:"Another indoor game Pallankuli finds its origins in South India. Played earliest in Tamil Nadu the game spread throughout the southern states and even to Sri Lanka and Malaysia. Played on a board that consists of rounded or cup-like columns the game is played with seeds or shells. The idea is to move the shells or seeds from one cup to another in a clockwise direction till the cups are empty. i"
        },
        {
          img:h,
          title:"Andhra Pradesh",
          description:"A common street game one might often have seen children trying to topple off a stack of stones. One player from the team gets three chances to knock off the pile of seven stones with a ball. The entire team then tries to restore the stack before being out. Played with two teams it’s a great game that requires minimal props. This game is known by different names, including pithoo, satoliya, and more."
        },
        {
          img:g,
          title:"Tamil Nadu",
          description:"Moksha Patam, also known as Gyan Chaupar, is a medieval Indian board game. It was typically played on a cloth board with a succession of squares. Some of the most complex boards included additional iconographies, such as portraits or ornate borders. It was a board game used by religious authorities to educate the distinction between good and evil, with ladders symbolising good and snakes representing evil."
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
     <div className="search-select bg-dark text-center">
                <input
                    type="text"
                    placeholder="Search by Description..."
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

            <div className="image-grid">
                {filteredCards.map((card, index) => (
                    <div className="image-item" key={index}>
                        <div class="card" style={{ width: 288, boxShadow: '0 4px 100px 0 rgba(0, 0, 0, 0.2), 0 15px 10px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={card.img} className="mx-5" style={{ height: 200, marginLeft: 42 }} alt={`Image ${index}`} class="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title text-center">{card.title}</h5>
                                <h5 className="card-title text-center">{card.description}</h5>
                                {/* {showFullDescription ? (
            <p>{card.description}</p>
          ) : (
            <p>{card.description.slice(0, 100)}...</p>
          )}
          <button onClick={() => setShowFullDescription(!showFullDescription)}>
            {showFullDescription ? 'Read Less' : 'Read More'}
          </button> */}
                                <a href="#" class="btn btn-primary w-50 mx-5">Find</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}
export default Games;