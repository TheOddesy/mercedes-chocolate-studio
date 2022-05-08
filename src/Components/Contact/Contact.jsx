import React from 'react';
import './Contact.scss';

import {BiHappyBeaming} from 'react-icons/bi';
import {HiHome} from 'react-icons/hi';
import {ImPhone} from 'react-icons/im';
import {MdMail} from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri';

const Contact = () => {
  return (
    <div>
      <div className='contact-wrapper'>
        <div className='contact-text'>
          <div className='contact-ordering'>
            <div className='contact-order'>
              <h2>Beställningar</h2>
              <p>
                Vill du beställa något? Skriv ett{' '}
                <a href='mailto:mercedesstudioaland@gmail.com' target='blank' rel='noopener'>
                  mail
                </a>{' '}
                eller varför inte direkt på{' '}
                <a href='https://m.me/veganchoklad' target='blank' rel='noopener'>
                  facebook
                </a>
                ? Vi svarar vanligtvis inom en dag. Då kan vi komma överens om betalsätt och vart
                den goda chokladen skall levereras. Var inte blyg! <br />
              </p>
            </div>

            <div className='contact-company'>
              <h2>Beställningar till företag</h2>
              <p>
                Vi kan också uppfylla större beställningar. Kontaka oss via{' '}
                <a href='mailto:mercedesstudioaland@gmail.com' target='blank' rel='noopener'>
                  mail
                </a>{' '}
                eller{' '}
                <a href='https://m.me/veganchoklad' target='blank' rel='noopener'>
                  facebook
                </a>{' '}
                så påbörjar vi en dialog om era behov och önskemål.
              </p>
            </div>
          </div>

          <div className='contact-information'>
            <h2>Kontaktinformation</h2>
            <div className='contact-flex'>
              <BiHappyBeaming className='contact-icons' />
              <p>Mercedes Studio | Lugn och Ro AB</p>
            </div>
            <div className='contact-flex'>
              <HiHome className='contact-icons' />
              <p>
                Södra Överbyvägen 137
                <br />
                AX-22270 Eckerö
                <br />
                Åland, Finland
              </p>
            </div>
            <div className='contact-flex'>
              <ImPhone className='contact-icons' />
              <p>+358 (0) 40 539 6699</p>
            </div>
            <div className='contact-flex'>
              <MdMail className='contact-icons' />
              <p>
                <a href='mailto:mercedesstudioaland@gmail.com' target='blank' rel='noopener'>
                  mercedesstudioaland@gmail.com
                </a>
              </p>
            </div>
            <div className='contact-flex'>
              <FaFacebookMessenger className='contact-icons' />
              <p>
                <a href='https://m.me/veganchoklad' target='blank' rel='noopener'>
                  PM till Mercedes
                </a>
              </p>
            </div>
            <div className='contact-flex'>
              <RiInstagramFill className='contact-icons' />
              <p>
                <a
                  href='https://www.instagram.com/mercedesstudioaland/?hl=en'
                  target='blank'
                  rel='noopener'>
                  Följ oss på instagram för läckra bilder.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
