import React from 'react';

const ImageCard = ({ imageUrl, description }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <img src={imageUrl} alt="Image Description" className="w-full h-64 object-cover rounded-lg" />
      <p className="text-sm text-gray-400 mt-2">{description}</p>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    {
      imageUrl: "https://example.com/image1.jpg",
      description: "Etiam vulputate mollis sem, vel placerat enim finibus vel.",
    },
    {
      imageUrl: "https://example.com/image2.jpg",
      description: "Etiam vulputate mollis sem, vel placerat enim finibus vel.",
    },
    // Add more images as needed
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;