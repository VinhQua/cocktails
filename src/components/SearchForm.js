import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const searchValue = useRef("");
  return (
    <section className="section search">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
