import React, {  useState } from "react";
import { mod } from "../data";

const Search = () => {
  const [search, setSearch] = useState("");

const mango = mod.filter(el => el?.name === "MANGO")

  const modSearch = mango?.filter((el) => {
    return el?.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log(modSearch);
 
  return (
    <div>
      <input
        type="text"
        placeholder="poisk"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{display: search.length ? "grid" : "none"}} className="parent">
        {modSearch?.map((el) => {
            return(
                <div>
                    <img src={el?.image} alt="" />
                    <h1>{el?.name}</h1>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Search;
