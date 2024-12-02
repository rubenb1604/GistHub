"use client"

import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai";

const hideComp = () => {

    const hide = () => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) { sidebar.style.display = "none"; }
        else {console.warn('Element with id "sidebar" not found.');}

        const showbtn = document.getElementById("show-btn");
        if (showbtn) { showbtn.style.display = "block"; }
        else {console.warn('Element with id "showbtn" not found.');}

        const maindiv = document.getElementById("main");
        if (maindiv) { maindiv.style.marginLeft = "3rem"; }
        else {console.warn('Element with id "main" not found.');}
    };



    return (
        <div>
            <AiOutlineMenuFold className="size-12 p-2 cursor-pointer hover:bg-neutral-500 rounded-xl " onClick={hide}/>
        </div>
    );
}

export default hideComp;