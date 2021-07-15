import {Link} from 'react-router-dom';
import classes from './navigation.module.css';
function Navigation (){
    return(
        <nav>
            <ul>
                <li className={classes.logo}>Blog App</li>
                <Link to='/'><li className={classes.links}>Home</li></Link>
                <Link to='/all'><li className={classes.links}>Blogs</li></Link>
                <Link to='/new-post'><li className={classes.links}>Create Blog</li></Link>
                
            </ul>
        </nav>
        

        
    );
}

export default Navigation;