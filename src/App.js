import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./authentication/signIn";
import Dashboard from "./pages/dashboard/dashboard";
import Profilepage from "./pages/profile";
import Friendlist from "./pages/friendlist/friendlist";
import Settings from "./pages/miscellanous/settings";
import HelpPage from "./pages/miscellanous/helppage";
import PrivacyPage from "./pages/miscellanous/privacypage";
import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
  palette: {
    type: "light",
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
        <h2>learn react</h2>
          <Router>
            <Switch>
              <Route path="/" exact component={LoginPage} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/profile" exact component={Profilepage} />
              <Route path="/friendlist" exact component={Friendlist} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/privacy" exact component={PrivacyPage} />
              <Route path="/help" exact component={HelpPage} />
              <Route path="/logout" exact component={LoginPage} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
