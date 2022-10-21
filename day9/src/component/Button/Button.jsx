import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Button = () => {
  const { handleChange } = useContext(CartContext);
  return <button onClick={() => handleChange(1)}> Add to Cart</button>;
};
