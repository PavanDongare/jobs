import { Fragment, useEffect, useState } from 'react';
import Card from '../ui/Card';
import Job from '../job/job';
import { getAllJobs } from '../../helpers/api-util';


function Joblist(props) {
    const [jobs, setjobs] = useState([]);
    const [filter, setfilter] = useState({});
    const [order, setorder] = useState(['', '⇧', '⇩'])
    const orderEnum = Object.freeze({"":0, "⇧":1, "⇩":2})


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
                            {order.map((item, index) => <option key={index} value={item}> Location {item} </option>)}
                        </select>

                        <select name="Education" id="Education" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> Education {item} </option>)}
                        </select>


                        <select name="Department" id="Department" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> Department {item} </option>)}

                        </select>


                        <select name="Experience" id="Experience" onChange={e => onChange(e)}>
                            {order.map((item, index) => <option key={index} value={item}> Experience {item} </option>)}
                        </select>

                    </div>
                </Card>
                {JSON.stringify(filter)}
                {jobs.map((job) => <div><Job>{job}</Job></div>)}
            </div>
        </Fragment>
    )
}


export default Joblist
