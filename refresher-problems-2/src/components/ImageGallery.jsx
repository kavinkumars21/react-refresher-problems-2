import React, { useState } from 'react'

const ImageGallery = () => {

    const icons = [
        '😊',
        '😂',
        '😁',
        '😎',
        '😉'
    ];

    const [activeImage, setActiveImage] = useState(icons[0]);

    const handleThumbnailClick = (icon) => {
        setActiveImage(icon);
    };

    return (
        <div>
            <h1>Image Gallery</h1>
            <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '40px', borderRadius: '8px' }}>{activeImage}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {icons.filter(i => i !== activeImage).map((icon, index) => (
                    <p key={index} onClick={() => handleThumbnailClick(icon)}
                    style={{ width: '40px', height: '45px', fontSize: '30px', cursor: 'pointer'}}
                    >{icon}</p>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery
