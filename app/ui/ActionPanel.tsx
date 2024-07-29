import { PropsWithChildren, ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function ActionPanel(props: PropsWithChildren<Props>) {
  return <div>{props.children}</div>;
}