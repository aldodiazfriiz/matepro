const paths: Record<string, string> = {
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  fuel: "M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h14M15 9h2l2 2v6a1.5 1.5 0 0 0 3 0v-6l-2-2M8 7h4",
  check: "M9 11.5l2 2 4-4.5M5 4h14v16H5zM8 4V2M16 4V2",
  note: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h6M9 16h6",
  users:
    "M16 19v-1.5a3.5 3.5 0 0 0-7 0V19M12.5 10.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM18 13.5a2.5 2.5 0 1 0 0-5M20.5 19v-1a3 3 0 0 0-2.5-3",
  drop: "M12 3s-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-6-11-6-11Z",
  phone:
    "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  food: "M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 2.5-3 6h3v12",
  shower:
    "M4 20V8a4 4 0 0 1 8 0M9 8h6M11 12v1M14 12v1M17 12v1M11 16v1M14 16v1M17 16v1",
  parking: "M5 3h14v18H5zM10 17V7h3a3 3 0 0 1 0 6h-3",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  alert: "M12 3 2.5 20h19L12 3ZM12 10v4M12 17.2v.3",
  rain: "M7 15a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17 8a3.5 3.5 0 0 1 0 7M8 18l-1 2.5M12 18l-1 2.5M16 18l-1 2.5",
  shield: "M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3ZM9 12l2 2 4-4.5",
  truck:
    "M2 6h11v10H2zM13 9h4l3 3.5V16h-7M5.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  bus: "M4 17V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11ZM4 11h16M12 4v7M7 20v-3M17 20v-3M7.5 14h1M15.5 14h1",
  digger:
    "M3 15h10v4H3zM5 15v-4h5l2 4M12 11l4-6 4 3-2 5M18 13h3M4 21h8",
  drive: "M8 3 4 21M16 3l4 18M12 4v2M12 10v3M12 17v3",
  store: "M4 9v11h16V9M3 4h18l-1 5H4L3 4ZM9 20v-6h6v6",
  bin: "M5 7h14l-1.5 13h-11L5 7ZM3 7h18M9 4h6M10 11v5M14 11v5",
  home: "M4 11 12 4l8 7M6 9.5V20h12V9.5M10 20v-5h4v5",
  spray: "M8 9h6v12H8zM9 9V6h4v3M13 6h2M18 4l2-1M18 7h3M18 10l2 1",
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
