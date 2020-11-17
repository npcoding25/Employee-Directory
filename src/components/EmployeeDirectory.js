import React, { useState, useEffect } from "react";
import Container from "./Container.js";
import Header from "./Header.js";
import SearchForm from "./SearchForm.js";
import Results from "./Results.js";
import API from "../utils/API.js";

function UserContainer() {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

  // add the searchMovies to run as soon as this component is mounted in DOM

  useEffect( function(){
    searchUsers("");
  }, [])
  
  
  async function searchUsers( query ){
    const res = await API.getUsers(query)
    setResult( res.data )
  };

  function handleInputChange( event ){
    console.log( `[handleInputChange] called`)
    const { name, value }= event.target;
    if( name==='search' )
      setSearch( value )

  }

  function handleFormSubmit( event ){
    event.preventDefault();
    searchUsers( search )

  }

  return (
    <Container>
      <Header />
        <Results>
          name={result.name}
          location={result.location}
          email={result.email}
        </Results>
        <SearchForm
          value={search}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />

    </Container>
   
  );
}

export default UserContainer;