import React from 'react';

const UpdateComponent = () => {
  return (<>
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fadeIn">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-0 leading-none">
        update soon<span className="text-blue-400">.</span>
      </h1>
      
      {/* <div className="icons text-center mt-4">
        <i className="fa fa-twitter bg-white text-black h-6 w-6 p-3 mx-2 rounded-full border-2 border-white transition-transform transform hover:scale-125"></i>
        <i className="fa fa-youtube-play bg-white text-black h-6 w-6 p-3 mx-2 rounded-full border-2 border-white transition-transform transform hover:scale-125"></i>
        <i className="fa fa-paper-plane bg-white text-black h-6 w-6 p-3 mx-2 rounded-full border-2 border-white transition-transform transform hover:scale-125"></i>
      </div> */}
    </div>
    </>
  );
};

export default UpdateComponent;
