import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={`px-9 ${s.header}`}>
            <div className="header__search flex items-center">

                <label class="relative block">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Искать что угодно..." type="text" name="search" />
                </label>

            </div>

            <div className="menu-right flex items-center">
                
                <div>
                    <div className={`mr-2 ${s.avatar}`}></div>
                    <span className="avatar-name">Name</span>
                </div>

            </div>

        </header>
    )
}

export default Header;