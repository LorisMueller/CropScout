import './cloud.css';
import Navbar from '../../components/navbar/navbar';
import { FooterLinks } from '../../components/footer/footer.tsx';
import { useState, useEffect } from 'react';
import { Button, Input } from '@mantine/core';
import PhotoAlbum from "react-photo-album";
import CropEdited from '../../images/Gallery/edited/crop_edited.png';
import fieldOverviewSecond from '../../images/Gallery/edited/field_overview_second_edited.png';
import DroneFrontSecond from '../../images/Gallery/edited/drone_front_second_edited.png';
import DroneCrop from '../../images/Gallery/edited/drone_crop_edited.png';

function Cloud() {

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
    ]

    const [uploadFiles, setUploadFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [cloudinaryImages, setCloudinaryImages] = useState([]);
    const [photos, setPhotos] = useState([]);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        setUploadFiles([...uploadFiles, ...files]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        console.log(uploadFiles);

        try {
            const formData = new FormData();
            for (let i = 0; i < uploadFiles.length; i++) {
                formData.append('file', uploadFiles[i]);
                formData.append('upload_preset', 'test_upload');
                formData.append('cloud_name', 'dvkbnbief');

                const response = await fetch(
                    'https://api.cloudinary.com/v1_1/dvkbnbief/image/upload',
                    {
                        method: 'POST',
                        body: formData,
                    }
                );

                const data = await response.json();
                setCloudinaryImages((prevImages) => [...prevImages, data.secure_url]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
    }, []);

    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"></link>
            <Navbar />
            <div className='content-cloud'>
                <div className='cloudFirstSection'>
                    <form
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={isDragging ? 'drag-over' : 'drag-off'}>
                        <div className='cloud-upload'>
                            <h3>Upload Images to Cloudinary</h3><br />
                            <div className="input-wrapper">
                                <Button
                                    htmlFor="file-input"
                                    className="mantine-button"
                                    onClick={() => document.getElementById('file-input').click()}
                                >
                                    Select Files
                                </Button>
                                <input
                                    id="file-input"
                                    type="file"
                                    multiple
                                    onChange={(e) => setUploadFiles([...uploadFiles, ...e.target.files])}
                                />
                                <Button onClick={handleUpload}>Upload Files</Button>
                            </div>

                        </div>
                    </form>
                </div>
                <div className='cloudSecondSection'>
                    {/* <PhotoAlbum layout="rows" photos={photos} />
                    {photos.toString()} */}
                    <PhotoAlbum layout="rows" photos={tests}></PhotoAlbum>
                </div>
            </div>
            <FooterLinks data={footerData} />
        </div>

    );
}

export default Cloud;