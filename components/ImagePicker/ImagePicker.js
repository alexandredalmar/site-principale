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
    <p className='my-8 flex justify-center'>Votre logo sera chargée ici !</p>
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
      <div className='flex justify-center'>
        <button
          className='text-md rounded-lg border-2 border-pink-500 bg-transparent px-4 py-2 uppercase text-pink-500 transition-all duration-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_0px_#fff,inset_0_0_0px_#fff,0_0_2px_#e74694,0_0_10px_#e74694,0_0_10px_#e74694] dark:text-white'
          onClick={() => fileInput.current.click()}
        >
          Charger votre logo !
        </button>
      </div>
      <ImagePreview dataUrl={dataUrl} />
    </div>
  );
}
