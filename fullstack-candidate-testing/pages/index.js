import React from "react"
import SearchBar from '../components-re/mainpage/Search-bar';

import Joblist from '../components-re/mainpage/Joblist';

import Card from "../components-re/ui/Card";

import { Fragment, useEffect, useState } from 'react';
import { getAllJobs, getNumberOfRecords,getAllJobsAxios } from '../helpers/api-util';
import JobNumbers from "../components-re/mainpage/jobNumbers";

function Index() {
    const [jobs, setjobs] = useState([]);
    const [numberOfRecords, setnumberOfRecords] = useState(['a','b']);
    const [queryObj, setqueryObj] = useState({})
    const [test, settest] = useState(['a','b'])

    const setSearchQuery = (filter) => {
        setqueryObj({ ...queryObj, ...filter });
    }

    useEffect(async () => {
        //var jobs = await getAllJobs(queryObj);
        var j = await getAllJobsAxios(queryObj);
        if(j)  setjobs(j);
        else setjobs([]);
        console.log(j);
    }, [queryObj])

    useEffect(async () => {
        var Records = await getNumberOfRecords();
        setnumberOfRecords(Records);
        settest(Records);
    },[]);

    return (
        <div>
            <card><SearchBar onChange={(val) => setSearchQuery(val)}></SearchBar></card>
            <div className=' flex flex-row'>
                <div className='w-1/3 hidden lg:block'>
                    <Card> <JobNumbers title='Job Type'  data={numberOfRecords.job_type}></JobNumbers> </Card>
                    <Card> <JobNumbers title='Department'  data={numberOfRecords.department}></JobNumbers> </Card>
                    <Card> <JobNumbers title='Work Schedule'  data={numberOfRecords.work_schedule}></JobNumbers> </Card>
                    <Card> <JobNumbers title='Experience'  data={numberOfRecords.experience}></JobNumbers> </Card>
                </div>
                <div className='w-screen lg:w-2/3 '> <Card> <Joblist jobs={jobs} onChange={(val) => setSearchQuery(val)}> </Joblist></Card> </div>
            </div>
        </div>
    )
}

export default Index

