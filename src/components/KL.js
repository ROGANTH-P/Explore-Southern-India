import React from "react";
import i4 from '../img/wed/i4.jpeg';
import i7 from '../img/wed/i7.jpg';
import { HashLink as Link } from 'react-router-hash-link';

function KL() {
  return (
    <div>
      <div style={{ margin: '20px', textAlign: 'center' }} className="mx-4">
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
        Kerala Customs
      </h1>
      <div className="row">
        <div className="col-6 p-4">
          <img src={i4} style={{ width: '750px', height: '450px' }} />
        </div>
        <div className="col-6 my-5">
          <p>
            <strong style={{ color: '#FFBB5C' }}>Arranged Marriages:</strong>{' '}
            Arranged marriages are common in Kerala, where families play a
            significant role in matchmaking.Compatibility is often determined
            based on horoscopes, family backgrounds, and social status.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Pre-Wedding Rituals:</strong>{' '}
            Nischayam (Engagement): The formal engagement ceremony where the
            bride and groom exchange rings. Pendlikoothuru: The bride is adorned
            with henna patterns on her hands and feet.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Wedding Ceremony:</strong>{' '}
            Kalyanam (Wedding): The wedding takes place in a temple or a
            traditional venue. The bride wears a white saree with golden borders
            (Kasavu saree), and the groom wears a traditional dhoti. Thaali
            (Mangalsutra) Ceremony: The tying of the sacred thread or thaali
            around the bride's neck is a crucial moment in the ceremony. Sadhya
            (Feast): A sumptuous feast is served, featuring a variety of Kerala
            dishes.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Post-Wedding Rituals:</strong>{' '}
            Grihapravesham: The bride enters her new home for the first time.
            Sadhya (Feast): Another grand feast is often hosted by the groom's
            family.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Attire and Jewelry:</strong>{' '}
            Traditional attire for the bride includes the Kasavu saree, adorned
            with gold jewelry like necklaces, earrings, bangles, and anklets.
            The groom typically wears a white or cream-colored dhoti and a silk
            angavastram. He may also wear gold jewelry.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 my-5">
          <p>
            <strong style={{ color: '#FFBB5C' }}>Music and Dance:</strong>{' '}
            Kerala weddings often feature traditional music and dance forms like
            Kathakali and Mohiniyattam, adding a cultural touch to the
            celebrations.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>
              Rituals Specific to Communities:
            </strong>{' '}
            Different communities within Kerala may have unique customs and
            rituals. For example, Syrian Christian weddings have their own set
            of traditions, as do Hindu weddings among various sub-communities.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Sadhya (Feast):</strong> Food
            is an integral part of Kerala weddings, and a sadhya or grand feast
            is a highlight. It typically includes a variety of vegetarian dishes
            served on a banana leaf, with an array of flavors and spices.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>
              Music and Entertainment:
            </strong>{' '}
            Kerala weddings often feature traditional and dance performances,
            including the popular "Thiruvathira Kali" dance performed by women.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Exchange of Gifts:</strong>{' '}
            Both families exchange gifts and presents as a sign of goodwill and
            to strengthen the newly formed bond between the families.
          </p>
        </div>
        <div className="col-6 p-0">
          <img src={i7} style={{ width: '750px', height: '450px' }} />
        </div>
      </div>
    </div>
  );
}
export default KL;
