import React from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";
function SideProfile() {
    return (
        <div className='mb-5 gap-5 text-white flex items-center justify-between text-xl border-solid border-t-[2px] pt-4 border-sky-700'>
            <span>Sachin11</span>
            <span className='flex items-center cursor-pointer gap-2'>
                LogOut
                <RiLogoutCircleRLine />
            </span>
        </div>
    )
}

export default SideProfile
