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
            <main className='font-cousine h-most md:h-full'>
                <div className='lg:grid grid-cols-6 gap-4'>
                    <div className="col-start-1 col-end-5 px-7 md:px-8 md:mx-16 w-full " style={{ transform: `translateY(-${offsetY * .3}px)`, transition : 'transform 0.5s' }}>
                        <div className="mt-10 pt-24">
                            <h2 className="font-semibold text-4xl xl:text-6xl text-green pb-2 w-auto">
                                GAN MONGKLAKORN
                            </h2>
                        </div>
                        <div className='  pt-10'>
                            <div className="">
                                <h1 className="font-medium text-xl md:text-2xl">
                                Full stack developer 
                                </h1>
                            </div>
                        </div>
                        <div className='  pt-10'>
                            <div className="">
                                <h1 className="font-light text-sm md:text-lg">
                                I&apos; m a fast learner with high passion on software.
                                </h1>
                            </div>
                        </div>
                        <div className='  pt-10'>
                            <div className="">
                                <h1 className="font-light text-sm md:text-lg">
                                Experience in developing technology solution in digital ecosystem. 
                                </h1>
                            </div>
                        </div>
                        <div className='  pt-10'>
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
                        <div className='absolute h-auto mt-16'>
                            <Image
                                alt='Gan Mongklakorn'
                                src='/person.png'
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
