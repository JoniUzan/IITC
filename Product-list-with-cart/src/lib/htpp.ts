import { CartItem } from "@/components/self-made/Cart";
import { Product } from "@/pages/ProductsPage";
import axios from "axios";
import { QueryClient } from "react-query";

type AddToCartVariables = {
  product: CartItem;
  updatedProduct: Product;
  id: string;
};

const baseURL = "http://localhost:3000/";
export const queryClient = new QueryClient();
export async function getProducts() {
  let products;
  try {
    const response = await axios.get(baseURL + "products");
    products = response.data;
  } catch (error) {
    console.error("getProducts : error fetching products", error);
  }
  if (products) {
    return products;
  }
}

export async function updateProduct({ newProduct }: { newProduct: Product }) {
  try {
    await axios.patch(`${baseURL}products/${newProduct.id}`, newProduct);
    console.log("updateProduct: product updatetd on  successfully");
  } catch (error) {
    console.error(
      "updateProduct: error while trying to update product ",
      error
    );
  }
}

export async function getCart() {
  let cart;
  try {
    const response = await axios.get(baseURL + "cart");
    cart = response.data;
  } catch (error) {
    console.error("getProducts : error fetching products", error);
  }
  if (cart) {
    return cart;
  }
}

export async function addToCart({
  product,
  updatedProduct,
  id,
}: AddToCartVariables) {
  try {
    await axios.post(baseURL + "cart", product);
    await axios.patch(`${baseURL}products/${id}`, updatedProduct);
    console.log(
      "addToCart: product added to cart successfully and updated successfully"
    );
  } catch (error) {
    console.error(
      "addToCart: error while trying to add product to cart",
      error
    );
  }
}

export async function updateCartAmount(newProduct: CartItem) {
  try {
    await axios.patch(`${baseURL}cart/${newProduct.id}`, newProduct);
    console.log("updateCartAmount: product updatetd on cart successfully");
  } catch (error) {
    console.error(
      "updateCartAmount: error while trying to update cart ",
      error
    );
  }
}

export async function deleteProduct({
  id,
  updatedProduct,
}: {
  id: string;
  updatedProduct: Product;
}) {
  try {
    await axios.delete(`${baseURL}cart/${id}`);
    await axios.patch(`${baseURL}products/${id}`, updatedProduct);
    console.log("deleteProduct: product deleted from cart successfully");
  } catch (error) {
    console.error(
      "deleteProduct: error while trying to delete product from cart ",
      error
    );
  }
}
