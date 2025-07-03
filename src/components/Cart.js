// import { useSelector, useDispatch } from "react-redux";
// import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);

//   const dispatch = useDispatch();
//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <div className="text-center m-4 p-4">
//       <h1 className="text-2xl text-shadow-black"> Your Cart </h1>
//       <div className="w-6/12 m-auto">
//         <button
//           className="px-4 m-4 py-2 bg-fuchsia-200 rounded-2xl cursor-pointer"
//           onClick={handleClearCart}
//         >
//           {" "}
//           Clear Cart{" "}
//         </button>
//         <ItemList items={cartItems} />{" "}
//       </div>
//     </div>
//   );
// };

// export default Cart;

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-100 p-6 pt-24">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-4">
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4 px-2">
              <p className="text-gray-600 font-medium">
                Total Items: {cartItems.length}
              </p>
              <button
                onClick={handleClearCart}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl shadow transition duration-300"
              >
                🧹 Clear Cart
              </button>
            </div>

            <ItemList items={cartItems} />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
