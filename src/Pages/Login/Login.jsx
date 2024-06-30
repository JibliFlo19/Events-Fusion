import { useState } from "react";
import {
  LoginContainer,
  LoginContainerTitle,
  LoginContainerButton,
  LoginContainerInput,
  LoginContainerLabel,
  LoginContainerForm,
  SignUpContainerButton,
  PageWrapper,
} from "../Login/Login.style";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    fetch(`http://localhost:3001/users?email=${email}&password=${password}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          console.log(data);
          setMessage("Login successful");
          localStorage.setItem("id", data[0].id);
          localStorage.setItem("userEmail", data[0].email); // Save email in localStorage
          navigate("/profile"); // Redirect to profile page
        } else {
          console.log(data);
          setMessage("Login failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred");
      });
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <PageWrapper>
      <LoginContainer>
        <LoginContainerTitle>Login</LoginContainerTitle>

        <LoginContainerForm>
          <LoginContainerLabel>Email:</LoginContainerLabel>
          <LoginContainerInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LoginContainerForm>
        <LoginContainerForm>
          <LoginContainerLabel>Password:</LoginContainerLabel>
          <LoginContainerInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LoginContainerForm>
        <LoginContainerButton onClick={handleSubmit}>
          Login
        </LoginContainerButton>
        {message && <p>{message}</p>}
        <LoginContainerLabel>{`Don't you have an account?`}</LoginContainerLabel>
        <SignUpContainerButton onClick={handleSignUp}>
          Sign up
        </SignUpContainerButton>
      </LoginContainer>
    </PageWrapper>
  );
};

export default Login;
