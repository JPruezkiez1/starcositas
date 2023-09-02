import SearchIcon from "./search.svg"
import './Styles.css'
export default function SearchBar({ searchValue, setSearchValue }) {
    return (
        <div className='search_container'>
            <input className="search_input" placeholder='Search...'
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }} />
            <img alt="search" className='input_icon' src={SearchIcon} width="48px" />
        </div>
    )


}