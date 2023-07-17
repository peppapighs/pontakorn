import Link from "next/link";

const navigation = [
  { name: "About Me", href: "/about" },
  { name: "Resume", href: "/resume" },
];

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex flex-1">
          <Link href="/">
            <h1 className="rounded px-3 py-2 text-xl font-bold leading-8 text-white transition hover:ring-2 hover:ring-white">
              <span className="hidden sm:block">Pontakorn Prasertsuk</span>
              <span className="sm:hidden">Pontakorn</span>
            </h1>
          </Link>
        </div>
        <div className="flex justify-end gap-x-2 lg:gap-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded px-3 py-2 text-base font-semibold leading-7 text-white transition hover:ring-2 hover:ring-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
