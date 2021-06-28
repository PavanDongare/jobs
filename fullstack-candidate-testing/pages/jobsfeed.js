import React from "react"
import SearchBar from '../components-re/mainpage/Search-bar';
import Department from '../components-re/mainpage/Department';
import Joblist from '../components-re/mainpage/Joblist';
import Jobtype from '../components-re/mainpage/Jobtype';
import WorkSchedule from '../components-re/mainpage/Work-schedule';
import Card from "../components-re/ui/Card";
import Experience from "../components-re/mainpage/Experience";
import Footer from "../components-re/layout/Footer";
import { Fragment, useEffect, useState } from 'react';
import { getAllJobs } from '../helpers/api-util';

function Jobsfeed() {
    const [jobs, setjobs] = useState([]);
    const [queryObj, setqueryObj] = useState({})
    
    const setSearchQuery = (filter)=>{
        setqueryObj({...queryObj,...filter});
    }

    useEffect(async () => {
         var jobs = await getAllJobs(queryObj);
         setjobs(jobs);
    }, [queryObj])


    return (
        <div>
            {JSON.stringify(queryObj)};
        <card><SearchBar onChange={(val)=>setSearchQuery(val)}></SearchBar></card>
        <div className=' flex flex-row'>
          <div className='w-1/3 hidden lg:block'>
              <Card> <Jobtype></Jobtype>           </Card>
              <Card> <Department></Department>     </Card>
              <Card> <WorkSchedule></WorkSchedule> </Card>
              <Card> <Experience></Experience>     </Card>
          </div>
          <div className='w-screen lg:w-2/3 '> <Card> <Joblist jobs={jobs} onChange={(val)=>setSearchQuery(val)}> </Joblist></Card> </div>
        </div>
      </div>
    )
}

export default Jobsfeed

