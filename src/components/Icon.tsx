const paths: Record<string, string> = {
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  phone:
    "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  tick: "M5 12.5l4.5 4.5L19 7.5",
  arrow: "M5 12h14M13 6l6 6-6 6",
  users:
    "M16 19v-1.5a3.5 3.5 0 0 0-7 0V19M12.5 10.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM18 13.5a2.5 2.5 0 1 0 0-5M20.5 19v-1a3 3 0 0 0-2.5-3",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  tag: "M3 12V4h8l10 10-8 8L3 12ZM7.5 8.5h.01",
  note: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h6M9 16h6",
  check: "M9 11.5l2 2 4-4.5M5 4h14v16H5zM8 4V2M16 4V2",
  card: "M3 6h18v12H3zM3 10h18M7 15h4",
  chevron: "M6 9l6 6 6-6",
  facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  instagram:
    "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17.5 6.5h.01",
  youtube:
    "M6.5 5h11A3.5 3.5 0 0 1 21 8.5v7a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 15.5v-7A3.5 3.5 0 0 1 6.5 5ZM10 9.5v5l4.5-2.5L10 9.5Z",
  tiktok:
    "M16 3c.5 2.5 2 4 5 4.5V11c-2 0-3.7-.6-5-1.6V16a6 6 0 1 1-6-6v3.6a2.5 2.5 0 1 0 2.5 2.5V3H16Z",
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
