import Image from "next/image";
import React from "react";

const SectionTemplate = ({ imageUrl, colors }) => {
  return (
    <div
      className='mockup-window overflow-scroll border bg-base-300'
      style={{ color: colors.darkMuted }}
    >
      <div>
        <header style={{ backgroundColor: colors.darkVibrant }}>
          <div className='flex items-center justify-between p-4'>
            <Image
              src={imageUrl}
              alt='Uploaded'
              width={500}
              height={500}
              className='h-auto w-28'
            />
            <nav>
              <ul className='flex flex-row items-center gap-8'>
                <li className='text-white'>Accueil</li>
                <li className='text-white'>Services</li>
                <li className='text-white'>Contact</li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <section
            className='hero h-[800px]'
            style={{
              backgroundImage:
                "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
          >
            <div className='hero-overlay bg-opacity-60'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
                <p className='mb-5'>
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button
                  className='btn'
                  style={{ backgroundColor: colors.lightVibrant }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </section>
          <section className='mx-auto my-12 grid max-w-6xl grid-cols-3 gap-4'>
            <div
              className='card w-96 bg-primary text-primary-content'
              style={{ backgroundColor: colors.darkVibrant }}
            >
              <div className='card-body'>
                <h2 className='card-title'>Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='card-actions justify-end'>
                  <button className='btn'>Buy Now</button>
                </div>
              </div>
            </div>
            <div
              className='card w-96 bg-primary text-primary-content'
              style={{ backgroundColor: colors.darkVibrant }}
            >
              <div className='card-body'>
                <h2 className='card-title'>Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='card-actions justify-end'>
                  <button className='btn'>Buy Now</button>
                </div>
              </div>
            </div>
            <div
              className='card w-96 bg-primary text-primary-content'
              style={{ backgroundColor: colors.darkVibrant }}
            >
              <div className='card-body'>
                <h2 className='card-title'>Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='card-actions justify-end'>
                  <button className='btn'>Buy Now</button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div
              style={{ backgroundColor: colors.darkVibrant }}
              className='hero bg-base-200'
            >
              <div className='hero-content flex-col lg:flex-row-reverse'>
                <img
                  src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
                  className='max-w-sm rounded-lg shadow-2xl'
                />
                <div>
                  <h1
                    style={{ color: colors.lightVibrant }}
                    className='text-5xl font-bold'
                  >
                    Box Office News!
                  </h1>
                  <p className='py-6 text-white'>
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button
                    style={{ backgroundColor: colors.lightVibrant }}
                    className='btn'
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className='mx-auto my-12 max-w-3xl'>
            <div
              style={{ backgroundColor: colors.lightVibrant }}
              className='stats shadow'
            >
              <div className='stat'>
                <div className='stat-figure text-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block h-8 w-8 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    ></path>
                  </svg>
                </div>
                <div className='stat-title'>Total Likes</div>
                <div className='stat-value text-primary'>25.6K</div>
                <div className='stat-desc'>21% more than last month</div>
              </div>

              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block h-8 w-8 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    ></path>
                  </svg>
                </div>
                <div className='stat-title'>Page Views</div>
                <div className='stat-value text-secondary'>2.6M</div>
                <div className='stat-desc'>21% more than last month</div>
              </div>

              <div className='stat'>
                <div className='stat-figure text-secondary'>
                  <div className='avatar online'>
                    <div className='w-16 rounded-full'>
                      <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
                    </div>
                  </div>
                </div>
                <div className='stat-value'>86%</div>
                <div className='stat-title'>Tasks done</div>
                <div className='stat-desc text-secondary'>
                  31 tasks remaining
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer
          style={{
            backgroundColor: colors.lightVibrant,
            color: colors.darkVibrant,
          }}
          className='footer bg-base-200 p-10 text-base-content'
        >
          <nav>
            <h6 className='footer-title'>Services</h6>
            <a className='link-hover link'>Branding</a>
            <a className='link-hover link'>Design</a>
            <a className='link-hover link'>Marketing</a>
            <a className='link-hover link'>Advertisement</a>
          </nav>
          <nav>
            <h6 className='footer-title'>Company</h6>
            <a className='link-hover link'>About us</a>
            <a className='link-hover link'>Contact</a>
            <a className='link-hover link'>Jobs</a>
            <a className='link-hover link'>Press kit</a>
          </nav>
          <nav>
            <h6 className='footer-title'>Legal</h6>
            <a className='link-hover link'>Terms of use</a>
            <a className='link-hover link'>Privacy policy</a>
            <a className='link-hover link'>Cookie policy</a>
          </nav>
          <form>
            <h6 className='footer-title'>Newsletter</h6>
            <fieldset className='form-control w-80'>
              <label className='label'>
                <span className='label-text'>Enter your email address</span>
              </label>
              <div className='join'>
                <input
                  type='text'
                  placeholder='username@site.com'
                  className='input join-item input-bordered'
                />
                <button
                  style={{ backgroundColor: colors.lightVibrant }}
                  className='btn join-item'
                >
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default SectionTemplate;
