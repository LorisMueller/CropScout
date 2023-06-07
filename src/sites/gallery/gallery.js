import Navbar from '../../components/navbar/navbar';
import { FooterLinks } from '../../components/footer/footer.tsx';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import './gallery.css';
import DronePilot from '../../images/drone_pilot.jpg';
import DronePilotClean from '../../images/drone_pilot_cleanup.jpg';
import PhotoAlbum from "react-photo-album";
import CropEdited from '../../images/Gallery/edited/crop_edited.png';
import DroneBelow from '../../images/Gallery/edited/drone_below_edited.png';
import DroneCrop from '../../images/Gallery/edited/drone_crop_edited.png';
import DroneFront from '../../images/Gallery/edited/drone_front_edited.png';
import DroneFrontSecond from '../../images/Gallery/edited/drone_front_second_edited.png';
import DroneFuture from '../../images/Gallery/edited/drone_future_edited.jpg';
import FieldOverviewBlack from '../../images/Gallery/edited/field_overview_black_edited.png';
import FieldOverviewColorBlack from '../../images/Gallery/edited/field_overview_colorblack_edited.png';
import fieldOverviewSecond from '../../images/Gallery/edited/field_overview_second_edited.png';
import FlowerBackblurred from '../../images/Gallery/edited/flower_backblurred_edited.png';
import FlyPart from '../../images/Gallery/edited/fly_part_edited.png';
import FpvLeft from '../../images/Gallery/edited/fpv_left_edited.png';
import Landscape from '../../images/Gallery/edited/landscape_edited.png';
import DroneUltrawide from '../../images/Gallery/drone_ultrawide.jpg';
import FlyFieldPart from '../../images/Gallery/fly_field_part.jpg';
import DroneWidefrontBackblurred from '../../images/Gallery/drone_widefront_backblurred.jpg';


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
        { label: 'Data privacy notice', link: '/aspects' },
        { label: 'Imprint', link: '/imprints' },
      ],
    },
  ];

  const photos = [
    {
      src: CropEdited,
      width: 4,
      height: 6
    },
    {
      src: fieldOverviewSecond,
      width: 4,
      height: 3
    },
    {
      src: DroneCrop,
      width: 5,
      height: 3
    },
    {
      src: DroneFrontSecond,
      width: 3,
      height: 2
    },
    {
      src: FlowerBackblurred,
      width: 4,
      height: 7
    },
    {
      src: DroneBelow,
      width: 5,
      height: 3
    },
    {
      src: FlyPart,
      width: 4,
      height: 3
    },
    {
      src: FpvLeft,
      width: 5,
      height: 3
    },
    {
      src: Landscape,
      width: 4,
      height: 3
    },
    {
      src: DroneFront,
      width: 5,
      height: 3
    },
    {
      src: DroneWidefrontBackblurred,
      width: 5,
      height: 3
    },
    {
      src: FlyFieldPart,
      width: 4,
      height: 3
    },
    {
      src: DroneUltrawide,
      width: 4,
      height: 3
    },
  ];

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"></link>
      <Navbar />
      <div className='content'>
        <div className='firstSection galleryFirstSection'>
          <div className='galleryTitle'>
            "<span>Cropscout</span> makes your dreams come true"
          </div>
          <div className='galleryImageSlider'>
            <ImgComparisonSlider>
              <img slot="first" src={DroneFuture} className='sliderImage' />
              <img slot="second" src={DroneFront} className='sliderImage' />
            </ImgComparisonSlider>
          </div>
        </div>
        <div className='gallerySecondSection'>
          <div className='galleryTitle'>
            Gallery
          </div>
          <div className='galleryGallery'>
            <PhotoAlbum layout="rows" photos={photos} />
          </div>
        </div>
        <div className='galleryThirdSection'>
        <div className='galleryTitle'>
            "Get a <span>new perspective</span> on your farm and fields"
          </div>
          <div className='galleryImageSlider'>
            <ImgComparisonSlider>
              <img slot="first" src={DronePilot} className='sliderImage' />
              <img slot="second" src={DronePilotClean} className='sliderImage' />
            </ImgComparisonSlider>
          </div>
          <div className='galleryImageSlider'>
            <ImgComparisonSlider>
              <img slot="first" src={FieldOverviewBlack} className='sliderImage' />
              <img slot="second" src={FieldOverviewColorBlack} className='sliderImage' />
            </ImgComparisonSlider>
          </div>
        </div>
      </div>
      <FooterLinks data={footerData} />
    </div>
  );
}

export default Gallery;