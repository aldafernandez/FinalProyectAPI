import './Header.css';
import { FaSearch } from "react-icons/fa";

export function Header() {
    return (
        <header>       
            <nav className='header'>
                <h1 className='font-honk'>Moblix</h1>
                <div className='search-bar'>
                    <FaSearch className='icon' color='#444' size={12} />
                    <input className='input' type='text' placeholder='Buscar'/>  
                </div>
            </nav>      
        </header>
    );
}