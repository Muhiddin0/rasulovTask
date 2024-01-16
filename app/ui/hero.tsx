import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="body-font py-12 text-gray-600">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={500}
                height={300}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="https://dummyimage.com/500x300"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={500}
                height={300}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="https://dummyimage.com/501x301"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                width={600}
                height={360}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                width={600}
                height={360}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="https://dummyimage.com/601x361"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={500}
                height={300}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="https://dummyimage.com/502x302"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={500}
                height={300}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="https://dummyimage.com/503x303"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
