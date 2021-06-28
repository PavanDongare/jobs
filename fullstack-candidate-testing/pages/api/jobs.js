import jobs from '../../data/jobs'

export default async (req, res) => {
  res.statusCode = 200
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order

  await new Promise((resolve) => setTimeout(resolve, 3*1000 * Math.random()))
  const { location, education, department, experience, search } = req.query
  var required_credentials = education;
  var filteredJobs = jobs;

  if (search) {
    filteredJobs = jobs.filter((item) => {
      var match = JSON.stringify(item);
      return match.includes(search);
    })
  }





  filteredJobs = sortByKey(filteredJobs, location);
  filteredJobs.forEach((hospital)=>{
    hospital.items = sortByKey(hospital.items,location,department,experience,required_credentials);
    return hospital;
  });



  res.json({ jobs: filteredJobs })
}



const sortByKey = (arr, location, department, experience, required_credentials) => {
  return arr.sort((a, b) => {
    if (location && a.items && b.items && a.items[0].location && b.items[0].location &&
      ('' + a.items[0].location).localeCompare(b.items[0].location)) // not equal
      return location * ('' + a.items[0].location).localeCompare(b.items[0].location);

    if (required_credentials && a.required_credentials && b.required_credentials &&
      ('' + a.required_credentials).localeCompare(b.required_credentials)) // not equal
      return required_credentials * ('' + a.required_credentials).localeCompare(b.required_credentials);

    if (department && a.department && b.department &&
      ('' + a.department).localeCompare(b.department)) // not equal
      return department * ('' + a.department).localeCompare(b.department);

    if (experience && a.experience && b.experience &&
      ('' + a.experience).localeCompare(b.experience)) {
      return parseInt(experience) * ('' + a.experience).localeCompare(b.experience);
    }
  })
}