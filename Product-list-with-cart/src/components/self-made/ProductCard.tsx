import { Product } from "@/pages/ProductsPage";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "../ui/button";
import { CartItem } from "./Cart";
import AddToCartIcon from "../svg/AddToCartIcon";

import IncrementIcon from "../svg/IncrementIcon";
import DecrementIcon from "../svg/DecrementIcon";
import { useCart } from "@/context/CartProvider";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const {
    cart,

    addToCartHandler,

    incrementHandler,

    decrementHandler,
  } = useCart();

  const imagePath = new URL(
    `../../assets/images/${product.image.desktop}`,
    import.meta.url
  ).href;

  function totalAmountOnCart() {
    let productOnCart: CartItem | undefined;
    if (cart) {
      productOnCart = cart.find((item) => {
        return item.id === product.id;
      });
    }

    if (productOnCart) {
      return productOnCart.quantity;
    }
  }

  return (
    <div>
      <Card className=" py-4">
        <CardContent className=" ">
          <div className="relative">
            <img
              src={imagePath}
              alt={product.name}
              className="w-64 rounded-lg"
            />
            {product.isOnCart ? (
              <Button className="px-6 bg-Red text-white flex relative bottom-5 left-12 border-none hover:text-white gap-10">
                <button
                  onClick={() => {
                    let productToUpdate = cart?.find((item) => {
                      return item.id === product.id;
                    });
                    if (productToUpdate) {
                      decrementHandler(productToUpdate);
                    }
                  }}
                  className="border rounded-full py-[6px] px-[2px] hover:bg-white hover:fill-Red hover:stroke-Red  "
                >
                  <DecrementIcon />
                </button>
                {totalAmountOnCart()}
                <button
                  onClick={() => {
                    let productToUpdate = cart?.find((item) => {
                      return item.id === product.id;
                    });

                    if (productToUpdate) {
                      incrementHandler(productToUpdate);
                    }
                  }}
                  className="border rounded-full p-[3px] hover:bg-white hover:fill-Red hover:stroke-Red  "
                >
                  <IncrementIcon />
                </button>
              </Button>
            ) : (
              <Button
                onClick={() =>
                  addToCartHandler(
                    {
                      id: product.id,
                      image: product.image.desktop,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      totalPrice: product.price,
                    },
                    { ...product, isOnCart: !product.isOnCart },
                    product.id
                  )
                }
                className="px-6 flex gap-2 relative bottom-5 left-12"
              >
                <AddToCartIcon />
                Add to Cart
              </Button>
            )}
          </div>
          <p className="text-Rose-400 text-sm">{product.category}</p>
          <p className="text-Rose-900 font-[500]">{product.name}</p>
          <p className="text-Red font-[500]">${product.price}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
