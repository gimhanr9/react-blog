
import Post from './Post';
import classes from './postList.module.css';

function PostList(props){

    return(
        <ul className={classes.list}>
            {props.posts.map(post=> <Post id={post.id} title={post.title} text={post.body}/>)}
            
        </ul>
    );

}

export default PostList;