import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

export const FooterCard = ({ heading, subHeadings }) => (
    <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
        <h4 className="font-display text-xl font-semibold">{heading}</h4>
        <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
            {
                subHeadings.map((subHeading, index) => (
                    <li key={index} className="mb-4 mr-4">
                        <Link href={subHeading.url} replace passHref>
                            {subHeading.smoothScroll === true ?
                                <ScrollLink activeClass="active" to={subHeading.url} spy={true} offset={-30} smooth={true} duration={500}>
                                    <a className="transition duration-500 hover:text-accent cursor-pointer font-medium whitespace-nowrap"                 >
                                        {subHeading.title}
                                    </a>
                                </ScrollLink>
                                :
                                <a
                                    className="transition duration-500 cursor-pointer hover:text-accent font-medium whitespace-nowrap"
                                >
                                    {subHeading.title}
                                </a>
                            }

                        </Link>
                    </li>

                ))
            }

        </ul>
    </div>
)