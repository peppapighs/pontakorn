import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

import { PROJECTS } from "data/projects";

export default function Project() {
  return (
    <section className="w-full border-t-2 border-white py-12">
      <div className="mx-auto max-w-2xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Projects
          </h2>
          <ul className="mt-8 space-y-8">
            {PROJECTS.map((project) => (
              <li key={project.title}>
                <div className="rounded-lg bg-black p-8 ring-2 ring-white">
                  <p className="text-xl font-bold tracking-tight text-white">
                    {project.title}
                  </p>
                  <p className="mt-6 text-sm text-white">
                    {project.description}
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-normal text-white">
                      <span className="inline-block font-bold">Tech:</span>{" "}
                      {project.tech.join(" • ")}
                    </p>
                    <div className="text-sm font-normal text-white">
                      <p className="inline-block font-bold">Links:</p>{" "}
                      {project.links.map((link, index) => (
                        <p key={link.href} className="inline-block">
                          <a
                            className="inline-block hover:underline"
                            href={link.href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {link.name}
                          </a>
                          <ArrowTopRightOnSquareIcon className="-mt-1 ml-0.5 inline-block h-4 w-4" />
                          {index !== project.links.length - 1 && <> •&nbsp;</>}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
