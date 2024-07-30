import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function Pagination({ totalPages, currentPage, changePage }) {
  return (
    <div className="flex items-center justify-center m-4">
      <button
        aria-label="First page"
        onClick={() => changePage(currentPage, 1)}
        className="border border-indigo-400 rounded p-2 m-2"
        disabled={currentPage === 1}
      >
        <ChevronDoubleLeftIcon className="size-6 text-indigo-400"></ChevronDoubleLeftIcon>
      </button>

      <button
        className="border border-indigo-400 rounded p-2 m-2"
        aria-label="Previous page"
        onClick={() => changePage(currentPage, currentPage-1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="size-6 text-indigo-400"></ChevronLeftIcon>
      </button>
      <button
        className="border border-indigo-400 rounded p-2 m-2"
        aria-label="Next page"
        onClick={() => changePage(currentPage, currentPage+1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon className="size-6 text-indigo-400"></ChevronRightIcon>
      </button>
  
      <button
        className="border border-indigo-400 rounded p-2 m-2"
        aria-label="Last page"
        onClick={() => changePage(currentPage, totalPages)}
        disabled={currentPage === totalPages}
      >
        <ChevronDoubleRightIcon className="size-6 text-indigo-400"></ChevronDoubleRightIcon>
      </button>
    </div>
  );
}
