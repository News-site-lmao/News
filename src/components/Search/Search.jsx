import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

function SearchBar() {
    return (
        <form className = 'flex overflow-hidden w-60 relative mt-4 box-border' >
            <input type = 'text'
                   placeholder = 'Search...'
                   className = 'border m-0 h-6 rounded-sm grow' />
            <button className = 'absolute right-0 p-1 border-0' >
                <AiOutlineSearch/>
            </button>
        </form>
    );
}

export default SearchBar;