function Footer() {
    return (
        <div className="sm:flex sm:mt-8 px-5">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mb-2">About Us</span>
                    <div>We have a team of nurses, docktors, technologists and executives dedicated to help nurses find jobs they love. </div>
                    <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-sm  font-bold mb-2">
                                All copyrights reserved © 2020 Health Explore
                            </p>
                        </div>
                    </div>

                </div>
                <div  className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-700 uppercase mb-2">Sitemap</span>
                        <span className="my-2"><a href="#" className="  text-md hover:text-blue-500">Nurses</a></span>
                        <span className="my-2"><a href="#" className="  text-md hover:text-blue-500">Employers</a></span>
                        <span className="my-2"><a href="#" className=" text-md hover:text-blue-500">Social Networking</a></span>
                        <span className="my-2"><a href="#" className=" text-md hover:text-blue-500">Jobs</a></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Privacy</span>
                        <span className="my-2"><a href="#" className="  text-md hover:text-blue-500">Terms of use</a></span>
                        <span className="my-2"><a href="#" className="  text-md hover:text-blue-500">Privacy Policy</a></span>
                        <span className="my-2"><a href="#" className="  text-md hover:text-blue-500">Candidate Policy</a></span>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default Footer
