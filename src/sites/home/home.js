import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar';
import { FooterLinks } from '../../components/footer/footer.tsx';
import Drone from '../../images/drone_title.png';
import DronePortrait from '../../images/drone_portrait.jpg';
import DronePilot from '../../images/drone_pilot.jpg';
import DroneOverview from '../../images/drone_overview.jpg';
import { Button, MantineProvider, Card } from '@mantine/core';
import LongCard from '../../components/mantine/longCard.js/longCard';
import { FeaturesCards } from '../../components/featureCards/featureCards';

function Home() {

  const toContact = () => {
    window.location.href = '/contact';
  }

  const footerData = [
    {
      title: 'Company',
      links: [
        { label: 'Home', link: '/' },
        { label: 'Gallery', link: '/gallery' },
        { label: 'About us', link: '/about' },
        { label: 'Contact', link: '/contact' },
      ],
    },
    {
      title: 'Rights',
      links: [
        { label: 'Legal Aspects', link: '/aspects' },
        { label: 'Imprint', link: '/imprints' },
        { label: 'Other rights', link: '/rights' },
      ],
    },
  ];

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"></link>
      <Navbar />
      <div className="content">
        <div className='firstSection'>
          <div className='text'>
            <div className='title'>
              Insightful Drone Solutions for <br /><span>Modern Farming.</span>
            </div>
            <div className='description'>
              CropScout AG is a renowned provider of professional drone solutions for agriculture. Our comprehensive services include the rental of state-of-the-art agricultural drones and the provision of experienced and certified drone pilots.
            </div>
            <div className='input'>
              <MantineProvider
                theme={{
                  colors: {
                    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
                    'cropscout-green': ['#137547', '#137547', '#137547', '#137547', '#137547', '#137547', '#137547', '#137547', '#137547', '#137547'],
                  },
                }}
              >
                <Button size='lg' variant='outline' color='cropscout-green' onClick={toContact}>Get in contact</Button>
              </MantineProvider>
            </div>
          </div>
          <div className='image'>
            <img src={Drone} alt='drone' />
          </div>
        </div>
        <div className='secondSection'>
          <div className='title'>
            Offers
          </div>
          <div className='offers'>
            <LongCard title='Drone Renting' description='Rent our advanced agricultural drones from CropScout AG and revolutionize your farming practices. Capture high-resolution imagery, monitor crop health, and optimize field management. With meticulous maintenance, expert support, and comprehensive training, we ensure a seamless rental experience. Elevate your farming operations with CropScout AGs trusted drone rental service.' image={DronePortrait} />
            <LongCard title='Drone Pilots' description="Optimize your farm's potential with CropScout AG's drone and pilot rental service. Our skilled drone pilots and advanced technology tackle tasks such as field mapping, crop monitoring, livestock surveillance, and infrastructure inspection. Benefit from their expertise, save time and resources, and gain valuable insights for informed decision-making. Elevate your farming operations with CropScout AG's trusted rental service." image={DronePilot} />
            <LongCard title='Farm Analysis' description="Experience the power of CropScout AG's drone photography service as we capture a new perspective of your farm. Our professional drones utilize cutting-edge technology to provide you with stunning aerial images that offer valuable insights for effective farm management. From assessing crop health to identifying optimal irrigation strategies, our expert tips empower you to maximize your farm's potential. Elevate your farming practices and unlock hidden opportunities." image={DroneOverview} />
          </div>
        </div>
        <div className='thirdSection'>
          <div className='title'>
            Why us?
          </div>
          <div className='content'>
            <FeaturesCards />
          </div>
        </div>
      </div>
      <FooterLinks data={footerData}/>
    </div>
  );
}

export default Home;
