import './cloud.css';
import Navbar from '../../components/navbar/navbar';
import { FooterLinks } from '../../components/footer/footer.tsx';
import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';


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
            const formDataPNG = new FormData();
            const formDataJPG = new FormData();

            for (let i = 0; i < uploadFiles.length; i++) {
                formDataPNG.append('file', uploadFiles[i]);
                formDataJPG.append('file', uploadFiles[i]);
                formDataPNG.append('upload_preset', 'test_upload');
                formDataJPG.append('upload_preset', 'test_upload_jpg');
                formDataPNG.append('cloud_name', 'dvkbnbief');
                formDataJPG.append('cloud_name', 'dvkbnbief');

                const responsePNG = fetch(
                    'https://api.cloudinary.com/v1_1/dvkbnbief/image/upload?folder=png',
                    {
                        method: 'POST',
                        body: formDataPNG,
                    }
                );

                const responseJPG = fetch(
                    'https://api.cloudinary.com/v1_1/dvkbnbief/image/upload?folder=jpg',
                    {
                        method: 'POST',
                        body: formDataJPG,
                    }
                );

                const [dataPNG, dataJPG] = await Promise.all([responsePNG, responseJPG]);
                const jsonDataPNG = await dataPNG.json();
                const jsonDataJPG = await dataJPG.json();
                setCloudinaryImages((prevImages) => [
                    ...prevImages,
                    jsonDataPNG.secure_url,
                    jsonDataJPG.secure_url,
                ]);
                close();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpload_png = async (e) => {
        e.preventDefault();

        try {
            const formDataPNG = new FormData();

            for (let i = 0; i < uploadFiles.length; i++) {
                formDataPNG.append('file', uploadFiles[i]);
                formDataPNG.append('upload_preset', 'test_upload');
                formDataPNG.append('cloud_name', 'dvkbnbief');

                const responsePNG = fetch(
                    'https://api.cloudinary.com/v1_1/dvkbnbief/image/upload?folder=png',
                    {
                        method: 'POST',
                        body: formDataPNG,
                    }
                );

                const [dataPNG] = await Promise.all([responsePNG]);
                const jsonDataPNG = await dataPNG.json();
                setCloudinaryImages((prevImages) => [
                    ...prevImages,
                    jsonDataPNG.secure_url,
                ]);
                close();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpload_jpg = async (e) => {
        e.preventDefault();

        try {
            const formDataJPG = new FormData();

            for (let i = 0; i < uploadFiles.length; i++) {
                formDataJPG.append('file', uploadFiles[i]);
                formDataJPG.append('upload_preset', 'test_upload_jpg');
                formDataJPG.append('cloud_name', 'dvkbnbief');

                const responseJPG = fetch(
                    'https://api.cloudinary.com/v1_1/dvkbnbief/image/upload?folder=jpg',
                    {
                        method: 'POST',
                        body: formDataJPG,
                    }
                );

                const [dataJPG] = await Promise.all([responseJPG]);
                const jsonDataJPG = await dataJPG.json();
                setCloudinaryImages((prevImages) => [
                    ...prevImages,
                    jsonDataJPG.secure_url,
                ]);
                close();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
    }, []);

    const [opened, { open, close }] = useDisclosure(false);

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
                                    Select Images
                                </Button>
                                <input
                                    id="file-input"
                                    type="file"
                                    multiple
                                    onChange={(e) => setUploadFiles([...uploadFiles, ...e.target.files])}
                                />

                                <Modal opened={opened} onClose={close} title="Uploading your Pictures" centered>
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="modal-text">
                                                <h3>Upload your Pictures</h3>
                                                <p>You can store the pictures either as png, jpg or both</p>
                                            </div>
                                            <div className="modal-buttons">
                                                <Button onClick={handleUpload}>JPG and PNG</Button>
                                                <Button onClick={handleUpload_png}>Only PNG</Button>
                                                <Button onClick={handleUpload_jpg}>Only JPG</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                                <Group position="center">
                                    <Button onClick={open}>Upload Images</Button>
                                </Group>
                            </div>
                        </div>
                        <div className="gallery-button">
                            <a href="/cloudinary"><Button>View your uploaded Pictures</Button></a>
                        </div>
                    </form>
                </div>
            </div>
            <FooterLinks data={footerData} />
        </div>

    );
}

export default Cloud;