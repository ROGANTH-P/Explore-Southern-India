import React from "react";
import i2 from '../img/wed/i2.jpg';
import i6 from '../img/wed/i2.jpg';
import { HashLink as Link } from 'react-router-hash-link';

function KN() {
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
        Karnataka Customs
      </h1>
      <div className="row">
        <div className="col-6 p-4">
          <img src={i2} style={{ width: '750px', height: '450px' }} />
        </div>
        <div className="col-6 my-5">
          <p>
            <strong style={{ color: '#FFBB5C' }}>
              Nischay Tamulam (Engagement):
            </strong>{' '}
            This is the formal engagement ceremony where the families of the
            bride and groom exchange gifts, fruits, and betel leaves as a sign
            of their agreement to the marriage.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>
              Naandi (Pre-wedding Rituals):
            </strong>{' '}
            These are various pre-wedding rituals that include the Haldi
            ceremony (applying turmeric paste on the bride and groom), and the
            Kashi Yatra where the groom pretends to go on a pilgrimage but is
            persuaded by the bride's father to marry his daughter.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>
              Devak (Prayers to Ancestors):
            </strong>{' '}
            Before the wedding, both families conduct a special prayer to seek
            blessings from their ancestors for the successful marriage.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>
              Mangala Snaanam (Sacred Bath):
            </strong>{' '}
            On the day of the wedding, the bride and groom take a ceremonial
            bath to purify themselves before the wedding.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>
              Nischay Tamulam (Engagement):
            </strong>{' '}
            This is the formal engagement ceremony where the families of the
            bride and groom exchange gifts, fruits, and betel leaves as a sign
            of their agreement to the marriage.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 my-5 p-3">
          <p>
            <strong style={{ color: '#FFBB5C' }}>Kashi Yatra:</strong> This is a
            symbolic ritual where the groom pretends to leave for the holy city
            of Kashi (Varanasi) as if he is renouncing the world. However, he is
            convinced by the bride's father to return and marry his daughter.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Muhurtham:</strong> The actual
            wedding ceremony is known as Muhurtham. It is conducted at an
            auspicious time, and the bride and groom exchange vows and perform
            rituals under the guidance of a priest.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Kanya Danam:</strong> This is
            the ritual of giving away the bride by her parents. The father of
            the bride places her hand in the groom's hand, symbolizing her
            transfer from her paternal family to her marital family.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>Mangalsutra:</strong> The groom
            ties a sacred thread or necklace (mangalsutra) around the bride's
            neck, symbolizing their marital union.
          </p>
          <p>
            <strong style={{ color: '#FFBB5C' }}>
              Saptapadi (Seven Steps):
            </strong>{' '}
            The couple takes seven symbolic steps together, each step
            representing a vow they make to each other.
          </p>
        </div>
        <div className="col-6 p-0">
          <img src={i6} style={{ width: '750px', height: '450px' }} />
        </div>
      </div>
    </div>
  );
}
export default KN;
