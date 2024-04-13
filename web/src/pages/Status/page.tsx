import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export const StatusPage: FC = () => {
  return (
    <div className="p-4 flex flex-col gap-4" style={{ height: "100dvh" }}>
      <div className="mx-auto text-center text-8xl">📝</div>
      <h1 className="text-center text-3xl font-bold">תודה שנרשמת</h1>
      <p className="text-center text-lg leading-tight">
        טופס ההרשמה נשלח בהצלחה.
        <br />
        המתן לעדכון בסטטוס{" "}
      </p>
      <Badge
        variant={"outline"}
        className="px-4 py-3 mx-auto font-bold m-auto bg-yellow-400 border-none"
      >
        ממתין לאישור
      </Badge>
      <Button className="mt-auto">
        <Link to="/home">המשך לבינתיים</Link>
      </Button>
    </div>
  );
};
