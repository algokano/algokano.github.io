import { useEffect, useState } from "react";

const format = () => {
  const d = new Date();
  return {
    time: `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`,
    date: d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
  };
};

/** Live wall-clock for the phone's status bar and lock screen. */
export function useClock() {
  const [now, setNow] = useState(format);
  useEffect(() => {
    const id = window.setInterval(() => setNow(format()), 15_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}
