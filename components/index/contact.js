import { GithubOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
export default function Contact({ offsetY }) {
    return (
        <>
            <div id='contact' className="bg-plain-white font-cousine  p-7 w-full h-auto items-center text-center" style={{ transform: `translateY(-${(offsetY * .1)}px)`, transition: 'transform 0.5s' }} >
                <div className="mt-10 items-center mb-10">
                    <h2 className="font-semibold text-2xl md:text-4xl pb-2 w-auto  items-center hl">
                        Contact
                    </h2>
                </div>
                <div className='pt-12 text-xl xl:flex text-center items-center mx-auto'>
                    <div className='mx-auto flexjustify-center xl:justify-normal'>
                        <GithubOutlined style={{ color: '#474747', fontSize: 30 }} />
                        <a className='mx-5 hoverable' rel="noreferrer" href='https://github.com/ganinw13120' target='_blank'>github.com/ganinw13120</a>
                    </div>
                    <div className='xl:inline hidden'> | </div>
                    <div className='mt-8 xl:mt-0 mx-auto flex justify-center xl:justify-normal'>
                        <MailOutlined style={{ color: '#474747', fontSize: 30, marginLeft: 30 }} />
                        <span className='mx-5'>gan131201@gmail.com</span>
                    </div>
                    <div className='xl:inline hidden'> | </div>
                    <div className='mt-8 xl:mt-0 mx-auto flex justify-center xl:justify-normal'>
                        <PhoneOutlined style={{ color: '#474747', fontSize: 30, marginLeft: 30 }} />
                        <span className='mx-5'>+66 86 406 2057</span>
                    </div>
                </div>
            </div>
        </>
    )
}
