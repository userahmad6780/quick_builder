import { Button } from './ui/button'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className="bg-blue-100 px-4 sm:px-[15%] py-5 sm:py-12 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        <div>
            <h1 className="text-2xl md:text-5xl font-semibold mb-5 md:mb-12">Write your story with the <br/> ultimate resume builder</h1>
            <span className="text-md md:text-lg">Only 2% of resumes win. Yours will be one of them. Let´s build<br/>  you a resume that works.</span>
            <div className="mt-2">
                <Button className='text-sm lg:text-xl font-medium py-4 px-2 md:py-6 md:px-3 bg-blue-500 hover:bg-blue-300'>Create my resume</Button>
            </div>
            <div className="flex gap-10 mt-16">
                <div className="flex flex-col gap-2 border-l border-gray-400 pl-3">
                <span className="bg-green-100 text-green-600 font-semibold md:text-xl py-2 px-2 w-max">39%</span>
                <span className="text-gray-500 text-sm md:text-md ">more likely to get hired</span>
                </div>
                <div className="flex flex-col gap-2 border-l border-gray-400 pl-3">
                <span className="bg-yellow-100 text-yellow-600 font-semibold md:text-xl py-2 px-2 w-max">8%</span>
                <span className="text-gray-500 text-sm md:text-md ">better pay with your next job</span>
                </div>
            </div>
        </div>
        <div>
            <img className="w-80 h-80 md:w-110 md:h-110" src={assets.header_side_img} alt="resume_header_img"/>
        </div>
    </div>
  )
}

export default Header