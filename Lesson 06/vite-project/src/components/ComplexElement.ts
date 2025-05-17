import React from "react"

const ComplexElement = () => {
  return (
   React.createElement('div', {}, 
    React.createElement('h2', {}, "Complex React Element"),
      React.createElement('p', {}, "createElement is a fundamental method of React JS. The main use of React. createElement is the Creation of a React component.")
   )
  )
};

export default ComplexElement;
