export default function HeroSection() {
  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Hi, my name is</p>
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Nicolas Soria</h1>
      <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-200">
        I'm a computer scientist and software engineer who loves technology, AI,
        and building elegant, useful interfaces.
      </p>
    </div>
  );
}
