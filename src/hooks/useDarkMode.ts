import { createEffect, createSignal } from "solid-js";
import { fetchDarkMode, storeDarkMode } from "../utils";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = createSignal(fetchDarkMode());

  createEffect(() => {
    const rootEl = document.body;
    if (darkMode()) {
      rootEl.classList.add("dark");
      storeDarkMode(true);
    } else {
      rootEl.classList.remove("dark");
      storeDarkMode(false);
    }
  });

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
