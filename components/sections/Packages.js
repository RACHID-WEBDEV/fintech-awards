/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import PackageStep from './PackageStep'
import Fade from 'react-reveal/Fade';
const Packages = () => {
    return (

        <>
            <section id="packages" className="dark:bg-jacarta-800 bg-light-base relative py-5 pt-10">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="/assets/images/gradient_light.jpg" layout='fill' alt="gradient" className="h-full" />
                </picture>
                <div className="container ">
                    <div className="mb-16 text-jacarta-700 dark:text-jacarta-100">
                        <Fade top >
                            <h2 className="font-display  mb-3 text-center tracking-wider md:leading-normal lg:text-[46px] text-3xl dark:text-white">
                                Our Packages
                            </h2>
                        </Fade>
                        <Fade bottom >
                            <p className="lg:text-lg max-w-3xl text-center  mx-auto"> Our sponsorship packages come with branding, communications, and a few marketing channels offered by our publication, Fintech Africa.</p>
                        </Fade>
                    </div>
                    <Fade bottom >
                        <PackageStep />
                    </Fade>
                </div>
            </section>

        </>
    )
}

export default Packages