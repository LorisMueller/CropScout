import Navbar from '../../components/navbar/navbar';
import { useState, useEffect } from 'react';
import { FooterLinks } from '../../components/footer/footer.tsx';
import './cloudinary.css';
import PhotoAlbum from "react-photo-album";
import Modal from 'react-modal';

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

    /*PNG*/
    const [photo, setPhoto] = useState([]);
    const [watermark, setWatermark] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    /*JPG*/
    const [photo_jpg, setPhoto_jpg] = useState([]);
    const [watermark_jpg, setWatermark_jpg] = useState([]);
    const [selectedPhoto_jpg, setSelectedPhoto_jpg] = useState(null);
    const [isModalOpen_jpg, setIsModalOpen_jpg] = useState(false);

    useEffect(() => {
        const getImages = async () => {
            try {
                const response = await fetch('https://api.cloudinary.com/v1_1/dvkbnbief/resources/image?type=upload&prefix=png', {
                    headers: {
                        Authorization: 'Basic ' + btoa('843457659483174:Mbhwv-o2cqY-fI1RuOk844cCggE'),
                    },
                    method: 'GET',
                });
                const data = await response.json();
                let images1 = data.resources.map((image) => ({
                    originalUrl: image.url,
                    src: image.secure_url.replace(
                        "/upload",
                        "/upload/c_thumb,w_400"
                    ),
                    width: image.width,
                    height: image.height,
                }));
                let images_png_watermark = data.resources.map((image) => ({
                    src: image.url.replace(
                        '/image/upload/',
                        '/image/upload/l_drone_watermark/w_200,h_200/'
                    ),
                    width: image.width,
                    height: image.height,
                }));
                setPhoto([]);
                setPhoto(images1);
                setWatermark([]);
                setWatermark(images_png_watermark);
            } catch (error) {
                console.log(error);
            }
        };
        const getImages_jpg = async () => {
            try {
                const response = await fetch('https://api.cloudinary.com/v1_1/dvkbnbief/resources/image?type=upload&prefix=jpg', {
                    headers: {
                        Authorization: 'Basic ' + btoa('843457659483174:Mbhwv-o2cqY-fI1RuOk844cCggE'),
                    },
                    method: 'GET',
                });
                const data = await response.json();
                let images1 = data.resources.map((image) => ({
                    originalUrl: image.url,
                    src: image.secure_url.replace(
                        "/upload",
                        "/upload/c_thumb,w_400"
                    ),
                    width: image.width,
                    height: image.height,
                }));
                let images_jpg_watermark = data.resources.map((image) => ({
                    src: image.url.replace(
                        '/image/upload/',
                        '/image/upload/l_drone_watermark/w_200,h_200/'
                    ),
                    width: image.width,
                    height: image.height,
                }));
                setPhoto_jpg([]);
                setPhoto_jpg(images1);
                setWatermark_jpg([]);
                setWatermark_jpg(images_jpg_watermark);
            } catch (error) {
                console.log(error);
            }
        };
        getImages();
        getImages_jpg();
    }, []);

    /*PNG*/
    const openModal = (index) => {
        setSelectedPhoto(photo[index]);
        setIsModalOpen(true);
        console.log(isModalOpen);

    };

    const closeModal = () => {
        setSelectedPhoto(null);
        setIsModalOpen(false);
    };

    /*JPG*/
    const openModal_jpg = (index) => {
        setSelectedPhoto_jpg(photo_jpg[index]);
        setIsModalOpen_jpg(true);
        console.log(isModalOpen_jpg);
    };

    const closeModal_jpg = () => {
        setSelectedPhoto_jpg(null);
        setIsModalOpen_jpg(false);
    };

    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"></link>
            <Navbar />

            <div className='content'>
                <div className='gallerySecondSection_cloudinary'>
                    <div className='galleryTitle'>
                        PNG-Gallery
                    </div>
                    <div className='galleryGallery_cloudinary'>
                        <PhotoAlbum
                            layout="rows"
                            photos={photo}
                            onClick={({ index }) => {
                                openModal(index);
                            }}
                        />
                    </div>
                    <div className='galleryGallery_cloudinary'>
                        <PhotoAlbum
                            layout="rows"
                            photos={watermark}
                            onClick={({ index }) => {
                                openModal(index);
                            }}
                        />
                    </div>
                </div>
                <div className='gallerySecondSection_cloudinary'>
                    <div className='galleryTitle'>
                        JPG-Gallery
                    </div>
                    <div className='galleryGallery_cloudinary'>
                        <PhotoAlbum
                            layout="rows"
                            photos={photo_jpg}
                            onClick={({ index }) => {
                                openModal_jpg(index);
                            }}
                        />
                    </div>
                    <div className='galleryGallery_cloudinary'>
                        <PhotoAlbum
                            layout="rows"
                            photos={watermark_jpg}
                            onClick={({ index }) => {
                                openModal_jpg(index);
                            }}
                        />
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Selected Photo"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        zIndex: 9999
                    },
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'none',
                        overflow: 'visible',
                        borderRadius: '0',
                        outline: 'none',
                        maxWidth: 'none',
                        maxHeight: 'none',
                        width: '100%',
                        height: '100%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        position: 'fixed'
                    }
                }}>
                {selectedPhoto && (
                    <img src={selectedPhoto.originalUrl} alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }} />
                )}
            </Modal>

            <Modal
                isOpen={isModalOpen_jpg}
                onRequestClose={closeModal_jpg}
                contentLabel="Selected Photo"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        zIndex: 9999
                    },
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'none',
                        overflow: 'visible',
                        borderRadius: '0',
                        outline: 'none',
                        maxWidth: 'none',
                        maxHeight: 'none',
                        width: '100%',
                        height: '100%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        position: 'fixed'
                    }
                }}>
                {selectedPhoto_jpg && (
                    <img src={selectedPhoto_jpg.originalUrl} alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }} />
                )}
            </Modal>

            <FooterLinks data={footerData} />
        </div>
    );
}

export default Cloudinary;