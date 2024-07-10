import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { forwardRef, useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);

        return product ? acc + product.price * item.quantity : acc;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);

    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, quantity: 1 }]);
    }
  };

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const hanldeAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center p-10">
        {username}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex my-5  ">
        <div className="w-7/12 flex flex-wrap gap-5">
          <DisplayProduct
            products={products}
            handleAddToCart={handleAddToCart}
          />
        </div>
        <div className="w-5/12">
          <h1 className="text-3xl font-bold text-blue-600 mb-2 ml-5">Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <DisplayTable
              cart={cart}
              totalPrice={totalPrice}
              cartRef={cartRef}
              ref={totalPriceRef}
              products={products}
            />
          </table>
        </div>
      </div>
    </>
  );
};

const DisplayTable = forwardRef(
  ({ cart, totalPrice, cartRef, products }, ref) => {
    return (
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return product ? (
              <tr key={item.id}>
                <td>{product.title}</td>
                <td>
                  ${" "}
                  {product.price.toLocaleString("id-ID", {
                    style: "decimal",
                    currency: "USD",
                  })}
                </td>
                <td>{item.quantity}</td>
                <td>
                  ${" "}
                  {(item.quantity * product.price).toLocaleString("id-ID", {
                    style: "decimal",
                    currency: "USD",
                  })}
                </td>
              </tr>
            ) : null;
          })}
        <tr ref={ref}>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>
              ${" "}
              {totalPrice.toLocaleString("id-ID", {
                style: "decimal",
                currency: "USD",
              })}
            </b>
          </td>
        </tr>
      </tbody>
    );
  }
);

const DisplayProduct = ({ handleAddToCart, products }) => {
  return (
    <>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                id={product.id}
                price={product.price}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          );
        })}
    </>
  );
};

export default ProductPage;
