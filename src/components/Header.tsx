import { Link } from "@solidjs/router";
import { Show } from "solid-js";
import useDarkMode from "../hooks/useDarkMode";

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header class="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full border-b border-slate-900/10 bg-gray-50 backdrop-blur dark:border-slate-50/[0.06] dark:bg-slate-900">
      <div class="mx-auto flex max-w-screen-xl items-center p-4">
        <Link href="/" class="flex items-center hover:opacity-60">
          <svg
            class="h-8 fill-slate-900 dark:fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z" />
            <path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z" />
          </svg>
          <span class="ml-2 text-xl font-bold text-slate-900 dark:text-white">
            GiveMeTask
          </span>
        </Link>
        <nav class="mx-8 flex grow justify-end gap-5 text-slate-900 dark:text-white max-sm:hidden">
          <Link href="/tasks" class="hover:opacity-60">
            Tasks
          </Link>
          <Link href="/report" class="hover:opacity-60">
            Report
          </Link>
        </nav>
        <button onClick={toggleDarkMode}>
          <Show when={darkMode()}>
            <svg
              class="h-6 text-slate-900 hover:opacity-60 dark:text-white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </Show>
          <Show when={!darkMode()}>
            <svg
              class="h-6 text-slate-900 hover:opacity-60 dark:text-white"
              viewBox="0 0 512 512"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 256C32 132.2 132.3 32 255.8 32c11.36 0 29.7 1.668 40.9 3.746 9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3 9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480 132.1 480 32 379.6 32 256z" />
            </svg>
          </Show>
        </button>
        <Link
          class="ml-2 hover:opacity-60"
          href="https://github.com/kaushalmeena/give-me-task"
        >
          <svg
            class="h-6 fill-slate-900 dark:fill-white"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
