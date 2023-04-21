import React from 'react';
import { Image } from '../primitives';

const ImageWithDesc = ({description, image, bgColor}) => {
  return (
    <div className={`w-full border text-center rounded-lg flex flex-col justify-center p-1 ${bgColor}`} style={{ border: '3px solid #000' }}>
      <Image src={image} width='w-6'  />
      <p className='text-xs'>{description}</p>
    </div>
  )
}

export default ImageWithDesc;
