import './aboutUs.css';
import NavbarLight from '../../components/navbar/navbarLight';
import { FooterLinks } from '../../components/footer/footer.tsx';
import { BadgeCard } from '../../components/personCard/personCard.tsx';
import DroneOverview from '../../images/drone_overview.jpg';

function AboutUs() {

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

  const badges = [
    { emoji: '', label: 'Developer' },
    { emoji: '', label: 'Pilot' },
    { emoji: '', label: 'Founder' },
  ];

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"></link>
      <NavbarLight />
      <div className='content'>
        <div className='aboutFirstSection'>
          <div className='text'>
            <div className='title'>
              We rely on people<br /> specialized in their fields
            </div>
          </div>
          <div className='aboutCards'>
            <div className='firstCard'>
              <BadgeCard
                image={DroneOverview}
                title="Loris Mueller"
                description="Passionate drone pilot and pioneer in digitalization of agriculture and drones."
                country="CEO"
                badges={badges}
              />
            </div>
            <div className='secondCard'>
              <BadgeCard
                image={DroneOverview}
                title="Loris Mueller"
                description="Passionate drone pilot and pioneer in digitalization of agriculture and drones."
                country="CEO"
                badges={badges}
              />
            </div>
          </div>
        </div>
        <div className='aboutSecondSection'>
          <div className='text'>
            <div className='title'>
            Unleashing the Potential of Agriculture <br/>through <span>Drone Technology and Expertise.</span>
            </div>
          </div>
        </div>
      </div>
      <FooterLinks data={footerData} />
    </div>

  );
}

export default AboutUs;