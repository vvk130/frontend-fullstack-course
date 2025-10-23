import { createFileRoute } from '@tanstack/react-router'
import '../css/cleanStable.css';
import { useState } from "react";

export const Route = createFileRoute('/cleanstable')({
  component: RouteComponent,
})

function RouteComponent() {
  const initialImages = [
    "https://res.cloudinary.com/dn4bwpln0/image/upload/v1760100285/horse-stable-medium-level-7_ltmzpn.jpg",
    "https://res.cloudinary.com/dn4bwpln0/image/upload/v1760099812/Nimet%C3%B6n_malli_2_1_th4adl.png",
    "https://res.cloudinary.com/dn4bwpln0/image/upload/v1760099812/Nimet%C3%B6n_malli_3_1_q7iwrv.png",
    "https://res.cloudinary.com/dn4bwpln0/image/upload/v1760024532/horses/Nimet%C3%B6n_malli_1_1_mh4zp5.png",
  ];

  const [images, setImages] = useState(initialImages);

  const handleRemove = () => {
    if (images.length > 1) {
      setImages(images.slice(0, images.length - 1));
    }
  };

  return (<>
  <h1>Clean stable and earn money!</h1>
  <div>
      <button className="btn" onClick={handleRemove}>
        Clean Stable
      </button>
      <div className="image-stack">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="stacked-image"
            alt={`img${i + 1}`}
          />
        ))}
      </div>
    </div>
  </>)
}

