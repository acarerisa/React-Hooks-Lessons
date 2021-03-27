import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    const[post,setPost] = useState({})
    const[error,setError] = useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setPost(response.data)
            setError('')
        })
        .catch(error=>{
            setPost({})
            setError('Bir yanlışlık oldu')
        })
    },[])

    return (
        <div>
           {error ? error : post.title} 
        </div>
    )
}

export default DataFetch
