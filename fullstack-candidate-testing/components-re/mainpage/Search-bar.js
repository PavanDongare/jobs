import { Fragment } from 'react';

function SearchBar() {
    return (
            <div className="p-2">
                <div className="bg-white flex items-center rounded-full shadow-xl">
                    <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search">
                    </input> 
                        <div className="p-4">
                            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none  h-8 flex items-center justify-center">
                                search 
                            </button>
                        </div>                                      
                </div>
            </div>
    );
}

export default SearchBar;
