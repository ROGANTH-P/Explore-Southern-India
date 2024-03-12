import React from 'react';
import '../CSS/History.css';
import tajmahal from '../img/tajmahal.jpeg';
import redfort from '../img/redfort.jpg';
import gateway from '../img/gateway.jpeg';
import madurai from '../img/madurai.jpg';
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLandmark: 'TajMahal',
    };
  }

  render() {
    const { currentLandmark } = this.state;

    const landmarks = {
      RedFort: {
        title: 'Red Fort - The Seat of Power',
        image: redfort,
        story: `
        Once upon a time, in the bustling city of Delhi, there stood a magnificent fort made of beautiful red sandstone. This fort was called the "Red Fort," and it was a place of great history and adventure.

Long ago, in the 17th century, there was a mighty emperor named Shah Jahan. He was a kind and powerful ruler who loved his people dearly. Emperor Shah Jahan wanted to build a grand palace that would be as splendid as his love for his kingdom.

So, he called upon the most skilled architects and craftsmen to create this incredible fort. They worked tirelessly, carving intricate designs into the red stones, creating arches and domes that reached up high into the sky, and painting the walls with bright colors.

The Red Fort was like a palace out of a fairy tale. It had grand halls where the emperor would have grand feasts and meet with important visitors. There were beautiful gardens with fountains where children played, and where flowers bloomed in every color of the rainbow.

But the Red Fort was not just a palace; it was also a symbol of strength and power. The massive walls protected the people inside, and soldiers guarded its gates.

One special day, something incredible happened at the Red Fort. India declared its independence! The brave leader, Jawaharlal Nehru, stood on the fort's grand ramparts and told the world that India was free.

From that day forward, the Red Fort became a symbol of India's freedom and the dreams of a better tomorrow. Every year, on Independence Day, people gather at the Red Fort to celebrate their country's freedom with music, dances, and the waving of the Indian flag.

So, children, when you visit the Red Fort, remember the stories of the brave kings and queens who lived there and the heroes who fought for their country's freedom. It's a magical place where history and dreams come alive, and it's waiting for you to explore and discover its secrets.
        `,
      },
      GatewayOfIndia: {
        title: 'Gateway of India - The Arrival and Departure',
        image: gateway,
        story: `
        Once upon a time, in a bustling city by the sea, there was a grand archway called the "Gateway of India." It stood tall and majestic, like a giant welcoming everyone to the magical land of Mumbai.

        The Gateway of India was a bit like a storyteller. It had seen so many stories unfold on its steps, by the sparkling waters of the Arabian Sea. Let me tell you about its favorite story.
        
        A long, long time ago, when kings and queens ruled India, there was a special visit. The great King George V and his queen, Mary, decided to visit Mumbai, which was known as Bombay back then.
        
        To celebrate their visit, the people of Mumbai decided to build something incredible—an arch that would be fit for a king and queen. They wanted to show their love and respect for the royal visitors.
        
        So, they worked tirelessly to build this archway by the sea. It was made of solid stone, and it had the most beautiful carvings and designs. The arch looked like a giant, welcoming smile to all who approached it.
        
        When King George V and Queen Mary arrived in Mumbai, they sailed right through the Arabian Sea and were welcomed by the magnificent Gateway of India. The archway stood proudly, as if saying, "Welcome to our beautiful city!"
        
        The Gateway of India has seen many stories since then. It has seen ships sail in from distant lands, bringing people with dreams of adventures and discoveries. It has heard the laughter of children playing by the sea and the songs of street musicians.
        
        But it has also seen tears in the eyes of soldiers, who left their families behind to protect their homeland. It has seen people bid farewell to their loved ones, not knowing when they would meet again.
        
        Today, the Gateway of India stands as a symbol of welcome and hope. People from all over the world come to visit it, just like you. They take pictures, eat ice cream, and enjoy the sea breeze.
        `,
      },
      Madurai: {
        // Add the Meenakshi Temple in Madurai
        title: 'Meenakshi Temple - The Magical Sanctuary',
        image: madurai,
        story: `
        Once upon a time, in the ancient city of Madurai in India, there was a magnificent temple called the "Meenakshi Temple." This temple was unlike any other; it was a place of magic, legends, and colorful celebrations.

        Long ago, in a land of stories and legends, there lived a brave and kind princess named Meenakshi. She had a twinkle in her eye that matched the stars in the night sky, and her laughter was as musical as a songbird's melody.

        Princess Meenakshi was known throughout the kingdom for her courage and her love for her people. She wanted to make her kingdom the happiest and most beautiful place in the world.

        One day, as she strolled through the city of Madurai, she came across a grand temple. Its towers reached for the sky, and its walls were adorned with beautiful carvings. The temple was a place of worship, and people from all over the kingdom came to offer their prayers.

        As Meenakshi entered the temple, she felt a deep sense of peace and serenity. She knew that this temple was a special place, and she decided to make it even more beautiful.

        Princess Meenakshi summoned the best architects and craftsmen from her kingdom. They worked day and night to transform the temple into a masterpiece of art and architecture. The temple's towers were painted in vibrant colors, and every inch of its walls was covered in intricate carvings.

        But there was something even more magical about the temple. It was said that inside the temple, there lived a beautiful goddess named Meenakshi, just like the princess herself. People believed that the goddess blessed the kingdom with happiness and prosperity.

        The Meenakshi Temple became a place of joy and celebration. Every year, the people of Madurai would come together to celebrate the temple's grand festival. There were colorful processions, lively music, and delicious sweets. It was a time when everyone forgot their worries and danced with joy.

        Children would visit the temple with their families, and they would be amazed by the towering gopurams (entrance towers) and the stories carved on the walls. They would offer flowers to the goddess and make a wish for their dreams to come true.

        And so, the Meenakshi Temple stood as a symbol of love, devotion, and the magic of dreams. It reminded everyone that even a brave and kind princess like Meenakshi could make her kingdom a place of beauty and happiness.

        Today, when you visit the Meenakshi Temple in Madurai, remember the story of Princess Meenakshi and the magical temple she created. It's a place where dreams come alive, and where the laughter of children fills the air, just like in the days of old.
        `,
      },
      TajMahal: {
        title: 'Taj Mahal - The Eternal Love Story',
        image: tajmahal,
        story: `
        Once upon a time, in a faraway land called India, there was a great and powerful emperor named Shah Jahan. He lived in a magnificent palace with his beautiful wife, Mumtaz Mahal. The emperor and his queen were deeply in love, and they were the happiest couple in the whole kingdom.

        One day, something very sad happened. Mumtaz Mahal became very ill and, despite the best efforts of doctors and healers, she passed away. Emperor Shah Jahan was heartbroken. He missed his queen so much that he couldn't stop thinking about her.
        
        To honor his beloved wife's memory, the emperor decided to build something extraordinary—a grand monument that would be the most beautiful in the world. He called this magnificent creation the "Taj Mahal," which means "Crown of Palaces."

        Shah Jahan gathered the most skilled architects, builders, and craftsmen from all over the kingdom. They worked tirelessly for many years to create the Taj Mahal. It was made of dazzling white marble and adorned with precious gemstones, making it shine like a pearl in the sunlight.
        The Taj Mahal had tall, slender towers that reached high into the sky, and its central dome was like a beautiful princess's crown. The walls of the monument were covered in intricate carvings, telling stories of love and devotion. 
        Emperor Shah Jahan's love for his queen and the Taj Mahal's beauty touched the hearts of everyone who saw it. The Taj Mahal became a symbol of eternal love and a treasure of India.
        To this day, people from all over the world visit the Taj Mahal to see its breathtaking beauty and learn about the enduring love story of Emperor Shah Jahan and Mumtaz Mahal. It reminds us that love is the most precious thing in the world, and it can create something truly magical and timeless
        `,
      },
    };

    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4 text-success">Secrets of the Old Town: A Fantasy</h1>
        <div className="d-flex justify-content-center">
          {Object.keys(landmarks).map((landmark) => (
            <button
              key={landmark}
              className={`btn btn-primary mx-2 ${
                currentLandmark === landmark ? 'active' : ''
              }`}
              onClick={() => this.setState({ currentLandmark: landmark })}
            >
              {landmark}
            </button>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <h2 className="mb-3 text-warning">
              {landmarks[currentLandmark].title}
            </h2>
            <div className='d-flex justify-content-center'>
            <img
              className="img-fluid mb-3"
              src={landmarks[currentLandmark].image}
              alt={currentLandmark}
            />
            </div>
            <p>{landmarks[currentLandmark].story}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default History;

