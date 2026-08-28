import { useState } from 'react'
import PropTypes from 'prop-types';


function Header({ loggedIn }) {
    



    return (
        <>
            <header className="bg-white border-b border-outline-blue w-full sticky top-0 z-50">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <a className="font-display-lg text-headline-md text-primary" href="#">ResearchWatcher</a>

                        {loggedIn && <nav className="hidden md:flex items-center gap-6">
                            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/dashboard">Dashboard</a>
                            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/search">Search</a>
                            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/librarian">Librarian</a>
                        </nav>}
                    </div>
                    { loggedIn &&
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none">
                                <span className="material-symbols-outlined">account_circle</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-outline-blue opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                                <a className="block px-4 py-2 font-body-md text-on-surface-variant hover:bg-surface-bright hover:text-primary transition-colors" href="#">Settings</a>
                                <a className="block px-4 py-2 font-body-md text-error hover:bg-error-container/20 transition-colors" href="#">Logout</a>
                            </div>
                        </div>
                    </div>}
                </div>
            </header>


        </>
    )
}


Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
export default Header
