import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const headerItems:string[] = ['Home', 'Blog', 'Projects', 'Profile'];
    const headerLink:string[] = ['/', '/blog', '/projects', '/profile'];
    return (
        <div className="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-gray-800">
            <h1 className="text-gray-400 items-center justify-center relative inline-flex font-bold">DevConnect</h1>
            <ul className="flex gap-2  mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full justify-end">
                {headerItems.map((v,i) => <Link to={headerLink[i]}><li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" key={i}>{v}</li></Link>)}
            </ul>
        </div>

    )
}

export default Header;