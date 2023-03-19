import React from 'react'

const Search = (props) => {
    const {text, placeholder } = props
  return (
    <form className="flex items-center space-x-2">
    <button type="submit" className="border-2 border-yellow-500 hover:border-yellow-700 text-yellow-700 font-bold py-2 px-4 rounded">
    {text}
    </button>
    <input type="text" className="border border-gray-300 rounded-md p-2 mr-2" placeholder={placeholder} />
  
  </form>
    
  )
}

export default Search
