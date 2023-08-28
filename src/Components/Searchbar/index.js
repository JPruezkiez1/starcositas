import SearchIcon from "./search.svg"
import './Styles.css'
export default function SearchBar({ searchvalue, setSearchvalue }) {

    return (
        <div className='search_container'>
            <input className="search_input" searchvalue={searchvalue} placeholder='Search...'
                onChange={(event) => {
                    setSearchvalue(event.target.value);
                }} />
            <img alt="search" className='input_icon' src={SearchIcon} width="48px" />
        </div >
    )


}