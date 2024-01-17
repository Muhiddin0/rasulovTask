import React from 'react';

import '@/app/loader.css';

type Props = {};

const Loading = (props: Props) => {
  return (
    <section className="left-0 top-0 flex min-h-[60vh] w-full items-center justify-center bg-white">
      <div className="container min-h-[85vh]">
        <div className="loader">
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--text"></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
