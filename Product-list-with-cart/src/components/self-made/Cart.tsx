import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

import RemoveIcon from "../svg/RemoveIcon";
import { Product } from "@/pages/ProductsPage";
import CarbonIcon from "../svg/CarbonIcon";
import { useCart } from "@/context/CartProvider";
import { useNavigate } from "react-router-dom";

export interface CartItem {
  id: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface CartProps {
  products: Product[];
}

function Cart({ products }: CartProps) {
  const navigate = useNavigate();

  const {
    cart,
    cartLoading,
    cartError,

    deleteProductHandler,
  } = useCart();

  let cartContent;

  function totalPrice() {
    let totalPrice = 0;

    cart?.forEach((item: CartItem) => {
      totalPrice += item.totalPrice;
    });

    return totalPrice;
  }

  if (cartLoading) {
    cartContent = <div>...Loading</div>;
  }
  if (cartError) {
    cartContent = <div>error fetching data refresh or try again later</div>;
  }
  if (cart) {
    cartContent = (
      <div>
        <ul className="list-none">
          {cart.map((item: CartItem) => (
            <li className="py-4  border-b border-Rose-100  " key={item.name}>
              <div className="flex justify-between ">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm text-Rose-900 font-[500]">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex gap-4">
                    <p className="text-sm text-Red font-[500]">
                      {" "}
                      {item.quantity}x
                    </p>
                    <div className="flex gap-2">
                      <p className="text-sm text-Rose-400 font-[200]">
                        @ ${item.price}
                      </p>
                      <p className="text-sm text-Rose-500">
                        ${item.totalPrice}.00
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const updatedProduct = products.find((product) => {
                      return product.id === item.id;
                    });
                    console.log(updatedProduct);

                    if (updatedProduct) {
                      deleteProductHandler({
                        id: item.id,
                        updatedProduct: {
                          ...updatedProduct,
                          isOnCart: !updatedProduct.isOnCart,
                        },
                      });
                    }
                  }}
                  className="group border border-Rose-300 rounded-full p-[2px] my-5 hover:border-Rose-900 "
                >
                  <RemoveIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center py-6">
          <p className="text-sm font-[300] text-Rose-900">Order Total</p>
          <p className="text-2xl text-Rose-900 font-bold">${totalPrice()}</p>
        </div>
        <div className="flex gap-2 justify-center text-Rose-900 font-[300] text-sm bg-Rose-50 py-4 rounded-lg mb-6">
          <CarbonIcon />
          <div>
            <span>this is a</span>{" "}
            <span className="font-[500]">carbon-neutral</span>{" "}
            <span>delivery</span>
          </div>
        </div>
        <Button
          onClick={() => navigate("/cartDetails")}
          className="w-full bg-Red text-white py-6 border-none hover:text-white hover:bg-"
        >
          Confirm Order
        </Button>
      </div>
    );
  }

  return (
    <main className="w-[360px] mx-10 bg-white p-6 rounded-lg">
      <Card>
        <CardHeader className="px-0 py-4">
          <CardTitle>
            <h2 className="text-2xl text-Red font-bold">
              Your Cart({cart?.length})
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent>{cartContent}</CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}

export default Cart;
