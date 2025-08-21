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
    <div className="max-w-10/12 mx-auto  mt-5 py-3 ">
      <h1 className="text-4xl font-bold mb-6 text-center">{product.name}</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Image */}
        <div>
          <img
            src={product.images}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-lg mb-4"
          />
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <p className="text-gray-700"><strong>Category:</strong> {product.category}</p>
            <p className="text-gray-700"><strong>Brand:</strong> {product.brand}</p>
            <p className="text-gray-700"><strong>Price:</strong> ${product.price}</p>
            <p className="text-gray-700"><strong>Stock:</strong> {product.stock}</p>
            <p className="text-gray-700"><strong>Weight:</strong> {product.weight} kg</p>
            <p className="text-gray-700"><strong>Return Policy:</strong> {product.returnPolicy}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <img
              src={product.addedBy?.image}
              alt={product.addedBy?.name}
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="text-gray-800 font-medium">{product.addedBy?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
