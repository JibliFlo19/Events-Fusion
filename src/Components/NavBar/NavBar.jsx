import { useEffect, useState } from "react";
import LinkNavBar from "./LinkNavBar";
import Dropdown from "./Dropdown";
import {
  Logo,
  NavBarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
  OtherNavLinks,
} from "./NavBar.style";
import { List, X } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";

export const routes = [
  { title: "Home", href: "home" },
  { title: "Events", href: "events" },
  { title: "Contacts", href: "contacts" },
  // { title: "Login", href: "Login" },
];

function NavBar() {
  const [user, setUser] = useState();
  const size = useWindowSize();
  const [showHamburger, setShowHamburger] = useState(false);
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const navigate = useNavigate();
  const [scrolly, setScrolly] = useState(window.scrollY);

  const x = localStorage.getItem("id");

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  useEffect(() => {
    window.onscroll = () => {
      setScrolly(window.scrollY);
    };
    setUser(x);
  }, [x]);

  useEffect(() => {
    if (size.width <= 820) setShowHamburger(true);
    else setShowHamburger(false);
  }, [size.width]);

  const handleClick = (titlu) => {
    console.log("Esti pe titlul ", titlu);
  };

  // const handleLogout = (user) => {
  // localStorage.removeItem('user');
  // setId(null);};
  const handleLogout = () => {
    setUser("");
    localStorage.clear();
    navigate("/home");
  };
  console.log(user);
  const HamburgerMenu = () => {
    return (
      <>
        <ButtonDropdown onClick={() => handleDisplayDropdown()}>
          {!displayDropdown ? <List size={40} /> : <X size={40} />}
        </ButtonDropdown>
        {displayDropdown && (
          <Dropdown functieDeApelatinDropdown={handleClick} />
        )}
      </>
    );
  };

  return (
    <NavBarContainer
      style={{
        backgroundColor: scrolly === 0 ? "transparent" : "white",
      }}
    >
      <Logo src="/Logo.png" />
      {/* <InputNavBar /> */}
      <LinkContainerDesktop>
        {routes.map((el, index) => (
          <LinkNavBar
            key={index}
            title={el.title}
            href={el.href}
            functieDeApelare={handleClick}
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
      </LinkContainerDesktop>
      {showHamburger && <HamburgerMenu />}
    </NavBarContainer>
  );
}
export default NavBar;
