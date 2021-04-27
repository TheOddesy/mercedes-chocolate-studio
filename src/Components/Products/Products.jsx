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
import productImage10 from '../../Assets/products/polvorones.jpg';
import productImage11 from '../../Assets/products/mjolkchokladMint.jpg';
import productImage12 from '../../Assets/products/matchaLatte.jpg';

const products = [
  {
    id: 1,
    name: '"Mjölkchoklad" med lakrits',
    price: '1st för 8.50 €',
    priceValue: 8.5,
    description: 'Ljuvlig "mjölkchoklad" med en klick lakritskolakräm i varje hjärta. Nötfri.',
    ingredients:
      'Ca. 90g. Kakaomassa*, kakaosmör*, socker*, glykos, sirap*, bikarbonat, kokosolja*, kokoskräm*, rörsocker*, kokos*, vanilj*, lakritspulver, havssalt, (*)Ekologiska ingredienser.',
    image: productImage1,
  },

  {
    id: 2,
    name: '"Mjölkchoklad" med karamell',
    price: '1st för 8.50 €',
    priceValue: 8.5,
    description: 'Ljuvlig "mjölkchoklad" med en klick kolakräm i varje hjärta. Nötfri.',
    ingredients:
      'Ca. 90g. Kakaomassa*, kakaosmör*, socker*, glykos, sirap*, kokosolja*, kokoskräm*, havssalt,  kakaosmör*, bikarbonat, rörsocker*, kokos*,  vanilj*. (*)Ekologiska ingredienser.',
    image: productImage1,
  },

  {
    id: 3,
    name: 'Crunchy road',
    price: '1st för 4.00 €',
    priceValue: 4,
    description:
      'Vår finaste 52% "mjölkchoklad" blandad med hälsosamma eko bovete flingor, jätteknaprigt! Nötfri.',
    ingredients:
      'Ca. 50g. Kakaomassa*, kakaosmör*, kokos*, rörsocker*, bovete flingor*. (*)Ekologiska ingredienser.',
    image: productImage3,
  },

  {
    id: 4,
    name: 'Cappuccino',
    price: '6st för 4.00 €',
    priceValue: 4,
    description:
      'Krämig "vit" choklad och finaste Valencia mandlar blandade med starka kaffe prickar.',
    ingredients:
      'Ca. 40g. Mandel*, socker*, kakaosmör*, vanilj*, kokos*, rörsocker*, kaffe, bikarbonat, havssalt. (*)Ekologiska ingredienser.',
    image: productImage4,
  },

  {
    id: 5,
    name: 'Karamellhjärta',
    price: '2st för 7.00 €',
    priceValue: 7,
    description: '"Mjölkchoklad" hjärta fyllt med krämig karamell och knapriga småkakor. Nötfri.',
    ingredients:
      'Ca. 60g. Glutenfri mjölmix, majsstärkelse, socker*, Carlshamn margarin, pumpafrön*, havssalt, bakpulver, dadelsirap, äppelsås*, linfrö*, kakaosmör*, kokos*, kakaomassa*, rörsocker*, kokosolja*, vanilj*, glykos, sirap*, kokoskräm*. (*)Ekologiska ingredienser.',
    image: productImage5,
  },

  {
    id: 6,
    name: 'Mandel gianduja',
    price: '2st för 6.00 €',
    priceValue: 6,
    description:
      'Finaste Valencia mandlar och två toner choklad resulterar i en mycket tillfredställande godbit.',
    ingredients:
      'Ca. 60g. Mandel*, socker*, sirap*, kakaomassa*, kakaosmör*, glykos, vanilj*, havssalt, kokos*, rörsocker*, risstärkelse*, solroslecitin*. kan innehålla spår av hasselnötter. (*)Ekologiska ingredienser.',
    image: productImage6,
  },

  {
    id: 7,
    name: 'Lakritsgottis',
    price: '3st för 6.00 €',
    priceValue: 6,
    description:
      'Två små chokladplattor fyllda med en härlig lakritskolakräm och rullade i lakritspulver och salmiakpulver. Nötfri.',
    ingredients:
      'Ca. 60g. Kakaomassa*, kakaosmör*, lakritspulver, socker*, glykos, sirap*, kokoskräm*, kokosolja*, bikarbonat, havssalt, rörsocker*, kokos*, salmiakpulver, vanilj*. (*)Ekologiska ingredienser.',
    image: productImage7,
  },

  {
    id: 8,
    name: '"Vit" choklad med lakrits',
    price: '1st för 5.00 €',
    priceValue: 5,
    description:
      'Krämig "vit" choklad med mycket lakritssmak och toner av karamell. En favorit bland lakritsälskare. Innehåller mandel.',
    ingredients:
      'Ca. 50g. Kakaosmör*, lakritspulver, rörsocker*, kokos*, bikarbonat, havssalt, lakritsgranulat, mandel. (*)Ekologiska ingredienser.',
    image: productImage8,
  },

  {
    id: 9,
    name: '"Vit" choklad & jordgubbssymfoni',
    price: '1st för 8.00 €',
    priceValue: 8,
    description:
      'Krämig "vit" choklad laddat upp med massor av frystorkade jordgubbar. Fräsch och fruktig. Nötfri.',
    ingredients:
      'Ca. 80g. Kakaosmör*, rörsocker*, kokos*, glykos, vanilj*, frystorkade jordgubbar, hallon och blåbär. (*)Ekologiska ingredienser.',
    image: productImage9,
  },

  {
    id: 10,
    name: 'Polvorones',
    price: '4st för 4.00 €',
    priceValue: 4,
    description:
      'Från polvo, det spanska ordet för pulver. Det är en mjuk och mycket smulig shortbread från Spanien. Våra polvorones är baserade på mandel, olivolja och krossade kakaobönor.',
    ingredients:
      'Ca. 80g. Mandel, glutenfri mjölmix, bovetemjöl*, socker*, olivolja, kanel, havssalt, krossade kakaobönor*. (*)Ekologiska ingredienser.',
    image: productImage10,
  },

  {
    id: 11,
    name: '"Mjölkchoklad" med mint',
    price: '1st för 5.00 €',
    priceValue: 8,
    description: 'Vår krämiga "mjölkchoklad" med en ljuvig mint fyllning.',
    ingredients:
      'Ca. 40g. Kakaomassa, kakaosmör*, rörsocker*, kokos*, vanilj*, invertsocker, mintolja. (*)Ekologiska ingredienser.',
    image: productImage11,
  },

  {
    id: 12,
    name: 'Matcha-Latte',
    price: '3st för 9.60 €',
    priceValue: 8,
    description:
      'Matcha är ett japanskt pulver som mals av gröna teblad. Gör så här: lägg en halva av vår Matcha-latte i en kopp. Sätt den i micron ca. 1 min. Häll upp 1 dl kokande vatten och 1 dl av din favorit varm “mjölk”. Rör om.',
    ingredients:
      'Ca. 84g. Kakaosmör*, rörsocker*, kokos*, matchapulver, kanel*, gurkmeja*, vanilj*. (*)Ekologiska ingredienser.',
    image: productImage12,
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
        </div>
      </div>
    </div>
  );
};

export default Products;
