import { Link } from "react-router-dom";
import products from "../data/products";

function Products({ addToCart }) {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />

            <h2 className="font-bold mt-3">
              {product.name}
            </h2>

            <p className="mt-2">
              Rs {product.price}
            </p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => addToCart?.(product)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>

              <Link
                to={`/product/${product.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;