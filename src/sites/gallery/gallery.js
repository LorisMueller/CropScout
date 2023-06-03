import Navbar from '../../components/navbar/navbar';
import { FooterLinks } from '../../components/footer/footer.tsx';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import './gallery.css';
import DronePilot from '../../images/drone_pilot.jpg';
import DronePilotClean from '../../images/drone_pilot_cleanup.jpg';

function Gallery() {

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
    <div>
      <Navbar />
      <div className='content'>
        <div className='firstSection galleryFirstSection'>
          <div className='galleryImageSlider'>
            <ImgComparisonSlider>
            <img slot="first" src={DronePilot} className='sliderImage'/>
            <img slot="second" src={DronePilotClean} className='sliderImage'/>
          </ImgComparisonSlider>
          </div>
          
        </div>
      </div>
      <FooterLinks data={footerData} />
    </div>
  );
}

export default Gallery;