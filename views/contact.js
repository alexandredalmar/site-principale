import React from "react";

const ContactPage = () => {
  return (
    <section className='mb-32'>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">

        
          <div className="relative px-4 py-10  border-2 border-solid border-pink-200 text-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_2px_#08f,0_0_5px_#08f]   sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Us!</h1>
              <p className="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>

            <form className="flex flex-wrap gap-4">
              <input
                className="shadow mb-4 appearance-none border bg-transparent rounded w-custom-calc text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Name" name="name" />
                     <input
                className="shadow mb-4 appearance-none border bg-transparent rounded  w-custom-calc  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="FirstName" name="FirstName" />

              <input
                className="shadow mb-4  bg-transparent appearance-none border rounded  w-custom-calc  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email" placeholder="Email" name="email" />
                    <input
                className="shadow mb-4  bg-transparent appearance-none border rounded  w-custom-calc py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email" placeholder="Phone" name="phone" />

              <input
                className="shadow mb-4  bg-transparent appearance-none border rounded   w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Subject" name="_subject" />

              <textarea
                className="shadow mb-4  bg-transparent min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
                style={{ height: '121px' }} // Corrigé ici
              ></textarea>

              <div className="flex justify-between">
                <input
                  className="shadow bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit" value="Send ➤" />
                <input
                  className="shadow bg-secondary hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset" />
              </div>
            </form>
          </div>

      </div>
    </section>
  );
};

export default ContactPage;
