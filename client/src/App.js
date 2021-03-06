import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import NewPost from './components/pages/NewPost/NewPost';
import SinglePost from './components/pages/SinglePost/SinglePost';

class App extends Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path='/posts/new' component={NewPost} />
          <Route exact path='/posts/:id' component={SinglePost} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  };
}

export default App;
