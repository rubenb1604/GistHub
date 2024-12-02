import LanguageCard from "@/app/Components/WebAssets/SidebarAssets/LanguageCard";

interface GistCard {
    title: string;
    frameworks: string[];
    colors: { [key: string]: string };
    messages: number;
}


const gistcard:React.FC<GistCard> = ({title, frameworks, colors, messages}) => {
    return (
        <div className="">
            <div className="bg-neutral-400 h-1 w-full"></div>
            <div className="ml-2">
                <h1 className="font-bold text-xl">{title}</h1>
                <div className="flex gap-2">
                    {frameworks.map((framework) => (
                        <LanguageCard key={framework} title={framework} color={colors[framework] || "gray"} />
                    ))}
                </div>
                <h2>{messages} New Messages</h2>
            </div>


        </div>
    );
}

export default gistcard;