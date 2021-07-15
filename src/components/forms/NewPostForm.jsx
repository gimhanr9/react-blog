import {useRef} from 'react';
import Card from '../post/Card';
import classes from './newPostForm.module.css';
function NewPostForm(props){

    const titleRef=useRef();
    const idRef=useRef();
    const descriptionRef=useRef();

    function submitHandler(event){
        event.preventDefault();
        const enteredId=idRef.current.value;
        const enteredTitle=titleRef.current.value;
        const enteredDescription=descriptionRef.current.value;

        const postObj={id:enteredId,title:enteredTitle,body:enteredDescription};

    }
    return(
        <Card>
        <form className={classes.form} onSubmit={submitHandler}>

            <div className={classes.control}>
                <label htmlFor="id">Id</label>
                <input type="text" required id="id" ref={idRef}/>
            </div>

            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleRef}/>
            </div>


            <div className={classes.control}>
                <label htmlFor="description">Body</label>
                <textarea id="description" rows="5" ref={descriptionRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Submit Post</button>
            </div>

        </form>
    </Card>
    );

}

export default NewPostForm;