import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for routing
import "./SearchBar.css";
import { AppContext } from "../store/store";

const SearchBar = () => {
  let { loading, allProducts } = useContext(AppContext);
  let [searchvalue, setsearchvalue] = useState("");
  let [showsearchdropdown, setshowsearchdropdown] = useState(false);

  const [allproducts, setallProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!loading) {
      setallProducts(allProducts);
    }
  }, [loading, allProducts]);

  useEffect(() => {
    let searchResults = allProducts
      .filter((item) =>
        item.productTitle.toLowerCase().includes(searchvalue.toLowerCase())
      )
      .slice(0, 5);
    setallProducts(searchResults);
  }, [searchvalue, allProducts]);

  useEffect(() => {
    if (searchvalue === "") {
      setallProducts(allProducts);
      setshowsearchdropdown(false);
    } else {
      setshowsearchdropdown(true);
    }
  }, [searchvalue]);

  return (
    <>
      <div className="mb-3 SearchSection">
        <label htmlFor="Searchbar" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          id="Searchbar"
          value={searchvalue}
          placeholder="Search Here"
          onChange={(e) => {
            setsearchvalue(e.target.value);
          }}
        />

        {/*SearchDropDown*/}

        {showsearchdropdown && (
          <div className="searchdropDown bg-light">
            <div className="flex justify-content-center">
              <ul className="list-unstyled">
                {allproducts.length > 0 ? (
                  allproducts.map((item, index) => (
                    <Link key={index} className="text-decoration-none" to={`/productDetail/${item.id}`}>
                      <li className="d-flex align-items-center justify-content-around" >
                        <img
                          src={item.productImgUrl}
                          alt={item.productTitle}
                          className="rounded-circle"
                        />
                        <p className="mb-0 fs-smalller">{item.productTitle}</p>
                      </li>
                    </Link>
                  ))
                ) : (
                  <li className="d-flex align-items-center justify-content-around">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                      alt="No match"
                      className="nomatchimage"
                    />
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
