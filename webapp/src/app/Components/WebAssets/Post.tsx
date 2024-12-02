import React from "react";
import LanguageCard from "@/app/Components/WebAssets/SidebarAssets/LanguageCard";

interface IPost {
    title: string;
    description: string;
    code: string;
    id: number;
    frameworks: string[];
    colors: { [key: string]: string };
}


const post:React.FC<IPost> = ({title, description, code, id, frameworks, colors}) => {
    return (
        <a href={"/post/" + id}>
            <div className="m-6 bg-neutral-200 p-4 rounded-xl" style={{width: "92%"}}>
                <h1 className="font-bold text-xl font-sans">{title}</h1>
                <p className="mt-4 font-sans max-h-24 overflow-hidden">{description}</p>


                <div className=" bg-neutral-800 p-4 max-h-48 overflow-hidden rounded-xl mt-2">
                    <code className="text-xs text-white">{code}</code>
                </div>
                <div className="flex gap-2 mt-2">
                    {frameworks.map((framework) => (
                        <LanguageCard key={framework} title={framework} color={colors[framework] || "gray"}/>
                    ))}
                </div>
            </div>
        </a>
    );
}

export default post;
