import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar';
import Drone from '../../images/drone_title.png';
import { Button, MantineProvider, Card } from '@mantine/core';

function Home() {

  const toContact = () => {
    window.location.href = '/contact';
  }

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
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
            <Card shadow='sm' padding='lg' radius='lg' className='card'>
              <div className='cardText'>
                <h2>Drone Renting</h2>
                <p>Our drones are equipped with the latest agriculture technology and are ready to fly. We offer a wide range of drones for the best farming experience.</p>
              </div>
              <div className='cardImage'>
                <img src={Drone} alt='drone'/>
              </div>
            </Card>
            <Card shadow='sm' padding='lg' radius='lg' className='card'>
              <h2>Drone Pilots</h2>
            </Card>
            <Card shadow='sm' padding='lg' radius='lg' className='card'>
              <h2>Farm Analysis</h2>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
