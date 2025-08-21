export const dynamic = "force-dynamic";

async function getProduct(id) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${id}`, {
  cache: "no-store",
});
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.images}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />

      <p className="text-gray-700 mb-2"><strong>Category:</strong> {product.category}</p>
      <p className="text-gray-700 mb-2"><strong>Brand:</strong> {product.brand}</p>
      <p className="text-gray-700 mb-2"><strong>Price:</strong> ${product.price}</p>
      <p className="text-gray-700 mb-2"><strong>Stock:</strong> {product.stock}</p>
      <p className="text-gray-700 mb-2"><strong>Weight:</strong> {product.weight} kg</p>
      <p className="text-gray-700 mb-2"><strong>Return Policy:</strong> {product.returnPolicy}</p>
      <p className="text-gray-700 mb-4"><strong>Description:</strong> {product.description}</p>

      <div className="flex items-center gap-2 mt-4">
        <img
          src={product.addedBy?.image}
          alt={product.addedBy?.name}
          className="w-10 h-10 rounded-full border"
        />
        <p className="text-gray-700">{product.addedBy?.name}</p>
      </div>

      <p className="text-gray-500 mt-2">
        Created At: {new Date(product.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
