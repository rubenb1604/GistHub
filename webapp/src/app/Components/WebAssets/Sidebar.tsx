import GistCard from "@/app/Components/WebAssets/SidebarAssets/GistCard";
import Hide from "@/app/Components/WebAssets/SidebarAssets/Hide";
import Show from "@/app/Components/WebAssets/SidebarAssets/Show";

const sidebar = () => {
    return (
        <div className="w-fit h-screen" style={{marginTop: "4.5rem"}}>
                <div className="mt-2 ml-1">
                    <Show/>
                </div>

                <div className="w-72 bg-neutral-300 mt-2 rounded-xl h-screen ml-1" id="sidebar">
                    <div>
                        <div className="flex items-center mb-4">
                            <Hide/>
                            <h1 className="text-3xl p-1.5 pt-1 font-medium">Your Gists</h1>
                        </div>
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
                        <div className="bg-neutral-400 h-0.5 w-full"></div>
                    </div>
                    <div className="absolute bottom-20 ml-2">
                        <span>GistHub</span> v1.0.2 by <a href={"https://github.com/rubenb1604"}
                                                          className="underline text-blue-500">Ruben</a>
                    </div>
                </div>

        </div>


    );
}

export default sidebar;