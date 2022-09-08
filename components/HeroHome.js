import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import classNames from 'classnames';
import { Button } from '@/components/form'
import { Container } from '@/components/ColorSwitch'
import { Link as ScrollLink } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';



function HeroHome() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  return (
    <div className="relative ">
      <section className="relative w-full h-screen top-0 left-0 object-cover object-[83%]  bg-cover bg-center bg-[url('/assets/gallery/nigeria-fintech-awards-hero1.jpg')] dark:bg-[url('/assets/gallery/nigeria-fintech-awards-hero1.jpg')]  ">
        <div className="home__container containerbox gridbox">

          <div className="flex items-center mx-auto justify-center max-w-[61.25rem]">
            <div className="pb-24 pt-48 lg:pt-72  text-center ">
              <Fade top >
                <h1 className={classNames("font-display mb-6 text-[3rem] leading-[3.75rem] tracking-wider lg:text-6xl xl:text-7xl animated", { 'text-white': mounted && (theme === 'dark' || resolvedTheme === 'dark') }, { 'color-font ': mounted && (theme === 'light' || resolvedTheme === 'light') })}>
                  The Nigerian Fintech Awards
                </h1>

              </Fade>
              <Fade left delay={1000}>
                <p className="text-white three-row-paragraph max-w-4xl mx-auto mb-8 lg:text-[1.375rem] text-[1.125rem] leading-8  2xl:text-xl ">Dedicated  to honouring excellence in financial technologies and services companies and products. The Awards provide public recognition for the achievements of FinTech companies and products in categories </p>
              </Fade>
              <div className="inline-flex space-x-4">

                <Fade bottom delay={2000}>
                  <Link href="/awards-categories" passHref>
                    <a>
                      <Button className="">Browse Categories</Button>
                    </a>
                  </Link>
                </Fade>

                <Fade bottom delay={2000}>
                  <ScrollLink activeClass="active" to="how-to-enter" spy={true} offset={-30} smooth={true} duration={500}>
                    <Button className="hidden lg:flex" color="secondary">How To Enter</Button>
                  </ScrollLink>
                </Fade>


              </div>
            </div>
          </div>


        </div>
      </section>
      <Container>
        <Fade top>
          <div className="gradient-line mx-auto"></div>
        </Fade>
      </Container>
    </div>
  );
}

export default HeroHome;
