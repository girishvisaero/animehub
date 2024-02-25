'use client'

import { useRouter } from "next/navigation";

const Cards = ({ obj }) => {
    const { push } = useRouter();
    const handleWatch = (id) => {
        // console.log('first')
        push('/anime/'+ id)
    }
    return (
        <div className="h-full " onClick={()=>handleWatch(obj?.id)}>
            <div
                className="w-full rounded cursor-pointer shadow-md aspect-video flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url('${obj?.image}')` }}
                title={obj?.title}
            ></div>
            <div className="w-full text-white text-sm backdrop-blur line-clamp-2 flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75 py-2 ">
                {obj?.title}
            </div>
        </div>
    )
}

export default Cards