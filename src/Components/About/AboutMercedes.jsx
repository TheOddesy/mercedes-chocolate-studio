import React from 'react';
import './AboutPerson.scss';
import {BiHappyBeaming} from 'react-icons/bi';

const AboutMercedes = () => {
  return (
    <div>
      <div className='about-text-content'>
        <h1>Mercedes</h1>
        <h2>En kärlekshistoria</h2>
        <p>
          Det var en gång en finländsk keramiker som fann sin väg till Venezuela i Sydamerika med
          sin keramikutställning. Keramikern var Peter Winquist. Han visste inte då att det soliga
          Venezuela var landet där den mest aromatiska kakaon växer och att där skulle han
          hitta…Mercedes och hennes son Nico.{' '}
        </p>
        <p>
          Efter att en tid ha levt i olika världsdelar flyttade de tillsammans till Åland för att
          förverkliga sina gemensamma drömmar.
        </p>
        <h2>Tiden nu</h2>
        <p>
          Efter många år av chokladtillverkning fortsätter Mercedes sin kakoresa, men hur? Tiden gav
          tydliga råd.
        </p>

        <ul>
          <li>
            Att ta vara på hälsan har länge varit viktigt men nu kanske mer än någonsin finns det så
            många olika sätt att göra det.{' '}
          </li>
          <li>Många har matallergier och det är en utmaning att hitta något som passar alla.</li>
          <li>
            Att man ibland behöver unna sig något gott som man kan njuta utav utan att för den skull
            få dåligt samvete.
          </li>
          <li>
            Att använda mindre och bättre socker och att så många som möjligt av ingredienserna är
            ekologiska
          </li>
          <li>Viktigaste av allt är ändå att det skall smaka gott. Jättegott! </li>
        </ul>
        <p>
          Resultatet blev nu helt växtbaserade produkter som så väl veganer som de som föredrar
          eller behöver gluten-, mjölk- och äggfria produkter kan njuta av. Detta tillsammans med
          alla de andra som kanske vill göra lite gott för miljön.{' '}
        </p>
        <p>
          Hoppas de blir just dina nya favoriter <BiHappyBeaming className='mercedes-icon' />{' '}
        </p>
      </div>
    </div>
  );
};

export default AboutMercedes;
