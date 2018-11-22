import React from 'react'

export default function SearchBar({search,stocked,onSearch,onStocked}) {
  return (
    <div className="SearchBar">
      <form>
        <input 
          type="text" 
          name="search" placeholder="Search" 
          value={search} 
          onChange={e => onSearch(e.target.value)} /> 
          <br/>
        <input 
          type="checkbox" 
          name="stocked" 
          checked={stocked} 
          onChange={e => onStocked(e.target.checked)}/> is stocked
      </form>
    </div>
  )
}
