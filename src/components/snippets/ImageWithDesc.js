import React from 'react';
import { Image } from '../primitives';

const ImageWithDesc = ({description, image, bgColor}) => {
  return (
    <div className={`w-1/2 border rounded-lg flex flex-col justify-center p-1 ${bgColor}`} style={{ border: '2px solid #000' }}>
      <Image src={image} width='w-6'  />
      <p className='text-xs'>{description}</p>
    </div>
  )
}

export default ImageWithDesc;
