import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// full tine , hourly rate , location
function Job(props) {
    const [hospital, sethospital] = useState(props.children);
    const [panel, setpanel] = useState(true);
    return (
        <div>
           <div className='bg-gray-600 md:w-full text-white rounded-lg  flex  justify-center   '
           onClick={()=>setpanel(!panel)}> {hospital.total_jobs_in_hospital} Jobs in {hospital.name}</div>
            
            {panel && 
            hospital.items.map((job) =>
                <div className='flex flex-wrap  justify-center   border rounded-md  md:w-full ' key={uuidv4()}> 
                   <div className='px-1'> {job.experience} </div>
                   <div className='px-1'> {job.job_title} </div>
                   <div className='px-1'> {job.work_schedule} </div>
                   <div className='px-1'> {job.salary_range[0] +'-'+job.salary_range[1]+ '$' } </div>
                   <div className='px-1'> {job.city} </div>
                   
                </div>
            )}
            <br></br>
        </div>
    )
}

export default Job


