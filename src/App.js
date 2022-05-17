import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meats/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./CartContextProvider";

function App() {
  const [isShow, setisShow] = useState(false);

  const showCartHandler = () => {
    setisShow(true);
  };

  const hiddenCartHandler = () => {
    setisShow(false);
  };

  return (
    <CartProvider>
      {isShow && <Cart onHidden={hiddenCartHandler} />}
      <Header onChange={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
