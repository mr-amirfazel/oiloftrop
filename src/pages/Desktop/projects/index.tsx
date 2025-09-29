import InfiniteMenu from "@/components/InfiniteMenu";
import type { FC } from "react";

import { items } from "@/constants/projects";


export const Projects = () => {
    return (
        <div className="w-full h-full text-white relative">
            <InfiniteMenu items={items}/>
        </div>
    )
}