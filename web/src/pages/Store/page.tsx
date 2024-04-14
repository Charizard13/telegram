import { useState, type FC } from "react";
import { Button } from "@/components/ui/button";
import gif from "../../assets/diamond.gif";
import { PlusIcon, MinusIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Summary } from "./Summary";
import { BackButton } from "@twa-dev/sdk/react";

export type Product = {
  id: number;
  name: string;
  price: {
    quantity: number;
    price: number;
  }[];
};

const products: Product[] = [
  {
    id: 1,
    name: "ספיר",
    price: [
      {
        quantity: 1,
        price: 50,
      },
      {
        quantity: 2,
        price: 90,
      },
    ],
  },
  {
    id: 2,
    name: "רובי",
    price: [
      {
        quantity: 1,
        price: 70,
      },
      {
        quantity: 2,
        price: 120,
      },
    ],
  },
  {
    id: 3,
    name: "זהב",
    price: [
      {
        quantity: 1,
        price: 70,
      },
      {
        quantity: 2,
        price: 120,
      },
    ],
  },
];

export type Shop = {
  id: number;
  price: number;
  quantity: number;
  name: string;
}[];

export const StorePage: FC = () => {
  const [shop, setShop] = useState<Shop>([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleAddToCart = (product: Product) => {
    const item = shop.find((item) => item.id === product.id);
    setShop((prevState) => {
      if (item) {
        return prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevState,
        {
          id: product.id,
          price: product.price[0].price,
          quantity: 1,
          name: product.name,
        },
      ];
    });
  };

  const removeFromCart = (product: Product) => {
    const item = shop.find((item) => item.id === product.id);
    if (item) {
      setShop((prevState) => {
        if (item.quantity > 1) {
          return prevState.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
        return prevState.filter((item) => item.id !== product.id);
      });
    }
  };

  const getProductPrice = (product: Product) => {
    const item = shop.find((item) => item.id === product.id);
    if (item) {
      return item.quantity * item.price;
    }
    return product.price[0].price;
  };

  const getProduct = (product: Product) => {
    const item = shop.find((item) => item.id === product.id);
    if (item) {
      return item.quantity;
    }
    return 0;
  };

  if (showSummary) {
    return <Summary shop={shop} />;
  }

  return (
    <div
      style={{ height: "100vh" }}
      className="p-4 flex flex-col gap-4  text-center"
    >
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-2 items-center">
            <div className="relative">
              {getProduct(product) > 0 && (
                <Badge className="absolute top-0 right-0 border-none">
                  {shop?.find((item) => item.id === product.id)?.quantity || 0}
                </Badge>
              )}

              <img
                src={gif}
                alt="diamond"
                className="text-sm h-24 w-24 rounded-full bg-slate-100"
              />
            </div>
            <h1 className="font-bold">
              {product.name} - ₪{getProductPrice(product)}
            </h1>
            {getProduct(product) > 0 ? (
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant={"secondary"}
                  className="font-bold rounded-xl "
                  onClick={() => handleAddToCart(product)}
                >
                  <PlusIcon size={16} strokeWidth={3} />
                </Button>
                <Button
                  size="icon"
                  variant={"secondary"}
                  className="font-bold rounded-xl"
                  onClick={() => removeFromCart(product)}
                >
                  <MinusIcon size={16} strokeWidth={3} />
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                variant={"secondary"}
                className="font-bold rounded-xl w-full"
                onClick={() => handleAddToCart(product)}
              >
                הוסף
              </Button>
            )}
          </div>
        ))}
      </div>
      <BackButton onClick={() => window.history.back()} />

      {shop.reduce((acc, item) => acc + item.price * item.quantity, 0) > 0 && (
        <Button
          className=" w-full mt-auto"
          onClick={() => setShowSummary(true)}
        >
          מעבר לתשלום ₪
          {shop.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </Button>
      )}
    </div>
  );
};
