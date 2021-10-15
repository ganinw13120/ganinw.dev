import Image from "next/image";
export default function Description ({offsetY}) {
    return (
        <>
                <div className="p-7 md:pl-20 w-full h-full md:pt-24  items-center  text-center" style={{ transform: `translateY(-${(offsetY * .6)-250}px)` }} >
                <div className="mt-10  items-center">
                        <h2 className="font-semibold text-2xl md:text-4xl pb-2 w-auto  items-center">
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
                            className={`rounded-full bg-gray-10 dark:bg-transparent`}
                        />
                    </div>
                </div>
        </>
    )
}