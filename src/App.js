import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Theme from "./Theme";
import Navbar from "./components/Navbar";
import {Main} from "./components/styles";
import LandingPage from "./pages/LandingPage";
import AddSurvivorPage from "./pages/AddSurvivorPage";
import SurvivorsPage from "./pages/SurvivorsPage";
import UpdatePage from './pages/UpdatePage';
import TradePage from './pages/TradePage';
import FlagPage from './pages/FlagPage';
import ReportPage from './pages/ReportPage';

function App() {
  return (
    <Theme>
      <Router>
        <Navbar />
        <Main>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/add-survivor" component={AddSurvivorPage} />
            <Route path="/survivors" component={SurvivorsPage} />
            <Route path="/update-location" component={UpdatePage} />
            <Route path="/trade" component={TradePage} />
            <Route path="/flag-infected" component={FlagPage} />
            <Route path="/reports" component={ReportPage} />
            <Redirect to="/" />
          </Switch>
        </Main>
      </Router>
    </Theme>
  );
}

export default App;
