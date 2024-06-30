import { useState } from "react";
import {
  App,
  SignUpContainerTitle,
  SignUpContainer,
  SignUpnContainerForm,
  SignUpContainerLabel,
  SignUpContainerInput,
  SignUpContainerButton,
} from "../SignUp/SignUp.style";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    password: "",
    passwordConfirmation: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch(`http://localhost:3001/users`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setMessage("Sign Up successful");
    setFormData({
      email: "",
      phone: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    });
  };
  console.log();
  return (
    <App>
      <SignUpContainer>
        <SignUpContainerTitle>Registration</SignUpContainerTitle>
        <SignUpnContainerForm onSubmit={handleSubmit}>
          <div>
            <SignUpContainerLabel>
              Email:
              <SignUpContainerInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </SignUpContainerLabel>
          </div>
          <div>
            <SignUpContainerLabel>
              Phone:
              <SignUpContainerInput
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </SignUpContainerLabel>
          </div>
          <div>
            <SignUpContainerLabel>
              Name:
              <SignUpContainerInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </SignUpContainerLabel>
          </div>

          <div>
            <SignUpContainerLabel>
              Password:
              <SignUpContainerInput
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </SignUpContainerLabel>
          </div>
          <div>
            <SignUpContainerLabel>
              Password Confirmation:
              <SignUpContainerInput
                type="password"
                name="passwordConfirmation"
                value={formData.passwordConfirmation}
                onChange={handleChange}
                required
              />
            </SignUpContainerLabel>
          </div>
          <SignUpContainerButton type="submit">Sign Up</SignUpContainerButton>
        </SignUpnContainerForm>
        {message && <p>{message}</p>}
      </SignUpContainer>
    </App>
  );
}

export default SignUp;
