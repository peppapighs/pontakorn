export default function Hero({ ...props }) {
  return (
    <main {...props}>
      <div className="mx-auto max-w-2xl px-4">
        <div className="rounded-lg border-2 border-white bg-black p-8 shadow-xl">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            $ pontakorn --help
          </h1>
          <p className="mt-6 text-base text-white">
            I&apos;m Pontakorn, a Computer Science undergrad based in Singapore.
            I previously worked as a Software Engineer Intern at{" "}
            <span className="inline-block font-bold">Jane Street</span> &{" "}
            <span className="inline-block font-bold">DRW</span>, where I build
            high-performance, low-latency trading systems.
          </p>
          <div className="mt-6 text-center">
            <a href="#projects" className="text-sm text-white hover:underline">
              &lt; Scroll down! &gt;
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
