import { useState } from 'react';
function Job(props) {
    const [hospital, sethospital] = useState(props.children)
    return (
        <div>
            {hospital.items.map((job) =>
                <li key={job.toString()}>
                    {job.job_title}
                </li>
            )}
            <br></br>
        </div>
    )
}

export default Job


