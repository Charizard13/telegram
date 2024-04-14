import type { FC, PropsWithChildren, ReactNode } from "react";
import { ModeToggle } from "./theme/ModeToggle";

export interface PageProps extends PropsWithChildren {
  disclaimer?: ReactNode;
  [key: string]: any;
}

export const Page: FC<PageProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      style={{ height: "100dvh", padding: "16px", ...props.style }}
    >
      <ModeToggle />
      {children}
    </div>
  );
};
