import ProfilePicture from "@/app/Components/WebAssets/HeaderAssets/ProfilePicture";
import Button from "@/app/Components/WebAssets/HeaderAssets/Button";
import Logo from "@/app/Components/WebAssets/HeaderAssets/Logo";
import Searchbar from "@/app/Components/WebAssets/Searchbar";

const header = () => {
    return (<div className="w-full bg-neutral-300 h-16 flex p-2 shadow-lg flex items-center justify-between">
        <div>
            <Logo />
        </div>
        <div className="w-1/3">
            <Searchbar />
        </div>
        <div className="flex gap-4 hidden">
            <Button ButtonLabel="Sign Up"/>
            <Button ButtonLabel="Login"/>
        </div>
        <div className="flex gap-4">
            <ProfilePicture />
        </div>
    </div>);
}

export default header;