import { Component } from "react";
import "./App.css";

import { Switch, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import Post from "./components/post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={["/", "/Posts"]} component={Posts} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    );
  }
}

export default App;
