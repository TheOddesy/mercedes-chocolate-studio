import React from 'react';
import './AboutPerson.scss';

const AboutPeter = () => {
  return (
    <div>
      <div className='about-text-content'>
        <h1>Peter</h1>
        <p>
          Det är jag som är senior adviser i firman. Jag är idag en avslappnad mogen konstnär som
          tar dagen som den kommer. Nu finns inte längre någon prestationsångest. Jag har bakom mig
          ett långt arbetsliv som innehållit allt från industriformgivning för Arabia- och Pentik
          fabrikerna till fritt skapande i den egna studion. Det har givit mig internationellt
          erkännande och även känslan av att ha kunnat ge vackra praktiska föremål till vår
          vardagsmiljö. Jag har även arbetat med det historiska projektet Drottning Kristinas
          Postväg från Stockholm över Åland till Åbo samt som verksamhetsledare för det vackra
          Eckerö Post & Tullhus.
        </p>
        <p>
          Idag har mitt stora intresse blivit den harmoniska trädgården. Här väntar alla mina
          underbara modeller på att bli förevigade i leran. Mitt arbetsrum Peters Studio och Galleri
          Lugn & Ro är den bästa platsen där jag möter min arbetsdag med samma goda aptit som i min
          ungdom
        </p>
        <p>Mercedes och jag har tillsammans byggt upp denna harmoniska tillvaro och vi trivs.</p>
        <p>
          Vill du veta mer om mig är du välkommen att besöka{' '}
          <a href='https://peterwinquist.wordpress.com/' target='blank' rel='noopener'>
            min hemsida.
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutPeter;
