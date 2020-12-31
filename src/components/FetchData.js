import React,{useState,useEffect} from 'react';
import axios from 'axios';
function FetchData() {
    //to get all posts
    // const [posts,setPosts]=useState([]);
    //to get single post
    const [post,setPost]=useState({});
    const [id,setId] = useState(1);
    const [idFromButtonClick,setIdFromButtonClick]=useState(1);
    const handleClick = ()=>{
        setIdFromButtonClick(id);
    }
    useEffect(()=>{
        //to get all posts
        // axios.get('https://jsonplaceholder.typicode.com/posts/')
        //     .then(res=>{
        //         console.log(res);
        //         // setPosts(res.data)
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //     })
        //For single post
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res=>{
                console.log(res);
                // for single post
                setPost(res.data);
            })
            .catch(err=>{
                console.log(err)
            })

    },[idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange ={e=>setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post=><li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default FetchData
