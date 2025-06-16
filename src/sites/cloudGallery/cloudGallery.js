import './cloudGallery.css';
import Navbar from '../../components/navbar/navbar';
import { FooterLinks } from '../../components/footer/footer.tsx';
import { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import CropEdited from '../../images/Gallery/edited/crop_edited.png';
import fieldOverviewSecond from '../../images/Gallery/edited/field_overview_second_edited.png';
import { useEffect } from 'react';
import { Gallery } from "react-grid-gallery";

function CloudGallery() {

    const [photos, setPhotos] = useState([]);

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

    const tests = [
        {
            src: CropEdited,
            width: 400,
            height: 600
        },
        {
            src: fieldOverviewSecond,
            width: 400,
            height: 300
        },
    ]

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
            setPhotos(images1);
          } catch (error) {
            console.log(error);
          }
        };
        getImages();
      }, []);
      console.log(photos);
    return (
        <div>
            <Navbar />
            <div className='content-cloudGallery'>
                <PhotoAlbum layout="rows" photos={tests} />
                <Gallery images={tests} />
            </div>
            <FooterLinks data={footerData} />
        </div>

    );
}

export default CloudGallery;