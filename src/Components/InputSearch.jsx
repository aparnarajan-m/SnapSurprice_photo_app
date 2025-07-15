import React from 'react'
import './InputSearch.css'

function InputSearch({query, setQuery, handleSearch}) {
    return (
      <div className='InputSearch-wrapper'>
        <div className='homeinputDiv'>
            <input
                className='homeInput'
                type="text"
                placeholder='Type here...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button className='homeBtn' onClick={handleSearch}>Search</button>
        </div>
        </div>
    )
}

export default InputSearch