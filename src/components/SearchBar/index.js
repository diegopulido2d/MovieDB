import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const handleKeyUp = () => {
    setSearchTerm(document.getElementById('searchTerm').value)
  }

  return (
    <div>
        <input id="searchTerm" type="text" placeholder="Movie title..." name="search" onKeyUp={handleKeyUp}></input>
        <Link to={"/search/"+searchTerm}>Search Now!</Link>
    </div>
  )
}

export default SearchBar