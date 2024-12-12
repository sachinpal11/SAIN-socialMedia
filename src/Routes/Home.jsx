import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux'
import { AllPostDataAction, fetchAllPosts, FetchingDoneAction } from '../Store';
import PostCard from '../components/PostCard';
function Home() {
    const AllPost = useSelector((slice) => slice.AllData)
    const Dispatch = useDispatch()
    useEffect(() => {
        Dispatch(fetchAllPosts());
    }, [])

    return (
        <div className='xl:w-7/12 bg-neutral-200 flex flex-col w-full items-center gap-10'>
            <Header />
            {(AllPost.length === 0) && <Loading />}
            <div className='overflow-y-auto w-full px-5 items-center flex flex-col gap-4'>
                {
                    AllPost.map((item, index) => (
                        <PostCard key={index} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
