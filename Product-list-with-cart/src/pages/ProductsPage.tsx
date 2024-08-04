import Cart, { CartItem } from "@/components/self-made/Cart";
import ProductCard from "@/components/self-made/ProductCard";
import { useCart } from "@/context/CartProvider";
import { getProducts } from "@/lib/htpp";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";

export interface Product {
  id: string;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  isOnCart: boolean;
}

function ProductsPage() {
  let productContent;

  const {
    data: products,
    isLoading: productLoading,
    isError: productError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (productLoading) {
    productContent = <div>...Loading</div>;
  }
  if (productError) {
    productContent = <div>error fetching data refresh or try again later</div>;
  }
  if (products) {
    productContent = products.map((product: Product) => {
      return <ProductCard key={product.name} product={product} />;
    });
  }

  return (
    <main className="p-10 md:flex justify-center">
      <div>
        <h2 className="text-4xl font-bold text-Rose-900 py-4">Dseserts</h2>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productContent}
        </div>
      </div>
      <div>
        <Cart products={products} />
      </div>
      <Outlet />
    </main>
  );
}

export default ProductsPage;
