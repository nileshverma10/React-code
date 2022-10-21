import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Cart = () => {
  const {cart} = useContext(CartContext);
  return (
    <nav>
      <h4>No.of item in cart:{cart}</h4>
    </nav>
  );
};
