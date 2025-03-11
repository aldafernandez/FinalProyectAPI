import { useEffect, useState } from 'react';
import './CardMovie.css';

export function CardMovie({movie}) {

    const [data, setData] = useState ( {} );

    const API_KEY = "488037bb";

    const API_URL = "http://www.omdbapi.com/?&t=" + movie + "&apikey=" + API_KEY;

    let CallAPI = async () => {
        let response = await fetch(API_URL);
        let info = await response.json();

        setData(info);

        console.log(info.Title);
    }

    useEffect( () => { CallAPI() }, [ movie ]);
    return (
        <>
            { Object.keys(data).length > 0 &&
                <div>
                    <p>{data.Title}</p>
                    <p>{data.Plot}</p>
                    <p>{data.Genre}</p>
                </div>
                
                
            }
        </>
    );
}

