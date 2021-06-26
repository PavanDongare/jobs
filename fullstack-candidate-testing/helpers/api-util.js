export async function getAllJobs(filter) {
  const response = await fetch('/api/jobs');
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