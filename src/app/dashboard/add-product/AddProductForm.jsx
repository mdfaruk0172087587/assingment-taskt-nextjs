"use client";

export default function AddProductForm() {
  return (
    <form className="space-y-4 border rounded-2xl p-6 bg-white shadow">
      <div>
        <label className="block text-sm font-medium mb-1">Product Name *</label>
        <input
          type="text"
          name="name"
          required
          placeholder="e.g. MacBook Pro"
          className="w-full border rounded-lg px-3 py-2 focus:ring focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Price *</label>
        <input
          type="number"
          name="price"
          required
          placeholder="999"
          className="w-full border rounded-lg px-3 py-2 focus:ring focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          type="url"
          name="imageUrl"
          placeholder="https://example.com/product.jpg"
          className="w-full border rounded-lg px-3 py-2 focus:ring focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          rows="4"
          placeholder="Write product details..."
          className="w-full border rounded-lg px-3 py-2 focus:ring focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 text-white px-4 py-3 hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
