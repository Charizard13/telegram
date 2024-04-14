import { useState, type FC } from "react";

import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import gif from "../../assets/hand.gif";
import { Page } from "@/components/Page";
const data = JSON.stringify({
  eventType: "web_app_setup_back_button",
  eventData: {
    is_visible: true,
  },
});

export const HomePage: FC = () => {
  const [_, setInputForm] = useState({});

  return (
    <Page className="flex flex-col gap-4">
      <img src={gif} alt="diamond" className="h-36 w-36 rounded-full mx-auto" />
      <h1 className="text-center text-3xl font-bold">ברוכים הבאים</h1>
      <p className="text-center text-lg leading-tight">
        עליך לבצע תהליך הרשמה
        <br /> בכדי לרכוש בחנות שלנו
      </p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>פרטיים אישיים</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 p-2">
            <Input type="text" placeholder="הקלידו שם מלא" />
            <Input type="url" placeholder="קישור לרשת החברתית שלכם" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>אימות ויזאולי</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 p-2">
            <Label htmlFor="picture">צילום תעודה מזהה</Label>
            <Input type="file" />
            <Label htmlFor="picture">אימות וידאו </Label>
            <Input type="file" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex flex-col gap-2 mt-auto">
        <Button variant={"ghost"}>
          <NavLink to="/store">דלג לבינתיים</NavLink>
        </Button>
        <Button>
          <NavLink to="/status" onClick={() => setInputForm(data)}>
            סיום ושליחה
          </NavLink>
        </Button>
      </div>
    </Page>
  );
};
