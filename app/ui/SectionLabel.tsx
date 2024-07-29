import { PropsWithChildren, ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function SectionLabel(props: PropsWithChildren<Props>)  {
  return <h2 className="max-w-fit flex align-center justofy-center rounded-lg bg-indigo-200 p-4 my-2 text-left text-xs font-medium uppercase ">{props.children}</h2>;
}
