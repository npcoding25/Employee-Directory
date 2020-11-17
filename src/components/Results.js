import React from "react";

function UserDetails(props) {
  return (
    <div className="text-center">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Location</th> 
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.location}</td> 
            <td>{props.email}</td>
          </tr>
        </tbody>
      </table>



      {/* <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Director(s): {props.director}</h3>
      <h3>Genre: {props.genre}</h3>
      <h3>Released: {props.released}</h3> */}
    </div>
  );
}

export default UserDetails;