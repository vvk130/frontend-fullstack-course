import type { JSX } from 'react';
import './ImageBanner.css';
import bannerImg from '../assets/bannerImg.jpg'; 

const ImageBanner = (): JSX.Element => {
  return (
    <div className="image-banner">
      <img src={bannerImg} alt="horsebanner" loading="lazy" />
    </div>
  );
};

export default ImageBanner;
