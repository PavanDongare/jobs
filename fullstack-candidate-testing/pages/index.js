import React from "react"
import SearchBar from '../components/mainpage/Search-bar';
import Department from '../components/mainpage/Department';
import Joblist from '../components/mainpage/Joblist';
import Jobtype from '../components/mainpage/Jobtype';
import WorkSchedule from '../components/mainpage/Work-schedule';
import Card from "../components/ui/Card";
import Experience from "../components/mainpage/Experience";
import Footer from "../components/layout/Footer";


const Index = () => (
  <div>
    <card><SearchBar></SearchBar></card>
    <div className=' flex flex-row'>
      <div className='w-1/3 hidden lg:block'>
          <Card> <Jobtype></Jobtype>           </Card>
          <Card> <Department></Department>     </Card>
          <Card> <WorkSchedule></WorkSchedule> </Card>
          <Card> <Experience></Experience>     </Card>
      </div>
      <div className='w-screen lg:w-2/3 '> <Card> <Joblist></Joblist></Card> </div>
    </div>
  </div>
)
export default Index
