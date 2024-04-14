import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Page } from "@/components/Page";

export const OrderSummaryPage: FC = () => {
  return (
    <Page className="flex flex-col gap-4 text-center">
      <div className="mx-auto  text-8xl">📝</div>
      <h1 className=" text-3xl font-bold">תודה שהזמנת</h1>
      <p className=" text-lg leading-tight">
        מספר הזמנה - <span>329734</span>
      </p>{" "}
      <p className="text-sm leading-tight">
        מרגע אישור ההזמנה המשלוח יגיע אליך תוך - 60 דקות!
      </p>
      <Badge
        variant={"outline"}
        className="px-4 py-3 mx-auto font-bold m-auto bg-green-400 border-none dark:text-gray-900"
      >
        סטטוס הזמנה - בדרך
      </Badge>
      <Button className="mt-auto">
        <Link to="/store">בצע הזמנה חדשה</Link>
      </Button>
    </Page>
  );
};
