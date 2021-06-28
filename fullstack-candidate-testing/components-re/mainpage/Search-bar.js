import { Fragment,useState,useEffect } from 'react';

function SearchBar(props) {
    const [searchObj, setsearch] = useState({'search':''});
    var { search } =  searchObj ;
    const onChange = e => {
        setsearch({ ...searchObj, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        props.onChange(searchObj);
    }, [searchObj])
  
    return (
            <div className="p-2">
             
                <div className="bg-white flex items-center rounded-full shadow-xl">
               
                    <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                    id="search" type="text" placeholder="search"
                    name="search"
                    value={search}
                    onChange={e => onChange(e)}>
                    </input> 
                        <div className="p-4">
                            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none  h-8 flex items-center justify-center">
                                search 
                            </button>
                        </div>                                      
                </div>
                {/* {searchObj} check */}
                {JSON.stringify(searchObj)}
            </div>
    );
}

export default SearchBar;
