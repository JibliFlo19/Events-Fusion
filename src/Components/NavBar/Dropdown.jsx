import LinkNavBar from "./LinkNavBar";
import { routes } from "./NavBar";
import {
  LinkContainer,
  DropdownContainer,
  OtherNavLinks,
} from "./NavBar.style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// const [user, setUser] = useState();

function Dropdown({ functieDeApelatinDropdown }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const x = localStorage.getItem("id");

  useEffect(() => {
    setUser(x);
  }, [x]);

  const handleLogout = () => {
    setUser("");
    localStorage.clear();
    navigate(`/home`);
  };
  return (
    <DropdownContainer>
      <LinkContainer>
        {routes.map((el, index) => (
          <LinkNavBar
            key={name + index}
            title={el.title}
            href={el.href}
            functieDeApelat={functieDeApelatinDropdown}
          />
        ))}

        {user ? (
          <>
            <OtherNavLinks onClick={() => navigate(`/profile`)}>
              Profile
            </OtherNavLinks>{" "}
            <OtherNavLinks onClick={handleLogout}>Logout</OtherNavLinks>
          </>
        ) : (
          <OtherNavLinks onClick={() => navigate(`/login`)}>
            Login
          </OtherNavLinks>
        )}
      </LinkContainer>
    </DropdownContainer>
  );
}

export default Dropdown;
