export default function SortButton({
  sortDirection,
  onClick,
}: {
  sortDirection: "des" | "asc";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button onClick={onClick}>
      {sortDirection === "des" ? "🔽" : "🔼"}
    </button>
  );
}
