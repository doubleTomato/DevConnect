import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const headerItems:string[] = ['Home', 'Blog', 'Project Gallery', 'Profile'];
    const headerLink:string[] = ['/', '/blog', '/projects', '/profile'];
    return (
        <ul className="flex gap-2 bg-gray-800 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {headerItems.map((v,i) => <Link to={headerLink[i]}><li className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" key={i}>{v}</li></Link>)}
        </ul>
    )
}

export default Header;