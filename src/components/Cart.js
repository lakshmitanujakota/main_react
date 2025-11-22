import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div classname="text-center m-4 p-4">
      <h1 className=""> Cart</h1>
      <div>
        <button
          className="bg-black p-2 m-2 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length ==0 && <h2> Cart is empty. Add Items to the Cart.</h2>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
