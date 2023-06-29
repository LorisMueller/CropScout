import Navbar from '../../components/navbar/navbar';
import { useState, useEffect } from 'react';
import { FooterLinks } from '../../components/footer/footer.tsx';
import './cloudinary.css';
import PhotoAlbum from "react-photo-album";

function Cloudinary() {

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
        { label: 'Data privacy notice', link: '/aspects' },
        { label: 'Imprint', link: '/imprints' },
      ],
    },
  ];

  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dvkbnbief/resources/image', {
          headers: {
            Authorization: 'Basic ' + btoa('843457659483174:Mbhwv-o2cqY-fI1RuOk844cCggE'),
          },
          method: 'GET',
        });
        const data = await response.json();
        let images1 = data.resources.map((image) => ({
          src: image.url,
          width: image.width,
          height: image.height,
        }));
        console.log(images1);
        setPhoto(images1);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"></link>
      <Navbar />
      <div className='content'>
        <div className='gallerySecondSection'>
          <div className='galleryTitle'>
            Gallery
          </div>
          <div className='galleryGallery'>
            <PhotoAlbum layout="rows" photos={photo} />
          </div>
        </div>
      </div>
      <FooterLinks data={footerData} />
    </div>
  );
}

export default Cloudinary; 