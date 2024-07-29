import SectionHomeGrid from "@/components/Sections/SectionsHome/SectionsHomeGrid/SectionHomeGrid";
import Grid from "@/components/ui/Grid";
import React from "react";

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className='wrapper'>
        <div className='mainContainer'>
          <section className='relative flex h-screen flex-col items-center justify-center text-center text-white'>
            <div className='video-docker absolute left-0 top-0 h-full w-full overflow-hidden'>
              <video
                className='absolute min-h-full min-w-full object-cover'
                src=' https://cdn.pixabay.com/video/2016/08/22/4760-179739327_large.mp4'
                type='video/mp4'
                autoPlay
                muted
                loop
              ></video>
            </div>

            <div className='video-content z-10 space-y-5 rounded-lg border-2 border-sky-200 p-20 text-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]'>
              <h1 className='mb-5 text-9xl font-medium'>
                <span className='text-sky-500 [text-shadow:_0_1px_0_rgb(235_0_0_/_40%)]'>
                  D
                </span>
                igi<span className='text-pink-500'>H</span>ouse
              </h1>
              <p className='text-2xl font-medium'>La Maison digital</p>

              <p className='text-2xl font-medium'>
                Spécialisé dans la création de{" "}
                <span className='text-sky-500'>site </span>
                <span className='text-pink-500'>performant</span>
              </p>
            </div>

            <div class='left-50 absolute bottom-20 flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-white p-2 shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-slate-200/20'>
              <svg
                class='h-6 w-6'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  className='text-pink-500'
                  d='M19 14l-7 7m0 0l-7-7m7 7V3'
                ></path>
              </svg>
            </div>
          </section>

          <section className='relative z-20 flex items-center overflow-hidden bg-black'>
            <div className='container relative mx-auto flex py-16'>
              <div className='relative z-20 flex flex-col'>
                <span className='mb-12 h-2 w-20 bg-gray-800 dark:bg-white'></span>
                <h1 className='font-bebas-neue flex flex-col text-5xl font-black uppercase leading-none text-gray-800 sm:text-6xl dark:text-white'>
                  Créer votre avenir
                  <span className='text-1xl mb-5 sm:text-5xl'>Sur le web</span>
                </h1>
                <p className='text-sm text-gray-700 sm:text-base dark:text-white'>
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
              <div className='relative hidden sm:block sm:w-1/3 lg:w-3/5'>
                <img
                  src='https://www.tailwind-kit.com/images/object/10.png'
                  className='m-auto max-w-xs md:max-w-sm'
                />
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
