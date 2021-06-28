import { Fragment, useEffect, useState } from 'react';
import Job from '../job/Job';
import { v4 as uuidv4 } from 'uuid';



function Joblist(props) {
    const [order, setorder] = useState(['', '⇧', '⇩'])
    const orderEnum = Object.freeze({ "": '', "⇧": 1, "⇩": -1 })

    const onChange = e => {
        props.onChange({[e.target.name]: orderEnum[e.target.value]});
    }
    
    return (
        <Fragment>


            <div className='flex flex-col  md:w-full'>
            <div className="font-bold  flex justify-center text-gray-700 uppercase">
                joblist
            </div>
                    <div className='flex justify-center space-x-1 '>
                        <div > sort by - </div>

                     
                        <select name="location" id="location" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> location {item} </option>)}
                        </select>

                        <select name="education" id="Education" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> education {item} </option>)}
                        </select>

                        <select name="experience" id="Experience" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> experience {item} </option>)}
                        </select>

                        <select name="department" id="Department" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> department {item} </option>)}

                        </select>
                    </div>
        
                <div>
                {props.jobs.map((j) => <div className='w-auto' key={uuidv4()}><Job>{j}</Job></div>)}
                </div>
               
            </div>
        </Fragment>
    )
}


export default Joblist
