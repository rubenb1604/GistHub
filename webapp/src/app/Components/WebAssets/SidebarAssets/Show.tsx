"use client"

import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai";
import {hidden} from "next/dist/lib/picocolors";

const hideComp = () => {

    const show = () => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) { sidebar.style.display = "block"; }
        else {console.warn('Element with id "sidebar" not found.');}

        const showbtn = document.getElementById("show-btn");
        if (showbtn) { showbtn.style.display = "none"; }
        else {console.warn('Element with id "showbtn" not found.');}

        const maindiv = document.getElementById("main");
        if (maindiv) { maindiv.style.marginLeft = "18rem"; }
        else {console.warn('Element with id "main" not found.');}
    };



    return (
        <div id="show-btn" className="hidden">
            <AiOutlineMenuUnfold className="size-12 p-2 cursor-pointer hover:bg-neutral-500 rounded-xl " onClick={show}/>
        </div>
    );
}

export default hideComp;