import { Link } from "react-router-dom";
import Button from "../elements/Button/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm  border border-gray-700 rounded-lg shadow bg-gray-800 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <Link to="/">
      <img src={image} alt="sepatu" className="p-8 rounded-full" />
    </Link>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="px-5 pb-5">
      <Link to="/">
        <h5 className="text-xl  font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-white font-thin">{children}</p>
      </Link>
    </div>
  );
};

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
