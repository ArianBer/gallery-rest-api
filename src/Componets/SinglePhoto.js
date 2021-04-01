import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';


function SinglePhoto() {
    const {id} = useParams();
    const [photo, setPhoto] = useState(['']);

    useEffect(() => {
        getPhoto()
    }, [])

    const getPhoto = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhoto(data))
    }

    return (
        <div>
            {
                photo.filter(name => name.id == id).map((filtered) => (
                    <img src={filtered.url}/>
                ))
            }
            
        </div>
    )
}

export default SinglePhoto
