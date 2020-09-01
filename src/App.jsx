import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "react-infinite-calendar/styles.css";
import "./resources/css/App.css";
import "./resources/css/bootstrap.min.css";
import "./resources/css/default.css";
import "./resources/css/plugin.css";
import "./resources/css/style.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Rooms from "./components/RoomGrid/Room";
import RoomsContextProvider from "./context/RoomsContext";
import Forgot from "./components/Forgot";
import Details from "./components/RoomDetails/Details";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CheckAvailability from "./components/Booking/CheckAvailability";
import SelectRoom from "./components/Booking/SelectRoom";
import Restaurant from "./components/Restaurant/Restaurant";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout/Layout";
import Booking from "./components/Booking/Booking";
import Confirmation from "./components/Booking/Confirmation";
import PriceContextProvider from "./context/PriceContext";
const App = () => {
  document.title = "Hotux | Travellers Choice";
  return (
    <PriceContextProvider>
      <RoomsContextProvider>
        <BrowserRouter>
          <div style={{ position: `relative` }}>
            <Layout>
              <Route exact component={Home} path="/" />
              <Route component={Home} path="/home" />
              <Route component={Restaurant} path="/restaurant" />
              <Route component={About} path="/about" />
              <Route component={Services} path="/services" />
              <Route exact component={Rooms} path="/rooms" />
              <Route component={Forgot} path="/forgot" />
              <Route component={Login} path="/login" />
              <Route component={Signup} path="/signup" />
              <Route component={Details} path="/rooms/:roomId" />
              <Route
                component={CheckAvailability}
                path="/bookings/check_availability"
              />
              <Route component={SelectRoom} path="/bookings/select_room" />
              <Route component={Contact} path="/contact" />
              <Route component={Booking} path="/bookings/booking/:bookedRoom" />
            </Layout>
          </div>
        </BrowserRouter>
      </RoomsContextProvider>
    </PriceContextProvider>
  );
};

export default App;
