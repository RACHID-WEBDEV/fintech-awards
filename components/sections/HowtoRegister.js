import React from 'react'
import Image from 'next/image'
import classNames from 'classnames';
import { Button } from '../form';
import CircleIcon from '@/public/assets/images/circle.png'
import Link from 'next/link';
import { Container } from '@/components/ColorSwitch'
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';


const HowtoRegister = () => {
    return (
        <>
            <section id="how-to-enter" className={classNames("relative bg-white dark:bg-jacarta-800 text-jacarta-700 dark:text-white")}>
                <Container className="md:py-20 py-12">
                    <div className="container">
                        <div className="grid grid-cols-1 pb-8 text-center">
                            <Fade top >
                                <h3 className="mb-1 tracking-wider md:leading-normal lg:text-[46px] text-3xl leading-normal font-semibold ">How To Enter</h3>
                            </Fade>
                            <Fade bottom >
                                <p className="lg:text-lg max-w-xl mx-auto">Nigerian Fintech Awards is endorsed by Fintech1000+, Africa’s largest fintech ecosystem. </p>
                            </Fade>
                        </div>{/*end grid*/}
                        <div className="grid grid-cols-1 mt-8">
                            <div className="timeline relative">
                                <div className="timeline-item">
                                    <div className="w-4 h4 rounded-full mx-auto z-50 bg-jacarta-800"></div>
                                    <div className="grid sm:grid-cols-2">
                                        <div className="">
                                            <div className="duration  date-label-left before:bg-jacarta-800 dark:before:bg-white   md:text-right md:mr-8 relative">
                                                <Fade top >
                                                    <h6 className=" text-4xl">1 <sup><small>st</small></sup></h6>
                                                    <h5 className="-mt-2 font-bold pb-1 tracking-widest">STEP </h5>

                                                </Fade>
                                            </div>
                                        </div>{/*end col*/}
                                        <div className="mt-4 md:mt-0">
                                            <div className="event event-description-right float-left text-left md:ml-8">
                                                <Fade top >
                                                    <h5 className="title mb-1 lg:text-3xl text-2xl font-semibold">WHO CAN ENTER?</h5>
                                                </Fade>
                                                <Fade bottom >
                                                    <p className="timeline-subtitle mt-3 text-[1.125rem] lg:text-[1.25rem] leading-[2rem]">The Nigerian FinTech Awards are open to financial institutions, fintech firms and services providers and other relevant players of the fintech industry in Nigeria. PR agencies, consultants, vendors and other industry participants are welcome to put in an entry on behalf of their clients, but must have prior approval from them to do so.</p>
                                                </Fade>
                                            </div>
                                        </div>{/*end col*/}
                                    </div>{/*end grid*/}
                                </div>{/*end timeline item*/}
                                <div className="timeline-item mt-12">
                                    <div className="grid sm:grid-cols-2">
                                        <div className="md:order-1 order-2">
                                            <div className="event event-description-left float-left text-left md:text-right md:mr-8">
                                                <Fade top >
                                                    <h5 className="title mb-1  lg:text-3xl text-2xl font-semibold">SUBMITTING AN ENTRY</h5>
                                                </Fade>
                                                <div className="text-[1.125rem] lg:text-[1.25rem] leading-[2rem]">
                                                    <Fade bottom >
                                                        <p className="timeline-subtitle mt-3">
                                                            All entries must be written in English and submitted via our online entries portal.

                                                        </p>
                                                        <p className="timeline-subtitle mt-3">
                                                            All entries should be no longer than 1,500 words.

                                                        </p>
                                                        <p className="timeline-subtitle mt-3">

                                                            Supporting material may be supplied, but the main entry of up to 1,500 words should include all information you deem necessary for your awards entry.
                                                        </p>
                                                    </Fade>
                                                </div>

                                            </div>
                                        </div>{/*end col*/}
                                        <div className="md:order-2 order-1">
                                            <div className="duration duration-right before:bg-jacarta-800 dark:before:bg-white md:ml-8 relative">
                                                <Fade top >
                                                    <h6 className=" text-3xl">2 <sup><small>nd</small></sup></h6>
                                                    <h5 className="-mt-2 font-bold pb-1 tracking-widest">STEP </h5>
                                                </Fade>
                                            </div>
                                        </div>{/*end col*/}
                                    </div>{/*end grid*/}
                                </div>{/*end timeline item*/}
                                <div className="timeline-item mt-12">
                                    <div className="grid sm:grid-cols-2">
                                        <div className="mt-4 mt-sm-0">
                                            <div className="duration date-label-left before:bg-jacarta-800 dark:before:bg-white  md:text-right md:mr-8 relative">
                                                <Fade top >
                                                    <h6 className=" text-3xl">3 <sup><small>rd</small></sup></h6>
                                                    <h5 className="-mt-2 font-bold pb-1 tracking-wider">STEP </h5>
                                                </Fade >
                                            </div>
                                        </div>{/*end col*/}
                                        <div className="mt-4 mt-sm-0">
                                            <div className="event event-description-right float-left text-left md:ml-8">
                                                <Fade top >
                                                    <h5 className="title mb-1  lg:text-3xl text-2xl font-semibold">WHAT INFORMATION TO SUBMIT</h5>
                                                </Fade>
                                                <Fade bottom >
                                                    <p className="timeline-subtitle mt-3 mb-3 text-[1.125rem] lg:text-[1.25rem] leading-[2rem] ">The more detail the better! We suggest including the following information:</p>
                                                </Fade>
                                                <Fade left >
                                                    <ol type={1} className="space-y-2 text-[1.125rem] lg:text-[1.25rem] leading-[2rem]">
                                                        <li><b>1.</b>  Dates of the overall project.</li>
                                                        <li><b>2.</b> All entries should be for the period of the last two years.</li>
                                                        <li><b>3.</b> The rationale for the project.</li>
                                                        <li><b>4.</b>  The unique points of the project. Why it is different.</li>
                                                        <li><b>5.</b> The innovative nature and/or the importance of the project.</li>
                                                        <li><b>6.</b>  Project management; team size and mix; collaboration.</li>
                                                        <li><b>7.</b>  Results and performance metrics.</li>
                                                        <li><b>8.</b> Financial and business impact; return on investment (if applicable).</li>
                                                        <li><b>9.</b> Any other information, statistics, facts and figures etc that you think will help us to understand the project better.</li>

                                                    </ol>
                                                </Fade>
                                                <Fade right >
                                                    <div className="space-y-2 text-[1.125rem] lg:text-[1.25rem] leading-[2rem]">
                                                        <p className="pt-2">The entry must be tailored to the specific category and the project you are applying with. The judges are looking for a comprehensive, to-the-point, clear entry with facts and figures to support it. Hence, we strongly suggest NOT to submit the following:</p>
                                                        <p> – Generic promotional material and sales brochures.</p>

                                                        <p> – Marketing jargon and buzzwords.</p>

                                                    </div>
                                                </Fade>
                                            </div>
                                        </div>{/*end col*/}
                                    </div>{/*end grid*/}
                                </div>{/*end timeline item*/}
                            </div>
                            <div className="flex items-center justify-center mt-8">
                                <Fade bottom >
                                    {/* <Jump delay={1000}> */}
                                    <Link href="https://forms.gle/W9voaB7zJczSsMMd6" passHref>
                                        <a>
                                            <Button className="uppercase" > Enter Now</Button>
                                        </a>
                                    </Link>
                                    {/* </Jump> */}
                                </Fade>
                            </div>
                        </div>{/*end grid*/}
                    </div>{/*end container*/}
                </Container>
            </section>



        </>

    )
}

export default HowtoRegister