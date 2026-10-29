const paths: Record<string, string> = {
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  phone:
    "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  tick: "M5 12.5l4.5 4.5L19 7.5",
  arrow: "M5 12h14M13 6l6 6-6 6",
  tag: "M3 12V4h8l10 10-8 8L3 12ZM7.5 8.5h.01",
  note: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h6M9 16h6",
  check: "M9 11.5l2 2 4-4.5M5 4h14v16H5zM8 4V2M16 4V2",
  card: "M3 6h18v12H3zM3 10h18M7 15h4",
  chevron: "M6 9l6 6 6-6",
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
