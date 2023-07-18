import { LINKS } from "data/constants";
import { EXPERIENCES } from "data/experiences";

export default function About() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between px-4 sm:px-8 lg:flex-row lg:items-center lg:space-x-6">
        <div className="flex flex-1 flex-col justify-center py-24">
          <div className="max-w-2xl">
            <p className="text-xl font-bold text-white">
              Nice to meet you again!
            </p>
            <p className="mt-6 text-lg text-white">
              I&apos;m studying B.S. Computer Science at the National University
              of Singapore, specializing in Algorithm Theory and Parallel
              Computing. I was born and raised in Nonthaburi, Thailand, where I
              started my programming journey as a competitive progammer. I love
              applying my algorithm design to solve real-world problems.
            </p>
          </div>
          <div className="mt-8 flex">
            {LINKS.map((link, index) => (
              <p key={link.name} className="text-xl font-bold text-white">
                <a
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                  className="hover:underline"
                >
                  {link.name}
                </a>
                {index !== LINKS.length - 1 && <> •&nbsp;</>}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Experience
          </h2>
          <ul className="mt-8 space-y-6">
            {EXPERIENCES.map((experience, index) => (
              <li key={index}>
                <div className="rounded-lg border-2 border-white bg-black p-6">
                  <p className="text-base tracking-tight text-white">
                    {experience.title} @{" "}
                    <span className="inline-block font-bold">
                      {experience.location}
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-white">
                    {experience.duration}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
