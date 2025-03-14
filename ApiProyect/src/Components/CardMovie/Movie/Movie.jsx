import { Link, useParams } from 'react-router-dom';
import './Movie.css';
import { useEffect, useState } from 'react';


export function Movie(){

    let  { imdbID }  = useParams();
    
    const [data, setData] = useState({});

    const API_KEY = "488037bb";

    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&i=`;

    let CallAPI = async () => { 
        let response = await fetch(API_URL + imdbID);
        let text = await response.text();

        try {
            let prevData = JSON.parse(text);
            setData(prevData);
        } catch (error) {
            console.error("Error parsing JSON:", error, "Response:", text);
        }
    }

    useEffect(() => { CallAPI(); }, [] );

    return(
        <>
            { Object.keys(data).length > 0 &&
                <>
                    <Link to='/'>Volver</Link>
                    <div>
                        <p>cargo la  info</p>
                    </div>
                </>
            
            
            }
        </>
    );

}