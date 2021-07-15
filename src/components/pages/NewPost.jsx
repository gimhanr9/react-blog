import NewPostForm from "../forms/NewPostForm";

function NewPost(){

    function submitHandler(){

    }
    return(
        <div>
            <h1>New Post</h1>
            <NewPostForm onSubmit={submitHandler}/>

        </div>
    );

}

export default NewPost;