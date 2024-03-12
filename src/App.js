import React, { useState } from 'react';
import VideoGrid from './components/VideoGrid';

import { HashLink as Link } from 'react-router-hash-link';


const videos = [
  {
    title: "NATYANJALI DANCE FESTIVAL",
    description: "The festival of dances. Dance has been considered to be the greatest ways of connecting with their souls and thus in turn connecting with our Oversoul, the Lord. Dance has been a crucial part of Indian culture throughout the ages.",
    thumbnail: "images/image1.jpg",
    videoUrl: "https://youtu.be/LdG1odl_ICg?si=QcuFYZqrjFv_-Xzg",
  },
  {
    title: " Mahamaham",
    description: "Kumbakonam is the small town of Tamil Nadu where this festival is celebrated in every 12 years. It is organised in a massive way. This festival has the grandeur of both Indian as well as Greek festivals. ",
    thumbnail: "images/image2.jpg",
    videoUrl: "https://youtu.be/5Pg_PcOd4vo?si=BPQOF2kiqpLSRT8l",
  },
  {
    title: "MUSIC & DANCE FESTIVAL, CHENNAI",
    description: "Blessed by the charm of South India's classical music and dance forms is the festival celebrated in the capital city of Tamilnadu which tops the list of popular festivals and fairs.",
    thumbnail: "path-to-thumbnail-3.jpg",
    videoUrl: "https://youtu.be/M8sZmKwwJYI?si=NLZ4Gp6WvcJbZYW1",
  },
  {
    title: "JALLIKATTU BULL FESTIVAL",
    description: "An essential part of the Pongal festival which is celebrated on Mattu Pongal day, this popular festival works around the idea of mastering a bull and is celebrated widely in Tamilnadu",
    thumbnail: "path-to-thumbnail-3.jpg",
    videoUrl: "https://youtu.be/ch56CuzNYPA?si=DjJtRsiEISEmXLzD",
  },
  {
    title: "CHITRI RAI FESTIVAL",
    description: "Adding festive shine in the month of April, the holy city of Madurai celebrates Chithirai, a two-week long festival portraying the wedding of Goddess Meenakshi and Lord Sundareswarar in Meenakshi Temple",
    thumbnail: "path-to-thumbnail-3.jpg",
    videoUrl: "https://youtu.be/bDVDs0W3G2k?si=gUqMM7Faz3mBSzBw",
  },
  {
    title: "Thiruvaiyaru Festival",
    description: "Thiruvaiyaru Festival is an annual Tamil festival, coincides with Pushya Bahula Panchami day and is a tribute to Thaygaraja, a popular music composer and saint with origins from Thiruvaiyaru town in Thanjavur district.",
    thumbnail: "path-to-thumbnail-3.jpg",
    videoUrl: "https://youtu.be/PnjaUVUpjTM?si=i19zxiAtPkhDi0Og",
  },
  {
    title: "kurunasamy kovil festival",
    description: "The Anthiyur Gurunatha Swamy Temple Festival is one of the most revered and significant cultural events in Tamil Nadu, India. This annual festival draws thousands of devotees and tourists alike from all over the country. It is a celebration of the Hindu god Gurunatha Swamy, who is believed to be the protector of the village of Anthiyur.",
    thumbnail: "path-to-thumbnail-3.jpg",
    videoUrl: "https://youtu.be/A9CQEjE6QEw?si=HqKbgxSZtneNvMqK",
  },
  {
    title: "pariyur amman temple festival",
    description: "The famous 'Fire Walking Ceremony' (Kundam) is held during January every year. The kundam is 40 feet in length and lakhs visit the temple during this ceremony. The annual car festival is celebrated during that with grandeur. This temple attracts a large gathering from the surrounding places all the time.",
    thumbnail: "path-to-thumbnail-3.jpg",
    videoUrl: "https://youtu.be/5rh9OSsBbTk?si=3UTEpXHpVHgF1ZUj",
  },
  {
    title: "ponnar shankar temple festival-veerapur ",
    description: "The Ponnar-Sankar story starts from their grandfathers. The chieftain of the Vazhavanthi country in Chera kingdom (part of Southern Namakkal district) was Kolaththa Gounder, eldest among the twelve brothers. Kolaththa Gounder and his wife Ariyanaachi decide to leave their country Perungudi because of atrocities of his unjust brothers.",
    thumbnail: "path-to-thumbnail-3.jpg",
    videoUrl: "https://youtu.be/5-WMK3we-cY?si=oUb8_knkV70b0QEh",
  },
  {
    title: "Yercaud Summer Festival",
    description: "The main festival in Yercaud is the Summer Festival held every year in the Last week of May. All residents and visitors take part in the festivities with flower shows, dog shows and boat races being held. There are many cultural shows put up too and the festival draws many visitors from nearby places.",
    thumbnail: "path-to-thumbnail-3.jpg",
    videoUrl: "https://youtu.be/hBXgIkP7LaU?si=5RruGLWyKkIeRWmU",
  },
  {
    title: "Kottai Marriamman Temple:",
    description: "Tamil Nadu celebration of Mariyamman Temple festival is organized widely during the month of July and August. The week long festival is ended with fire walk. One of the famous Mariyamman Temple festival is celebrated at the Kottai Mariyamman Temple.",
    thumbnail: "path-to-thumbnail-3.jpg",
    videoUrl: "https://youtu.be/27ILfveeyzc?si=pSGla5EcxLxiGYg_",
  },
  {
    title: "Makar Pongal Ooty.",
    description: "Pongal is a harvest festival celebrated in the month of January in the hill town of Ooty. It is celebrated by the locals to offer thanks to the Sun God, the Nature, the Rain God as well as the cattle for blessing their lands with greenery and good harvest.",
    thumbnail: "path-to-thumbnail-3.jpg",
    videoUrl: "https://youtu.be/Pcfy9TLQruk?si=FfG0mbD4RyrICoCN",
  }
 
  // Add more video objects as needed
];


function App() {

    const [clicked, setClicked] = useState(false);

    const handleToggleClick = () => {
      setClicked(!clicked);
    };

    
  return (
   
    <>

      




    <div className="bg-gradient-to-r from-blue-600 to-pink-200  via-blue-800 min-h-screen" style={{marginTop:-20}}>
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mt-4 mb-8 text-white mx-20 relative">
        <span
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-1 px-4 text-white tex-center"
          style={{ letterSpacing: '0.15em', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
        >
          FESTIVALS PREVIOUS YEAR VIDEOS
        </span>
        <span
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          style={{ zIndex: '-1' }}
        ></span>
      </h1>
      <VideoGrid videos={videos} />
    </div>
  </div>
  </>
  
  );
}

export default App;