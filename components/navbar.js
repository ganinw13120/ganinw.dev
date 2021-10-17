
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
export default function Navbar () {
    return (
        <nav className="font-cousine -z-2 bg-dark-primary p-7 md:pl-20 mx-auto h-auto transition-all">
            <div className="grid grid-cols-6 gap-4">
                <div className="overflow-clip col-start-1 col-end-6 lg:col-end-3">
                    <p className="text-white md:text-2xl font-black tracking-widest ">
                        Gan Mongklakorn 
                    </p>
                </div>
                <div className="hidden lg:flex col-start-3 md:col-start-4 col-end-7 flex-wrap flex-row-reverse text-right">
                    <div className="flex-none pr-4 w-auto"  onClick={()=>{scrollto('contact')}}>
                        <div className="cursor-pointer titleItem  text-white mr-10 md:text-2xl font-black tracking-widest">
                            <a className="hl">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mr-10 text-right"  onClick={()=>{scrollto('resume')}}>
                        <div className="cursor-pointer titleItem  text-white md:text-2xl font-black tracking-widest ">
                            <a className="hl">
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}