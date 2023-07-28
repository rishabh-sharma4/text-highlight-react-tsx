import React, { useContext } from "react";
import { AppContext } from "../App";

const Searchbar = () => {
  const { searchVal, setSearchVal, setHighlightText }:any = useContext(AppContext);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value);
    setHighlightText(false);
  };
  const onSearch = (event: React.MouseEvent<HTMLElement>) => {
    setHighlightText(true);
  };
  return (
    <>
      <input type="search" value={searchVal} onChange={onChangeHandler} />
      <input type="submit" value="Search" onClick={onSearch} />
      <h3>Searched Value: {searchVal}</h3>
    </>
  );
};

export default Searchbar