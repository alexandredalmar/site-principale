import { ArrowDown } from "lucide-react";
import React from "react";
import Button from "@/components/ui/button/Button";

const SectionHomeIntro = () => {
  return (
    <div>
      <section className='relative z-20 flex items-center overflow-hidden bg-black'>
        <div className='container relative mx-auto flex py-16'>
          <div className='relative z-20 flex flex-col'>
            <span className='mb-12 h-2 w-20 bg-sky-800 dark:bg-white'></span>
            <h1 className='font-bebas-neue text-white-800 flex flex-col text-5xl font-black uppercase leading-none dark:text-white sm:text-6xl'>
              Créer votre avenir
              <span className='text-1xl mb-5 sm:text-5xl'>Sur le web</span>
            </h1>
            <p className='text-white-700 text-sm dark:text-white sm:text-base'>
              La Maison Digital met à votre disposition les outils web les plus
              avancés du moment, à des prix défiant toute concurrence.
            </p>
            <div className='mt-8 flex gap-10'>
              <Button link='#' styleType='primary' text='Créer mon site' />
              <Button link='#' styleType='secondary' text='En savoir +' />
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
    </div>
  );
};

export default SectionHomeIntro;
