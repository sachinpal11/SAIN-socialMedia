import React from 'react'
import { RiThumbUpLine, RiThumbDownLine, RiSendPlane2Fill, RiMessage3Fill } from "react-icons/ri";
function PostCard({ item }) {
  return (
    <div className='h-auto w-[96%] bg-white rounded-2xl p-5 flex flex-col sm:w-[70%]'>
      <span className='text-xl font-semibold'>User_{item.userId}</span>
      <span>
        {item.title}
      </span>
      <p className='text-sm text-neutral-600 my-2'>
        {item.body}
      </p>
      <p className=''>
        {item.views} views
      </p>
      <div className='flex gap-3 p-3 whitespace-normal bg-neutral-200 my-2 rounded-lg'>
        {
          item.tags.map((tag, index) => (
            <span key={index} className=' text-wrap'>{tag}</span>
          ))
        }
      </div>
      <div className='flex justify-evenly text-neutral-600'>
        <span className='flex items-center text-lg my-5 gap-2'><RiThumbUpLine />{item.reactions.likes} Like</span>
        <span className='flex items-center text-lg my-5 gap-2'><RiThumbDownLine />{item.reactions.dislikes} Like</span>
      </div>


      <div>
        <div className='flex justify-center items-center gap-4'><input type="text" placeholder='Write your Comment ' className='px-3 py-2 outline-none w-3/4  border-solid rounded-full border-neutral-400 border-[2px]' />
          <span className='text-xl p-3 bg-sky-600 text-white rounded-full'><RiSendPlane2Fill /></span>
          <span className='text-xl p-3 bg-sky-600 text-white rounded-full'><RiMessage3Fill /></span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
