import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl text-shadow-black"> Your Cart </h1>
      <div className="w-6/12 m-auto">
        <button
          className="px-4 m-4 py-2 bg-fuchsia-200 rounded-2xl cursor-pointer"
          onClick={handleClearCart}
        >
          {" "}
          Clear Cart{" "}
        </button>
        <ItemList items={cartItems} />{" "}
      </div>
    </div>
  );
};

export default Cart;
