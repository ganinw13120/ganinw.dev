import WaveSvg from '../../public/wave.svg'
import Image from "next/image";

export default function Wave () {
    return (
        <>
            <div>
                <img id='resume' src='/wave.svg' className='' />
                <img src='/wave.svg' className='absolute' style={{transform:'rotate(180deg)', marginTop:'-1px'}} />
            </div>
        </>
    )
}