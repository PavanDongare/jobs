import { Fragment,useState,useEffect } from 'react';
import { useDebounce } from 'use-debounce';


function SearchBar(props) {
    const [searchObj, setsearch] = useState({'search':''});
    const [value] = useDebounce(searchObj, 1000);
    var { search } =  searchObj ;
    const onChange = e => {
        setsearch({ ...searchObj, [e.target.name]: e.target.value });
    }
    useEffect(() => {
       if(searchObj.search)
             props.onChange(searchObj);
    }, [value])
    return (
            <div className="p-2">
             
                <div className="bg-white flex items-center rounded-full shadow-xl">
               
                    <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                    id="search" type="text" placeholder="search"
                    name="search"
                    value={search}
                    onChange={(e)=>{onChange(e)}}
                   >
                    </input> 
                                                         
                </div>
            </div>
    );
}

export default SearchBar;
