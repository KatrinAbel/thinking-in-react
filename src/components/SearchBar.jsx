import React from 'react'

export default function SearchBar({search,stocked}) {
  return (
    <div className="SearchBar">
      <form>
        <input type="text" name="search" placeholder="Search" value={search} /> <br/>
        <input type="checkbox" name="stocked" checked={stocked} /> is stocked
      </form>
    </div>
  )
}
