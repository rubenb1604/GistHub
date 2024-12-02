"use client";

import {useState} from "react";

const header = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <img src="Profile.png"
                 className="h-16 rounded-full"
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)} />

            {isHovered && (
                <div className="absolute bg-white p-4 shadow-lg rounded-xl w-32 mt-1" style={{ marginLeft: "-4rem" }}>
                    <p>Profil-Details oder andere Inhalte</p>
                </div>
            )}
        </div>
    );
}

export default header;