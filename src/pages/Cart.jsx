function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        Cart Page
      </h1>

      {cartItems.length === 0 ? (
        <p className="mt-4">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border-b py-4"
            >
              <h2>{item.name}</h2>
              <p>Price: Rs {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>
                Subtotal: Rs{" "}
                {item.price * item.quantity}
              </p>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-6">
            Total: Rs {totalPrice}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;