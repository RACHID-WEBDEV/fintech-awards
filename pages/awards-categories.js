/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import AwardsCategory from '@/components/sections/AwardsCategory';
import AskQuestion from '@/components/sections/AskQuestion';
import Fade from 'react-reveal/Fade';

const Category = () => {
    return (
        <>
            <Header title="Awards-Categories" desc="Awards-Categories The Nigeria FinTech Awards" />
            <main className="w-screen pt-[5.5rem] lg:pt-20">
                {/* Page Title */}
                <section className="after:bg-jacarta-900/60 w-full h-full relative bg-cover bg-center bg-no-repeat py-32 mt-5 after:absolute after:inset-0" style={{ backgroundImage: 'url("/assets/images/awards_banner.jpg")', }}>
                    <div className="container relative z-10">
                        <Fade top>
                            <h1 className="font-display text-center text-4xl font-medium text-white">Awards Category</h1>
                        </Fade>
                    </div>
                </section>

                <section className="dark:bg-jacarta-800 relative pt-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="/assets/images/gradient_light.jpg" layout='fill' alt="gradient" className="h-full w-full" />
                    </picture>
                    <AwardsCategory />
                    <AskQuestion />
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Category