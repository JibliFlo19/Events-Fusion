import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  HomeTitle,
  HomeSlogan,
  HomeWrapper,
} from "./Home.style";

import {
  CardContainer,
  CardImg,
} from "../../Components/HomeCard/HomeCard.style";
import { Carousel } from "react-bootstrap";
import TransitionPage from "../../Components/TransitionPage/TransitionPage";

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

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <HomeWrapper>
        <HomeContainer>
          <HomeTitle>Events Fusion</HomeTitle>
          <HomeSlogan>There is no place like out of home</HomeSlogan>
        </HomeContainer>
      </HomeWrapper>

      <TransitionPage></TransitionPage>
      <CardContainer>
        <Carousel>
          {category.map((cat) => (
            <Carousel.Item
              key={cat.title}
              style={{
                cursor: "pointer",
              }}
              onClick={() => navigate(`/events`)}
            >
              <CardImg src={cat.img}></CardImg>
              {/* <ExampleCarouselImage text="First slide" /> */}
              <Carousel.Caption>
                <h3>{cat.title}</h3>
                <p>Vezi bilete la {cat.title} in orasul tau.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </CardContainer>
    </>
  );
}
export default Home;
