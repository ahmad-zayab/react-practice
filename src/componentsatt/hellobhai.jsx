import React, { useState ,useEffect} from 'react';

const ImageUploader = () => {
 
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      
      setImageFile(file);
      

      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setPreviewUrl(null);
      alert("Please select a valid image file.");
    }
  };

 
  const handleUpload = async () => {
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile); 

      try {
   
        const response = await fetch("YOUR_SERVER_UPLOAD_ENDPOINT", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Upload successful:", result);
        
          console.error("Upload failed.");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <div>
      <h2>Upload and Display Image</h2>
      
      {/* File Input */}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
      />
      
      {/* Image Preview */}
      {previewUrl && (
        <div>
          <h3>Preview:</h3>
          <img 
            src={previewUrl} 
            alt="Uploaded preview" 
            style={{ maxWidth: "300px", marginTop: "10px" }} 
          />
          <br />
          <button onClick={() => { setImageFile(null); setPreviewUrl(null); }}>Remove Preview</button>
        </div>
      )}

      {/* Upload Button (for sending to server) */}
      <button onClick={handleUpload} disabled={!imageFile} style={{ marginTop: "10px" }}>
        Upload to Server
      </button>
    </div>
  );
};

export default ImageUploader;
