import { Fragment, useEffect, useState } from 'react';
import Card from '../ui/Card';
import Job from '../job/job';
import { v4 as uuidv4 } from 'uuid';
import { getAllJobs } from '../../helpers/api-util';


function Joblist(props) {
    const [jobs, setjobs] = useState([]);
    const [filter, setfilter] = useState({});
    const [order, setorder] = useState(['', '⇧', '⇩'])
    const orderEnum = Object.freeze({"":0, "⇧":1, "⇩":-1})


    useEffect(async () => {
        var jobs = await getAllJobs(filter);
        setjobs(jobs);
        console.log(jobs);
        return () => {
        }
    }, [filter])

    const onChange = e =>{
         setfilter({ ...filter, [e.target.name]:orderEnum[e.target.value] }); 
    } 
    return (
        <Fragment>

            <div className="font-bold text-gray-700 uppercase">
                joblist
            </div>
            <div className='flex flex-col'>
                <Card>
                    <div className='flex flex-wrap text-center space-x-1  '>
                        <div > sort by - </div>

                        <select name="location" id="location" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> location {item} </option>)}
                        </select>

                        <select name="education" id="Education" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> education {item} </option>)}
                        </select>


                        <select name="department" id="Department" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> department {item} </option>)}

                        </select>


                        <select name="experience" id="Experience" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> experience {item} </option>)}
                        </select>

                    </div>
                </Card>
                {JSON.stringify(filter)}
                {jobs.map((j) => <div key={uuidv4()}><Job>{j}</Job></div>)}
            </div>
        </Fragment>
    )
}


export default Joblist
