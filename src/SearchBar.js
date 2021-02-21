import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = { font:"Nunito Sans",width:"280px",height:"38px",background:"#252652",position:"absolute",radius:"5px",border:"none"};
  return (
    <input 
    placeholder="Search"
     style={BarStyling}
     key="random1"
     value={keyword}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar;