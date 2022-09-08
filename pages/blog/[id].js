/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { Container } from '../../components/ColorSwitch';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
    RightArrow2, FacebookIcon, InstagramIcon,
    LinkeinIcon,
    TwitterIcon,
    ReplyIcon,
    SearchIcon,
    SearchIcon2
} from '@/public/assets/svgsIcons'

const BlogDetails = () => {
    return (
        <>
            <Header title="Blog-Details" desc="Blog-Details The Nigeria FinTech Awards" />
            <Container className="mt-2 pt-32  lg:pt-48 ">
                <section className="hero-section pb-20 lg:pb-32 relative text-jacarta-800 dark:text-white">

                    <div className="container mx-auto relative px-4 z-10">
                        <h2 className="font-display text-4xl lg:text-6xl text-jacarta-900 dark:text-white font-bold mb-4">FinTech Market – Big Benefits of Selling</h2>
                        <ul className="hero-breadcrumb font-body text-jacarta-600 dark:text-white flex flex-wrap items-center">
                            <li className="flex items-center mr-2"><a className="transition duration-500 hover:text-indigo-500 underline-hover" href="index"> Home</a></li>
                            <li className="flex items-center mr-2">
                                <span className="w-3 h-3 inline-block mr-2">
                                    <RightArrow2 />
                                </span>
                                <a className="transition duration-500 hover:text-indigo-500 underline-hover" href="explore"> Explore</a>
                            </li>
                            <li className="flex items-center text-indigo-500 mr-2">
                                <span className="w-3 h-3 inline-block mr-2">
                                    <RightArrow2 />
                                </span>
                                FinTech Market – Big Benefits of Selling
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="blog-section pb-12 lg:pb-20 text-jacarta-800 dark:text-white">
                    <div className="container mx-auto relative px-4 z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-7 xl:col-span-8">
                                <figure>
                                    <img className="w-full rounded" width={800} height={480} src="/assets/blog/post_1.jpg" alt="title" />
                                </figure>
                                <div className="xl:flex items-center justify-between my-8">
                                    <div className="flex items-center relative my-6">
                                        <div className="flex flex-wrap items-center mr-10">
                                            <img width={40} height={40} className="border-2 border-white w-10 h-10 object-cover rounded-full" src="/assets/team/Adewale-Yusuf.png" alt="title" />
                                            <div className="ml-2">
                                                <h6 className="font-display text-jacarta-900 dark:text-white font-bold transition duration-500 hover:text-jacarta-500"><a href="creator-published">Adams Smith</a></h6>
                                                <p className="font-body text-sm text-jacarta-600 dark:text-jacarta-100">FinTech Blogger</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex items-center relative my-6">
                                        <div className="text-center lg:text-right">
                                            <p className="block font-display text-jacarta-900 font-medium transition dark:text-white duration-500">Published on</p>
                                            <p className="font-body text-jacarta-600 dark:text-jacarta-100">02 Feb 2021</p>
                                        </div>
                                        <div className="text-center lg:text-right ml-10">
                                            <p className="block font-display text-jacarta-900 font-medium transition duration-500 dark:text-white">Last Updated</p>
                                            <p className="font-body text-jacarta-600 dark:text-jacarta-100">02 Feb 2022 at 1:36 a.m</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="entry-content typofix mb-8 lg:mb-14">
                                    <p>And its distance, scale was and I of mellower great. Recently the contracting those what in however, chair. For to is except notice to he first were to a its wonder progress voices my day she were positives that the operations or way and her that them. Good you interesting.Then service, gleaning many repeat because of mars as his he you business versus it the have move quarter cold a than essential check up in at meticulous be the we day odd them merit around  get harmonics. Pink the have such to picture his of kings bright the funds various his in concept sides and the seal to the bulk; To else. Travelling, approached his understanding hologram a
                                        coast by slogging to the transformed room. May help family as a there to human employed a produce me. The follow that considerations, a really have researches how gone.</p>
                                    <blockquote>The medium of podcasting and the personal nature of it, the relationship you build with your listeners and the relationship they have with you—they could be chuckling and listening…there’s nothing like that <cite>— <a href="http://en.wikipedia.org/wiki/HAL_9000">HAL 9000</a></cite></blockquote>
                                    <p>Case he a may of the found for the it sinking a is self-interest. They the necessary to of been the there to by he though, attribute instead, posts, of price strained of create to embarrassed trade, lift calculus to have let room sofas was belly, at and title make music. Literature sentences my behind goodness. Initial thousand personalities nearby best select because can before could it the enormity
                                    </p>
                                    <h4>FinTech Market – A Compact Trike with the Big Benefits</h4>
                                    <p>Assets named receive make continued would appearance, this he there understand were the passion her by in our such, yourself big didn&apos;t best pointing necessary it he bed throughout. It why than raised as of for and founding not on bad the first me refinement is it day of go. Duck the seal to lively. Publication at the of accustomed. Self-interest, duck thousand canvassing are them.
                                    </p>

                                </div>
                                <div className="entry-footer flex flex-wrap lg:flex-nowrap items-center justify-between border-b border-t border-jacarta-300 py-4 mb-8 lg:mb-14">
                                    <div className="flex flex-wrap items-center">
                                        <h4 className="font-display text-jacarta-600 font-bold mr-2 dark:text-white">Tags:</h4>
                                        <a className="btn block text-jacarta-900 font-body rounded py-2 px-4 mr-2 my-1 transition-all duration-500 shadow-white-volume custom-shadow hover:shadow-accent-volume bg-white hover:text-white hover:bg-jacarta-650" href="tag">Auction</a>
                                        <a className="btn block text-jacarta-900 font-body rounded py-2 px-4 mr-2 my-1 transition-all duration-500 shadow-white-volume custom-shadow hover:shadow-accent-volume bg-white hover:text-white hover:bg-jacarta-650" href="tag">Creator</a>
                                        <a className="btn block text-jacarta-900 font-body rounded py-2 px-4 mr-2 my-1 transition-all duration-500 shadow-white-volume custom-shadow hover:shadow-accent-volume bg-white hover:text-white hover:bg-jacarta-650" href="tag">Marketplace</a>
                                    </div>
                                    <div className="social-share flex items-center">
                                        <a className="flex items-center justify-center w-10 h-10 bg-jacarta-200 rounded-lg border border-jacarta-200 transition duration-500 hover:bg-jacarta-100 mr-2" href="https://www.facebook.com/" >
                                            <span className="w-4 h-4">
                                                < FacebookIcon />
                                            </span>
                                        </a>
                                        <a className="flex items-center justify-center w-10 h-10 bg-jacarta-200 rounded-lg border border-jacarta-200 transition duration-500 hover:bg-jacarta-100 mr-2" href="https://www.twitter.com/" >
                                            <span className="w-4 h-4">
                                                < TwitterIcon />
                                            </span>
                                        </a>
                                        <a className="flex items-center justify-center w-10 h-10 bg-jacarta-200 rounded-lg border border-jacarta-200 transition duration-500 hover:bg-jacarta-100 mr-2" href="https://www.instagram.com/" >
                                            <span className="w-4 h-4">
                                                < InstagramIcon />
                                            </span>
                                        </a>
                                        <a className="flex items-center justify-center w-10 h-10 bg-jacarta-200 rounded-lg border border-jacarta-200 transition duration-500 hover:bg-jacarta-100 mr-2" href="https://www.linkedin.com/" >
                                            <span className="w-4 h-4">
                                                < LinkeinIcon />
                                            </span> </a>
                                    </div>
                                </div>
                                <div className="entry-author bg-white rounded shadow transition duration-500 hover:shadow-lg flex justify-between px-6 py-12 mb-8 lg:mb-14">
                                    <img className="w-16 h-16 lg:w-28 lg:h-28 object-cover rounded-full" width={350} height={350} src="/assets/team/Adewale-Yusuf.png" alt="title" />
                                    <div className="pl-6">
                                        <h4 className="font-display text-xl text-jacarta-900 font-bold transition duration-500 hover:text-indigo-500"><a href="creator-published">Robert Mill</a></h4>
                                        <p className="font-body text-jacarta-600 mt-2">I was born in Kansas, and like little Ellie, I always dreamed that a hurricane would take me ipsum somewhere to another country. And once I really ended up in another country - in China, to take studying at a business school.</p>
                                    </div>
                                </div>
                                <div className="entry-comment  bg-jacarta-50 rounded shadow transition duration-500 hover:shadow-lg p-6 mb-6">
                                    <p className="font-body typofix text-jacarta-600">Been as big couldn&apos;t teacher&apos;
                                        &apos;s replied affects especially evaluate best at the retired, have be circumstances. Client intended multitude
                                        Separated both they or a into at be but improve small indication instruments, and weary the lack time trying. Phase absolutely is values, life And assumed one in for conduct, gave of and the history by frequency; Emerged.
                                    </p>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center mt-2">
                                            <img className="border-2 border-white w-8 h-8 object-cover rounded-full" width={40} height={40} src="/assets/team/Adewale-Yusuf.png" alt="title" />
                                            <div className="ml-2">
                                                <h6 className="font-display text-jacarta-900 font-bold transition duration-500 hover:text-indigo-500">
                                                    <a href="creator-published">Steven Robart</a></h6>
                                            </div>
                                        </div>
                                        <a className="readmore-btn font-display font-semibold text-jacarta-900 transition duration-500 hover:text-indigo-500 mt-2" href="single">Reply
                                            <span className="grayscale inline-block w-4 ml-2"  >
                                                <ReplyIcon />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="entry-comment bg-light-base rounded shadow transition duration-500 hover:shadow-lg p-6 mb-6 lg:ml-12">
                                    <p className="font-body typofix text-jacarta-600">Is nature, listen. Felt me. Tones it could attempt. Who like the doctor many was are to encouraged room. Feedback accordingly what entrance that fate how at represent and publication easier step and or that one hesitated italic the we lively. Fur son, schemes</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center mt-2">
                                            <img className="border-2 border-white w-8 h-8 object-cover rounded-full" width={40} height={40} src="/assets/team/Adewale-Yusuf.png" alt="title" />
                                            <div className="ml-2">
                                                <h6 className="font-display text-jacarta-900 font-bold transition duration-500 hover:text-indigo-500">
                                                    <a href="creator-published">Kristin Watson</a></h6>
                                            </div>
                                        </div>
                                        <a className="readmore-btn font-display font-semibold text-jacarta-900 transition duration-500 hover:text-indigo-500 mt-2" href="single">Reply
                                            <span className="grayscale inline-block w-4 ml-2"  >
                                                <ReplyIcon />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="entry-comment bg-light-base rounded shadow transition duration-500 hover:shadow-lg p-6 mb-6 lg:ml-12">
                                    <p className="font-body  typofix text-jacarta-600">Designer; Could in which only versus in, officers are was appeared the collection fresh table its around big countries geared to nice equally but free in without. Any its her from poverty being because curiously, tone was appeared the both to gm dragged in up can and on their kno</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center mt-2">
                                            <img className="border-2 border-white w-8 h-8 object-cover rounded-full" width={40} height={40} src="/assets/team/Adewale-Yusuf.png" alt="title" />
                                            <div className="ml-2">
                                                <h6 className="font-display text-jacarta-900 font-bold transition duration-500 hover:text-indigo-500"><a href="creator-published">Devon Lane</a></h6>
                                            </div>
                                        </div>
                                        <a className="readmore-btn font-display font-semibold text-jacarta-900 transition duration-500 hover:text-indigo-500 mt-2" href="single">Reply
                                            <span className="grayscale inline-block w-4 ml-2"  >
                                                <ReplyIcon />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="entry-comment bg-jacarta-50 rounded shadow transition duration-500 hover:shadow-lg p-6 mb-8 lg:mb-14">
                                    <p className="font-body typofix text-jacarta-600">Proposal. Proceeded to salesmen the implemented aged create subjective you you d fame, in flatter maybe frequencies on</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center mt-2">
                                            <img className="border-2 border-white w-8 h-8 object-cover rounded-full" width={40} height={40} src="/assets/team/Adewale-Yusuf.png" alt="title" />
                                            <div className="ml-2">
                                                <h6 className="font-display text-jacarta-900 font-bold transition duration-500 hover:text-indigo-500"><a href="creator-published">Jerome Bell</a></h6>
                                            </div>
                                        </div>
                                        <a className="readmore-btn font-display font-semibold text-jacarta-600 transition duration-500 hover:text-indigo-500 underline-hover mt-2" href="single">Reply
                                            <span className="grayscale inline-block w-4 ml-2"  >
                                                <ReplyIcon />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="entry-navigation  lg:flex items-center justify-between mb-8 lg:mb-10">
                                    <div className="lg:text-left lg:max-w-sm my-4 lg:mr-6">
                                        <h3 className="font-display text-xl text-jacarta-900 dark:text-jacarta-100 font-bold transition duration-500 hover:text-indigo-500">
                                            <a href="single">Liki Trike – A Compact Trike with the Big Benefits</a></h3>
                                        <p className="mt-4">
                                            <a className="readmore-btn font-display text-sm text-jacarta-600 dark:text-jacarta-100  transition duration-500 hover:text-indigo-500 underline-hover mt-2" href="single">
                                                <span className="grayscale -rotate-180  inline-block w-4 mr-2"  >
                                                    <ReplyIcon />
                                                </span>
                                                Previous Post</a>
                                        </p>
                                    </div>
                                    <div className="lg:text-right lg:max-w-sm my-4 lg:ml-6">
                                        <h3 className="font-display text-xl text-jacarta-900 dark:text-jacarta-100 font-bold transition duration-500 hover:text-indigo-500">
                                            <a href="single">The Revolutionary Functionality of the Doona Car Seat &amp; Stroller</a></h3>
                                        <p className="mt-4">
                                            <a className="readmore-btn font-display text-sm dark:text-jacarta-100  text-jacarta-600 transition duration-500 hover:text-indigo-500 underline-hover mt-2" href="single"> Next  Post
                                                <span className="grayscale inline-block w-4 ml-2"  >
                                                    <ReplyIcon />
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <form className="lg:grid md:grid-cols-2 gap-x-4 aos-init aos-animate" data-aos="fade-up">
                                    <div className="col-span-1 mb-4">
                                        <input className="border border-jacarta-300 rounded w-full px-4 py-3 font-body text-jacarta-900 placeholder-jacarta-900 bg-jacarta-100 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none" type="text" placeholder="Name..." />
                                    </div>
                                    <div className="col-span-1 mb-4">
                                        <input className="border border-jacarta-300 rounded w-full px-4 py-3 font-body text-jacarta-900 placeholder-jacarta-900 bg-jacarta-100 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none" type="text" placeholder="Email" />
                                    </div>
                                    <div className="col-span-2 mb-4">
                                        <input className="border border-jacarta-300 rounded w-full px-4 py-3 font-body text-jacarta-900 placeholder-jacarta-900 bg-jacarta-100 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none" type="text" placeholder="Subject" />
                                    </div>
                                    <div className="col-span-2 mb-4">
                                        <textarea rows={4} className="border border-jacarta-300 rounded w-full px-4 py-3 font-body text-jacarta-900 placeholder-jacarta-900 bg-jacarta-100 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none" placeholder="Comment" defaultValue={""} />
                                    </div>
                                    <div><button type="submit" className="btn inline-block text-jacarta-900 font-body font-medium rounded py-3 px-6 transition-all duration-500 shadow-white-volume custom-shadow hover:shadow-accent-volume bg-white hover:text-white hover:bg-jacarta-650 ">Add Comment</button></div>
                                </form>
                            </div>
                            <div className="lg:col-span-5 xl:col-span-4">
                                <div className="bg-light-base rounded border border-jacarta-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-14 aos-init aos-animate" data-aos="fade-up">
                                    <h3 className="font-display text-3xl text-jacarta-900 font-bold mb-6">Search </h3>
                                    <form action="#">
                                        <div className="relative">
                                            <input type="search" className="text-jacarta-700 placeholder-jacarta-500 outline-none focus:ring-accent border-jacarta-100 w-full rounded-md border py-3 px-5   dark:bg-white/[.15] dark:text-jacarta-700 dark:placeholder-jacarta-900" placeholder="Search here..." />

                                            <button type="submit" className="block absolute bottom-3 right-5">
                                                <span className="w-3 h-3 inline-block ml-2 mb-1">
                                                    <SearchIcon2 />
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="bg-light-base rounded border border-jacarta-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-14 aos-init aos-animate" data-aos="fade-up">
                                    <h3 className="font-display text-3xl text-jacarta-900 font-bold mb-6">Categories </h3>
                                    <div className="block">
                                        <a className="flex justify-between border border-jacarta-300 hover:border-indigo-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-jacarta-100" href="category"><span>Creator</span> <span>24</span></a>
                                        <a className="flex justify-between border border-jacarta-300 hover:border-indigo-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-jacarta-100" href="category"><span>Auction</span> <span>20</span></a>
                                        <a className="flex justify-between border border-jacarta-300 hover:border-indigo-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-jacarta-100" href="category"><span>Marketplace</span> <span>17</span></a>
                                        <a className="flex justify-between border border-jacarta-300 hover:border-indigo-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-jacarta-100" href="category"><span>Sports</span> <span>13</span></a>
                                        <a className="flex justify-between border border-jacarta-300 hover:border-indigo-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-jacarta-100" href="category"><span>Outing</span> <span>11</span></a>
                                    </div>
                                </div>
                                <div className="bg-light-base rounded border border-jacarta-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-14 aos-init aos-animate" data-aos="fade-up">
                                    <h3 className="font-display text-3xl text-jacarta-900 font-bold mb-3">Tags </h3>
                                    <div className="flex flex-wrap">
                                        <a className="btn block border border-jacarta-300 hover:border-indigo-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-jacarta-100" href="tag">Paid Marketing</a>
                                        <a className="btn block border border-jacarta-300 hover:border-indigo-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-jacarta-100" href="tag">Digital Marketing</a>
                                        <a className="btn block border border-jacarta-300 hover:border-purple-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-jacarta-100" href="tag">Blues</a>
                                        <a className="btn block border border-jacarta-300 hover:border-indigo-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-jacarta-100" href="tag">COVID</a>
                                        <a className="btn block border border-jacarta-300 hover:border-purple-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-jacarta-100" href="tag">Web Design</a>
                                        <a className="btn block border border-jacarta-300 hover:border-indigo-500 text-jacarta-600 hover:text-jacarta-650 font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-jacarta-100" href="tag">Content Marketing</a>
                                    </div>
                                </div>
                                <div className="bg-light-base rounded border border-jacarta-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-14 aos-init aos-animate" data-aos="fade-up">
                                    <h3 className="font-display text-3xl text-jacarta-900 font-bold mb-6">Popular Posts </h3>
                                    <div className="flex items-center border-b border-jacarta-300 pb-4 mb-4">
                                        <img width={100} height={100} className="w-24 h-24 rounded object-cover flex-shrink-0" src="/assets/blog/post_2.jpg" alt="title" />
                                        <div className="pl-4">
                                            <h6 className="font-display text-jacarta-900  font-bold transition duration-500 hover:text-indigo-500">
                                                <a href="single">FinTech Market – A Compact Trike
                                                    with the Big Benefits</a>
                                            </h6>
                                            <p className="font-body text-sm text-jacarta-600 mt-2">22 July, 2021</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b border-jacarta-300 pb-4 mb-4">
                                        <img width={100} height={100} className="w-24 h-24 rounded object-cover flex-shrink-0" src="/assets/blog/post_3.jpg" alt="title" />
                                        <div className="pl-4">
                                            <h6 className="font-display text-jacarta-900 font-bold transition duration-500 hover:text-indigo-500">
                                                <a href="single">
                                                    FinTech Market – A Compact Trike with the Big Benefits
                                                </a>
                                            </h6>
                                            <p className="font-body text-sm text-jacarta-600 mt-2">22 July, 2021</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b border-jacarta-300 pb-4 mb-4">
                                        <img width={100} height={100} className="w-24 h-24 rounded object-cover flex-shrink-0" src="/assets/blog/post_5.jpg" alt="title" />
                                        <div className="pl-4">
                                            <h6 className="font-display text-jacarta-900 font-bold transition duration-500 hover:text-indigo-500">
                                                <a href="single">Clever Ways to Purchase Extr
                                                    s from FinTech Market</a>
                                            </h6>
                                            <p className="font-body text-sm text-jacarta-600 mt-2">22 July, 2021</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <img width={100} height={100} className="w-24 h-24 rounded object-cover flex-shrink-0" src="/assets/blog/post_1.jpg" alt="title" />
                                        <div className="pl-4">
                                            <h6 className="font-display text-jacarta-900 font-bold transition duration-500 hover:text-indigo-500">
                                                <a href="single">The Revolutionary Functionali
                                                    Seat &amp; Stroller</a>
                                            </h6>
                                            <p className="font-body text-sm text-jacarta-600 mt-2">22 July, 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Container>

            <Footer />
        </>
    )
}

export default BlogDetails