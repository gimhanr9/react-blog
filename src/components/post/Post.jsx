import Card from './Card';
import classes from './post.module.css';

function Post(props){
    return(
        <Card>
        <div>
            <small>{props.id}</small>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
        </Card>
    );

}

export default Post;