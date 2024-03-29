import { LINKS } from "data/constants";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl md:px-8">
      <div className="flex w-full flex-col items-center justify-between border-b-0 border-t-2 border-white py-8 md:flex-row md:rounded-t-lg md:border-x-2 md:px-8">
        <div className="flex justify-center md:order-2">
          {LINKS.map((link, index) => (
            <p key={link.name} className="text-base font-bold text-white">
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
        <div className="mt-6 md:order-1 md:mt-0">
          <p className="text-center text-base leading-5 text-white">
            (c) 2023 Pontakorn Prasertsuk
          </p>
        </div>
      </div>
    </footer>
  );
}
