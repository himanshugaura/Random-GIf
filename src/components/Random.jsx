import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import toast from 'react-hot-toast';

const Random = () => {

    const {gif , loading , fetchData} = useGif();

    const randomGifHanlder = () =>
    {
        fetchData();
        toast.success("Gif Generated");
    }

  return (
    <div className='flex flex-col w-[80vw] bg-white/10 mt-10 justify-center items-center px-5 py-2 rounded-2xl shadow-[1px_1px_5px] shadow-gray-500 gap-10 md:w-[50vw]'>
        <h1 className='font-bold text-[1.5rem]'>Random Gif</h1>
        
        {loading ? (<Spinner />) : (<img src={gif} alt="gif" />)}

        <button onClick={randomGifHanlder}
        className='bg-amber-300 text-black rounded-2xl px-3 py-2 cursor-pointer'
        >Generate</button>
    </div>
  )
}

export default Random