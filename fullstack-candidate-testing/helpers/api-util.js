
import axios from "axios";

export async function getAllJobs(filter) {
  const response = await fetch('/api/jobs?'+ new URLSearchParams(filter));
  const data = await response.json();
  console.log('got',data);
  const jobs = [];
  for (const key in data.jobs) {
    jobs.push({
      id: key,
      ...data.jobs[key]
    });
  }
  return jobs;
}

export async function getNumberOfRecords() {
  const response = await fetch('/api/filters');
  const data = await response.json();
  return data;
}


// This API handles multiple req by canceling previous ones so only latest response is considered.  
let cancelToken  ;

export async function getAllJobsAxios (filter) {
  //Check if there are any previous pending requests
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Operation canceled due to new request.")
  }
  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source()
  try {
    const response = await axios.get('/api/jobs', {
      params:filter,
      cancelToken: cancelToken.token
    });
   
    const data = response.data ;
    console.log('got',data);
    const jobs = [];
    for (const key in data.jobs) {
      jobs.push({
        id: key,
        ...data.jobs[key]
      });
    }
    console.log('****',jobs,filter)
  return jobs;

  } catch (error) {
    console.log(error)
  }
}