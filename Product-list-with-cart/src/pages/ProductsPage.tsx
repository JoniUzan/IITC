import Cart, { CartItem } from "@/components/self-made/Cart";
import ProductCard from "@/components/self-made/ProductCard";
import {
  addToCart,
  deleteProduct,
  getCart,
  getProducts,
  queryClient,
  updateCartAmount,
} from "@/lib/htpp";
import { useMutation, useQuery } from "react-query";

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

  const {
    data: cart,
    isLoading: cartLoading,
    isError: cartError,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const { mutate } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const { mutate: incrementMutate } = useMutation({
    mutationFn: updateCartAmount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const { mutate: decrementMutate } = useMutation({
    mutationFn: updateCartAmount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  function addToCartHandler(
    product: CartItem,
    updatedProduct: Product,
    id: string
  ) {
    mutate({ product, updatedProduct, id });
  }

  function deleteProductHandler({
    id,
    updatedProduct,
  }: {
    id: string;
    updatedProduct: Product;
  }) {
    deleteMutate({ id, updatedProduct });
  }

  function incrementHandler(product: CartItem) {
    incrementMutate({
      ...product,
      quantity: product.quantity + 1,
      totalPrice: product.totalPrice + product.price,
    });
  }
  function decrementHandler(product: CartItem) {
    if (product.quantity > 1) {
      decrementMutate({
        ...product,
        quantity: product.quantity - 1,
        totalPrice: product.totalPrice - product.price,
      });
    }
  }

  if (productLoading) {
    productContent = <div>...Loading</div>;
  }
  if (productError) {
    productContent = <div>error fetching data refresh or try again later</div>;
  }
  if (products) {
    productContent = products.map((product: Product) => {
      return (
        <ProductCard
          addToCartHandler={addToCartHandler}
          key={product.name}
          product={product}
          cart={cart}
          incrementHandler={incrementHandler}
          decrementHandler={decrementHandler}
        />
      );
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
        <Cart
          cart={cart}
          cartLoading={cartLoading}
          cartError={cartError}
          deleteProductHandler={deleteProductHandler}
          products={products}
        />
      </div>
    </main>
  );
}

export default ProductsPage;
