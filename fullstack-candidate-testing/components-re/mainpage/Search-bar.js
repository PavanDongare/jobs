import { Fragment,useState } from 'react';

function SearchBar(props) {
    const [searchObj, setsearch] = useState({'search':''});
    var { search } =  searchObj ;
    const onChange = e => {
        setsearch({ ...searchObj, [e.target.name]: e.target.value });
        props.onChange(searchObj);
    }
  
    return (
            <div className="p-2">
             
                <div className="bg-white flex items-center rounded-full shadow-xl">
               
                    <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                    id="search" type="text" placeholder="search"
                    name="search"
                   >
                    </input> 
                        <div className="p-4">
                            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none  h-8 flex items-center justify-center">
                                search 
                            </button>
                        </div>                                      
                </div>
              
                {JSON.stringify(searchObj)}
            </div>
    );
}

export default SearchBar;
