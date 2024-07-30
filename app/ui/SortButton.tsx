import {

  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
export default function SortButton({
  sortDirection,
  onClick,
}: {
  sortDirection: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button onClick={onClick} className="border border-indigo-400 rounded p-2 m-2">
      {sortDirection === "des" ? <ChevronDownIcon className="size-6 text-indigo-400"></ChevronDownIcon> : <ChevronUpIcon className="size-6 text-indigo-400"></ChevronUpIcon>}
    </button>
  );
}
