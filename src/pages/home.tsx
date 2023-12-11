import Button from "../components/Button";

function Home() {
  return (
    <section class="p-8 text-center text-gray-700 dark:text-slate-50">
      <h1 class="mt-20 text-5xl font-bold">Welcome to GiveMeTask</h1>
      <p class="mt-8 text-2xl">
        A site designed to calm you down via the power of small, captivating,
        mildly amusing and oddly satisfying activities
      </p>
      <Button variant="primary" class="mt-5">
        Let's Get Started
      </Button>
    </section>
  );
}

export default Home;
