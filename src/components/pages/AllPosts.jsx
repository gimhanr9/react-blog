import { useEffect, useState } from "react";
import PostList from "../post/PostList";

function AllPosts(){
    const [posts,setPost]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(response=>{
            response.json().then(data=>{
                setPost(data);

            });

        });
    },[]);
    return(
        <div>
            <PostList posts={posts}/>

        </div>
    );

}

export default AllPosts;