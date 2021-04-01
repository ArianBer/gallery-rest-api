import React,{useState,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';

function Photos() {
    const { id } = useParams();
    const [photos, setPhotos] = useState(['']);

    useEffect(() => {
        getPhotos();
    }, [id]);

    const getPhotos = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data));
    }

    return (
        <div className='photos'>
            <ul>
                {photos.filter(name => name.albumId == id).map((filtered) => (
                    <li>
                        <Link to={'/photos/' + filtered.albumId + '/' + filtered.id}>
                            <div className='image'>
                                <img src={filtered.thumbnailUrl}/>
                            </div>
                            <h3 className='name'>{filtered.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Photos
