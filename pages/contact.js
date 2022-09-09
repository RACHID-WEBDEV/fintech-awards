/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer'
import { Button } from '@/components/form'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Fade from 'react-reveal/Fade';


const contact = () => {
    return (
        <>
            <Header title="Contact" desc="Contact The Nigeria FinTech Awards" />
            <main className="pt-[5.5rem] mt-5 lg:pt-24">
                {/* Page Title */}
                <section className="after:bg-jacarta-900/60 w-full h-full relative bg-cover bg-center bg-no-repeat py-32 after:absolute after:inset-0" style={{ backgroundImage: 'url("/assets/images/contact_banner.jpg")', }}>
                    <div className="container relative z-10">
                        <Fade top>
                            <h1 className="font-display text-center tracking-wider md:leading-normal lg:text-[46px] text-3xl font-medium text-white">Get in touch</h1>
                        </Fade>
                    </div>
                </section>
                {/* Contact */}
                <section className="dark:bg-jacarta-800 relative py-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="/assets/images/gradient_light.jpg" layout='fill' alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <div className="lg:flex">
                            {/* Contact Form */}
                            <Fade bottom>
                                <div className="mb-12 lg:mb-0 lg:w-2/3 lg:pr-12">
                                    <h2 className="font-display text-jacarta-700 mb-4 text-xl dark:text-white">Contact Us</h2>
                                    <p className="dark:text-jacarta-300 mb-16 text-lg leading-normal">
                                        Have a question? Need help? Don&apos;t hesitate, drop us a line
                                    </p>
                                    <form id="contact-form" method="post">
                                        <div className="flex space-x-7">
                                            <div className="mb-6 w-1/2">
                                                <label htmlFor="name" className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">Name<span className="text-red">*</span></label>
                                                <input name="name" className="contact-form-input dark:bg-jacarta-700  border-2 border-jacarta-100 hover:ring-jacarta-200 focus:ring-jacarta-200 outline-none dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white" id="name" type="text" required />
                                            </div>
                                            <div className="mb-6 w-1/2">
                                                <label htmlFor="email" className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">Email<span className="text-red">*</span></label>
                                                <input name="email" className="contact-form-input dark:bg-jacarta-700 border-2 border-jacarta-100 hover:ring-jacarta-200 focus:ring-jacarta-200 outline-none dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white" id="email" type="email" required />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="message" className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">Message<span className="text-red">*</span></label>
                                            <textarea id="message" className="contact-form-input dark:bg-jacarta-700 border-2 border-jacarta-100 hover:ring-jacarta-200 focus:ring-jacarta-200 outline-none dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white" required name="message" rows={5} defaultValue={""} />
                                        </div>
                                        <div className="mb-6 flex items-center space-x-2">
                                            <input type="checkbox" id="contact-form-consent-input" name="agree-to-terms" className="checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0" />
                                            <label htmlFor="contact-form-consent-input" className="dark:text-jacarta-200 text-sm">I agree to the <a href="tos.html" className="text-accent">Terms of Service</a></label>
                                        </div>
                                        <Button
                                            className="my-2 capitalize"
                                            color="secondary"
                                        >
                                            Submit
                                        </Button>

                                        <div id="contact-form-notice" className="relative mt-4 hidden rounded-lg border border-transparent p-4" />
                                    </form>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="lg:w-1/3 lg:pl-5">
                                    <h2 className="font-display text-jacarta-700 mb-4 text-xl dark:text-white">Information</h2>
                                    <p className="dark:text-jacarta-300 mb-6 text-base lg:text-[1.125rem] xl:text-lg leading-normal">
                                        Don&apos;t hesitate, drop us a line Let&apos;s talk
                                        about Sponsorship. Feel free to ask us any question and let’s start talking about our collaboration.




                                    </p>
                                    <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-[1.25rem] border bg-white p-10">
                                        <div className="mb-6 flex items-center space-x-5">
                                            <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-400">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                                                </svg>
                                            </span>
                                            <div>
                                                <h6 className="font-display text-jacarta-700 block text-base dark:text-white">Phone</h6>
                                                <a href="tel:+2348082477786" className="text-jacarta-500 hover:text-accent dark:text-jacarta-300 font-DmSans text-sm"> +234 8082477786, +234 8082477799</a>
                                            </div>
                                        </div>
                                        <div className="mb-6 flex items-center space-x-5">
                                            <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-400">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                                                </svg>
                                            </span>
                                            <div>
                                                <h6 className="font-display text-jacarta-700 block text-base dark:text-white">Address</h6>
                                                <address className="text-jacarta-500 dark:text-jacarta-300 font-DmSans text-sm not-italic">The BrickHouse

                                                    17, Yinusa Adeniji Street, Off Muslim Avenue

                                                    Ikeja, Lagos</address>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-5">
                                            <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-400">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" />
                                                </svg>
                                            </span>
                                            <div>
                                                <h6 className="font-display text-jacarta-700 block text-base dark:text-white">Email</h6>
                                                <Link href="mailto:info@nigerianfintechawards.org.ng">
                                                    <a className="text-jacarta-500 hover:text-accent dark:text-jacarta-300 font-DmSans text-sm not-italic">info@nigerianfintechawards.org.ng</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>
                {/* end contact */}
            </main>
            <Footer />
        </>
    )
}

export default contact