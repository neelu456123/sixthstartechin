import { useState, useEffect } from 'react';  
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';
import useMousePosition from '../components/useMousePosition'; // Ensure this file exists
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { StickyScrollRevealDemo } from '../components/scroll';
import { BackgroundBeams } from '../components/uI/background-beams';
import { TimelineDemo } from '../components/line';
import InfiniteCarousel from '../components/uI/slider';
import Navbars from '../components/header';
import Footer from '../components/Footer';
// import Header from '../components/header';
// import HeaderNew from '../components/header';
// import HeaderNew from '../components/header';





const cloudhosting = () => {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition(); // Verify this custom hook returns x and y coordinates
  const size = isHovered ? 400 : 40;
  return (
    <main className="main">
   <Navbars />
      {/* Banner Section */}
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Cloud Hosting
        </h1>
        <p></p>
        <p className="text-slate-300		 max-w-lg mx-auto my-2 text-base text-center relative z-10">
        Sixth Star Technologies as a indian based servers service provider gives you all these cloud features under a single sophisticated package with affordable price
        </p>
        <div className='cloud-hosting-banner-button'>
        <p>Contact Us</p>
        </div>
       
      </div>
      <BackgroundBeams />
    </div>

      {/* Animated Mask Section */}
  
    <div className='cloud-99-section'>
      <h2>
      Our services will be flexible, scalable, and reliable with stable
      performance along with 99.99% uptime guaranteed.
      </h2>
    </div>

<div className='pricing-content'>
  <h2>
    Our Pricing
  </h2>
  <p>
  Plans for Everyone. Get Cloud Today!
  </p>
</div>
<div className='tab-main'>
<Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
       <div className='row price-tab-row'>
        
        <div className='col-sm price-tab'>
          <div className='month'>
        <h1> <i class="fa-solid fa-indian-rupee-sign"></i> 3500</h1>
        <h4>Per Month</h4>
        </div> 
        <h2>CLOUD 1</h2>
   
          
          <ul>
            <li> 10 GB Ram</li>
            <li> 4 Core Processor</li>
            <li>100 GB SSD drive</li>
            <li>1 GBit/s-Port</li>
            <li> Unlimited Bandwidth</li>
            <li> 1</li>
          </ul>
        </div>

        <div className='col-sm price-tab'>
        <div className='month'>
        <h1> <i class="fa-solid fa-indian-rupee-sign"></i> 3500</h1>
        <h4>Per Month</h4>
        </div> 
        <h2>CLOUD 1</h2>
          
          <ul>
            <li> 10 GB Ram</li>
            <li> 4 Core Processor</li>
            <li>100 GB SSD drive</li>
            <li>1 GBit/s-Port</li>
            <li> Unlimited Bandwidth</li>
            <li> 1</li>
          </ul>

        </div>

        <div className='col-sm price-tab'>
        <div className='month'>
        <h1> <i class="fa-solid fa-indian-rupee-sign"></i> 3500</h1>
        <h4>Per Month</h4>
        </div> 
        <h2>CLOUD 1</h2>
          
          <ul>
            <li> 10 GB Ram</li>
            <li> 4 Core Processor</li>
            <li>100 GB SSD drive</li>
            <li>1 GBit/s-Port</li>
            <li> Unlimited Bandwidth</li>
            <li> 1</li>
          </ul>
        </div>

        <div className='col-sm price-tab'>
        <div className='month'>
        <h1> <i class="fa-solid fa-indian-rupee-sign"></i> 3500</h1>
        <h4>Per Month</h4>
        </div> 
        <h2>CLOUD 1</h2>
          
          <ul>
            <li> 10 GB Ram</li>
            <li> 4 Core Processor</li>
            <li>100 GB SSD drive</li>
            <li>1 GBit/s-Port</li>
            <li> Unlimited Bandwidth</li>
            <li> 1</li>
          </ul>
        </div>  
       </div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <div className='row price-tab-row'>
        
        <div className='col-sm price-tab'>
          <div className='month'>
        <h1> <i class="fa-solid fa-indian-rupee-sign"></i> 3500</h1>
        <h4>Per Month</h4>
        </div> 
        <h2>CLOUD 1</h2>
   
          
          <ul>
            <li> 10 GB Ram</li>
            <li> 4 Core Processor</li>
            <li>100 GB SSD drive</li>
            <li>1 GBit/s-Port</li>
            <li> Unlimited Bandwidth</li>
            <li> 1</li>
          </ul>
        </div>

        <div className='col-sm price-tab'>
        <div className='month'>
        <h1> <i class="fa-solid fa-indian-rupee-sign"></i> 3500</h1>
        <h4>Per Month</h4>
        </div> 
        <h2>CLOUD 1</h2>
          
          <ul>
            <li> 10 GB Ram</li>
            <li> 4 Core Processor</li>
            <li>100 GB SSD drive</li>
            <li>1 GBit/s-Port</li>
            <li> Unlimited Bandwidth</li>
            <li> 1</li>
          </ul>

        </div>

        <div className='col-sm price-tab'>
        <div className='month'>
        <h1> <i class="fa-solid fa-indian-rupee-sign"></i> 3500</h1>
        <h4>Per Month</h4>
        </div> 
        <h2>CLOUD 1</h2>
          
          <ul>
            <li> 10 GB Ram</li>
            <li> 4 Core Processor</li>
            <li>100 GB SSD drive</li>
            <li>1 GBit/s-Port</li>
            <li> Unlimited Bandwidth</li>
            <li> 1</li>
          </ul>
        </div>

        <div className='col-sm price-tab'>
        <div className='month'>
        <h1> <i class="fa-solid fa-indian-rupee-sign"></i> 3500</h1>
        <h4>Per Month</h4>
        </div> 
        <h2>CLOUD 1</h2>
          
          <ul>
            <li> 10 GB Ram</li>
            <li> 4 Core Processor</li>
            <li>100 GB SSD drive</li>
            <li>1 GBit/s-Port</li>
            <li> Unlimited Bandwidth</li>
            <li> 1</li>
          </ul>
        </div>  
       </div>
      </Tab>




 
     
    </Tabs>
</div>


<div>
  <StickyScrollRevealDemo/>
</div>

<div className='cloud-uptime-container'>
  <div className='row cloud-uptime-content'>
    <div className='col-sm'> <p>Dedicated 24/7 Live Support</p></div>
    <div className='col-sm'> <p>99.9% Uptime</p> </div>
    <div className='col-sm'> <p>Try for 45 Days Risk-Free</p></div>
  </div>
</div>
<div className='time-line'>
<TimelineDemo/>
</div>

 <div className='client-caraousel-cloudhosting'>
  <InfiniteCarousel/>
 </div>
 <div>
  <Footer/>
 </div>
    </main>
  )
}

export default cloudhosting