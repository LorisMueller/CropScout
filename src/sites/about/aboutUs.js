import './aboutUs.css';
import NavbarLight from '../../components/navbar/navbarLight';
import { FooterLinks } from '../../components/footer/footer.tsx';
import { BadgeCard } from '../../components/personCard/personCard.tsx';
import ProfilePicture from '../../images/profile_user.png';

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

  const badgesCEO = [
    { emoji: '', label: 'Developer' },
    { emoji: '', label: 'Drone-Pilot' },
    { emoji: '', label: 'Founder' },
  ];

  const badgesCTO = [
    { emoji: '', label: 'Developer' },
    { emoji: '', label: 'Drone-Pilot' },
    { emoji: '', label: 'Digitalization' },
  ];

  const badgesAgronomist = [
    { emoji: '', label: 'Data analysis' },
    { emoji: '', label: 'Farming' },
    { emoji: '', label: 'Support' },
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
            <BadgeCard
              image={ProfilePicture}
              title="Loris Mueller"
              description="Passionate drone pilot, innovator, and pioneer in agriculture digitalization. Loris revolutionizes drone utilization for enhanced farming practices. His visionary leadership propels CropScout AG, empowering farmers with cutting-edge solutions."
              country="CEO"
              badges={badgesCEO}
            />
            <BadgeCard
              image={ProfilePicture}
              title="Dario Hunkeler"
              description="Drone tech expert and software development mastermind. Dario is leading innovation in optimizing drone performance and data analysis. Ensuring CropScout AG's forefront position in drone technology, delivering exceptional results for clients."
              country="CTO"
              badges={badgesCTO}
            />
            <BadgeCard
              image={ProfilePicture}
              title="Nina Wagner"
              description="Experienced agronomist, precision farming specialist, and data analysis expert. Ninas expertise drives valuable agricultural insights, optimizing farm operations and maximizing yields."
              country="Agronomist"
              badges={badgesAgronomist}
            />
          </div>
        </div>
        <div className='aboutSecondSection'>
          <div className='text'>
            <div className='title'>
              Unleashing the Potential of Agriculture <br />through <span>Drone Technology and Expertise.</span>
            </div>
          </div>
        </div>
      </div>
      <FooterLinks data={footerData} />
    </div>

  );
}

export default AboutUs;