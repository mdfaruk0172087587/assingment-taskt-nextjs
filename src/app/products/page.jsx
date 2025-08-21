export const dynamic = "force-dynamic";

import ProductsGrid from "./ProductsGrid"; // import client component

async function getProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <ProductsGrid products={products} /> {/* Client Component here */}
    </div>
  );
}
