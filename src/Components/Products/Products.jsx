import React from 'react';
import './Products.scss';
import Product from './Product';
import {Link} from 'react-router-dom';

import plattaMork from '../../Assets/products/plattaMork.jpg';
import platta from '../../Assets/products/platta.jpg';
import crunchyRoad from '../../Assets/products/crunchyRoad.jpg';
import karamellhjarta from '../../Assets/products/karamellhjarta.jpg';
import mandelGianduja from '../../Assets/products/mandelGianduja.jpg';
import lakritsgotties from '../../Assets/products/lakritsgotties.jpg';
import berriesMorkChoklad from '../../Assets/products/berriesMorkChoklad.jpg';
import berriesLjusChoklad from '../../Assets/products/berriesLjusChoklad.jpg';
import berriesVitChoklad from '../../Assets/products/berriesVitChoklad.jpg';
import vitChokladLakrits from '../../Assets/products/vitChokladLakrits.jpg';
import polvorones from '../../Assets/products/polvorones.jpg';
import mjolkchokladMint from '../../Assets/products/mjolkchokladMint.jpg';
import karamellOchSalt from '../../Assets/products/karamellOchSalt.jpg';

const products = [
  {
    id: 1,
    name: 'Mörk choklad med karamell',
    price: '1st för 8.50 €',
    priceValue: 8.5,
    description: 'Ljuvlig mörk choklad 70% med en klick kolakräm i varje hjärta. Nötfri.',
    ingredients:
      'Ca. 90g. Kakaomassa*, kakaosmör*, socker*, glykos, sirap*, kokosolja*, kokoskräm*, rörsocker*, kokos*, vanilj*, havssalt, (*)Ekologiska ingredienser.',
    image: plattaMork,
  },

  {
    id: 2,
    name: 'Ljus choklad med karamell',
    price: '1st för 8.50 €',
    priceValue: 8.5,
    description: 'Ljuvlig "mjölkchoklad" med en klick kolakräm i varje hjärta. Nötfri.',
    ingredients:
      'Ca. 90g. Kakaomassa*, kakaosmör*, socker*, glykos, sirap*, kokosolja*, kokoskräm*, havssalt, rörsocker*, kokos*,  vanilj*. (*)Ekologiska ingredienser.',
    image: platta,
  },

  {
    id: 3,
    name: 'Crunchy road',
    price: '1st för 5.00 €',
    priceValue: 5,
    description:
      'Vår finaste 52% "mjölkchoklad" blandad med hälsosamma eko bovete flingor, jätteknaprigt! Nötfri.',
    ingredients:
      'Ca. 50g. Kakaomassa*, kakaosmör*, kokos*, rörsocker*, bovete flingor*. (*)Ekologiska ingredienser.',
    image: crunchyRoad,
  },

  {
    id: 4,
    name: 'Karamellhjärta',
    price: '2st för 7.00 €',
    priceValue: 7,
    description: '"Mjölkchoklad" hjärta fyllt med krämig karamell och knapriga småkakor. Nötfri.',
    ingredients:
      'Ca. 60g. Glutenfri mjölmix, majsstärkelse, socker*, Carlshamn margarin, pumpafrön*, havssalt, bakpulver, dadelsirap, äppelsås*, linfrö*, kakaosmör*, kokos*, kakaomassa*, rörsocker*, kokosolja*, vanilj*, glykos, sirap*, kokoskräm*. (*)Ekologiska ingredienser.',
    image: karamellhjarta,
  },

  {
    id: 5,
    name: 'Mandel gianduja',
    price: '2st för 6.00 €',
    priceValue: 6,
    description:
      'Finaste Valencia mandlar och två toner choklad resulterar i en mycket tillfredställande godbit.',
    ingredients:
      'Ca. 60g. Mandel*, socker*, sirap*, kakaomassa*, kakaosmör*, glykos, vanilj*, havssalt, kokos*, rörsocker*, risstärkelse*, solroslecitin*. kan innehålla spår av hasselnötter. (*)Ekologiska ingredienser.',
    image: mandelGianduja,
  },

  {
    id: 6,
    name: 'Lakritsgottis',
    price: '3st för 6.00 €',
    priceValue: 6,
    description:
      'Två små chokladplattor fyllda med en härlig lakritskolakräm och rullade i lakritspulver och salmiakpulver. Nötfri.',
    ingredients:
      'Ca. 60g. Kakaomassa*, kakaosmör*, lakritspulver, socker*, glykos, sirap*, kokoskräm*, kokosolja*, havssalt, rörsocker*, kokos*, salmiakpulver, vanilj*. (*)Ekologiska ingredienser.',
    image: lakritsgotties,
  },

  {
    id: 7,
    name: 'Mörk choklad & Åländska bär',
    price: '1st för 7.00 €',
    priceValue: 7,
    description: 'Krämig mörk choklad med frystorkade åländska bär. Fräsch och fruktig. Nötfri.',
    ingredients:
      'Ca. 70g. Kakaomassa, kakaosmör*, rörsocker*, kokos*, glykos, vanilj*, frystorkade jordgubbar*, hallon*, blåbär*, lingon* och havtorn*. (*)Ekologiska ingredienser.',
    image: berriesMorkChoklad,
  },

  {
    id: 8,
    name: 'Ljus choklad & Åländska bär',
    price: '1st för 7.00 €',
    priceValue: 7,
    description: 'Krämig "Mjölkchoklad" med frystorkade åländska bär. Fräsch och fruktig. Nötfri.',
    ingredients:
      'Ca. 70g. Kakaomassa, kakaosmör*, rörsocker*, kokos*, glykos, vanilj*, frystorkade jordgubbar*, hallon*, blåbär*, lingon* och havtorn*. (*)Ekologiska ingredienser.',
    image: berriesLjusChoklad,
  },

  {
    id: 9,
    name: '"Vit" choklad & Åländska bär',
    price: '1st för 7.00 €',
    priceValue: 7,
    description: 'Krämig "vit" choklad med frystorkade åländska bär. Fräsch och fruktig. Nötfri.',
    ingredients:
      'Ca. 70g. Kakaosmör*, rörsocker*, kokos*, glykos, vanilj*, frystorkade jordgubbar*, hallon*, blåbär*, lingon* och havtorn*. (*)Ekologiska ingredienser.',
    image: berriesVitChoklad,
  },

  {
    id: 10,
    name: '"Vit" choklad med lakrits',
    price: '1st för 5.00 €',
    priceValue: 5,
    description:
      'Krämig "vit" choklad med mycket lakritssmak och toner av karamell. En favorit bland lakritsälskare. Nötfri.',
    ingredients:
      'Ca. 50g. Kakaosmör*, lakritspulver, rörsocker*, kokos*, havssalt, lakritsgranulat. (*)Ekologiska ingredienser.',
    image: vitChokladLakrits,
  },

  {
    id: 11,
    name: 'Polvorones',
    price: '4st för 5.00 €',
    priceValue: 5,
    description:
      'Från polvo, det spanska ordet för pulver. Det är en mjuk och mycket smulig shortbread från Spanien. Våra polvorones är baserade på mandel, olivolja och krossade kakaobönor.',
    ingredients:
      'Ca. 80g. Mandel, glutenfri mjölmix, bovetemjöl*, socker*, olivolja, kanel, havssalt, krossade kakaobönor*. (*)Ekologiska ingredienser.',
    image: polvorones,
  },

  {
    id: 12,
    name: 'Ljus choklad med mint',
    price: '1st för 5.00 €',
    priceValue: 5,
    description: 'Vår krämiga "mjölkchoklad" med en ljuvig mint fyllning. Nötfri.',
    ingredients:
      'Ca. 40g. Kakaomassa, kakaosmör*, rörsocker*, kokos*, vanilj*, invertsocker, mintolja. (*)Ekologiska ingredienser.',
    image: mjolkchokladMint,
  },

  {
    id: 13,
    name: 'Karamell & Salt',
    price: '4st för 8.50 €',
    priceValue: 8.5,
    description: 'Trippelfyllda chokladknappar som smälter i munnen. Nötfri.',
    ingredients:
      'Ca. 140g. Kakaomassa*, kakaosmör*, socker*, glykos, sirap*, kokosolja*, kokoskräm*, havssalt, rörsocker*, kokos*,  vanilj*. (*)Ekologiska ingredienser.',
    image: karamellOchSalt,
  },
];

const Products = (props) => {
  // Everytime the page is realoaded one checks if there is anything in the local storage
  // Othersise creates a new instance of it if its empty.
  window.onload = function () {
    const order = localStorage.getItem('Order');
    if (order) {
    } else {
      const productList = [];
      // const chocolate = [{name: 'choco', price: 100}];
      // productList.push(chocolate);
      localStorage.setItem('Order', JSON.stringify(productList));
    }
  };

  return (
    <div>
      <div className='products'>
        <h1>Våra produkter</h1>
        <div className='product-information'>
          <p>Här är vår kollektion. Är det något som ser jättegott ut?</p>
          <p>
            <Link to='/Contact'>Kontakta oss</Link> så hjälper vi till!
          </p>
          <p>Obs! Vi reserverar oss för att vissa produkter kan ta slut.</p>
        </div>
        <div className='flex-wrap'>
          {products.map((product) => (
            <Product product={product} updateOrders={props.updateOrders} />
          ))}
        </div>
        <div className='product-information'>
          <p>Visst såg det gott ut? </p>
          <p>
            <Link to='/Contact'>Hör av dig</Link> så hjälper vi till!
          </p>
          <p>Obs! Vi reserverar oss för att vissa produkter kan ta slut.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
