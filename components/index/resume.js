import Image from "next/image";

import WorkExperience from './resume-info/workExperience';
import Award from './resume-info/awards';
import Skills from './resume-info/skills';
import Education from './resume-info/education';

export default function Resume ({offsetY}) {
    return (
        <>
            <div id='resume' className="bg-plain-white  font-cousine  p-7 py-44 mt-48 md:px-20 w-full h-auto  items-center text-center" style={{ transform: `translateY(-${(offsetY * .2)-100}px)`, transition : 'transform 0.5s' }} >
                <div className="mt-10 p items-center">
                    <h2 className="font-semibold text-2xl md:text-3xl pb-2 w-auto  items-center hl" >
                        My Resume
                    </h2>
                </div>
                <div className="mt-10  items-center">
                    <Image
                        src={`/portrait.png`}
                        alt='Gan Mongklakorn'
                        priority={true}
                        width={300}
                        height={300}
                        quality={100}
                        className={`rounded-full drop-shadow-xl`}
                    />
                </div>
                <div className='pt-10 mb-5 text-3xl font-normal'>
                    Gan Mongklakorn
                </div>
                <div className='md:grid grid-cols-2 inline  mt-16 w-full xl:w-5/6 text-center mx-auto'>
                    <div className='leftcol px-5  text-left'>
                        <WorkExperience />
                        <Award />
                    </div>
                    <div className='px-5 text-left'>
                        <Skills />
                        <Education />
                        <div className='font-normal text-xl ml-6 mt-24 flex'>
                            <h2>Download my</h2>
                            <a className="ml-3 hl text-2xl cursor-pointer titleItem"  rel="noreferrer" href='https://storage.googleapis.com/gan-public/resume.pdf' target="_blank">
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
