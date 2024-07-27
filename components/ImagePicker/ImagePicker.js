import React, { useState, useRef } from "react";

function generateDataUrl(file, callback) {
  const reader = new FileReader();
  reader.onload = () => callback(reader.result);
  reader.readAsDataURL(file);
}

function ImagePreview({ dataUrl }) {
  return dataUrl ? (
    <img src={dataUrl} alt='preview' style={{ width: 200, height: 200 }} />
  ) : (
    <p>Pas de logo chargée.</p>
  );
}

export default function ImagePicker({ onUpload }) {
  const fileInput = useRef(null);
  const [dataUrl, setDataUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      generateDataUrl(file, setDataUrl);
      onUpload(file);
    }
  };

  return (
    <div>
      <input
        type='file'
        onChange={handleFileChange}
        ref={fileInput}
        accept='image/*'
        style={{ display: "none" }}
      />
      <button onClick={() => fileInput.current.click()}>
        Charger votre logo !
      </button>
      <ImagePreview dataUrl={dataUrl} />
    </div>
  );
}
