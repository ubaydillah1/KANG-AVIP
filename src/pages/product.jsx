import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Sepatu baru",
    price: 1000000,
    image: "/img/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit facere? Inventore et vero, dolorum similique, non molestias dicta velit amet rerum, pariatur vitae ullam! Necessitatibus ipsa numquam repellat accusantium!",
  },
  {
    id: 2,
    name: "Snickers",
    price: 500000,
    image: "/img/shoes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur ",
  },
  {
    id: 3,
    name: "Sepatu baru",
    price: 700000,
    image: "/img/shoes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);

        return acc + product.price * item.quantity;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
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

  return (
    <>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center p-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex my-5  ">
        <div className="w-4/6 flex flex-wrap gap-5">
          <DisplayProduct handleAddToCart={handleAddToCart} />
        </div>
        <div className="w-2/6">
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
            <DisplayTable cart={cart} totalPrice={totalPrice} />
          </table>
        </div>
      </div>
    </>
  );
};

const DisplayTable = ({ cart, totalPrice }) => {
  return (
    <tbody>
      {cart.map((item) => {
        const product = products.find((product) => product.id === item.id);
        return (
          <tr key={item.id}>
            <td>{product.name}</td>
            <td>
              Rp{" "}
              {product.price.toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </td>
            <td>{item.quantity}</td>
            <td>
              Rp{" "}
              {(item.quantity * product.price).toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </td>
          </tr>
        );
      })}
      <tr>
        <td colSpan={3}>
          <b>Total Price</b>
        </td>
        <td>
          <b>
            Rp{" "}
            {totalPrice.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </b>
        </td>
      </tr>
    </tbody>
  );
};

const DisplayProduct = ({ handleAddToCart }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
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
