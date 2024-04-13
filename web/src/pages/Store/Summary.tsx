import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Shop } from "./page";
import gif from "../../assets/diamond.gif";
type Props = {
  shop: Shop;
};
import { HandshakeIcon, WalletMinimalIcon } from "lucide-react";
import { useTonConnectModal } from "@tonconnect/ui-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Summary = (props: Props) => {
  const { shop } = props;
  const sum = shop.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const { open } = useTonConnectModal();

  return (
    <div style={{ height: "100vh" }} className="p-4 flex flex-col gap-4">
      <Card className="flex flex-col gap-4 p-4">
        <CardTitle className="text-3xl">סיכום הזמנה</CardTitle>
        <CardDescription>
          לאחר אישור ההזמנה המשלוח יגיע אליך תוך שעה.
        </CardDescription>
        <div className="flex flex-col text-sm gap-2">
          {shop.map((product) => (
            <div key={product.id} className="flex gap-4 items-center">
              <img
                src={gif}
                alt="diamond"
                className="h-8 w-8 rounded-full bg-slate-100"
              />
              <div>x{product.quantity}</div>
              <div>{product.name}</div>

              <div className="mr-auto">₪{product.price * product.quantity}</div>
            </div>
          ))}
        </div>
        <hr />
        <Input placeholder="הוסף קוד קופון " />
        {sum > 0 && (
          <div className="text-right font-bold flex justify-between">
            <span>סה"כ לתשלום</span>
            <span>₪{sum}</span>
          </div>
        )}
      </Card>
      <div className="flex flex-col gap-2">
        <Input placeholder="כתובת למשלוח" />
        <Input placeholder="מספר טלפון" />
        <Input placeholder="הערות למשלוח" />
      </div>
      <div className="flex flex-col gap-4 p-4 items-center mt-auto">
        <Button className="w-full rounded-full" onClick={open}>
          <WalletMinimalIcon className="mx-2" height={20} />
          תשלום באמצעות טלגרם
        </Button>
        <Button variant={"outline"} className="w-full rounded-full">
          <HandshakeIcon className="mx-2" height={20} />
          תשלום באמצעות מזומן
        </Button>
      </div>
    </div>
  );
};
