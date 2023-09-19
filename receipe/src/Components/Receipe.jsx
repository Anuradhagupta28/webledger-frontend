import "./Receipe.css";
import React, { useEffect, useState } from 'react';

function Receipe() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);
  useEffect(() => {
    fetch('https://natural-beauty-json2.onrender.com/product')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
     
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      updatedCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Send a PATCH request to update the product quantity on the server
    updateProductQuantity(product.id, existingProduct ? existingProduct.quantity : 1);
// console.log("updatedCart",updatedCart)
    setCart(updatedCart);
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      if (newQuantity === 0) {
        const productIndex = updatedCart.findIndex((item) => item.id === productId);
        if (productIndex !== -1) {
          updatedCart.splice(productIndex, 1);
        }
      }
      // Send a PATCH request to update the product quantity on the server

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      updateProductQuantity(productId, newQuantity);
      console.log("updatedCart2",updatedCart)
     
      setCart(updatedCart);
    }
    
  };

  // Function to send a PATCH request to update the product quantity on the server
  const updateProductQuantity = (productId, newQuantity) => {
    fetch(`https://natural-beauty-json2.onrender.com/product/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Handle the successful response, if needed
      })
      .catch((error) => console.error('Error updating product quantity:', error));
  };

  return (
    <div className="product-page">
         <div >
      {/* <h2>In the spotlight</h2> */}
      <img
        id="imagefirst"
        src="https://www.linkpicture.com/q/chocolate_1.png"
        alt="image2"
      />
    </div>
      <h2>Receipe & Foods</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.Image} alt={product.Name} />
            <h2>{product.Name}</h2>
            <p>Summary : {product.Weight}</p>
           
            {cart.some((item) => item.id === product.id) ? (
              <div className="cart-controls">
                <button
                  onClick={() =>
                    updateQuantity(
                      product.id,
                      cart.find((item) => item.id === product.id).quantity - 1
                    )
                  }
                >
                  -
                </button>
                <span>{cart.find((item) => item.id === product.id).quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(
                      product.id,
                      cart.find((item) => item.id === product.id).quantity + 1
                    )
                  }
                >
                  +
                </button>
              </div>
            ) : (
              <button className="buttonadd"onClick={() => addToCart(product) }>Add to cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Receipe;