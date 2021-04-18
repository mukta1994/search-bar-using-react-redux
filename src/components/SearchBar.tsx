import React from 'react';

//material ui
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = (props:any) => {

    const {callback, clearSearchInput, onInput, val, onKeyPress}= props

    return(<div className="search-bar">
        <h3>Search effective charitable organizations</h3>
              <div className="search_container">
                <input type="text" className="search-input" onInput={onInput} value={val} onKeyPress={onKeyPress}/>
                    <div className="actions">
                    <ClearIcon className="close-icon" onClick={clearSearchInput}/>
                    <div className="divider"></div>
                    <SearchIcon className="search-icon" onClick={callback}/> 
                </div>  
            </div>
        </div>)
}

export default SearchBar;