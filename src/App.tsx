import { useRoutes } from "@solidjs/router";

import Header from "./components/Header";
import { routes } from "./routes";

const App = () => {
  const Route = useRoutes(routes);
  return (
    <div class="min-h-screen dark:bg-gray-900">
      <Header />
      <main class="mx-auto max-w-screen-xl">
        <Route />
      </main>
    </div>
  );
};

export default App;
