import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="p-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-80"
      />

      <h1 className="text-4xl font-bold mt-4">
        {product.name}
      </h1>

      <p className="mt-3">
        {product.description}
      </p>

      <h2 className="text-2xl mt-3">
        ${product.price}
      </h2>

      <button
        className="bg-green-500 text-white px-6 py-2 rounded mt-5"
      >
        Add To Cart
      </button>

      <button
        onClick={() => navigate(-1)}
        className="ml-4 bg-gray-500 text-white px-6 py-2 rounded"
      >
        Back
      </button>
    </div>
  );
}

export default ProductDetails;