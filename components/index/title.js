export default function Title ({offsetY}) {
    return (
        <>
            <main className='h-full  bg-img'>
                <div className="p-7 md:pl-20 w-full h-full md:pt-24" style={{ transform: `translateY(-${offsetY * .6}px)` }}>
                    <div className="mt-10 pt-48">
                    <h2 className="font-semibold text-4xl md:text-7xl gradient-text pb-2 w-auto">
                        GAN MONGKLAKORN
                    </h2>
                    </div>
                    <div className='flex gap-x-5 md:gap-x-10 auto-rows-auto flex-wrap pt-10'>
                    <div className="">
                        <h1 className="font-semibold text-1xl md:text-4xl">
                        FULLSTACK 
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="font-medium text-1xl md:text-4xl pb-2">
                        Web Developer
                        </h1>
                    </div>
                    </div>
                    <div className='flex gap-x-5 md:gap-x-10 auto-rows-auto flex-wrap pt-10'>
                    <div className="">
                        <h1 className="font-light text-sm md:text-2xl">
                        Experience in developing technology solution in digital ecosystem. 
                        </h1>
                    </div>
                    </div>
                    <div className='flex gap-x-5 md:gap-x-10 auto-rows-auto flex-wrap pt-10'>
                    <div className="">
                        <h1 className="font-thin text-base md:text-xl">
                        See more... 
                        </h1>
                    </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="flex-initial p-2 md:p-4">
                            <div className="text-black md:text-2xl font-extralight tracking-widest ">
                                <a className="light-hl">
                                    Resume
                                </a>
                            </div>
                        </div>
                        <div className="flex-initial p-2 md:p-4">
                            <div className="text-black md:text-2xl font-extralight tracking-widest">
                                <a className="light-hl">
                                    Works
                                </a>
                            </div>
                        </div>
                        <div className="flex-initial p-2 md:p-4">
                            <div className="text-black md:text-2xl font-extralight tracking-widest">
                                <a className="light-hl">
                                    Contract
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="curved-end w-full" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#FFFFFF" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,202.7C384,181,480,107,576,64C672,21,768,11,864,53.3C960,96,1056,192,1152,192C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    </div>
            </main>
        </>
    )
}