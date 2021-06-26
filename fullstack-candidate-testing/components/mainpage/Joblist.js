import {Fragment,useEffect} from 'react';
import Card from '../ui/Card';


function Joblist() {
    async function fetchJobsData() {
        const response = await fetch('/api/jobs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        const data = await response.json();
      
        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong!');
        }
      }
    
    useEffect(() => {
        return () => {
        }
    }, [])

      
    return (
        <Fragment>
            <div className="font-bold text-gray-700 uppercase">
                joblist
            </div>
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

           <Card>
               
           </Card>
        </Fragment>
    )
}


export default Joblist
