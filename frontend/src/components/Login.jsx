import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(`http://localhost:8080/api/users/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      const { data } = res;
      if (data.login === "success") {
        const { token } = data;

        // Store token in localStorage
        localStorage.setItem("jwtToken", token);
        console.log("Login successful!");
        navigate("/home");
      } else {
        console.error("Login failed!");
        navigate("/error");
      }
    } catch (error) {
      console.error("Error during login:", error);
      navigate("/error");
    }
  };

  return (
    <div className="login-container">
      <fieldset className="login-fieldset">
        <legend className="login-legend">LOGIN FORM</legend>
        <input
          type="text"
          ref={emailRef}
          placeholder="Enter email"
          className="login-input"
        />
        <br />
        <br />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter password"
          className="login-input"
        />
        <br />
        <br />
        <button onClick={login} className="login-button">
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
