import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";

const Albums = () => {
    const [albums, setAlbums] = useState(['']);
  
    useEffect(() => {
        getAlbums();
    }, [])
  
    const getAlbums = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setAlbums(data));
    }
    return (
        <div className='albums'>
            {
              albums ? 
                albums.map(album => (
                  <div className='album'>
                    <Link to={'/photos/' + album.id }>
                      <div className='id'>{album.id}</div>
                      <div className='name'>{album.title}</div>
                    </Link>
                  </div>
                ))
                :null
            }
        </div>
    )
  }

export default Albums;
