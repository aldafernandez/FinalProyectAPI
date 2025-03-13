import { useEffect, useState } from 'react';
import './CardMovie.css';

export function CardMovie({movie}) {

    const [data, setData] = useState ( {} );

    const API_KEY = "488037bb";

    const API_URL = "http://www.omdbapi.com/?&t=" + movie + "&apikey=" + API_KEY;

    const API_POSTER = "http://img.omdbapi.com/?apikey=488037bb";

    let CallAPI = async () => {
        let response = await fetch(API_URL);
        let info = await response.json();

        setData(info);
    }

    useEffect( () => { CallAPI() }, [ movie ]);
    return (
        <>
           { movie != "" && 
                Object.keys(movie).length > 0 &&
                    <div className='container'>
                        <a className='btn width-fit'>Volver</a>
                        <div className='grid-2'>
                            <div>
                                <img className='img-movie' src={ API_POSTER + "&" + data.Poster }/>
                            </div>
                            <div className='desc'>
                                <h2>{data.Title}</h2>
                                <p>{data.Plot}</p>
                                <p>Año: {data.Year}.</p>
                                <p>Genero: {data.Genre}.</p>   
                            </div>
                        </div>   
                    </div>
           }

            
        </>
    );
}

