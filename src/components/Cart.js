import { useSelector } from "react-redux";
import { clearCart } from "../util/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="flex m-auto justify-end">
      <button
            className="p-3 m-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
      </div>
      <div className="w-6/12 m-auto">
        <div className="flex justify-end mb-4">
         
        </div>
        {cartItems?.length === 0 && (
          <h1 className="text-lg text-gray-500">Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems} display={false} />
      </div>
    </div>
  );
};

export default Cart;
