import InfiniteMenu from "@/components/InfiniteMenu";

import { items } from "@/constants/projects";


export const Projects = () => {
    return (
        <div className="w-full h-full text-white relative z-20">
            <InfiniteMenu items={items}/>
        </div>
    )
}