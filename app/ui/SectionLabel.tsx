export default function SectionLabel({
    title,
  }: {
    title: string;
  })  {
  return <h2 className="max-w-fit flex align-center justofy-center rounded-lg bg-indigo-200 p-4 my-2 text-left text-xs font-medium uppercase ">{title}</h2>;
}
