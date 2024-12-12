import React, { useEffect } from 'react'

import { RiSearchLine, RiAddCircleFill, RiMenuLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { SidebarToggleAction } from '../Store';
function Header() {
    const Dispatch = useDispatch();
    const SidebarToggle = useSelector((slice) => slice.SideToggle)
    return (
        <div className='bg-neutral-200 w-full'>
            <div className='bg-white px-10 w-full h-[13vh] justify-between flex items-center '>
                <RiMenuLine className='menuToggle bg-sky-600' onClick={() => Dispatch(SidebarToggleAction.ToggleSideBar(SidebarToggle))} />
                <div className=' flex items-center border-[2px] w-1/2 p-2 px-5 border-solid border-neutral-400 rounded-2xl gap-4 text-xl searchBoxMain'>
                    <input type="text" className='outline-none w-full searchBox ' placeholder='Search for Friends' />
                    <span className='text-neutral-500'><RiSearchLine /></span>
                </div>
                <div><button type='button' className='flex items-center p-3 bg-sky-600 text-white rounded-full gap-3 text-sm sm:text-xl'><RiAddCircleFill /> Add Post</button></div>
            </div>
        </div>
    )
}

export default Header
