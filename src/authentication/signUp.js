import React, { Component } from "react";
import "./loginpage.css";
import { Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import DatePicker from "../components/dateui";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
    margin: theme.spacing(8, 4),
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

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    gender: "",
    checkstate: null,
  };

  handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    /* using Local Storage */
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);

    this.setState({
      username: "",
      email: "",
      password: "",
    });

    const selectbox = document.getElementById("gender-label");
    const selectedone = selectbox.options[selectbox.selectedIndex].text;
    // alert(selectedone);
    localStorage.setItem("gender", selectedone);
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} sm={8} md={4} elevation={6}>
        <div className={classes.paper}>
          <h3>Register</h3>
          <form className={classes.form} noValidate ref="form">
            <TextField
              fullWidth
              name="username"
              margin="normal"
              id="reg-uname"
              label="Username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <TextField
              fullWidth
              name="email"
              margin="normal"
              id="reg-email"
              label="Email Address"
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
              id="reg-password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <FormControl
              fullWidth
              margin="normal"
              className={classes.formControl}
            >
              <InputLabel shrink htmlFor="gender-label">
                Gender
              </InputLabel>
              <NativeSelect
                value={this.state.gender}
                onChange={this.handleChange}
                inputProps={{
                  name: "gender",
                  id: "gender-label",
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="others">Not willing to specify</option>
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
              <DatePicker />
            </FormControl>
            <FormControl fullWidth>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkstate}
                    onChange={this.handleCheckbox}
                    name="checkstate"
                    color="primary"
                  />
                }
                label="I accept the Terms &amp; Conditions."
              />
            </FormControl>

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
                  Sign Up
                </Button>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <div className={classes.loginLink}>
                  <Link to="/">{"Already I'm member"}</Link>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(SignUp);
