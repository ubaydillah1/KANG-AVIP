import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu baru",
    price: "Rp 1.000.000",
    image: "/img/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit facere? Inventore et vero, dolorum similique, non molestias dicta velit amet rerum, pariatur vitae ullam! Necessitatibus ipsa numquam repellat accusantium!",
  },
  {
    id: 2,
    name: "Snickers",
    price: "Rp 1.000.000",
    image: "/img/shoes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur ",
  },
  {
    id: 3,
    name: "Sepatu baru",
    price: "Rp 1.000.000",
    image: "/img/shoes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5 flex-wrap gap-5 ">
      {products.map((product) => {
        return (
          <CardProduct>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        );
      })}
    </div>
  );
};

export default ProductPage;
