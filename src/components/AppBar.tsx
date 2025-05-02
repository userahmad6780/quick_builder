import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { assets } from '../assets/assets';

function AppBar() {
    const navigate = useNavigate()

    interface User {
        name: string
    }
    const [user, setUser] = useState<User | null>({name:'ahmad'})

  return (
    <div className='fixed bg-white hidden md:flex justify-between items-center py-5 px-4 sm:px-[15%] inset-x-0 top-0 z-50'>
        <div className='flex items-center'>
            <img className="w-[40px]" src={assets.logo} alt='app_logo'/>
            <span className='px-2 text-gray-800 dark:text-white font-bold text-2xl'>QuickBuilder</span>
        </div>
        <div>
            <ul className={`flex gap-3 font-semibold text-gray-800 dark:text-white`}>
                <NavLink to={'/'} className='custom-navLink'>
                    <li>Home</li>
                    <hr className='hidden text-indigo-600 dark:text-white'/>
                </NavLink>
                <NavLink to={'/resume'} className='custom-navLink'>
                    <li>Resume</li>
                    <hr className='hidden text-indigo-600 dark:text-white'/>
                </NavLink>
            </ul>
        </div>
        <div className='flex gap-6'>
            {
                !user ?
                <div className='cursor-pointer py-2 px-3 bg-indigo-600 rounded-md' onClick={()=>{navigate('/login')}}>
                    <p className='text-gray-50'>SignIn</p>
                </div>    :
                <div className='relative group'>
                    <div className='flex items-center '>
                        <div className="w-10 h-10 rounded-full dark:bg-gray-300 bg-gray-600 text-white dark:text-gray-600 flex items-center justify-center font-semibold uppercase mr-2">
                            {user.name[0]}
                        </div>
                        <img src={assets.dropdown_icon} alt={assets.dropdown_icon} className='w-3'/>
                    </div>
                    <div className='absolute right-0 top-0 pt-12 z-1'>
                        <div className='hidden w-max group-hover:flex flex-col rounded-md bg-gray-100 py-2 px-4'>
                            <p className='text-md py-2 hover:text-gray-600 cursor-pointer' onClick={()=>navigate('/myProfile')}>My Profile</p>
                            <p className='text-md py-2 hover:text-gray-600 cursor-pointer' onClick={()=>{console.log('logout')}}>Logout</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default AppBar