import logo from '../img/logo.jpg';
import img1 from '../img/img1.jpg';
import '../CSS/home1.css'
import img2 from '../img/img2.jpg';
import img4 from '../img/img4.jpg';
import img3 from '../img/img3.jpg';
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import pic4 from '../img/pic4.jpg';
import airplane from '../img/airplane.png';
import Pongal from '../img/vinayagar.jpg';
import Dance from '../img/natyanjali-dance-festival-in-tamil-nadu-india-1.jpg';
import Music from '../img/Lead-Getty.webp';
import Temple from '../img/temple.jpeg';
import Video from '../video/video.mp4';
import { HashLink as Link } from 'react-router-hash-link';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/reset.css';
import { Dropdown } from 'react-bootstrap';



import { Calendar } from 'antd';

import { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTextMapping: {
        '2023-09-10': [<img style={{height:50,borderRadius:50}} src={Pongal}/>,"Vinayagar Chathurthi"],
        '2023-09-15': '',
        // Add more date-text mappings as needed
      },
    };
  }

  dateCellRender = (value) => {
    const dateStr = value.format('YYYY-MM-DD');
    const customText = this.state.dateTextMapping[dateStr];

    return (
      <div>
        {customText && <div className="custom-calendar-cell">{customText}</div>}
      </div>
    );
  };

  monthCellRender = (value) => {
    const month = value.month() + 1;
    return <div className="custom-month-cell">Month {month}</div>;
  };


 state = {clicked:false};
  handleclick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
   <>
 
 <nav>
      <div>
        
      </div>
      <div>
        <ul id="navbar" className={this.licked ? 'active' : ''}>
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
      <div id="mobile" onClick={this.handleToggleClick}>
        <i id="bar" className={this.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>


{/* 
        <header id="home">
            <div className="overlay">
                <div className="container">
                    <div>
                        <h1><span>Indian Culture</span></h1><br></br><h2>Explore India's Rich Cultural Tapestry</h2>
                        <p style={{backgroundColor:'transparent'}}>India has a massive cultural reach. In almost every town and city in the world there are Indian restaurants – ok, some dispute how authentic many of these establishments are, but still, there presence shows how wide Indian culture has spread.</p>
     
                    </div>
                </div>
            </div>
        </header> */}



<div className='myvideo'>
      <video src={Video} autoPlay loop muted />
      
      <div className="content m-0">
      <div className="text-center">
      <h1 style={{fontSize:50}}>Welcome to the Indian Culture and Heritage</h1>
      <p style={{padding:10,backgroundColor:"transparent"}}>Tamil Nadu is a southern state of India which is supremely rich in culture and heritage. Known to be one of the oldest civilisations in the world, the people of Tamil Nadu belong to the prestigious Dravidian Family. Tamilians also, like other South Indians, take much pride in their rooted Tamil culture and make great efforts to protect their 2000 years old history. The state has been ruled by the Cholas, Pandyas and the Pallavas and has been flourishing since. The art and architecture have been their creations which are used and maintained even today.</p>
      </div>
     
      </div>
      </div>



        <div className="about-us" id="about">
            <div className="small-container">
                <h2 className="text-center">Welcome To<span>Holiday</span></h2>
                <p className="text-center">Culturals are India's Backbone</p>
                <div>
                    <div className="container" style={{marginTop:15}}>
                        <div className="row">
                            <div className="col-lg-6 col-12 text-center">
                                <div className="item">
                                    <img src={img2}/>
                                    <h5 className="text-uppercase">Restaurants</h5>
                                </div>
                                <div className="item">
                                    <img src={img1}/>
                                    <h5 className="text-uppercase">Shops</h5>
                                </div>
                                <div className="item">
                                    <img src={img4}/>
                                    <div>
                                        <h5 className="text-uppercase">Sightseeing</h5>
                                        <p style={{backgroundColor:'transparent'}}>Easy to locate a place</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={img3}/>
                                    <h5 className="text-uppercase">Places</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 text-right">
                                <h4 className="text-uppercase">Have a Happy<span>holiday</span></h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like</p>
  
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>


      <div>
        <h1 className='font-bold text-center m-4 font text-3xl text-[orange] hover:underline'>Places to Visit</h1>
      </div>

        <div className="grid grid-cols-5 gap-3 mt-10 pl-2 pr-2">
        <div className="shadow shadow-gray-400 hover:scale-110">
            <img src="https://images.pexels.com/photos/10329512/pexels-photo-10329512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className=" w-[260px] h-[260px]"></img>
            <p className="text-center p-2">Temples</p>
        </div>
        <div className="shadow shadow-gray-400 hover:scale-110">
            <img src="https://images.pexels.com/photos/1011093/pexels-photo-1011093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className=" w-[260px] h-[260px]"></img>
            <p className="text-center p-2">Forts</p>
        </div>
        <div className="shadow shadow-gray-400 hover:scale-110">
            <img src="https://images.pexels.com/photos/9455189/pexels-photo-9455189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className=" w-[260px] h-[260px]"></img>
            <p className="text-center p-2">Caves</p>
        </div>
        <div className="shadow shadow-gray-400 hover:scale-110">
            <img src="https://images.pexels.com/photos/5114713/pexels-photo-5114713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className=" w-[260px] h-[260px]"></img>
            <p className="text-center p-2">Waterfalls</p>
        </div>
        <div className="shadow shadow-gray-400 hover:scale-110">
            <img src="https://images.pexels.com/photos/18364866/pexels-photo-18364866/free-photo-of-exterior-of-the-humayuns-tomb.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className=" w-[260px] h-[260px]"></img>
            <p className="text-center p-2">Historic Sites</p>
        </div>


   
    </div>

  

    <div>
            <h1 className="font-bold text-center m-4 font text-3xl text-[orange] hover:underline">Trending Topics</h1>
            <div className="flex justify-center items-center gap-4 m-10">
            <div className=" w-[180px] h-[180px] hover:scale-110">
                <img src="https://www.caleidoscope.in/wp-content/uploads/2022/07/Indian-Artists.jpg"></img>
            </div>
            <div className=" w-[180px] h-[180px] hover:scale-110">
                <img src="https://www.caleidoscope.in/wp-content/uploads/2022/07/Indian-Art-Galleries.jpg"></img>
            </div>
            <div className=" w-[180px] h-[180px] hover:scale-110">
                <img src="https://www.caleidoscope.in/wp-content/uploads/2022/07/Indian-Fabric-Art-3.jpg"></img>
            </div>
            <div className=" w-[180px] h-[180px] hover:scale-110">
                <img src="https://www.caleidoscope.in/wp-content/uploads/2022/07/Indian-Folk-Dance.jpg"></img>
            </div>
            <div className=" w-[180px] h-[180px] hover:scale-110">
                <img src="https://www.caleidoscope.in/wp-content/uploads/2022/07/Indian-Craft.jpg"></img>
            </div>
            <div className=" w-[180px] h-[180px] hover:scale-110">
                <img src="https://www.caleidoscope.in/wp-content/uploads/2022/07/Indian-Fabric-Art-1.jpg" ></img>
            </div>
            </div>
        </div>

{/* 
        <div className='text-center w-100 h-50' style={{display: 'block',width:500, padding: 30}}>
      <h2 className=''>Events in the Month</h2>
      <Calendar onChange={(value) => {
        alert(`Your selected ${value.format('YYYY-MM-DD')}`)
      }} />
    </div> */}

<div className='w-100 text-center' style={{marginTop:'100px'}}><h2 className=''>Events in the Month</h2></div>
<div className='row overflow-hidden w-100'>
<div className="App col-8">
        <div className="text-center w-75 " style={{ width: 500,paddingLeft:70,marginLeft:'120px'}}>
          
          <Calendar style={{backgroundColor:'#9D76C1'}}
            dateCellRender={this.dateCellRender}
            monthCellRender={this.monthCellRender}
            // onChange={(value) => {
            //   alert(`Your selected ${value.format('YYYY-MM-DD')}`);
            // }}
          />
        </div>
      </div>
    <div className='col-4 text-center p-5'>
      <img src={Temple} className='' style={{width:'400px',height:'500px'}}></img>
    </div>
      </div>

      <div className="statistics text-capitalize text-center font-weight-bold">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <i className="fas fa-umbrella-beach fa-3x"></i>
                        <h3>425</h3>
                        <p>Tourists</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <i className="fas fa-birthday-cake fa-3x"></i>
                        <h3>125</h3>
                        <p>years</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <i className="fa fa-home fa-3x"></i>
                        <h3>325</h3>
                        <p>cottages</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <i className="fas fa-glass-cheers fa-3x"></i>
                        <h3>120</h3>
                        <p>restaurants</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact" id="contact">
            <div className="violet-overlay">
                <div className="container">
                    <h2 className="text-center">Get in touch</h2>
                    <div className="contact-form">
                        <form method='post' >
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Phone"/>
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="SEND"/>
                        </form>
                      <Link  to='/bot'><button className='w-25 text-center my-3' style={{borderRadius:'10px',height:40,marginLeft:'280px'}}>Bot Online</button></Link>  
                        
                    </div>
                   
                </div>
            </div>
        </div>
        
  </>

        );
     }
}

export default Home;