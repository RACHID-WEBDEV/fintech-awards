/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import blogData from '@/data/blog'
import { Container } from '@/components/ColorSwitch'
import { Button } from '@/components/form'

const Blogs = () => {
    return (
        <>
            <Header title="Blog" desc="Blog The Nigeria FinTech Awards" />
            <main >
                <Container className="pt-[5.5rem] lg:pt-24">
                    <section className="after:bg-jacarta-900/60 w-full h-full relative bg-cover bg-center bg-no-repeat py-32 after:absolute after:inset-0" style={{ backgroundImage: 'url("/assets/images/contact_banner.jpg")', }}>
                        <div className="container relative z-10">
                            <h1 className="font-display text-center tracking-wider md:leading-normal lg:text-[46px] text-3xl font-medium text-white">Our Blog</h1>
                        </div>
                    </section>
                    <section className="relative py-16 md:py-24">
                        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                            <img layout="fill" src="/assets/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                        </picture>
                        <div className="container">
                            {/* Featured Post */}
                            {
                                blogData.filter(i => i.feature === true).map(({ imageUrl, description, id, title, date, lastRead }, index) => (
                                    <BlogCard featureCard key={index} id={id} description={description} lastRead={lastRead} imageUrl={imageUrl} date={date} title={title} />
                                ))
                            }

                            <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
                                {
                                    blogData.filter(i => i.feature === false).map(({ imageUrl, id, description, title, date, lastRead }, index) => (
                                        <BlogCard key={index} description={description} id={id} lastRead={lastRead} imageUrl={imageUrl} date={date} title={title} />
                                    ))
                                }
                            </div>
                            {/* Load More */}
                            <div className="mt-10 text-center">
                                <Button color="secondary" >Load More</Button>
                            </div>
                        </div>
                    </section>
                    {/* end blog */}
                </Container>
            </main>

            <Footer />
        </>
    )
}

export default Blogs