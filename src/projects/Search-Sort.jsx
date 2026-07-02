import { useState } from 'react';


function Search() {
  return(
  <div className="search">
  <input type="text" placeholder="Search projects..." />
  </div>
) }


  function Sort() {
  return(
    <div className='sort'>
      <select>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="name">Name</option>
      </select>
    </div>
  )
}


export { Search, Sort };