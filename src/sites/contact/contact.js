import './contact.css';
import Navbar from '../../components/navbar/navbar';
import { FooterLinks } from '../../components/footer/footer.tsx';
import { ContactUs } from '../../components/contactForm/contactForm';

function Contact() {

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
        <div className="content">
          <div className='contactFirstSection'>
            <ContactUs />
          </div>
        </div>
        <FooterLinks data={footerData}/>
      </div>
    )
  }

export default Contact;