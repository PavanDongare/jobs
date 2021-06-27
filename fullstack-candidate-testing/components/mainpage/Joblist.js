import { Fragment, useEffect, useState } from 'react';
import Card from '../ui/Card';
import Job from '../job/job';
import { getAllJobs } from '../../helpers/api-util';


function Joblist(props) {
    const [jobs, setjobs] = useState([]);

    useEffect(async () => {
        var jobs = await getAllJobs([]);
        setjobs(jobs);
        console.log(jobs);
        return () => {

        }
    }, [])
    return (
        <Fragment>
            <div className="font-bold text-gray-700 uppercase">
                joblist
            </div>
            <div className='flex flex-col'>
                <Card>
                    <div className='flex flex-wrap text-center space-x-1  '>
                        <div> sort by - </div>
                        <div>Location</div>
                        <div>Role</div>
                        <div>Department</div>
                        <div>Education</div>
                        <div>Experience</div>
                    </div>
                </Card>
                { jobs.map((job) => <div key={job.id}><Job>{job}</Job></div> )}
            </div>
        </Fragment>
    )
}


export default Joblist
