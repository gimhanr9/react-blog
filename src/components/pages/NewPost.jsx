import NewPostForm from "../forms/NewPostForm";

function NewPost(){

    function submitHandler(postObj){
        fetch("https://jsonplaceholder.typicode.com/posts",{method:'POST',body:JSON.stringify(postObj),
    headers:{'Content-Type':'application/json'}}).then(response=>{
        response.json().then(data=>{
            console.log(data);

        });

    }).catch(err=>{
        console.log(err);
    });

    }
    return(
        <div>
            <h1>New Post</h1>
            <NewPostForm onSubmit={submitHandler}/>

        </div>
    );

}

export default NewPost;