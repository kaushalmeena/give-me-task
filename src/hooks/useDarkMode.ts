import { createSignal, onMount } from "solid-js";
import { fetchDarkMode, storeDarkMode } from "../utils";

const [darkMode, setDarkMode] = createSignal(false);

const useDarkMode = () => {
  const changeDarkClass = (val: boolean) => {
    if (val) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const changeDarkMode = (val: boolean) => {
    changeDarkClass(val);
    setDarkMode(val);
    storeDarkMode(val);
  };

  const toggleDarkMode = () => {
    changeDarkMode(!darkMode());
  };

  onMount(() => {
    const isDarkMode = fetchDarkMode();
    changeDarkMode(isDarkMode);
  });

  return { darkMode, changeDarkMode, toggleDarkMode };
};

export default useDarkMode;
