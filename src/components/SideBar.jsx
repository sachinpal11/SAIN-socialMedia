import React, { useEffect } from 'react'
import { RiHome2Fill, RiAddCircleFill, RiMenuLine, RiSettings3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { MenuToggleAction, SidebarToggleAction } from '../Store';
import { Link, Links } from 'react-router';
import SideProfile from './SideProfile';
import Menubtn from './Menubtn';
function SideBar() {
    const Dispatch = useDispatch();
    const MenuToggle = useSelector((slice) => slice.MenuToggle)

    const HandleSideBar = (value) => {
        Dispatch(MenuToggleAction.ToggleMenu(value))
    }
    const SidebarToggle = useSelector((slice) => slice.SideToggle)

    return (
        <div style={{ ...(SidebarToggle && { left: "0%" }) }} className={`z-20 sidebar p-5 pt-10 xl:w-1/6 md:w-1/4 flex flex-col gap-10 justify-between rounded-r-2xl bg-sky-600 `}>
            <div className='flex flex-col gap-10'>
                <Menubtn />
                <div>
                    <div className="logo bg-white inline p-3 py-5 font-semibold text-2xl text-[rgb(2,0,41)] rounded-full ">SAIN</div>
                </div>
                <ul className=' text-lg flex flex-col gap-2 mt-10 text-white'>
                    <Link to={"/"} className={`flex p-2 px-6 rounded-full cursor-pointer ${(MenuToggle === "Home") && `bg-sky-700`} gap-2 items-center`}
                        onClick={() => { HandleSideBar("Home") }}><RiHome2Fill /> Feed</Link>
                    <Link to={"/create-post"} onClick={() => { HandleSideBar("Create-Post") }} className={`flex p-2 px-6 rounded-full cursor-pointer ${(MenuToggle === "Create-Post") && `bg-sky-700`} gap-2 items-center`}><RiAddCircleFill /> Create Post</Link>
                    <li className={`flex p-2 px-6 rounded-full cursor-pointer ${(MenuToggle === "Settings") && `bg-sky-700`} gap-2 items-center`}
                        onClick={() => { HandleSideBar("Settings") }}><RiSettings3Fill /> Settings</li>
                </ul>
            </div>
            <SideProfile />
        </div>
    )
}

export default SideBar
