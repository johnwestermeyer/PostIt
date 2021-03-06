import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Login.css";
import Api from "../../utils/Api";
import { useHistory, Redirect } from "react-router-dom";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setisLogged] = useState(false);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    Api.login({
      username: username,
      password: password,
    }).then((res) => {
      if (res.data.token) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        
        // Stores the username and full name for the profile page
        localStorage.setItem("username", (JSON.stringify({username: JSON.parse(res.config.data).username, id: res.data.id})));
        history.push("/user");
      }
    });
  };
  if (localStorage.getItem("token")) {
    return <Redirect to="/user" />;
  }
  return (
    <Form>
      <Row form>
        <FormGroup>
          <Label for="username" style = {{color:"whitesmoke"}}>Username</Label>
          <Input
            type="username"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </FormGroup>
      </Row>
      <Row form>
        <FormGroup>
          <Label for="password" style = {{color:"whitesmoke"}}>Password </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password 6+ characters"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
      
      </Row>
      <Button variant="outline-secondary" onClick={handleSubmit} className="LoginBtn">Log in</Button>
    </Form>
  );
};
export default Login;
