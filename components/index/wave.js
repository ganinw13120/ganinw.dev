import WaveSvg from '../../public/wave.svg'
import Image from "next/image";

export default function Wave () {
    return (
        <>
        <div className='block w-full image-container z-0' style={{
            position: "relative",}}>
            <Image layout='fill' id='resume' src='/wave.png' className='' />
        </div>
        </>
    )
}