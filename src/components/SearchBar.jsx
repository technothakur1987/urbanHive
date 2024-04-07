import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for routing
import "./SearchBar.css";

const SearchBar = () => {
  let [searchvalue, setsearchvalue] = useState("");
  let[showsearchdropdown, setshowsearchdropdown] = useState(false)
  const searchData = [
    {
      name: "Fashion",
      image:
        "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    },
    {
      name: "Shirt",
      image:
        "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    },
    {
      name: "Jacket",
      image:
        "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    },
    {
      name: "Mobile",
      image:
        "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    },
    {
      name: "Laptop",
      image:
        "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    },
    {
      name: "Home",
      image:
        "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    },
    {
      name: "book",
      image:
        "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    },
  ];

  let SearchResults = searchData.filter((item) =>
    item.name.toLowerCase().includes(searchvalue.toLowerCase())
  ).slice(0, 8);

  useEffect(() => {
    console.log(SearchResults);
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
            setsearchvalue(e.target.value)
             setshowsearchdropdown(true)
             e.target.value === ''? setshowsearchdropdown(false):''
          }}
        />

        {/*SearchDropDown*/}

        {
  showsearchdropdown && (
    <div className="searchdropDown bg-light">
      <div className="flex justify-content-center">
        <ul className="list-unstyled">
          {searchvalue !== "" && searchData.length !== 0 ? (
            SearchResults.length > 0 ? (
              SearchResults.map((item, index) => (
                <Link key={index} className='text-decoration-none' to="/">
                  <li className="d-flex align-items-center justify-content-around">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-circle"
                    />
                    <p className="mb-0">{item.name}</p>
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
            )
          ) : null}
        </ul>
      </div>
    </div>
  )
}


        
      </div>
    </>
  );
};

export default SearchBar;
