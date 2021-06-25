function Footer() {
    return (

        <footer class="footer bg-white relative pt-1 border-b-2 border-blue-700">
            <div class="container mx-auto px-6">
                <div class="sm:flex sm:mt-8">
                    <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div class="flex flex-col">
                            <span class="font-bold text-gray-700 uppercase mb-2">About Us</span>
                            <div>We have a team of nurses, docktors, technologists and executives dedicated to help nurses find jobs they love. </div>
                            <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                                <div class="sm:w-2/3 text-center py-6">
                                    <p class="text-sm  font-bold mb-2">
                                        All copyrights reserved © 2020 Health Explore
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="flex flex-col">
                            <span class="font-bold text-gray-700 uppercase mb-2">Sitemap</span>
                            <span class="my-2"><a href="#" class="  text-md hover:text-blue-500">Nurses</a></span>
                            <span class="my-2"><a href="#" class="  text-md hover:text-blue-500">Employers</a></span>
                            <span class="my-2"><a href="#" class=" text-md hover:text-blue-500">Social Networking</a></span>
                            <span class="my-2"><a href="#" class=" text-md hover:text-blue-500">Jobs</a></span>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Privacy</span>
                            <span class="my-2"><a href="#" class="  text-md hover:text-blue-500">Terms of use</a></span>
                            <span class="my-2"><a href="#" class="  text-md hover:text-blue-500">Privacy Policy</a></span>
                            <span class="my-2"><a href="#" class="  text-md hover:text-blue-500">Candidate Policy</a></span>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer