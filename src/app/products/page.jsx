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
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">All Products</h1>
      <p className="text-center text-gray-600 mb-6 max-w-xl mx-auto">
    Browse through all our amazing products carefully selected for you. 
    Find your favorite items, check prices, and see details before making a purchase.
  </p>
     <div className="max-w-10/12 mx-auto">
       <ProductsGrid products={products} /> 
      </div>{/* Client Component here */}
    </div>
  );
}
