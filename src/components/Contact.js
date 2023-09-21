import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";


export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                
                Indian Trail, NC 
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:aasthasaxena100@gmail.com" className="text-indigo-400 leading-relaxed">
                aasthasaxena100@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">651-208-8226</p>
            </div>
          </div>
        </div>
        <div className="container  text-5xl flex justify-center gap-16 mx-auto py-16 text-white-200 dark:text-gray-400">
              <div><a href="https://github.com/Asaxena-2120" target="_blank"><AiFillGithub /></a></div>
              <div><a href="https://www.linkedin.com/in/aastha-saxena1/" target="_blank"><AiFillLinkedin /></a></div>
              <div><a href="mailto:aasthasaxena100@gmail.com" ><AiFillMail /></a></div>
            </div>
        
          
      </div>
    </section>
  );
}