import React from "react";
import { TextAnimate } from "../components/uI/text-anime";
import { WavyBackground } from "../components/uI/wavy-background";
import CloudBanner from "../components/uI/home-banner";
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { CardHoverEffectDemo } from "../components/Card-new";
import Banner3D from "../components/uI/home-testimonial";
import Footer from "../components/Footer";


export default function Home() {
    return (
      <div>

<div className="home-banner">
<CloudBanner/>
    </div>
      <div className="best-price-heading"> 
        <TextAnimate
  animation="blurInUp"
  by="character"
  style={{
    color: "#3498db",
    fontSize: "35px",
    fontWeight: "bold",
    textAlign: "center",
  }}
>
  The Best Cloud Web Hosting Features at The Best Price!
</TextAnimate>
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
      <Tab eventKey="India" title="India">
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
      <Tab eventKey="Germany" title="Germany">
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
<div className="best-cloud-home-heading-container">
<h2 className="best-cloud-home-heading">Best Cloud Hosting Service provides in India!</h2>
</div>
<div className="why-sixthstar-home">
<CardHoverEffectDemo/>
</div>

<Banner3D/>

<div>
  <h2 className="services-home">Cloud Services in Sixthstar</h2>
</div>
<div className="row services-home-box-row">
<div className="col-sm services-home-box-column">
  <h2>Faster Cloud Website</h2>
  <p>Since our cloud hosting services are embedded with a high-end processor and high-performance storage/ memory capacities with clear resource requirement your website performance will be higher and 2X faster than usual. Our cloud hosting is fully integrated with low-density servers and with multiple caches ensuring fast load times even when your site is enabling dynamic content request process.</p>
</div>
<div className="col-sm services-home-box-column">
  <h2>Easy Upgradation
  </h2>
  <p>Cloud computing allows easy monitoring and allocation of the resources (CPU/RAM) during raising demand. Our cloud server enables this feature by a simple click on the upgrade option present in the control panel. Also, there won’t be any downtime caused while migration is in process. Everything will be in your control.</p>
</div>
<div className="col-sm services-home-box-column">
  <h2>Reliability</h2>
  <p>The cloud easily helps to tackle hardware issues at difficult times like failure or crashes. Since it is based on the cloud computing process where all the hardware’s are virtually managed, the servers will switch over to another stable server present in the vast network without causing any downtime occurrence. You can also restore/backup the data’s since it has mirrored copies saved.</p>
</div>
<div className="col-sm services-home-box-column">
  <h2>Uptime and Managed Support
  </h2>
  <p>With reliable power, network and security protection under our tier-3 data centre we ensure to provide uptime guarantee for all cloud servers through continued service and high-resource availability. Also, we are focused on bestowing top-notch support services for 24/7 resolving all customer needs</p>
</div>
</div>

<div className='cloud-uptime-container'>
  <div className='row cloud-uptime-content'>
    <div className='col-sm'> <p>Dedicated 24/7 Live Support</p></div>
    <div className='col-sm'> <p>99.9% Uptime</p> </div>
    <div className='col-sm'> <p>Try for 45 Days Risk-Free</p></div>
  </div>
</div>
<div>
  <Footer/>
 </div>
      </div>

    
    );
  }