export default function Award () {
    return (<>
        <div className='font-black text-2xl flex  mt-16'>
            <div className='header-line'>|</div>
            <span>COMPETITION & PROJECTS</span>
        </div>
        <Item title='KMUTT&apos;s Election' responsibility='Back-end' detail='KMUTT&apos; online election system' />
        <Item title='Botnoi CJE Hackathon (1st place)' responsibility='Back-end' detail='Line chatbot with 20,000+ friends' />
        <Item title='DEV Disrupt Hackathon by SCB' responsibility='Fullstack' detail='Mobile application with real time chat' />
        <Item title='TOKLA 6' responsibility='Fullstack' detail='Instruction media with Unity' />
        <Item title='National Software Contest' responsibility='Fullstack' detail='Projects competition' />
        <Item title='Student Art and Craft Competition' responsibility='Fullstack' detail='Coding and projects competition' />
    </>)
}

const Item = ({title, responsibility, detail}) => {
    return (
        <>
            <div className='ml-6 mt-12 '>
                <div className='text-xl font-medium'>
                    <span>{title}</span>
                </div>
                <div className='mt-3 text-lg font-medium text-green'>
                    <span>Responsibility : {responsibility}</span>
                </div>
                <div className='mt-3 text-black'>
                    <span>- {detail}</span>
                </div>
            </div>
        </>
    )
}