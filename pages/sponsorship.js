/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import { Container } from '@/components/ColorSwitch'
import AskQuestion from '@/components/sections/AskQuestion'
import Fade from 'react-reveal/Fade';

const Sponsorship = () => {
    return (
        <>
            <Header title="Sponsorship" desc="Sponsorship The Nigeria FinTech Awards" />

            <main className="pt-[5.5rem] lg:pt-24">
                {/* Page Title */}
                <section className="after:bg-jacarta-900/60 w-full h-full relative bg-cover bg-center bg-no-repeat py-32 mt-5 after:absolute after:inset-0" style={{ backgroundImage: 'url("/assets/images/awards_banner.jpg")', }}>
                    <div className="container relative z-10">
                        <Fade top>
                            <h1 className="font-display text-center tracking-wider md:leading-normal lg:text-[46px] text-3xl font-medium text-white">Our Sponsors</h1>
                        </Fade>
                    </div>
                </section>

                <section className="dark:bg-jacarta-800 relative ">
                    <Container className="bg-jacarta-700 dark:bg-white" >

                        <section className="dark:bg-jacarta-800 relative py-16">
                            <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                                <img src="/assets/images/gradient_light.jpg" layout='fill' alt="gradient" className="h-full w-full" />
                            </picture>
                            <div className="container text-jacarta-700 dark:text-jacarta-50 font-DmSans">
                                <Fade bottom>
                                    <h1 className=" mb-8 text-jacarta-700 text-center tracking-widest md:leading-normal lg:text-[46px] text-3xl font-medium dark:text-white">
                                        Sponsorship Opportunities
                                    </h1>
                                </Fade>
                                <div className="article-content my-2 mx-auto max-w-[60.125rem] space-y-4">
                                    <Fade left>
                                        <h2 className="tracking-wider md:leading-normal lg:text-[36px] text-xl">Our Sponsors</h2>
                                    </Fade>
                                    <Fade left>
                                        <p>
                                            We are careful about inviting or accepting a company as a sponsor. Our sponsors will share the limelight with us on the Awards night and throughout the communications cycle. Some of our sponsors stick with an award category. Others work with us much more closely.
                                        </p>
                                    </Fade>
                                    <Fade right>
                                        <h2 className="tracking-wider md:leading-normal lg:text-[36px] text-xl">How We Work</h2>
                                    </Fade>
                                    <Fade right>
                                        <p>
                                            We have a sustainable and consistent team. These include our photographers to our judges. We work with partner companies that share our values. This approach has undoubtedly made the awards stronger year on year.
                                        </p>
                                    </Fade>
                                    <Fade bottom>
                                        <p>
                                            We understand the role of sponsorship in helping us to celebrate the Award winners. We also understand that our sponsors need a ‘Win’ themselves. We have carefully aligned sponsors with categories. Our team works with partners’ teams to find the best awareness and positioning for each. In whatever way a sponsor chooses to work with the Nigerian Fintech Awards, they have the same commitment as us.
                                        </p>
                                    </Fade>
                                    <Fade left>
                                        <h2 className='tracking-wider md:leading-normal lg:text-[36px] text-xl'>Why Sponsor? </h2>
                                    </Fade>
                                    <Fade left>
                                        <p>
                                            Sponsors get access to an engaged audience of senior thought-leaders through an assortment of different options. Whether you’re looking to align your brand with innovations in the Nigerian Fintech industry or benefit from inclusion in our marketing campaign, the Nigerian Fintech Awards have something that’s right for you.
                                        </p>
                                    </Fade>
                                    <Fade right>
                                        <h2 className='tracking-wider md:leading-normal lg:text-[36px] text-xl'>Our Sponsorship Packages Come With Branding</h2>
                                    </Fade>
                                    <Fade right>
                                        <p>
                                            Our sponsorship packages include branding, communications, and a few Fintech Africa publications offer. You will also feature on all pre and post-articles: the winners&apos; supplement, email, and social media messages about the awards.
                                        </p>
                                    </Fade>

                                </div>
                            </div>
                        </section>
                        <AskQuestion />
                    </Container>
                </section>

            </main>

            <Footer />
        </>
    )

}

export default Sponsorship