export default function Hero({ ...props }) {
  return (
    <main {...props}>
      <div className="mx-auto max-w-2xl px-4">
        <div className="rounded-lg border-2 border-white bg-black p-8">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            $ pontakorn --help
          </h1>
          <p className="mt-6 text-base text-white">
            I&apos;m Pontakorn, a Computer Science undergrad based in Singapore.
            I currently work as a Software Developer Intern at{" "}
            <a
              className="inline-block font-bold hover:underline"
              href="https://drw.com"
              rel="noreferrer"
              target="_blank"
            >
              DRW
            </a>
            , where I build high-performance, low-latency trading systems.
          </p>
          <div className="mt-6 text-center">
            <p className="text-sm text-white">&lt; Scroll down! &gt;</p>
          </div>
        </div>
      </div>
    </main>
  );
}
