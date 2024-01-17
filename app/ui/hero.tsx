import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="body-font py-12 text-gray-600">
      <div className="container">
        <div className="grid w-full grid-cols-12 gap-6">
          <div className="col-span-12 shadow-lg">
            <Image
              width={1200}
              height={500}
              alt="gallery"
              className="block h-auto !w-full object-cover object-center"
              src="https://dummyimage.com/1201x400"
            />
          </div>
          <div className="col-span-12 shadow-lg lg:col-span-6">
            <Image
              width={1200}
              height={500}
              alt="gallery"
              className="bg block h-auto !w-full object-cover object-center"
              src="https://dummyimage.com/1200x500"
            />
          </div>
          <div className="col-span-12 shadow-lg lg:col-span-6">
            <Image
              width={1200}
              height={500}
              alt="gallery"
              className="block h-auto !w-full bg-red-500 object-cover object-center"
              src="https://dummyimage.com/1200x500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
