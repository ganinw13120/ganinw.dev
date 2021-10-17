export default function Skills () {
    return (<>
        <div className='font-black text-2xl flex mt-16 md:mt-0'>
            <div className='header-line'>|</div>
            <span>SKILLS & COMPETENCIES</span>
        </div>
        <div className='ml-6 mt-12 '>
            <div className='text-xl font-medium'>
                <span>Technical Skills</span>
            </div>
            <div className='mt-3 text-lg font-medium text-dark-primary'>
                <span>Language</span>
            </div>
            <div className='grid grid-cols-2 mt-3'>
                <div>
                    <div className='mt-3'>Javascript</div>
                    <div className='mt-3'>Typescript</div>
                    <div className='mt-3'>Go</div>
                    <div className='mt-3'>PHP</div>
                </div>
                <div>
                    <div className='mt-3'>Java</div>
                    <div className='mt-3'>SQL</div>
                    <div className='mt-3'>C</div>
                    <div className='mt-3'>C++</div>
                </div>
            </div>
            <div className='mt-7 text-lg font-medium text-dark-primary'>
                <span>Framworks and Tools</span>
            </div>
            <div className='grid grid-cols-2 mt-3'>
                <div>
                    <div className='mt-3'>ReactJS</div>
                    <div className='mt-3'>NextJS</div>
                    <div className='mt-3'>Laravel</div>
                    <div className='mt-3'>JQuery</div>
                </div>
                <div>
                    <div className='mt-3'>NodeJS</div>
                    <div className='mt-3'>GCP</div>
                    <div className='mt-3'>AWS</div>
                    <div className='mt-3'>Docker</div>
                </div>
            </div>
            <div className='mt-7 text-lg'>
                <div className=''>I'm expertise in <span className='ml-3 text-dark-primary font-black'> Web application, DevOps</span>.</div>
            </div>
            <div className='mt-5 text-lg '>
                <div className=''>I'm also a<span className='ml-3 text-dark-primary font-black'>Fast Learner</span>.</div>
            </div>
        </div>
    </>)
}
