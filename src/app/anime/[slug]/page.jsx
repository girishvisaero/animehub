import { baseURL } from '@/config/baseURL';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const getData = async (slug) => {
  if (!slug) {
    redirect('/')
  }
  // const API = baseURL + "/watch/"+ slug +"?server=gogocdn"
  const API = baseURL + "/info/" + slug
  // console.log('API', API)
  const res = await fetch(API);
  let data = await res.json();
  return data;
}

const watch = async ({ params }) => {
  const slug = params?.slug ?? ''
  const data = await getData(slug)
  console.log('params', data)
  return (
    <>
      <div
        className='relative flex justify-center items-center h-screen '
      // className={`bg-[url('${data?.image ?? ''}')]`}
      >
        <div className='absolute w-screen -z-10 after:content-[""]  after:h-100 after:absolute after:z-50 after:bottom-0 after:w-full after:h-[150px] after:bg-gradient-to-b after:from-[transparent] after:to-black/30 '>
          <Image
            src={data?.image ?? ""}
            height={500}
            width={1000}
            className='w-screen h-[100vh] object-cover '
          />
        </div>
        <div
          className='relative w-full flex justify-center items-center h-screen gap-4 backdrop-blur-md bg-black/30'
        >
          <Image
            src={data?.image ?? ""}
            height={500}
            width={1000}
            className='w-full h-[80vh] object-contain '
          />
          <div className='w-[80vw] leading-10'>

            <h1 className='text-2xl text-white font-extrabold leading-[4rem]'>
              {data?.title ?? ''}
            </h1>
            <div className='text-white text-sm flex gap-1 font-bold '>
              Genres: <div className='flex gap-2 flex-wrap'>
                {(data?.genres ?? [])?.map(x => <span className='px-1 rounded-lg text-[.6rem] text-white border border-white'>{x}</span>)}
              </div>
            </div>
            <div className='text-white font-bold leading-7'>Total Episodes: {data?.totalEpisodes ?? ''}</div>
            <div className='text-white font-bold leading-7'>Realeased on: {data?.releaseDate ?? ''}</div>
            <p className='text-white text-[.65rem] leading-6'>{data?.description ?? ''}</p>
            <div className='text-white font-bold  text-[.85rem] leading-8 capitalize'>Language Type: {data?.subOrDub ?? ''}</div>
            <div className='font-bold text-white leading-5'> Status: <span className='text-yellow-500'>{data?.status ?? ""}</span></div>
            <button className='font-bold text-clip px-3 py-2 rounded bg-white leading-5 mt-3'> Watch Now</button>
          </div>
        </div>
      </div>
      <div className='absolute -bottom-[100px] px-5 py-2 after:content-[""]  after:h-100 after:absolute after:z-50 after:bottom-0 after:w-full after:h-[150px] after:bg-gradient-to-b after:from-[transparent] after:to-black/30 left-0'> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, labore reprehenderit reiciendis architecto laboriosam quis nostrum adipisci voluptatem saepe, eum ad debitis officiis, veniam ducimus! Facere quia quos aperiam accusamus?
      </div>
    </>

  )
}

export default watch
