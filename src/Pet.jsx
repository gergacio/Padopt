// import React from "react"
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h2", {}, props.breed),
//     ]);
//   };

//veet get code line(12-20) and produce code line(2-8)
//we should use Pet.jsx to ask veet to do jsx transmitions apply

const Pet = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </>
  );
};

export default Pet;
