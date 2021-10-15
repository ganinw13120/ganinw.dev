
export default function Navbar () {
    return (
        <nav className=" -z-2 bg-black p-7 md:pl-20 border-b border-b-0 border-gray-300 mx-auto h-auto transition-all">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-1 col-end-3">
                    <p className="text-white md:text-2xl font-black tracking-widest ">
                        Gan Mongklakorn 
                    </p>
                </div>
                <div className="col-start-5 col-end-7  flex flex-wrap">
                    <div className="flex-auto pr-4 ">
                        <div className="text-white md:text-2xl font-extralight tracking-widest ">
                            <a className="hl">
                                Resume
                            </a>
                        </div>
                    </div>
                    <div className="flex-auto pr-4 ">
                        <div className="text-white md:text-2xl font-extralight tracking-widest">
                            <a className="hl">
                                Works
                            </a>
                        </div>
                    </div>
                    <div className="flex-auto pr-4 ">
                        <div className="text-white md:text-2xl font-extralight tracking-widest">
                            <a className="hl">
                                Contract
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}