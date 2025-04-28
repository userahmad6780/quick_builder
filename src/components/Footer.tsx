import { assets } from '../assets/assets'

function Footer() {
  
  return (
    <div className='px-4 sm:px-[15%] flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 pb-10  mt-20 text-sm'>
        <div className='text-gray-600 dark:text-white'>
            <div className='flex items-center pb-5'>
                <img className="w-[40px]" src={assets.logo} alt='app_logo'/>
                <span className='px-2 text-gray-800 dark:text-white font-bold text-2xl'>QuickBuilder</span>
            </div>
            <p className='w-full md:w-2/3 text-sm'>Replace your old resume in a few simple clicks. Our builder gives recruiters what they want. Our tested resume templates are designed to make you more attractive to recruiters.</p>
        </div>
        <div className='text-gray-600 dark:text-white'>
            <p className='text-lg font-semibold pb-5'>Company</p>
            <ul>
                <li className='text-sm pb-2'>Home</li>
                <li className='text-sm pb-2'>About Us</li>
                <li className='text-sm pb-2'>Contact Us</li>
                <li className='text-sm pb-2'>Privacy Policy</li>
            </ul>
        </div>
        <div className='text-gray-600 dark:text-white'>
            <p className='text-lg font-semibold pb-5'>Get in touch</p>
            <ul>
                <li className='text-sm pb-2'>+0238409283409</li>
                <li className='text-sm pb-2'>quickBuilder@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer