/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/ColorSwitch'
import TeamCard from '@/components/team/TeamCard'
import teamData from '@/data/team'
import Link from 'next/link';

const About = () => {
    return (
        <>
            <Header title="About" desc="About-Page The Nigeria FinTech Awards" />
            <Container className="pt-24 text-jacarta-700 dark:text-white">
                <section className="relative ">
                    <div className="container">

                        <div className="mx-auto max-w-4xl py-16 text-center">
                            <h1 className="text-jacarta-700 mb-8 tracking-wider md:leading-normal lg:text-[46px] text-3xl font-medium dark:text-white">About The Nigeria FinTech Awards</h1>
                            <p className="dark:text-jacarta-300 font-DmSans ">
                                Founded in 2012, the Nigerian Fintech Awards are dedicated to honoring excellence in financial technologies and services companies and products. The Awards provide public recognition for the achievements of FinTech companies and products in many categories. These include Payments, Personal Finance, Wealth Management, Fraud Protection, Banking, Lending, RegTech, InsurTech, and more. Nigerian Fintech Awards has no tie with any Fintech company. This means that our decisions and actions are independent of any interest or operational restrictions. The ethos of the awards is in line with this freedom.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="lg:px-10">
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
                                <div className="mt-3">
                                    <figure className="group overflow-hidden rounded-md sm:rounded-2xl sm:rounded-b-[30px]">
                                        <img
                                            src="/assets/gallery/nigeria-fintech-awards-hero.jpg"
                                            width={950}
                                            height={630}
                                            className="object-cover w-full h-full rounded-md sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"

                                            alt="nigeria-fintech-awardee"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-md sm:rounded-xl overflow-hidden ">
                            <figure className="group overflow-hidden rounded-md sm:rounded-2xl sm:rounded-b-[30px]">
                                <img
                                    src="/assets/gallery/nigeria-fintech-awardee-2.png"
                                    className="object-cover w-full h-full rounded-md sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"

                                    width={750}
                                    height={650}
                                    alt="nigeria-fintech-awardee-2"
                                />
                            </figure>
                            <figure className="group overflow-hidden rounded-md sm:rounded-2xl sm:rounded-b-[30px]">
                                <img
                                    src="/assets/gallery/nigeria-fintech-awarde-new-logo.png"
                                    className="object-cover w-full h-full rounded-md sm:rounded-xl transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                    width={290}
                                    height={200}
                                    alt="nigeria-fintech-awardee-2"
                                />
                            </figure>
                        </div>
                        <div className="relative rounded-md sm:rounded-xl hidden lg:block overflow-hidden ">
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
                        <div className="absolute text-primary-900 flex items-center justify-center left-3 bottom-5 px-4 py-2 rounded-xl bg-jacarta-100  cursor-pointer hover:bg-jacarta-200 z-10">
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
                        </div>
                    </div>
                </section>
                <section className="pb-10">
                    <div className="container">
                        <div className="pt-24">
                            <h2 className="text-jacarta-700 mb-16 text-center tracking-wider md:leading-normal lg:text-[46px] text-3xl dark:text-white">Numbers Speak</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4">
                                <div className="mb-10 text-center">
                                    <h5 className="text-jacarta-700 block text-5xl dark:text-white">2012</h5>
                                    <p className="dark:text-jacarta-300 block">Founded</p>
                                </div>
                                <div className="mb-10 text-center">
                                    <h5 className="text-jacarta-700 block text-5xl dark:text-white">693+</h5>
                                    <span className="dark:text-jacarta-300 block">Awardees</span>
                                </div>
                                <div className="mb-10 text-center">
                                    <h5 className="text-jacarta-700 block text-5xl dark:text-white">15+</h5>
                                    <span className="dark:text-jacarta-300 block">Sponsors</span>
                                </div>
                                <div className="mb-10 text-center">
                                    <h5 className="text-jacarta-700 block text-5xl dark:text-white">1.6M</h5>
                                    <span className="dark:text-jacarta-300 block">Tickets Sold</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="meet-the-jury" className="py-5">
                    <div className="container">
                        <h2 className="text-jacarta-700 mb-12 text-center tracking-wider md:leading-normal lg:text-[46px] text-3xl dark:text-white">
                            Meet The Jury
                        </h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem] lg:grid-cols-5">
                            {
                                teamData.map(({ imagePath, name, title }, index) => (
                                    <TeamCard key={index} imagePath={imagePath} name={name} title={title} />
                                ))
                            }
                            <Link href="contact">
                                <a className="dark:bg-jacarta-700 rounded-2lg dark:border-jacarta-600 border-jacarta-100 flex items-center justify-center border bg-white p-8 text-center transition-shadow hover:shadow-lg">
                                    <span className="text-jacarta-700 text-[1.125rem] dark:text-white">Join us!</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>


            </Container>

            <Footer />

        </>
    )
}

export default About