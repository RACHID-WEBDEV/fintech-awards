/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const BlogCard = ({ date, imageUrl, title, description, featureCard, id, lastRead }) => {
    return (
        <>
            {featureCard === true ?
                <article className="mb-[1.875rem] md:mb-16">
                    <div className="flex flex-col overflow-hidden rounded-[1.25rem] transition-shadow hover:shadow-lg md:flex-row">
                        <figure className="group overflow-hidden md:w-1/2">
                            <Link href={`/blog/${title.toLowerCase().replaceAll(" ", "-")}`}>
                                <a >
                                    <img src={imageUrl} alt={title} objectfit="cover" width="660px" height="540" className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105" />
                                </a>
                            </Link>
                        </figure>
                        {/* Body */}
                        <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border bg-white p-[10%] md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
                            <h2 className="two-row-paragraph text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white sm:text-3xl">
                                <Link href={`/blog/${title.toLowerCase().replaceAll(" ", "-")}`}>
                                    <a > {title} </a>
                                </Link>
                            </h2>
                            <p className="three-row-paragraph dark:text-jacarta-200 mb-8">
                                {description}
                            </p>
                            {/* Date / Time */}
                            <div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
                                <span><time dateTime="2022-02-05">{date}</time></span>
                                <span>•</span>
                                <span>{lastRead} min read</span>
                            </div>
                        </div>
                    </div>
                </article>
                :
                <article>
                    <div className="overflow-hidden rounded-[1.25rem] transition-shadow hover:shadow-lg">
                        <figure className="group overflow-hidden">
                            <Link href={`/blog/${title.toLowerCase().replaceAll(" ", "-")}`} passHref>
                                <a >
                                    <img src={imageUrl} width="400px" height="250px" alt={title} className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105" />
                                </a>
                            </Link>
                        </figure>
                        {/* Body */}
                        <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]">
                            {/* Meta */}

                            <h2 className="two-row-paragraph text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white">
                                <Link href={`/blog/${title.toLowerCase().replaceAll(" ", "-")}`} passHref>
                                    <a > {title} </a>
                                </Link>
                            </h2>
                            <p className="three-row-paragraph dark:text-jacarta-200 mb-8">
                                {description}
                            </p>
                            {/* Date / Time */}
                            <div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
                                <span><time dateTime="2022-02-05">{date}</time></span>
                                <span>•</span>
                                <span>{lastRead}</span>
                            </div>
                        </div>
                    </div>
                </article>
            }
        </>
    )
}

export default BlogCard

