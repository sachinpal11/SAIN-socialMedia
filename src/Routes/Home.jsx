import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Loading from '../components/Loading';

import { RiMenuLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux'
import { AllPostDataAction, fetchAllPosts, FetchingDoneAction, MenuToggleAction, SidebarToggleAction } from '../Store';
import PostCard from '../components/PostCard';
import Menubtn from '../components/Menubtn';
function Home() {
    const AllPost = useSelector((slice) => slice.AllData)
    const SidebarToggle = useSelector((slice) => slice.SideToggle)
    const Dispatch = useDispatch()
    useEffect(() => {
        Dispatch(fetchAllPosts());
    }, [])

    const HandleSideBar = (value) => {
        console.log("hello");
        Dispatch(MenuToggleAction.ToggleMenu(value))
    }
    return (
        <div className='xl:w-7/12 relative bg-neutral-200 flex flex-col w-full p-10 items-center gap-10' >
            <div className='absolute left-5 top-5 text-2xl bg-sky-600 text-white p-2 rounded-full sm:hidden md:hidden' onClick={() => Dispatch(SidebarToggleAction.ToggleSideBar(SidebarToggle))}><RiMenuLine /></div>
            <div className='w-full h-full absolute top-0 bg-[rgba(0,0,0,0.558)]' style={{ ...(!SidebarToggle && { display: "none" }) }}></div>
            <h2 className='text-start w-full px-10 text-4xl text-sky-700 font-semibold'>Feed</h2>
            {(AllPost.length === 0) && <Loading />}
            <div className='overflow-y-auto w-full items-center flex flex-col gap-4 scrollbar-hide'>
                {
                    AllPost.map((item, index) => (
                        <PostCard key={index} item={item} />
                    ))
                }
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home
