import Link from 'next/link';


function MainNavigation() {
    return (
        <div className="flex flex-wrap py-4 text-gray-800 bg-red-800">
            <div className="w-full px-4">
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white rounded">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            >
                                Health Explore
                            </a>
                     
                        </div>
                        <div className="flex lg:flex-grow items-center bg-blue" id="example-navbar-info">
                            <ul className="flex flex-col lg:flex-row list-none ml-auto">
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    >
                                        People
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" 
                                    >
                                        Jobs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" 
                                    >
                                        Professional Network
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" 
                                    >
                                        Logunge
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" 
                                    >
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
