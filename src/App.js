import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Theme from "./Theme";
import Sidebar from "./components/Sidebar";
import {Main} from "./components/styles";
import LandingPage from "./pages/LandingPage";
import AddSurvivorPage from "./pages/AddSurvivorPage";
import SurvivorsPage from "./pages/SurvivorsPage";
import UpdatePage from './pages/UpdatePage';
import FlagPage from './pages/FlagPage';

function App() {
  return (
    <Theme>
      <Router>
        <Sidebar />
        <Main>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/add-survivor" component={AddSurvivorPage} />
            <Route path="/survivors" component={SurvivorsPage} />
            <Route path="/update-location" component={UpdatePage} />
            <Route path="/flag-infected" component={FlagPage} />
            <Redirect to="/" />
          </Switch>
        </Main>
      </Router>
    </Theme>
  );
}

export default App;
