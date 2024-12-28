import React from 'react'
import { Form } from 'react-router'

function CreatePost() {
    return (
        <div className='xl:w-7/12 sm:px-20 px-10 pt-10 bg-neutral-200 p-5 flex flex-col w-full gap-10'>

            <span className='sm:text-3xl w-full text-start  text-2xl font-semibold text-sky-700 '>Upload Post</span>
            <Form className='flex flex-col gap-3 sm:gap-10'>
                <div className='flex flex-col gap-2'>
                    <span className='text-md text-neutral-600'>Enter Title</span>
                    <input type="text" name='title' className='text-lg p-2 rounded-full outline-none w-full sm:w-3/4 px-4 md:w-1/2' />
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-md text-neutral-600'>Enter Body</span>
                    <input type="text" name='title' className='text-lg p-2 rounded-full outline-none w-full sm:w-3/4 px-4 md:w-1/2' />
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-md text-neutral-600'>Enter Title</span>
                    <input type="text" name='title' className='text-lg p-2 rounded-full outline-none w-full sm:w-3/4 px-4 md:w-1/2' />
                </div>
            </Form>
        </div>
    )
}

export default CreatePost
