import React from 'react';
import { WorldMap } from '../components/uI/world-map';

import { motion } from "motion/react";

import ContactUsForm from './Form/contactus';


export default function ContactUs() {
  return (
    <div>
      <div className='contactus-banner'> 
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white ">
          
          <span className="">
            {"Contact us".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg  max-w-2xl mx-auto text-white py-4">
        We take extreme pride in mentioning that we have always executed our projects professionally and in a timely fashion. Despite the distances and geographical boundaries that separate us from our clients, we have always ensured that we remain in constant touch to ensure an open and constant flow of communication between us.
        </p>
      </div>
      </div>
      <div className='row main-row'>
      <div className='col-sm contact-first-column'>
        <div className='cntact-main'><ContactUsForm/></div>
      
      </div>
      <div className='col-sm map-cont'>
      <div className='map-sub-cont'>
      <div className=" py-20 dark:bg-black bg-white w-full">
      
      <WorldMap
        dots={[
          {
            start: {
              lat:64.2008 ,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 8.0883, lng: 77.5385 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
      </div>
      </div>
      </div>


      <div className='row address-container'>
        <div className='col-sm address-sub-container'>
          <h2>
          Corporate Office
          </h2>
          <p>
          1st Floor, No.3&4, Siri Towers,<br/> Fourrts Ave, Annani Indira Nagar,<br/> Muttukkaranchavadi, Thoraipakkam,<br/> Chennai, Tamilnadu, India - 600 097.
          </p>

          <p><i class="fa-solid fa-phone"></i> +91 99621 07399</p>
          <p><i class="fa-solid fa-envelope-circle-check"></i> sales@sixthstar.in</p>
        </div>

        <div className='col-sm address-sub-container'>
        <h2>
        Malaysia
          </h2>
          <p>
          Sixth Star Technologies,
          C4-2-39, Jalan 1/152,Taman OUG, Parklane ,58200, Kuala Lumpur, Malaysia.          
          </p>

          <p><i class="fa-solid fa-phone"></i> +60 1021 17305</p>
          <p><i class="fa-solid fa-phone"></i> +03 7772 0136</p>
          <p><i class="fa-solid fa-envelope-circle-check"></i> sales@sixthstar.in</p>
          </div>

          <div className='col-sm address-sub-container'>
          <h2>
          Germany
          </h2>
          <p>
          Sixth Star Technologies,
          Boetzinger Straße 60, 79111 Freiburg, Germany. 
          </p>

          <p><i class="fa-solid fa-phone"></i> +49 761 4514 0</p>
          <p><i class="fa-solid fa-envelope-circle-check"></i> sales@sixthstar.in</p>
            
            </div>  
            <div className='col-sm address-sub-container'>
            <h2>
          Hyderabad
          </h2>
          <p>
          Sixth Star Technologies,
          Infotech Plot No A-38,Ground Floor JJ Nagar , Naredmet x Roads, Hyderabad-500094.         </p>

          <p><i class="fa-solid fa-phone"></i> +91 9383996666</p>
          <p><i class="fa-solid fa-envelope-circle-check"></i> sales@sixthstar.in</p>
            </div>

      </div>
      
    </div>
  )
}
