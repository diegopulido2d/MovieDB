import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const handleKeyUp = () => {
    setSearchTerm(document.getElementById('searchTerm').value)
  }

  return (
    <div className='border-solid border-stone-200 border-2 rounded-lg	lg:w-96 lg:flex lg:justify-between'>
        <input id="searchTerm" type="text" placeholder="Movie title..." name="search" className='rounded-s-lg pl-2 py-1 lg:w-8/12' onKeyUp={handleKeyUp}></input>
        <Link to={"/search/"+searchTerm} className='bg-red-950 text-white	py-1.5 px-3 rounded-e-lg'>Search Now!</Link>
    </div>
  )
}

export default SearchBar