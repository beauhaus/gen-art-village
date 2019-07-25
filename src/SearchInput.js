import React, { useState } from "react";
import styled from "styled-components";

const StyledSearchForm = styled.div`
  border: 2px solid goldenrod;
  width: 90vw;
  max-width: 960px;
  height: 90vh;
`;
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("bread");
  return (
    <StyledSearchForm>
      <form>
        <label htmlFor="searchTerm">
          searchTerm
          <input
            id="searchTerm"
            value={searchTerm}
            placeholder={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </label>
        <button>Search</button>
      </form>
    </StyledSearchForm>
  );
};

export default SearchInput;
