import { createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  return <CartContext.Provider value={0}>{children}</CartContext.Provider>;
};
// export default CartContext;
