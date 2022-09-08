/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../form'
import classNames from 'classnames';
import { Container } from '@/components/ColorSwitch'
import Fade from 'react-reveal/Fade';




const About = () => {
    return (
        <section className={classNames("relative bg-white dark:bg-jacarta-800 text-jacarta-700 dark:text-white")}>
            <Container >
                <div className="container ">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] xl:gap-24">
                        <Fade left cascade>
                            <div className="lg:col-span-5 py-8 md:col-span-6 order-last lg:order-first ">
                                <div className="grid grid-cols-12 gap-6 items-center">
                                    <div className="col-span-6">
                                        <div className="grid grid-cols-1 gap-6">

                                            <div className="w-full h-auto rounded-lg  relative overflow-hidden shadow-lg">
                                                <img
                                                    src="/assets/gallery/nigeria-fintech-awardee-1-400x500.png"
                                                    className="w-full h-full object-center object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out"
                                                    alt="The-nigeria-fintech-awards-images "
                                                />
                                            </div>
                                            <div className="w-full h-auto rounded-lg  relative overflow-hidden shadow-lg">
                                                <img
                                                    src="/assets/gallery/nigeria-fintech-awardee-2-400x500.png"
                                                    className="w-full h-full object-center object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out"
                                                    alt="The-nigeria-fintech-awards-images "
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="grid grid-cols-1 gap-6">
                                            <div className="w-full h-auto rounded-lg  relative overflow-hidden shadow-lg">
                                                <img
                                                    src="/assets/gallery/nigeria-fintech-awardee-3-400x600.png"
                                                    className="w-full h-full object-center object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out"
                                                    alt="The-nigeria-fintech-awards-images "
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
                            <div className="lg:ml-5">
                                <Fade top >
                                    <h3 className="mb-6 lg:text-[46px] text-3xl leading-normal text-center md:text-left font-medium text-black dark:text-white">About Nigerian Fintech Awards </h3>
                                </Fade>
                                <div className="ten-row-paragraph">
                                    <Fade right >
                                        <p className="max-w-[38.9375rem] font-DmSans xl:text-[18px] ">Founded in 2012, the Nigerian Fintech Awards are dedicated to honoring excellence in financial technologies and services companies and products. The Awards provide public recognition for the achievements of FinTech companies and products in many categories. These include Payments, Personal Finance, Wealth Management, Fraud Protection, Banking, Lending, RegTech, InsurTech, and more. Nigerian Fintech Awards has no tie with any Fintech company. </p>
                                        <p className="max-w-[38.9375rem] font-DmSans xl:text-[18px] pt-1">This means that our decisions and actions are independent of any interest or operational restrictions. The ethos of the awards is in line with this freedom. Emaginations promotes the Nigerian Fintech Awards.</p>
                                    </Fade>
                                </div>
                                <div className="mt-8 lg:mt-12 text-center">
                                    <Fade bottom delay={1000}>
                                        <Link href="/about" passHref>
                                            <a>
                                                <Button className="" color="secondary"> Learn More</Button>
                                            </a>
                                        </Link>
                                    </Fade>

                                </div>
                            </div>
                        </div>
                    </div>{/*end grid*/}
                </div>{/*end container*/}
            </Container>
        </section>

    )
}

export default About