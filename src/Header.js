import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./image/everdeal.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Dropdown from "./Dropdown";
import ProfileDropdown from "./ProfileDropdown";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    const userJson = localStorage.getItem("userdetails");
    if (userJson) {
      const userData = JSON.parse(userJson);
      setUser(userData.user);
    }

    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchSuggestions = async (keyword) => {
    try {
      const response = await axios.get(
        `${process.env.APP_API_URL}/api/v1/suggestions`,
        { params: { keyword: keyword.trim() } }
      );
      setSuggestions(response.data);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching suggestions:", error.message);
    }
  };

  const handleSearch = async () => {
    if (searchKeyword.trim()) {
      try {
        const response = await axios.get(
          `${process.env.APP_API_URL}/api/v1/search`,
          { params: { keyword: searchKeyword.trim() } }
        );
        if (!response.data.watches.length && !response.data.homeAppliances.length && !response.data.cookwares.length) {
          navigate("/search-item", { state: { noResults: true } });
        } else {
          navigate("/search-item", { state: { searchResults: response.data } });
        }
      } catch (error) {
        console.error("Error fetching search results:", error.message);
        navigate("/search-item", { state: { noResults: true } });
      }
    }
  };

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
    if (e.target.value.trim()) {
      fetchSuggestions(e.target.value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchKeyword(suggestion);
    setShowSuggestions(false);
    handleSearch();
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="Logo" />
      </Link>

      <div className="header__search" ref={inputRef}>
        <input
          className="header__searchInput"
          type="text"
          value={searchKeyword}
          onChange={handleInputChange}
          onClick={() => searchKeyword && setShowSuggestions(true)}
        />
        <SearchIcon className="header__searchIcon" onClick={handleSearch} />
        {showSuggestions && suggestions.length > 0 && (
          <div className="header__suggestions">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="header__suggestion"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="header__nav">
        <Link to="/" className="header__option">
          <span className="header__Single">Home</span>
        </Link>
        <Link to="/About-us" className="header__option">
          <span className="header__Single">About Us</span>
        </Link>
        <Link to="/login">
        <div
          className="header__option"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="header__optionLineOne">
            {user ? `Hello, ${user.name}` : "Hello Guest"}
          </span>
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
          {showDropdown && (
            <div style={{ width: "20%", left: "50%", height: "auto" }} className="header__dropdown">
              <ProfileDropdown />
            </div>
          )}
        </div>
        </Link>
        <Link to="/Corporate-gift" className="header__option">
          <span className="header__optionLineOne">Corporate</span>
          <span className="header__optionLineTwo">Gifting</span>
        </Link>
        <Link to="/order-detail" className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </Link>
        <div
          className="header__option"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Product</span>
          {showDropdown && (
            <div className="header__dropdown">
              <Dropdown />
            </div>
          )}
        </div>
        <Link to="/Contact-us" className="header__option">
          <span className="header__Single">Contact Us</span>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
