import Image from "next/image";

const scrollto = (key) => {
    if (typeof window !== 'undefined') {
        const element = document.querySelector(`#${key}`);
        console.log(element)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
    }
  };

export default function Title ({offsetY}) {
    return (
        <>
            <main className='font-cousine h-most md:h-half'>
                <div className='lg:grid grid-cols-6 gap-4'>
                    <div className="col-start-1 col-end-5 px-7 md:pl-20 w-full h-full " style={{ transform: `translateY(-${offsetY * .3}px)`, transition : 'transform 0.5s' }}>
                        <div className="mt-10 pt-24">
                            <h2 className="font-semibold text-4xl xl:text-6xl gradient-text pb-2 w-auto glitch">
                                GAN MONGKLAKORN
                            </h2>
                        </div>
                        <div className='flex gap-x-5 md:gap-x-10 auto-rows-auto flex-wrap pt-10'>
                            <div className="">
                                <h1 className="font-black text-1xl md:text-2xl">
                                FULLSTACK 
                                </h1>
                            </div>
                            <div className="">
                                <h1 className="font-black text-1xl md:text-2xl pb-2">
                                Web Developer
                                </h1>
                            </div>
                        </div>
                        <div className='flex gap-x-5 md:gap-x-10 auto-rows-auto flex-wrap pt-10'>
                            <div className="">
                                <h1 className="font-light text-sm md:text-xl">
                                Experience in developing technology solution in digital ecosystem. 
                                </h1>
                            </div>
                        </div>
                        <div className='flex gap-x-5 md:gap-x-10 auto-rows-auto flex-wrap pt-10'>
                            <div className="">
                                <h1 className="font-thin text-base md:text-l">
                                See more... 
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="flex-initial p-2 md:p-4" onClick={()=>{scrollto('resume')}}>
                                <div className="cursor-pointer titleItem text-black font-black tracking-widest ">
                                    <a className="light-hl">
                                        Resume
                                    </a>
                                </div>
                            </div>
                            <div className="flex-initial p-2 md:p-4" onClick={()=>{scrollto('contact')}}>
                                <div className="cursor-pointer titleItem text-black font-black tracking-widest">
                                    <a className="light-hl">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex col-start-5 col-end-7 text-left h-auto w-auto'  style={{transform:'translate(-30%)'}}>
                        <div className='absolute h-auto animation-rotate'>
                            <Image
                                src='/globe.png'
                                width={800}
                                height={800}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}