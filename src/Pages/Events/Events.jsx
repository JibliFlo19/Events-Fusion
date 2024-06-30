import useFetchEvents from "../../Components/hooks/useFetchEvents";
import {
  EventWrapContainer,
  DivFiltrare,
  TextFiltrare,
  DivCalendar,
} from "./Events.style";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import EventsWrapper from "./EventsWrapper";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Form from "react-bootstrap/Form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const { events: eventsFetch } = useFetchEvents();
  const navigate = useNavigate();

  useEffect(() => {
    if (!eventsFetch) return;

    window.scrollTo(0, 0);
    setEvents(eventsFetch);
  }, [eventsFetch]);

  useEffect(() => {
    if (!eventsFetch) return;
    let newEvents = [...eventsFetch];
    console.log(newEvents);
    if (city !== "") {
      newEvents = newEvents.filter((item) => item.city === city);
      console.log(newEvents, "test");
    }
    if (category !== "") {
      console.log(category);
      newEvents = newEvents.filter((item) => item.category === category);
    }
    if (price !== "") {
      newEvents = newEvents.filter((item) => item.price === price);
    }
    if (date !== "") {
      newEvents = newEvents.filter((item) => item.date === date);
    }
    setEvents(newEvents);
  }, [city, category, price, date, eventsFetch]);

  const handleSearchByCity = (event) => {
    const value = event.target.value;
    console.log(value);
    setCity(value);
  };

  const handleSearchByCategory = (event) => {
    const value = event.target.value;
    setCategory(value);
  };

  const handleSearchByPrice = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  const handleSearchByDate = (date) => {
    const goodDate = date
      .toLocaleDateString()
      .replace(".", "/")
      .replace(".", "/");
    setDate(goodDate);
  };

  const handleCardClick = (id) => {
    navigate(`/event/${id}`);
  };
  return (
    <>
      <DivFiltrare>
        <TextFiltrare id="TextFiltrare">Search an event by:</TextFiltrare>

        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="category" title="Category">
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => handleSearchByCategory(event)}
            >
              <option value="">Select an event category</option>
              <option value="Street Food">Street Food</option>
              <option value="Concerts">Concerts</option>
              <option value="Party">Party</option>
              <option value="Theatre">Theatre</option>
              <option value="Sport">Sport</option>
            </Form.Select>
          </Tab>
          <Tab eventKey="city" title="City">
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => handleSearchByCity(event)}
            >
              <option value="">Select a city</option>
              <option value="Bucuresti">Bucuresti</option>
              <option value="Iasi">Iasi</option>
              <option value="Sibiu">Sibiu</option>
            </Form.Select>
          </Tab>
          <Tab eventKey="price" title="Price">
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => handleSearchByPrice(event)}
            >
              <option value="">Select a price</option>
              <option value="50">50</option>
              <option value="120">120</option>
              <option value="200">200</option>
            </Form.Select>
          </Tab>
          <Tab eventKey="date" title="Date">
            <DivCalendar>
              <Calendar onChange={(date) => handleSearchByDate(date)} />
            </DivCalendar>
          </Tab>
        </Tabs>
      </DivFiltrare>
      <EventWrapContainer>
        {events.map((event, index) => (
          <EventsWrapper
            key={index}
            {...event}
            onClick={() => handleCardClick(event.id)}
          />
        ))}
      </EventWrapContainer>
    </>
  );
};

export default Events;
