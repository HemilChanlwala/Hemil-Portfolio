import { useEffect, useState } from "react";

const STORAGE_KEY = "hemil-portfolio-visitors";

export function resetVisitorCount() {
  try {
    localStorage.setItem(STORAGE_KEY, "0");
  } catch (e) {
    // ignore in non-browser environments
  }
}

export function setVisitorCount(value) {
  try {
    localStorage.setItem(STORAGE_KEY, String(Number(value) || 0));
  } catch (e) {
    // ignore in non-browser environments
  }
}

// Convenience for dev use: call `resetVisitorCount()` from browser console.
if (typeof window !== "undefined") {
  window.resetVisitorCount = resetVisitorCount;
  window.setVisitorCount = setVisitorCount;
}

export function useVisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) || "1247", 10);
    const newCount = stored + 1;
    localStorage.setItem(STORAGE_KEY, String(newCount));
    setCount(newCount);
  }, []);

  return count;
}
