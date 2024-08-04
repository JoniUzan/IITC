import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import ConfirmedIcon from "@/components/svg/ConfirmedIcon";
import { CartItem } from "@/components/self-made/Cart";
import { useCart } from "@/context/CartProvider";

function ProductDetailsPage() {
  const { cart } = useCart();

  const navigate = useNavigate();

  const handleDialogClose = (isOpen: boolean) => {
    if (!isOpen) {
      navigate(-1); // Navigate back one page
    }
  };

  function totalPrice() {
    let totalPrice = 0;

    cart?.forEach((item: CartItem) => {
      totalPrice += item.totalPrice;
    });

    return totalPrice.toFixed(2);
  }

 

  let cartContent;
  if (cart) {
    cartContent = (
      <div className="bg-Rose-50 p-4">
        <ul className="list-none ">
          {cart.map((item: CartItem) => (
            <li className="py-4  border-b border-Rose-100  " key={item.name}>
              <div className="flex justify-between items-center ">
                <div className="flex gap-4 items-center">
                  <div>
                    <img
                      className="w-12"
                      src={
                        new URL(
                          `../assets/images/${item.image}`,
                          import.meta.url
                        ).href
                      }
                      alt=""
                    />
                  </div>
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
                          @ ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-[500] text-Rose-500">
                  ${item.totalPrice.toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center py-6">
          <p className="text-sm font-[300] text-Rose-900">Order Total</p>
          <p className="text-2xl text-Rose-900 font-bold">${totalPrice()}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Dialog defaultOpen={true} onOpenChange={handleDialogClose}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <ConfirmedIcon />

            <DialogTitle className="text-left text-Rose-900 text-3xl font-bold">
              Oredr Confirmed
            </DialogTitle>
            <DialogDescription className="text-left text-Rose-400 text-sm">
              We hope you enjoy your food!
            </DialogDescription>
          </DialogHeader>
          {cartContent}
          <Button
            onClick={() => navigate("/cartDetails")}
            className="w-full bg-Red text-white py-6 border-none hover:text-white hover:bg-"
          >
            Start New Order
          </Button>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductDetailsPage;
