import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Theme from "./Theme";
import LandingPage from "./pages/LandingPage";
import AddSurvivorPage from './pages/AddSurvivorPage';

function App() {
  return (
    <Theme>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/add-survivor" component={AddSurvivorPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
