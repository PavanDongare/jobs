import { useState } from 'react';
// full tine , hourly rate , location
function Job(props) {
    const [hospital, sethospital] = useState(props.children)
    return (
        <div>
            {hospital.total_jobs_in_hospital} Jobs in {hospital.name}
            {hospital.items.map((job) =>
                <li>
                    {job.job_title}
                    {job.work_schedule}
                    {job.salary_range}
                    {job.city}
                </li>
            )}
            <br></br>
        </div>
    )
}

export default Job


