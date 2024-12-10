import Image from "next/image";
import Link from "next/link";

export default function Projects({ offsetY }) {
    return (
        <>
            <div id='projects' className="font-cousine p-7 md:px-20 w-full h-auto  items-center text-center" style={{ transform: `translateY(-${(offsetY * .2) - 100}px)`, transition: 'transform 0.5s' }} >
                <div className="mt-10 p items-center">
                    <h2 className="font-semibold text-2xl md:text-3xl pb-2 w-auto  items-center hl" >
                        My Side Projects
                    </h2>
                </div>
                <div className="w-5/6 mx-auto text-left">
                    <div className='pt-16 mb-5 text-2xl font-normal'>
                        <a className="hover:underline" href="https://random.ganinw.dev"># Random name picker game (ผีถ้วยแก้ว)</a>
                    </div>
                    <div className="text-lg mb-3">
                        A fun project that randomly pick a names for participants with Thai-style version. Perfect for adding a touch of humor and cultural flair to team activities.
                    </div>
                    <div className="flex justify-center">
                        <Image
                            alt='random.ganinw.dev'
                            src='/random.png'
                            width={1600}
                            height={800}
                        />
                    </div>
                </div>
                <div className="w-5/6 mx-auto text-left">
                    <div className='pt-16 mb-5 text-2xl font-normal'>
                        <a className="hover:underline" href="https://condoeye.ganinw.dev"># Condoeye (Condominium visualization)</a>
                    </div>
                    <div className="text-lg mb-3">
                        A comprehensive tool for visualizing all condominiums in Thailand on an interactive map. It offers a heatmap to display price trends, filters to show properties within your budget, and a historical price graph to track market changes over time.
                    </div>
                    <div className="flex justify-center">
                        <Image
                            alt='condoeye.ganinw.dev'
                            src='/condoeye.png'
                            width={2145}
                            height={1350}
                        />
                    </div>
                </div>
                <div className="w-5/6 mx-auto text-left">
                    <div className='pt-16 mb-5 text-2xl font-normal'>
                        <a className="hover:underline"># Social media web application for cooking</a>
                    </div>
                    <div className="text-lg mb-3">
                        A specialized social media platform dedicated exclusively to cooking content, designed as a practice project for implementing microservice architecture.
                    </div>
                    <div className="flex justify-center">
                        <Image
                            alt='a social media app'
                            src='/social.png'
                            width={1000}
                            height={800}
                        />
                    </div>
                </div>
                <div className="w-5/6 mx-auto text-left">
                    <div className='pt-16 mb-5 text-2xl font-normal'>
                        <a className="hover:underline" href="https://chat.ganinw.dev"># Scalable real-time chat application</a>
                    </div>
                    <div className="text-lg mb-3">
                        A real-time chat application built to handle horizontal scaling, leveraging WebSocket and a pub-sub architecture for seamless and efficient communication.
                    </div>
                    <div className="flex justify-center">
                        <Image
                            className="mx-auto"
                            alt='condoeye.ganinw.dev'
                            src='/chat.png'
                            width={1090}
                            height={630}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
