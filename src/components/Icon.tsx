const paths: Record<string, string> = {
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  fuel: "M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h14M15 9h2l2 2v6a1.5 1.5 0 0 0 3 0v-6l-2-2M8 7h4",
  note: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h6M9 16h6",
  users:
    "M16 19v-1.5a3.5 3.5 0 0 0-7 0V19M12.5 10.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM18 13.5a2.5 2.5 0 1 0 0-5M20.5 19v-1a3 3 0 0 0-2.5-3",
  check: "M9 11.5l2 2 4-4.5M5 4h14v16H5zM8 4V2M16 4V2",
};

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
