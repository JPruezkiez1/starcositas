import SearchIcon from "./search.svg"
import './Styles.css'
export default function SearchBar(searchvalue) {

    return (
        <div className='search_container'>
            <input className="search_input" searchvalue={searchvalue} placeholder='Search...' />
            <img alt="search" className='input_icon' src={SearchIcon} width="48px" />
        </div >
    )


}
