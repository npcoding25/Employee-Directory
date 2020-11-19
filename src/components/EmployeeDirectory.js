import React, { useState, useEffect } from "react";
import axios from 'axios'
import Container from "./Container.js";
import Header from "./Header.js";
import SearchForm from "./SearchForm.js";
import Results from "./Results.js";

function UserContainer() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(function () {
    console.log("using use effect")
    searchUsers();
  }, [])


  async function searchUsers(name) {
    const users = await axios.get("https://randomuser.me/api/?results=100&nat=us")
      
    console.log(`[searchUsers]`, users.data.results)
    console.log(`[searchUsers]`, name)
    setResult(users.data.results)
  };

  function handleInputChange(event) {
    let { name, value } = event.target;
    if (name === 'search') 
    
    
    
      setSearch(value)
      const filtered = value.filter((user) => (user.name.first.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1))
      console.log("Filter", filtered)
      console.log(`[handleInputChange]`, value)
    }

  function handleFormSubmit(event) {
    console.log(`[handleFormSubmit] called`)
    event.preventDefault();
    searchUsers(search)
    console.log(`[handleFormSubmit] checking inside searchUsers`, search)
  }

  const userData = result.map(item => <Results
    first={item.name.first}
    last={item.name.last}
    image={item.picture.thumbnail}
    email={item.email}
    age={item.dob.age}
    state={item.location.state}
    city={item.location.city} />)


  return (
    <Container>
      <Header />
      <SearchForm
        value={search}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        {userData}
      </table>



    </Container>

  );
}

export default UserContainer;