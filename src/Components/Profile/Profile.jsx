import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "boxicons";
import { CardContainer, CardImg } from "../HomeCard/HomeCard.style";

import {
  UserProfileContainer,
  UserProfileTitle,
  UserProfileMail,
  LoginElementsProfile,
} from "../Profile/Profile.style";

export const category = [
  {
    title: "Party",
    img: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Concerte",
    img: "https://images.pexels.com/photos/416831/pexels-photo-416831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Teatru",
    img: "https://images.pexels.com/photos/6899928/pexels-photo-6899928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Street Food",
    img: "https://images.pexels.com/photos/1483858/pexels-photo-1483858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Sport",
    img: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Profile = () => {
  const [user, setUser] = useState(null);
  const [basketCount, setBasketCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const email = localStorage.getItem("userEmail");
        if (!email) {
          throw new Error("User email not found in localStorage");
        }

        const response = await fetch(
          `http://localhost:3001/users?email=${email}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const loggedInUser = data.find((user) => user.email === email);

        if (!loggedInUser) {
          throw new Error("User not found");
        }

        setUser(loggedInUser);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUser();
    const count = JSON.parse(localStorage.getItem("basketCount")) || 0;
    setBasketCount(count);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const email = localStorage.getItem("userEmail");
      if (email) {
        setLoading(true);
        fetch(`http://localhost:3001/users?email=${email}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            const loggedInUser = data.find((user) => user.email === email);
            if (!loggedInUser) {
              throw new Error("User not found");
            }
            setUser(loggedInUser);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const count = JSON.parse(localStorage.getItem("basketCount")) || 0;
    setBasketCount(count);
  }, []);

  // const handleLogout = () => {
  //   setUser(null);
  //   setBasketCount(0);
  //   localStorage.removeItem('userEmail');
  //   localStorage.removeItem('basketCount');
  //   navigate('/home');
  //   // window.location.reload(); // This might not be necessary
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Utilizatorul nu este găsit.</div>;
  }

  return (
    <div>
      <LoginElementsProfile>
        <UserProfileTitle>Salut, {user.name}!</UserProfileTitle>
        <UserProfileMail>Email: {user.email}</UserProfileMail>
        <UserProfileContainer>
          <box-icon name="heart" type="solid" color="#ff0000"></box-icon>
          <span>{basketCount}</span>
        </UserProfileContainer>
      </LoginElementsProfile>
      <CardContainer>
        <Carousel>
          {category.map((cat) => (
            <Carousel.Item
              key={cat.title}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/events")}
            >
              <CardImg src={cat.img}></CardImg>
              <Carousel.Caption>
                <h3>{cat.title}</h3>
                <p>Vezi bilete la {cat.title} în orașul tău.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </CardContainer>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Profile;
