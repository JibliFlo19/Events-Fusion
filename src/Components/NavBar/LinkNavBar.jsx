// import { Link } from "react-router-dom";
import { LinkNavStyle } from "./NavBar.style";

function LinkNavBar({ title, href, functieDeApelare }) {
  //   const { title, href } = props; //Se face distract

  return (
    <>
      <LinkNavStyle onClick={() => functieDeApelare(title)} to={href}>
        {title}
        {/* <Link to={"/home"}> Vezi ca merge</Link> */}
      </LinkNavStyle>
    </>
  );
}
export default LinkNavBar;
