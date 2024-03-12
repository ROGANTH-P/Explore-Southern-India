import React from "react";
import i2 from '../img/wed/i2.jpg';
import i9 from '../img/wed/i9.jpg';
import { HashLink as Link } from 'react-router-hash-link';
function AP() {
  return (
    <div>
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <button type="button" class="btn btn-outline-secondary">
        <Link to='/tamilnadu_wedding'>Tamil Nadu</Link>
        </button>
        <button type="button" class="btn btn-outline-secondary ">
        <Link to='/Kerala_wedding'>Kerala</Link>
        </button>
        <button type="button" class="btn btn-outline-secondary">
        <Link to='/Karnataka_wedding'>Karnataka</Link>
        </button>
        <button type="button" class="btn btn-outline-secondary active">
        <Link to='/Andhra_wedding'>Andhra Pradesh</Link>
        </button>
      </div>
      <h1 className="text-center text-blue-500" style={{ color: 'blue' }}>
        Customs of Andhra Pradesh
      </h1>
      <div className="row">
        <div className="col-6 p-4">
          <img src={i2} style={{ width: '750px', height: '450px' }} />
        </div>
        <div className="col-6 my-5">
          <p>
            <strong style={{ color: '#FFBB5C' }}>Arranged Marriages:</strong>{' '}
            Arranged marriages are prevalent in Andhra Pradesh, where families
            play a crucial role in matchmaking. Compatibility is often assessed
            based on horoscopes, family backgrounds, and social status.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Pre-Wedding Rituals:</strong>{' '}
            Pendlikoothuru: Similar to henna application in other regions, the
            bride's hands and feet are adorned with intricate henna designs.
            Snathakam: The groom wears a silver thread or chain around his body,
            symbolizing his coming of age. Nischitartham (Engagement): The
            formal engagement ceremony where the bride and groom exchange rings.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Wedding Ceremony:</strong>{' '}
            Kanyadanam: The giving away of the bride by her parents to the
            groom, symbolizing the parents' consent for the marriage.
            Mangalsutra Dharana: The tying of the sacred thread (mangalsutra)
            around the bride's neck by the groom. Jeelakarra-Bellam Ceremony: A
            symbolic ritual where the bride and groom apply a paste of cumin and
            jaggery on each other's hands, signifying the sweet and bitter
            aspects of life. Saptapadi: The couple takes seven steps around a
            sacred fire, each step representing a marital vow and commitment.
            Arundhati Darshan: The newlyweds seek blessings from the star
            Arundhati (a symbol of marital fidelity) by viewing it in the sky.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Post-Wedding Rituals:</strong>{' '}
            Grihapravesham: The bride enters her new home for the first time,
            and various welcoming rituals are performed. Reception: A reception
            is often held to celebrate the marriage with family and friends
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 my-5">
          <p>
            <strong style={{ color: '#FFBB5C' }}>Music and Dance:</strong>{' '}
            Andhra Pradesh weddings often feature traditional music and dance
            performances, including the popular "Kuchipudi" dance form.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Feast:</strong> A grand feast
            is an integral part of Andhra Pradesh weddings, featuring a variety
            of delicious dishes, including both vegetarian and non-vegetarian
            options.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Exchange of Gifts: </strong>{' '}
            Both families exchange gifts and presents as a sign of goodwill and
            to strengthen the bond between the families.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>
              Saree Draping Ceremony:{' '}
            </strong>{' '}
            The bride's maternal uncle often plays a significant role in draping
            the saree, symbolizing his support for the bride.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Attire and Jewelry:</strong>{' '}
            The bride typically wears a traditional silk saree, often in vibrant
            colors, and is adorned with gold jewelry such as necklaces,
            earrings, bangles, and anklets. The groom wears a traditional dhoti
            and may also wear gold jewelry.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>
              Sadya (Banana Leaf Feast):{' '}
            </strong>{' '}
            Traditional Andhra meals are often served on banana leaves during
            weddings, known for their flavors and aromatic spices.
          </p>
        </div>
        <div className="col-6 p-0">
          <img src={i9} style={{ width: '750px', height: '450px' }} />
        </div>
      </div>
    </div>
  );
}
export default AP;
