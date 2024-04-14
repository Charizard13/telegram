import { setDebug } from "@tma.js/sdk";
import { DisplayGate, SDKProvider } from "@tma.js/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { type FC, useEffect, useMemo } from "react";
import { LoaderIcon } from "lucide-react";
import { App } from "@/components/App/App.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const Err: FC<{ error: unknown }> = ({ error }) => {
  return (
    <Card className="p-4 flex flex-col items-center justify-center gap-4 m-4">
      <CardTitle>Error</CardTitle>
      <CardDescription>
        An error occurred while initializing the SDK
      </CardDescription>
      <CardContent>
        <blockquote>
          Error message:{" "}
          <code>
            {error instanceof Error ? error.message : JSON.stringify(error)}
          </code>
        </blockquote>
      </CardContent>
      <CardFooter>
        <Button onClick={() => window.location.reload()}>Reload</Button>
      </CardFooter>
    </Card>
  );
};

const Loading: FC = () => (
  <LoaderIcon className=" absolute top-1/2 left-1/2 animate-spin" />
);

export const Root: FC = () => {
  const manifestUrl = useMemo(() => {
    return new URL("tonconnect-manifest.json", window.location.href).toString();
  }, []);

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    setDebug(true);
  }, []);

  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/woltshopbot/Start",
      }}
    >
      <SDKProvider
        options={{ acceptCustomStyles: true, cssVars: true, complete: true }}
      >
        <DisplayGate error={Err} loading={Loading} initial={Loading}>
          <App />
        </DisplayGate>
      </SDKProvider>
    </TonConnectUIProvider>
  );
};
