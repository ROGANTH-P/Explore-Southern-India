import React from "react";
import i8 from '../img/wed/i8.jpeg';
import i3 from '../img/wed/i3.jpg';
import { HashLink as Link } from 'react-router-hash-link';


function TN() {
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
        TamilNadu Customs
      </h1>
      <div className="row">
        <div className="col-6 p-4">
          <img src={i8} style={{ width: '750px', height: '450px',marginTop:'100px'}} />
        </div>
        <div className="col-6 my-5">
          <p>
            <strong style={{ color: '#FFBB5C' }}>Arranged Marriages:</strong>{' '}
            Arranged marriages are the norm in Tamil Nadu, and families play a
            pivotal role in selecting suitable partners. Compatibility is often
            determined based on factors like horoscopes, family background, and
            social status.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Pre-Wedding Rituals:</strong>{' '}
            Panda Kaal Muhurtham: This ceremony involves seeking blessings from
            elderly family members. The bride and groom usually exchange gifts
            during this occasion. Mehendi: Application of henna on the bride's
            hands and feet with intricate designs. Nalangu: A playful event
            where the bride and groom engage in fun games and activities.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Wedding Ceremony:</strong>{' '}
            Muhurtham: The wedding takes place at an auspicious time chosen by
            the priest. The bride typically wears a traditional Kanchipuram silk
            saree, while the groom wears a traditional dhoti and angavastram.
            Tying the Thali (Mangalsutra): A crucial moment in the ceremony when
            the sacred thread (thali or mangalsutra) is tied around the bride's
            neck by the groom, symbolizing her marital status. Saptapadi: The
            couple takes seven steps around the sacred fire, with each step
            symbolizing a marital vow and commitment. Exchange of Garlands: The
            bride and groom exchange floral garlands as a sign of acceptance and
            union. Kannika Dhanam: The groom presents a symbolic gift or dower
            to the bride as a gesture of respect and responsibility. Blessings
            from Elders: The newlywed couple seeks blessings from their elders
            and receives their good wishes.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 my-5">
          <p>
            <strong style={{ color: '#FFBB5C' }}>Attire and Jewelry:</strong>{' '}
            The bride usually wears a vibrant and intricately designed
            Kanchipuram silk saree, adorned with gold jewelry, including
            necklaces, earrings, bangles, and anklets. The groom typically wears
            a dhoti and angavastram, along with gold jewelry.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Music and Dance:</strong> Tamil
            Nadu weddings are known for their traditional music and dance
            performances. Classical dance forms like Bharatanatyam and
            traditional music like Nadaswaram are commonly featured during the
            wedding festivities.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Post-Wedding Rituals:</strong>{' '}
            Grihapravesham: The bride enters her new home for the first time,
            and there are various rituals to welcome her. Reception: A reception
            is often hosted by the bride's family to celebrate the marriage with
            relatives and friends.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Feast:</strong> A sumptuous
            feast is an integral part of Tamil Nadu weddings. It includes a
            variety of vegetarian and non-vegetarian dishes served on banana
            leaves.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Exchange of Gifts: </strong>{' '}
            Both families exchange gifts and presents as a sign of goodwill and
            to strengthen the bond between the families.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Thamboolam</strong> At the end
            of the wedding, guests are often given a thamboolam, which is a
            package containing betel leaves, betel nuts, turmeric, and other
            items symbolizing good luck and prosperity.
          </p>
        </div>
        <div className="col-6 p-0">
          <img src={i3} style={{ width: '750px', height: '450px',marginTop:'200px' }} />
        </div>
      </div>
    </div>
  );
}
export default TN;
