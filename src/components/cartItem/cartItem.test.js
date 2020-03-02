import React from "react";
import { shallow } from "enzyme";
import CartItem from "./index";

it("expect to render cart item", () => {
  // We have to create the props we are passing to the component
  const abcd = {
    item: {
      imageUrl: "http://google.com",
      price: 1,
      name: "Nitish",
      quantity: 1
    }
  };

  expect(shallow(<CartItem item={abcd} />)).toMatchSnapshot();
});
