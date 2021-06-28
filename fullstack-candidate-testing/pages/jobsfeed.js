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
import { getAllJobs, getNumberOfRecords } from '../helpers/api-util';
import JobNumbers from "../components-re/mainpage/jobNumbers";

function Jobsfeed() {
    const [jobs, setjobs] = useState([]);
    const [numberOfRecords, setnumberOfRecords] = useState(['a','b']);
    const [queryObj, setqueryObj] = useState({})
    const [test, settest] = useState(['a','b'])

    const setSearchQuery = (filter) => {
        setqueryObj({ ...queryObj, ...filter });
    }

    useEffect(async () => {
        var jobs = await getAllJobs(queryObj);
        setjobs(jobs);
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

export default Jobsfeed

