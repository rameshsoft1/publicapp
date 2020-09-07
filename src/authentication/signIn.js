import React, { Component } from "react";
import "./loginpage.css";
import { Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import SignUp from "./signUp";

const useStyles = (theme) => ({
  submit: {
    background: "#8E2DE2" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #4A00E0, #8E2DE2)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #4A00E0, #8E2DE2)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    borderRadius: 25,
    color: "white",
    width: "50%",
    boxShadow: "0 3px 5px 2px rgba(180, 103, 245, 0.2)",
    margin: "16px auto 0",
    padding: theme.spacing(1, 4),
    fontSize: "0.8rem",
    fontWeight: 400,
    letterSpacing: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "&:hover": {
      background: "linear-gradient(to left, #4A00E0, #8E2DE2)",
    },
  },
  loginLink: {
    fontSize: "0.8rem",
    color: "#8C8C8C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
    height: "75%",
    transition: "all linear 0.3s",
    "& a": {
      textDecoration: "none",
      color: "#8C8C8C",
      fontWeight: 600,
      transition: "all linear 0.3s",
      fontSize: "0.9rem",
      marginLeft: 6,
    },
    "& a:hover": {
      color: "#600FE1",
      textDecoration: "underline",
    },
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h3": {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#600FE1",
      textAlign: "left",
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
});

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (
      (localStorage.getItem("username") === email ||
        localStorage.getItem("email") === email) &&
      localStorage.getItem("password") === password
    ) {
      //Redirect to Dashboard Page
      this.props.history.push("/dashboard");
    } else {
      alert("Enter correct values");
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <Grid container className="login-Container">
          <h2>zone</h2>
          <Grid item xs={false} sm={4} md={8}>
            <div className="img-Container">
              <img src={require("../images/loginBg.svg")} alt="login BG" />
            </div>
          </Grid>
          <Route exact path="/">
            <Grid item xs={12} sm={8} md={4} elevation={6}>
              <div className={classes.paper}>
                <h3>Hello!</h3>
                <form className={classes.form} noValidate>
                  <TextField
                    fullWidth
                    name="email"
                    margin="normal"
                    id="email"
                    label="Username / Email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                      <Button
                        type="submit"
                        className="rounded-corners"
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                        className={classes.submit}
                      >
                        Sign In
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <div className={classes.loginLink}>
                        <label>Don't have an account?</label>
                        <Link to="/signup">{"Sign Up"}</Link>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Grid>
          </Route>
          <Route path="/signup" component={SignUp}></Route>
        </Grid>
      </Router>
    );
  }
}

export default withStyles(useStyles)(withRouter(SignIn));
