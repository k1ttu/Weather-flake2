import 'animate.css'

import React from "react";
import loadingPic from './bg.png'
const LandingPage = () => {
  return (
  <main className=' items-center justify-center justify-items-center align-middle animate__animated animate__fadeOut animate__delay-2s'>
    <div className='flex flex-col md:flex-row w-full md:justify-between justify-center my-10 align-top'  >
    <img src={loadingPic} height={200} width={200}
      className=" w-2/3 md:h-2/4 md:w-2/5 md:mx-20 self-center md:self-auto "
    alt='not found'
    />
    </div>
  </main>
  );
};



export default LandingPage;