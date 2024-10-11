import React, { useState } from 'react';

const ImageSwitcher = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <img src={mainImage} alt="Main" style={{ width: '300px', height: '400px' }} />
      <div>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            style={{ width: '100px', height: '100px', cursor: 'pointer' }}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSwitcher;
