import React, { useState } from "react";

function ProductManager() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, { ...form, id: Date.now() }]);
    setForm({ name: "", price: "", category: "" });
  };

  return (
    <div className="product-app">
      <h1>Product Management</h1>
      <p className="subtitle">Add and manage your products</p>

      <form onSubmit={handleSubmit} className="product-form">
        <input name="name" placeholder="Product Name"
          value={form.name} onChange={handleChange} required />

        <input name="price" type="number" min="0.01" step="0.01"
          placeholder="Price (₹)" value={form.price}
          onChange={handleChange} required />

        <select name="category" value={form.category}
          onChange={handleChange} required>
          <option value="">Select Category</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Accessories</option>
          <option>Other</option>
        </select>

        <button type="submit">+ Add Product</button>
      </form>

      <h2>Product List ({products.length})</h2>

      <div className="product-list">
        {products.length === 0 ? (
          <p className="empty">No products added yet.</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <strong>₹{product.price}</strong>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductManager;