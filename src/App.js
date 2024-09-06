import React from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import Review from "./Review";
import Login from "./Login";
import ContactUs from "./ContactUs";
import Gifts from "./CorporateGifts";
import AboutUs from "./AboutUs";
import NewUser from "./NewUser";
import UserDelete from "./UserDelete";
import ChangePassword from "./ChangePassword";
import NewPassword from "./NewPassword";
import UserProfile from "./UserProfile";
import OrderPlaced from "./OrderPlaced";
import OrderDetails from "./OrderDetails";
import Ditalwatches from "./DigitalWatch";
import Mixer from "./Mixer";
import MicroHome from "./MicroHome";
import VaccumHome from "./VaccumHome";
import AnalogWatch from "./AnalogWatch";
import SearchResults from "./SearchedItem";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home/>
                <BackToTop />
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/Review"
            element={
              <>
                <Header />
                <Review />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/Contact-us"
            element={
              <>
                <Header />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/Corporate-gift"
            element={
              <>
                <Header />
                <Gifts />
                <Footer />
              </>
            }
          />
          <Route
            path="/About-us"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/New-user"
            element={
              <>
                <NewUser />
              </>
            }
          />
          <Route
            path="/user-delete"
            element={
              <>
                <UserDelete />
              </>
            }
          />
          <Route
            path="/change-password"
            element={
              <>
                <ChangePassword />
              </>
            }
          />

          <Route
            path="/reset-password"
            element={
              <>
                <NewPassword />
              </>
            }
          />
          <Route
            path="/user-profile"
            element={
              <>
                <Header />
                <UserProfile />
                <Footer />
              </>
            }
          />
          <Route
            path="/order-placed"
            element={
              <>
                <OrderPlaced />
              </>
            }
          />
          <Route
            path="/order-detail"
            element={
              <>
                <Header />
                <OrderDetails />
                <Footer />
              </>
            }
          />
          <Route
            path="/digital-watches"
            element={
              <>
                <Header />
                <Ditalwatches />
                <BackToTop />
                <Footer />
              </>
            }
          />
          <Route
            path="/mixer"
            element={
              <>
                <Header />
                <Mixer />
                <BackToTop />
                <Footer />
              </>
            }
          />
          <Route
            path="/Home-appliances"
            element={
              <>
                <Header />
                <MicroHome />
                <BackToTop />
                <Footer />
              </>
            }
          />
          <Route
            path="/vaccumCleaner"
            element={
              <>
                <Header />
                <VaccumHome />
                <BackToTop />
                <Footer />
              </>
            }
          />
          <Route
            path="/analog-watch"
            element={
              <>
                <Header />
                <AnalogWatch />
                <BackToTop />
                <Footer />
              </>
            }
          />
          <Route
            path="/search-item"
            element={
              <>
                <Header />
                <SearchResults />
                <BackToTop />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
