import React from 'react'

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <form>
        <input type="text" name="search" placeholder="Search" /> <br/>
        <input type="checkbox" name="stocked"/> is stocked
      </form>
    </div>
  )
}
