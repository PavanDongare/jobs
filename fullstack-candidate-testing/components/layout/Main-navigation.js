import Link from 'next/link';


function MainNavigation() {
    return (
        <div className="flex flex-wrap py-2 text-gray-800">
            <div className="w-full px-4">
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white rounded">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="#pablo">
                                Health Explore
                            </a>
                            <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                            </button>
                        </div>
                        <div className="flex lg:flex-grow items-center" id="example-navbar-info">
                            <ul className="flex flex-col lg:flex-row list-none ml-auto">
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75" href="#pablo">
                                        People
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" href="#pablo">
                                        Jobs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" href="#pablo">
                                        Professional Network
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" href="#pablo">
                                        Logunge
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" href="#pablo">
                                        Salary
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>


    );
}
export default MainNavigation;
