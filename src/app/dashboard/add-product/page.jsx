// src/app/dashboard/add-product/page.jsx
import AddProductForm from "./AddProductForm";

export default function AddProductPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add a New Product</h1>
      <AddProductForm />
    </div>
  );
}
