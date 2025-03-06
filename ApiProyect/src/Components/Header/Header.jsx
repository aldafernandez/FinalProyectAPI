import './Header.css';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";

export function Header() {

    const [movie, setMovie] = useState("");

    return (
        <header>       
            <nav className='header'>
                <h1 className='font-honk'>Moblix</h1>
                <div className='search-section'>
                    <div className='search-bar'>
                        <FaSearch className='icon' color='#444' size={12} />
                        <input 
                            className='input' 
                            type='text' 
                            placeholder='Buscar por nombre'
                            onChange={ (e) => setMovie(e.target.value) }
                        />              
                    </div>
                    <a onClick={ () => } className='button'>Buscar</a>
                </div>
               
            </nav>      
        </header>
    );
}