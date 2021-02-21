import react from "react";
import SearchBar from './SearchBar'

function NavBar(){
    return(
        <div className="main">
           
                <div className="logo">Movies</div>
                <div className="movie"><a>Movies</a></div>
                <div className="series"><a>TV-Series</a></div>
                <div className="genre"><a>Genre</a></div>
                <div className="release"><a>New Release</a></div>
                <div className="searchbar"><SearchBar/></div>
        </div>
    )
}
    
export default NavBar;