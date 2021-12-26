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
export default function Navbar ({offsetY}) {
    return (
        <nav className={`font-cousine z-10  mx-auto h-auto transition-all ${offsetY > 0 ? 'sticky bg-white' : ' '} top-0`} style={{boxShadow : offsetY > 0 ? '0 4px 4px rgba(0,0,0,0.05)' : ''}}>
            <div className="flex mx-16 py-8 md:px-8 border-b border-gray">
                <div className="flex-none overflow-clip col-start-1 col-end-6 lg:col-end-3 mx-auto">
                    <p className="text-black text-xl md:text-2xl font-normal tracking-widest">
                        Gan Mongklakorn 
                    </p>
                </div>
                <div className='md:flex-grow'>

                </div>
                <div className="hidden lg:flex flex-none col-start-3 lg:col-start-4 col-end-7 flex-wrap flex-row-reverse text-right">
                    <div className="flex-none pr-4 w-auto">
                        <div className="cursor-pointer titleItem  text-black mr-10 md:text-xl font-normal tracking-widest">
                            <a className="hl" href="https://books.ganinw.dev">
                                Books
                            </a>
                        </div>
                    </div>
                    <div className="flex-none pr-4 w-auto">
                        <div className="cursor-pointer titleItem  text-black mr-10 md:text-xl font-normal tracking-widest">
                            <a className="hl" href="https://gan-mongklakorn.gitbook.io/notes/">
                                Blogs
                            </a>
                        </div>
                    </div>
                    <div className="flex-none pr-4 w-auto"  onClick={()=>{scrollto('contact')}}>
                        <div className="cursor-pointer titleItem  text-black mr-10 md:text-xl font-normal tracking-widest">
                            <a className="hl">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mr-10 text-right"  onClick={()=>{scrollto('resume')}}>
                        <div className="cursor-pointer titleItem  text-black md:text-xl font-normal tracking-widest ">
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