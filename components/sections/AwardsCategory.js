import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/form';
import awardsData from '@/data/awardsData';
import AccordionLayout from '@/components/Accordion/Accordion';
import classNames from 'classnames';
import { Container } from '../ColorSwitch';
import { LongArrow } from '@/public/assets/svgsIcons'
import Fade from 'react-reveal/Fade';


export const StepButton = ({ title, onClick, leftIcon, rightIcon }) => (
    <div className="text-center  " onClick={onClick}>
        <a className="text-jacarta-800 cursor-pointer flex items-center gap-x-2 justify-center hover:text-accent dark:text-jacarta-300">
            {leftIcon}
            <h6 >{title}</h6>
            {rightIcon}

        </a>
    </div>
)

const PackageTab = () => {
    const [visibleTab, setVisibleTab] = useState(awardsData[0].id);



    const TabTitles = awardsData.map((item, index) => (
        <li
            key={index}
            onClick={() => setVisibleTab(item.id)}
            className={classNames('font-DmSans inline-block font-medium lg:text-[1.125rem] lg:font-bold p-4 lg:p-3 cursor-pointer', { "color-font border-b-[4px] border-jacarta-700 dark:border-jacarta-100 text-jacarta-700 dark:text-jacarta-100": visibleTab === item.id }, { 'text-jacarta-700 dark:text-jacarta-100': visibleTab !== item.id })}
        >
            {item.tabTitle}
        </li>
    ));

    const TabContent = awardsData.map((item, index) => (
        <div className=" mt-6" key={index} style={visibleTab === item.id ? {} : { display: 'none' }}>
            <div className="flex flex-col justify-center items-center w-full text-jacarta-800 dark:text-jacarta-100">
                <AccordionLayout options={item.tabContent} />
            </div>
        </div>
    ));


    const lastStep = awardsData.length;

    let StepNavigation;

    if (visibleTab === 1) {
        StepNavigation =
            <StepButton title="Next Category" rightIcon={<LongArrow className="move-arrow" />} onClick={() => setVisibleTab(visibleTab + 1)} />
    } else if (visibleTab === 2 || visibleTab <= lastStep - 1) {
        StepNavigation =
            <div className="flex items-center justify-between">
                <StepButton title="Prev Category" leftIcon={<LongArrow className="rotate-180 " />} onClick={() => setVisibleTab(visibleTab - 1)} />
                <StepButton title="Next Category" rightIcon={<LongArrow className="move-arrow" />} onClick={() => setVisibleTab(visibleTab + 1)} />
            </div>
    } else {
        StepNavigation = <StepButton title="Prev Category" leftIcon={<LongArrow className="rotate-180 " />} onClick={() => setVisibleTab(visibleTab - 1)} />
    }


    return (
        <>
            <Container className=" pt-3 w-full">

                <div id="categories" className="mb-4 text-jacarta-700 dark:text-jacarta-100">
                    <Fade top >
                        <h2 className="font-display  mb-3 text-center tracking-wider md:leading-normal lg:text-[46px] text-3xl dark:text-white">
                            Awards Categories
                        </h2>
                    </Fade>
                    <Fade right >
                        <p className="lg:text-lg max-w-3xl text-center mx-auto"> NIGERIAN FINTECH AWARDS 2022 CATEGORIES </p>
                    </Fade>
                </div>
                <div className=" 2xl:container 2xl:mx-auto overflow-hidden">

                    <div className=" py-6 px-2 lg:py-12 mx-auto lg:max-w-4xl">
                        {/* <Fade left>
                            </Fade> */}
                        <ul className="flex flex-wrap justify-start lg:space-x-5 text-center list-none border-b-[1px] border-jacarta-300">
                            {TabTitles}
                        </ul>
                        {/* <Fade right>
                            </Fade > */}
                        <div className="py-1 m-0">{TabContent}</div>
                        <Fade bottom>
                            <div className="my-2 pt-1 mx-5 ">
                                {StepNavigation}
                            </div>
                        </Fade>
                    </div>
                </div>

            </Container>



        </>
    );
};

export default PackageTab;
