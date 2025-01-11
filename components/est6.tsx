import React, { FC } from "react";
import { VehicleOne } from "./helper";

{
  /* Array Destructuring */
}

const Est6: React.FC<VehicleOne> = (props) => {
  const { brand, model, type, color } = props;
  const message =
    "My " + type + " is a " + color + " " + brand + " " + model + ".";
  return <div>{message}</div>;
};

export default Est6;

{
  /* Speard Opeartor */
}

// export default function Est6() {
//   const numbersOne = [1, 2, 3];
//   const numbersTwo = [4, 5, 6];
//   const numbersCombined = [...numbersOne, ...numbersTwo];
//   return <>{numbersCombined}</>;
// }


// Deleting a list in an array
// const newBlogs = blogs.filter(blog => blog.id !== id);
