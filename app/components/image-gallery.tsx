'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';

interface Props {
  images: any;
}

function ImageGallery({ images }: Props) {
  const [bigImage, setBigImage] = useState(images[0]);

  function handleImageSelectionClick(image: any) {
    setBigImage(image);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              alt="product images"
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleImageSelectionClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="Product hero image"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          sale
        </span>
      </div> 
    </div>
  );
}

export default ImageGallery;
