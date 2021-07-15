
import Header from './components/header/header';
import Navigation from './components/navigation/Navigation';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import classes from './App.module.css';
import NewPost from './components/pages/NewPost';
import AllPosts from './components/pages/AllPosts';
import Home from './components/pages/Home';


function App() {
  return (
    <BrowserRouter>
    <div className={classes.main}>
      <Header>
        <Navigation />

      </Header>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/all' component={AllPosts}/>
      <Route path='/new-post' component={NewPost}/>
      </Switch>

      
    </div>
  
    </BrowserRouter>
  );
}

export default App;
