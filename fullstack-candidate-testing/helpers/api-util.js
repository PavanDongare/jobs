


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