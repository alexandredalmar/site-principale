import SectionsHomeBannerVideo from "@/components/Sections/SectionsHome/SectionsHomeBanner/SectionsHomeBannerVideo";
import SectionHomeGrid from "@/components/Sections/SectionsHome/SectionsHomeGrid/SectionHomeGrid";
import Button from "@/components/ui/button/Button";
import Grid from "@/components/ui/Grid";
import React from "react";

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='wrapper'>
        <div className='mainContainer'>
          <SectionsHomeBannerVideo />

          <section className='relative z-20 flex items-center overflow-hidden bg-black'>
            <div className='container relative mx-auto flex py-16'>
              <div className='relative z-20 flex flex-col'>
                <span className='mb-12 h-2 w-20 bg-gray-800 dark:bg-white'></span>
                <h1 className='font-bebas-neue flex flex-col text-5xl font-black uppercase leading-none text-gray-800 dark:text-white sm:text-6xl'>
                  Créer votre avenir
                  <span className='text-1xl mb-5 sm:text-5xl'>Sur le web</span>
                </h1>
                <p className='text-sm text-gray-700 dark:text-white sm:text-base'>
                  La Maison Digital met à votre disposition les outils web les
                  plus avancés du moment, à des prix défiant toute concurrence.
                </p>
                <div className='mt-8 flex'>
                  <a
                    href='#'
                    className='text-md mr-4 rounded-lg border-2 border-transparent bg-pink-500 px-4 py-2 uppercase text-white hover:bg-pink-400'
                  >
                    Créer mon site
                  </a>
                  <a
                    href='#'
                    className='text-md rounded-lg border-2 border-pink-500 bg-transparent px-4 py-2 uppercase text-pink-500 hover:bg-pink-500 hover:text-white dark:text-white'
                  >
                    En savoir +
                  </a>
                </div>
              </div>
              <div className='video-docker relative left-0 top-0 h-full w-full overflow-hidden'>
                <video
                  className='relative min-h-full min-w-full object-cover'
                  src='/video-exemple.mp4'
                  type='video/mp4'
                  autoPlay 
                  muted
                  
                ></video>
              </div>
            </div>
          </section>

          <h2 className='w-full py-16 text-center text-5xl sm:text-6xl'>
            Nos modeles
          </h2>
          <Grid>
            <SectionHomeGrid />
          </Grid>

          <h3 className='w-full py-16 text-center text-5xl sm:text-6xl'>
            Ils nous ont fait confiance
          </h3>

          <Button link='#' styleType='primary' text='test' />
          <Button link='#' styleType='secondary' text='test' />

          <div className='contactContainer'>
            <div className='formContainer'>
              <form action=''></form>
            </div>
            <div className='txt'>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
