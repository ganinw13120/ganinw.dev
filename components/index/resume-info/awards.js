export default function Award () {
    return (<>
        <div className='font-black text-2xl flex  mt-16'>
            <div className='header-line'>|</div>
            <span>AWARDS & COMPETITION</span>
        </div>
        <AwardItem title='Botnoi CJE Hackathon (1st place)' responsibility='Backend' detail='Line chatbot with 20,000+ friends' />
        <AwardItem title='DEV Disrupt Hackathon by SCB' responsibility='Fullstack' detail='Mobile application with real time chat' />
        <AwardItem title='TOKLA 6' responsibility='Fullstack' detail='Instruction media with Unity' />
        <AwardItem title='National Software Contest' responsibility='Fullstack' detail='Projects competition' />
        <AwardItem title='Student Art and Craft Competition' responsibility='Fullstack' detail='Coding and projects competition' />
    </>)
}

const AwardItem = ({title, responsibility, detail}) => {
    return (
        <>
            <div className='ml-6 mt-12 '>
                <div className='text-xl font-medium'>
                    <span>{title}</span>
                </div>
                <div className='mt-3 text-lg font-medium text-dark-primary'>
                    <span>Responsibility : {responsibility}</span>
                </div>
                <div className='mt-3 text-black'>
                    <span>- {detail}</span>
                </div>
            </div>
        </>
    )
}