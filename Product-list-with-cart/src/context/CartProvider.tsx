import { CartItem } from "@/components/self-made/Cart";
import {
  addToCart,
  deleteProduct,
  getCart,
  queryClient,
  updateCartAmount,
  updateProduct,
} from "@/lib/htpp";
import { Product } from "@/pages/ProductsPage";

import { createContext, useContext, ReactNode } from "react";
import { useMutation, useQuery } from "react-query";

interface CardContext {
  cart: CartItem[] | undefined;
  cartLoading: boolean;
  cartError: boolean;
  addToCartHandler: (
    product: CartItem,
    updatedProduct: Product,
    id: string
  ) => void;
  deleteProductHandler: ({
    id,
    updatedProduct,
  }: {
    id: string;
    updatedProduct: Product;
  }) => void;
  incrementHandler: (product: CartItem) => void;
  decrementMutate: (product: CartItem) => void;
  decrementHandler: (product: CartItem) => void;
}

const CartContext = createContext<CardContext | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const {
    data: cart,
    isLoading: cartLoading,
    isError: cartError,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const { mutate: updatedProductMutate } = useMutation({
    mutationFn: updateProduct,
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

  const value: CardContext = {
    cart,
    cartLoading,
    cartError,
    addToCartHandler,
    deleteProductHandler,
    incrementHandler,
    decrementMutate,
    decrementHandler,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CardContext {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
