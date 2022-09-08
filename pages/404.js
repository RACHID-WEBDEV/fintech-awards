import Link from "next/link";
import React, { useState, useEffect } from "react";
import { randomNumberText } from "../utils/utils";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Fade from 'react-reveal/Fade';

function Page404() {
    const [num404, setNum404] = useState("0000");

    useEffect(() => {
        randomNumberText("404", setNum404);
    }, []);

    return (
        <>
            <Header title="404 Page Not found" desc="404-Page The Nigeria FinTech Awards" />
            {num404 !== "0000" && (
                <div className="min-h-screen w-full mt-20 flex items-center justify-center dark:bg-jacarta-800 bg-light-base flex-col animate-fadeIn">
                    <Fade top>
                        <h1 className="text-[3.65rem] lg:text-[6.25rem] text-jacarta-700 dark:text-white font-monospace font-bold opacity-100">{`{ error : ${num404} }`}</h1>
                    </Fade>
                    <div className="flex flex-col items-center">
                        <Fade top>
                            <p className="text-jacarta-700 dark:text-white px-5 text-center text-xl ">
                                Sorry, looks like that page is missing!&nbsp;&nbsp;
                            </p>
                        </Fade>
                        <Fade bottom>
                            <Link href="/" passHref>
                                <a>
                                    <p className="w-full mt-8 sm:w-auto flex-shrink border border-jacarta-800 dark:border-white text-lg px-6 py-3 rounded-xl  hover:bg-jacarta-800 hover:text-white transition-colors cursor-pointer">
                                        Return Home
                                    </p>
                                </a>
                            </Link>
                        </Fade>

                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}

export default Page404;
