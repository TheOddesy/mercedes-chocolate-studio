import React from 'react';
import './Products.scss';
import Product from './Product';
import {Link} from 'react-router-dom';
// import productImage1 from "../../Assets/products/product1.jpeg";
// import productImage2 from "../../Assets/products/product2.jpeg";
// import productImage3 from "../../Assets/products/product3.jpeg";
// import productImage4 from "../../Assets/products/product4.jpeg";
// import productImage5 from "../../Assets/products/product5.jpeg";
// import productImage6 from "../../Assets/products/product6.jpeg";
// import productImage7 from "../../Assets/products/product7.jpeg";
// import productImage8 from "../../Assets/products/product8.jpeg";

import productImage1 from '../../Assets/products/platta.jpg';
import productImage3 from '../../Assets/products/crunchyRoad.jpg';
import productImage4 from '../../Assets/products/capuccino.jpg';
import productImage5 from '../../Assets/products/karamellhjärta.jpg';
import productImage6 from '../../Assets/products/mandelGianduja.jpg';
import productImage7 from '../../Assets/products/lakritsgotties.jpg';
import productImage8 from '../../Assets/products/vitChokladLakrits.jpg';
import productImage9 from '../../Assets/products/vitChokladJordgubb.jpg';

const products = [
  {
    id: 1,
    name: 'CHOKLADPLATTA MED LAKRITS',
    price: '1st för 8.50 €',
    description: 'Ljuvlig "mjölkchoklad" med en klick lakritskolakräm i varje hjärta. Nötfri.',
    ingredients:
      'Ca. 90g. Kakaomassa*, kakaosmör*, socker*, glykos, sirap*, havregrädde, bikarbonat, kokosolja*, kokoskräm*, rörsocker*, kokos*, vanilj*, lakritspulver, havssalt, (*)Ekologiska ingredienser.',
    image: productImage1,
  },

  {
    id: 2,
    name: 'CHOKLADPLATTA MED KARAMEL',
    price: '1st för 8.50 €',
    description: 'Ljuvlig "mjölkchoklad" med en klick kolakräm i varje hjärta. Nötfri.',
    ingredients:
      'Ca. 90g. Kakaomassa*, kakaosmör*, socker*, glykos, sirap*, havregrädde, kokosolja*, kokoskräm*, havssalt,  kakaosmör*, bikarbonat, rörsocker*, kokos*,  vanilj*. (*)Ekologiska ingredienser.',
    image: productImage1,
  },

  {
    id: 3,
    name: 'CRUNCHY ROAD',
    price: '1st för 4.00 €',
    description:
      'Vår finaste 52% "mjölkchoklad" blandad med hälsosamma eko bovete flingor, utan tillsatt socker, jätteknaprigt! Nötfri.',
    ingredients:
      'Ca. 50g. Kakaomassa*, kakaosmör*, kokos*, rörsocker*, bovete flingor, utan tillsatt socker. (*)Ekologiska ingredienser.',
    image: productImage3,
  },

  {
    id: 4,
    name: 'CAPUCCINO',
    price: '6st för 4.00 €',
    description:
      'Krämig "vit" choklad och finaste Valencia mandlar blandade med starka kaffe prickar.',
    ingredients:
      'Ca. 40g. Mandel*, socker*, kakaosmör*, kakaomassa*, glykos, vanilj*, kokos*, rörsocker*, sojalecitin, risstärkelse*, solroslecitin*, kaffe, bikarbonat, salt. kan innehålla spår av hasselnötter. (*)Ekologiska ingredienser.',
    image: productImage4,
  },

  {
    id: 5,
    name: 'KARAMELLHJÄRTA',
    price: '2st för 6.00 €',
    description: '"Mjölkchoklad" hjärta fyllt med krämig karamell och knapriga småkakor. Nötfri.',
    ingredients:
      'Ca. 60g. Glutenfri mjölmix, majsstärkelse, socker*, Carlshamn margarin, pumpafrön*, havssalt, bakpulver, dadelsirap, äppelsås*, linfrö*, kakaosmör*, kokos*, kakaomassa*, rörsocker*, kokosolja*, vanilj*, glykos, sirap*, havregrädde, kokosolja*, kokoskräm*. (*)Ekologiska ingredienser.',
    image: productImage5,
  },

  {
    id: 6,
    name: 'MANDEL GIANDUJA',
    price: '2st för 6.00 €',
    description:
      'Finaste Valencia mandlar och två toner choklad resulterar i en mycket tillfredställande godbit.',
    ingredients:
      'Ca. 60g. Mandel*, socker*, sirap*, kakaosmör*, kakaomassa*, glykos, vanilj*, salt, kokos*, rörsocker*, risstärkelse*, solroslecitin*. kan innehålla spår av hasselnötter. (*)Ekologiska ingredienser.',
    image: productImage6,
  },

  {
    id: 7,
    name: 'LAKRITSGOTTIS',
    price: '3st för 6.00 €',
    description:
      'Två små chokladplattor fyllda med en härlig lakritskolakräm och rullade i lakritspulver och salmiakpulver. Nötfri.',
    ingredients:
      'Ca. 60g. Kakaomassa*, kakaosmör*, lakritspulver, socker*, glykos, sirap*, kokoskräm*, havregrädde, kokosolja*, bikarbonat, havssalt, rörsocker*, kokos*, salmiakpulver, vanilj*. (*)Ekologiska ingredienser.',
    image: productImage7,
  },

  {
    id: 8,
    name: '"VIT" CHOKLADPLATTA MED LAKRITS',
    price: '1st för 5.00 €',
    description:
      'Krämig "vit" choklad med mycket lakritssmak och toner av karamell. En favorit bland lakritsälskare. Innehåller mandel.',
    ingredients:
      'Ca. 50g. Kakaosmör*, lakritspulver*, rörsocker*, kokos*, kokosolja*, bikarbonat, havssalt, lakritsgranulat, salmiakpulver, mandel. (*)Ekologiska ingredienser.',
    image: productImage8,
  },

  {
    id: 9,
    name: '"VIT" CHOKLADPLATTA MED JORDGUBB',
    price: '1st för 8.00 €',
    description:
      'Krämig "vit" choklad laddat upp med massor av frystorkade jordgubbar. Fräsch och fruktig. Nötfri.',
    ingredients:
      'Ca. 80g. Kakaosmör*,  rörsocker*, kokos*, frystorkade jordgubbar. (*)Ekologiska ingredienser.',
    image: productImage9,
  },

  // {
  //   id: 10,
  //   name: 'POLVORONES',
  //   price: '4st för 3.50 €',
  //   description:
  //     'En mjuk och mycket smulig shortbread från Spanien. Våra polvorones är baserade på mandel, olivolja och krossade kakaobönor.',
  //   ingredients:
  //     'Ca. 80g. Mandel*, glutenfri mjölmix, bovetemjöl*, socker*, olivolja, kanel, havssalt, krossade kakaobönor*. (*)Ekologiska ingredienser.',
  //   image: productImage1,
  // },
];

const Products = () => {
  return (
    <div>
      <div className='products'>
        <h1>Våra produkter</h1>
        <div className='product-information'>
          <p>Här är vår chokladkollektion. Är det något som ser jättegott ut?</p>
          <p>
            <Link to='/Contact'>Kontakta oss</Link> så hjälper vi till!
          </p>
        </div>
        <div className='flex-wrap'>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
        <div className='product-information'>
          <p>Visst såg det gott ut? </p>
          <p>
            <Link to='/Contact'>Hör av dig</Link> så hjälper vi till!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
