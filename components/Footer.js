/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link from 'next/link';
import { LogoSwitch } from './Logo';
import { Container } from '@/components/ColorSwitch'
import { footerLink, footerSocial } from '@/data/footer';
import { FooterCard } from './FooterCard';
import Fade from 'react-reveal/Fade';


export const SocialLinks = ({ url, icon }) => (
  <Link href={url}>
    <a
      className="group flex items-center justify-center w-10 h-10  rounded-lg border transition duration-500 hover:bg-indigo-500 font-medium mr-2"
    >
      {icon}
    </a>
  </Link>
)


function Footer() {
  return (
    <>
      <Fade bottom>
        <Container className="pb-8 lg:pb-12 pt-32 lg:pt-44">
          <footer className="  text-jacarta-600 dark:text-white relative ">
            <div className="container mx-auto relative px-4 z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8">
                <div className="footer-widget xl:flex xl:flex-col xl:justify-center xl:col-span-2">
                  <div className="block mb-10 xl:ml-10" >
                    <LogoSwitch />
                  </div>

                  <div className="social-share flex items-center xl:ml-10">
                    {
                      footerSocial.map(({ icon, url }, i) => (
                        <SocialLinks key={i} icon={icon} url={url} />
                      ))
                    }
                  </div>
                </div>
                <Fade top>

                  {
                    footerLink.map(({ heading, subHeadings }, index) => (
                      <FooterCard key={index} heading={heading} subHeadings={subHeadings} />
                    ))
                  }
                </Fade>
                <Fade left>
                  <div className="footer-widget col-span-1 md:col-span-2">
                    <h4 className="font-display text-xl font-semibold">Subscribe Us</h4>
                    <form className="footer-newsletter flex items-center w-full mb-4 mt-4 xl:mt-10">
                      <input
                        className="bg-transparent border-2 border-r-0 border-indigo-500 font-medium transition duration-500 focus:outline-none hover:bg-white rounded-l w-full h-14 p-4"
                        type="text"
                        placeholder="Your e-mail address"
                      />
                      <button
                        className="flex items-center rounded-r h-14 py-4 px-8 transition-all duration-500  dark:bg-accent dark:hover:bg-jacarta-600  hover:bg-accent custom-shadow text-white  bg-jacarta-700"
                        type="submit"
                      >
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.6749 0.195557C19.5425 0.0931457 19.3816 0.0278986 19.2109 0.00741864C19.0403 -0.0130613 18.8669 0.0120695 18.711 0.0798823L0 8.26252V9.84586L7.85899 12.7747L12.9 20.0005H14.5998L19.9704 1.05835C20.014 0.903225 20.0093 0.739764 19.957 0.587011C19.9047 0.434258 19.8069 0.298501 19.6749 0.195557ZM13.5503 18.4903L9.21733 12.2793L15.885 5.47519L14.8301 4.57775L8.11016 11.4349L1.6304 9.02004L18.3024 1.72885L13.5503 18.4903Z" />
                        </svg>


                      </button>
                    </form>
                    <p className="ray-600">Your privacy protected! We dont disclose Email.</p>
                  </div>
                </Fade>
              </div>
              <Fade bottom>
                <div className="lg:text-center mt-8 lg:mt-10">
                  <span className="">
                    © {new Date().getFullYear()}
                    <span id=""> Nigerian Fintech Awards. All Rights Reserved - Made with ❤ by
                      <a href="https://roatek.com.ng/" target="_blank" rel="noreferrer" className="text-indigo-500 font-medium underline-hover ml-1">
                        Roatek
                      </a>
                    </span>
                  </span>
                </div>
              </Fade>
            </div>

          </footer>
        </Container>

      </Fade>
    </>
  );
}

export default Footer;
