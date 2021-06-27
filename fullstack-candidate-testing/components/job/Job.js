import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// full tine , hourly rate , location
function Job(props) {
    const [hospital, sethospital] = useState(props.children);
    const [panel, setpanel] = useState(true);
    return (
        <div>
           <div onClick={()=>setpanel(!panel)}> {hospital.total_jobs_in_hospital} Jobs in {hospital.name}</div>
            
            {panel && 
            hospital.items.map((job) =>
                <div className='flex space-x-8  ' key={uuidv4()}> 
                   <div>{job.experience} </div>
                   <div> {job.job_title} </div>
                   <div> {job.work_schedule} </div>
                   <div> {job.salary_range[0] +'-'+job.salary_range[1]+ '$' } </div>
                   <div>  {job.city} </div>
                   
                </div>
            )}
            <br></br>
        </div>
    )
}

export default Job


