/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import AwardsCategory from '@/components/sections/AwardsCategory';
import AskQuestion from '@/components/sections/AskQuestion';
import Fade from 'react-reveal/Fade';


const PastAwards = () => {
    return (
        <>
            <Header title="Past Awards" desc="Past Awards The Nigeria FinTech Awards" />
            <main className="pt-[5.5rem] lg:pt-24">
                {/* Page Title */}
                <section className="after:bg-jacarta-900/60 w-full h-full relative bg-cover bg-center bg-no-repeat py-32 mt-5 after:absolute after:inset-0" style={{ backgroundImage: 'url("/assets/images/awards_banner.jpg")', }}>
                    <div className="container relative z-10">
                        <Fade top>
                            <h1 className="font-display text-center tracking-widest md:leading-normal lg:text-[46px] text-3xl font-medium text-white">Past Awards </h1>
                        </Fade>
                    </div>
                </section>

                <section className="dark:bg-jacarta-800 relative pt-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="/assets/images/gradient_light.jpg" layout='fill' alt="gradient" className="h-full w-full" />
                    </picture>
                    <Fade bottom>
                        <h1 className=" mb-8 text-jacarta-700 text-center tracking-widest md:leading-normal lg:text-[46px] text-3xl font-medium dark:text-white">
                            Recent Past Awards
                        </h1>
                    </Fade>
                    <Fade right>
                        <section className="lg:p-10">
                            <div className="relative  m-2 grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
                                <div className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer">
                                    <div className="  absolute inset-0">
                                        <figure className="group overflow-hidden rounded-md sm:rounded-2xl sm:rounded-b-[30px]">
                                            <img
                                                src="/assets/gallery/nigeria-fintech-awardee-1.png"
                                                width={750}
                                                height={600}
                                                className="object-cover w-full h-full rounded-md sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"

                                                alt="nigeria-fintech-awardee"
                                            />
                                        </figure>
                                        <div className="my-3">
                                            <figure className="group overflow-hidden  rounded-md lg:min-h-[680px] sm:rounded-2xl sm:rounded-b-[30px]">
                                                <img
                                                    src="/assets/gallery/nigeria-fintech-awards-hero.jpg"
                                                    width={950}
                                                    height={630}
                                                    className="object-cover w-full h-full lg:min-h-[700px] rounded-md sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"

                                                    alt="nigeria-fintech-awardee"
                                                />
                                            </figure>
                                        </div>
                                        <figure className="group overflow-hidden rounded-md  sm:rounded-2xl sm:rounded-b-[30px]">
                                            <img
                                                src="/assets/gallery/nigeria-fintech-awardee-2.png"
                                                width={750}
                                                height={600}
                                                className="object-cover w-full h-full rounded-md min-h-[200px] sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                                alt="nigeria-fintech-awardee"
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div className="relative rounded-md sm:rounded-xl overflow-hidden ">
                                    <figure className="group overflow-hidden rounded-md  sm:rounded-2xl sm:rounded-b-[30px]">
                                        <img
                                            src="/assets/gallery/nigeria-fintech-awardee-2.png"
                                            className="object-cover w-full h-full rounded-md  sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"

                                            width={750}
                                            height={650}
                                            alt="nigeria-fintech-awardee-2"
                                        />
                                    </figure>
                                    <figure className="group overflow-hidden mt-3 lg:mt-6 rounded-md sm:rounded-2xl sm:rounded-b-[30px]">
                                        <img
                                            src="/assets/gallery/nigeria-fintech-awarde-new-logo2.png"
                                            className="object-cover w-full h-full rounded-md sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                            width={290}
                                            height={200}
                                            alt="nigeria-fintech-awardee-2"
                                        />
                                    </figure>
                                </div>
                                <div className="relative rounded-md sm:rounded-xl overflow-hidden ">
                                    <figure className="group overflow-hidden rounded-md sm:rounded-2xl sm:rounded-b-[30px]">
                                        <img
                                            src="/assets/gallery/nigeria-fintech-awards banner.jpg"
                                            className="object-cover w-full h-full rounded-md sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                            width={350}
                                            height={500}
                                            alt="nigeria-fintech-awardee-3"
                                        />
                                    </figure>
                                </div>
                                <div className="relative rounded-md sm:rounded-xl overflow-hidden ">
                                    <figure className="group overflow-hidden rounded-md sm:rounded-2xl sm:rounded-b-[30px]">

                                        <img
                                            src="/assets/gallery/nigeria-fintech-awardee-3-400x600.png"
                                            className="object-cover w-full h-full rounded-md sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"

                                            width={350}
                                            height={502}
                                            alt="nigeria-fintech-awardee-4"
                                        />
                                    </figure>
                                </div>
                                <div className="relative rounded-md sm:rounded-xl overflow-hidden hidden sm:block">
                                    <figure className="group overflow-hidden rounded-md sm:rounded-2xl sm:rounded-b-[30px]">
                                        <img
                                            src="/assets/gallery/nigeria-fintech-awards banner-1.jpg"
                                            className="object-cover w-full h-full rounded-md sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"

                                            width={350}
                                            height={502}
                                            alt="nigeria-fintech-awardee-banner"
                                        />
                                    </figure>
                                </div>
                                {/* <div className="absolute text-primary-900 hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-jacarta-100  cursor-pointer hover:bg-jacarta-200 z-10">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    />
                                </svg>
                                <Link href="/past-awards">
                                    <a>
                                        <span className="ml-2  text-sm font-medium ">Show all photos</span>
                                    </a>
                                </Link>
                            </div> */}
                            </div>
                        </section>
                    </Fade>
                    <AskQuestion />
                </section>

            </main>
            <Footer />
        </>
    )
}

export default PastAwards