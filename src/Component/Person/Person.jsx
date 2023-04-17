import React from "react";
import "./Person.css";

function Person(props) {
  const data = [
    {
      name: "John wick",
      gender: "Male",
      DOB: "05-04-1999",
      occupation: "Student",
      image:
        "https://images.pexels.com/photos/15190048/pexels-photo-15190048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Hella dep",
      gender: "Female",
      DOB: "20-05-1991",
      occupation: "Singer",
      image:
        "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Dua lipa",
      gender: "Female",
      DOB: "13-02-1997",
      occupation: "House Wife",
      image:
        "https://images.pexels.com/photos/10669639/pexels-photo-10669639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Justin tem",
      gender: "Male",
      DOB: "30-01-1981",
      occupation: "Bussinesman",
      image:
        "https://images.pexels.com/photos/15834035/pexels-photo-15834035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const people = data.map((person) => (
    <div className="person">
      <p>Name: {person.name}</p>
      <p>Gender: {person.gender}</p>
      <p>DOB: {person.DOB}</p>
      <p>Occupation: {person.occupation}</p>
      <div>
        <img src={person.image} alt="img" />
      </div>
    </div>
  ));

  return (
    <div>
      {people}
      {people}
      {people}
      {people}
      {people}
      {people}
      {people}
    </div>
  );
}

export default Person;
