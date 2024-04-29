import React from "react";
// Gallery Component

const Gallery = ({ images }) => {
    return (
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <img  src='src/assets/gallery.png' alt='' className="m-2" />
        ))}
      </div>
    );
  };
  
  // Photo Component
  const Photo = ({ onTakePhoto, onUploadPhoto }) => {
    return (
      <div className="flex justify-center mt-4">
        <button onClick={onTakePhoto} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Take Photo
        </button>
        <input type="file" accept="image/*" onChange={onUploadPhoto} className="ml-4" />
      </div>
    );
  };
  
  // Chat Interface
  const ChatInterface = () => {
    const [images, setImages] = useState([]);
  
    const handleTakePhoto = () => {
      // Implement functionality to access device camera and take a photo
      // Once photo is taken, add it to the gallery
    };
  
    const handleUploadPhoto = (event) => {
      const file = event.target.files[0];
      // Implement functionality to upload the selected photo
      // Once photo is uploaded, add it to the gallery
    };
  
    return (
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Gallery images={images} />
        </div>
        <div className="flex justify-center">
          <Photo onTakePhoto={handleTakePhoto} onUploadPhoto={handleUploadPhoto} />
        </div>
      </div>
    );
  };
  
  export default Gallery;