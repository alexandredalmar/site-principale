import { Palette } from "lucide-react";
import React from "react";

const SectionFooter = ({ colors, isColors, toggleColors }) => {
  return (
    <footer
      className={`footer flex flex-wrap gap-12 p-10 transition-all ${isColors ? "bg-white" : "bg-black"}`}
    >
      <nav>
        <h6
          className={`footer-title ${isColors ? "text-black" : "text-white"}`}
        >
          Services
        </h6>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          Branding
        </a>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          Design
        </a>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          Marketing
        </a>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          Advertisement
        </a>
      </nav>
      <nav>
        <h6
          className={`footer-title ${isColors ? "text-black" : "text-white"}`}
        >
          Company
        </h6>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          About us
        </a>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          Contact
        </a>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          Jobs
        </a>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          Press kit
        </a>
      </nav>
      <nav>
        <h6
          className={`footer-title ${isColors ? "text-black" : "text-white"}`}
        >
          Legal
        </h6>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          Terms of use
        </a>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          Privacy policy
        </a>
        <a
          className={`link-hover link ${isColors ? "text-black" : "text-white"}`}
        >
          Cookie policy
        </a>
      </nav>
      <form>
        <h6
          className={`footer-title ${isColors ? "text-black" : "text-white"}`}
        >
          Newsletter
        </h6>
        <fieldset className='form-control w-80'>
          <label className='label'>
            <span
              className={`label-text ${isColors ? "text-black" : "text-white"}`}
            >
              Enter your email address
            </span>
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
      <button
        onClick={toggleColors}
        className='rounded border border-gray-400 bg-white p-2 shadow-md'
      >
        <Palette className='stroke-black' />
      </button>
    </footer>
  );
};

export default SectionFooter;
