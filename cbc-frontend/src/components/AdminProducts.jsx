import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ productId: "", productName: "", description: "", lastPrice: "", stock: "", images: [] });
  const token = useSelector((state) => state.user.token);

  const fetchProducts = () => {
    axios.get("http://localhost:3000/api/products/")
      .then(res => setProducts(res.data))
      .catch(() => setProducts([]));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = e => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/products/", form, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        setForm({ productId: "", productName: "", description: "", lastPrice: "", stock: "", images: [] });
        fetchProducts();
      });
  };

  const handleDelete = id => {
    axios.delete(`http://localhost:3000/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => fetchProducts());
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <form onSubmit={handleAddProduct} className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-pink-50 p-4 rounded">
        <input name="productId" value={form.productId} onChange={handleChange} placeholder="Product ID" className="p-2 border rounded" required />
        <input name="productName" value={form.productName} onChange={handleChange} placeholder="Product Name" className="p-2 border rounded" required />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="p-2 border rounded" required />
        <input name="lastPrice" value={form.lastPrice} onChange={handleChange} placeholder="Price" type="number" className="p-2 border rounded" required />
        <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" type="number" className="p-2 border rounded" required />
        <input name="images" value={form.images} onChange={e => setForm({ ...form, images: [e.target.value] })} placeholder="Image URL" className="p-2 border rounded" />
        <button type="submit" className="bg-pink-500 text-white rounded px-4 py-2 col-span-1 md:col-span-2">Add Product</button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr className="bg-pink-100">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Stock</th>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id} className="border-t">
                <td className="py-2 px-4">{product.productId}</td>
                <td className="py-2 px-4">{product.productName}</td>
                <td className="py-2 px-4">{product.description}</td>
                <td className="py-2 px-4">${product.lastPrice}</td>
                <td className="py-2 px-4">{product.stock}</td>
                <td className="py-2 px-4">
                  {product.images && product.images.length > 0 && (
                    <img src={product.images[0]} alt="product" className="w-12 h-12 object-cover rounded" />
                  )}
                </td>
                <td className="py-2 px-4">
                  <button onClick={() => handleDelete(product._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminProducts;