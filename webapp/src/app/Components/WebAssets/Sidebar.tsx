import GistCard from "@/app/Components/WebAssets/SidebarAssets/GistCard";

const sidebar = () => {
    return (

        <div className="w-72 bg-neutral-300 mt-2 rounded-xl h-screen">
            <div>
                <h1 className="text-2xl p-2 pt-1 font-medium">Your Gists</h1>
                <GistCard
                    title="My Gist Card"
                    frameworks={["React", "NextJS", "Vue"]}
                    colors={{React: "blue", NextJS: "black", Vue: "green"}}
                    messages={16}
                />
                <GistCard
                    title="Unknown Error"
                    frameworks={["Java", "Json"]}
                    colors={{Java: "orange", Json: "gray"}}
                    messages={3}
                />
                <div className="bg-neutral-400 h-1 w-full"></div>
            </div>
            <div className="absolute bottom-0 ml-2">
                <span>GistHub</span> v1.0.0 by <a href={"https://github.com/rubenb1604"} className="underline text-blue-500">Ruben</a>
            </div>
        </div>

    );
}

export default sidebar;