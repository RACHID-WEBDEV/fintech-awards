/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from '../form';

const AskQuestion = () => {
    return (
        <div className="bg-light-base dark:bg-jacarta-800 px-14 py-16 lg:py-20 ">
            <div>
                <div className="mt-2  avatar-group text-center">
                    <div className="relative z-20 inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 -ml-4  transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-size-xs hover:z-40">
                        <img
                            src="/assets/team/Shina-Badaru.jpg"
                            className="w-full rounded-full"
                            layout="fill"
                            alt="user2"
                        />
                    </div>

                    <div className="relative z-30 inline-flex justify-center w-14 h-14 lg:w-16 lg:h-16 -ml-4  transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-size-xs hover:z-30">
                        <img

                            src="/assets/team/mr sola.jpg"
                            className="w-full rounded-full"
                            layout="fill"
                            alt="user3"
                        />
                    </div>

                    <div className="relative z-20 inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 -ml-4  transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-size-xs hover:z-30">
                        <img
                            src="/assets/team/Rarzack-Olaegbe-sec.png"
                            className="w-full rounded-full"
                            layout="fill"
                            alt="user3"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="font-Inter text-xl md:text-xl font-semibold text-jacarta-800 dark:text-white  py-2">Still have questions?</h1>
                    <p className="pb-2 text-jacarta-700 dark:text-jacarta-300 text-base lg:text-lg">Can’t find the answers you are looking for?</p>
                    <Link href="/contact">
                        <a>
                            <Button
                                className="my-2 capitalize"

                            >
                                Contact Us
                            </Button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AskQuestion