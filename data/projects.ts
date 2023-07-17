interface Project {
  title: string;
  description: string;
  tech: string[];
  links: { name: string; href: string }[];
}

export const PROJECTS: Project[] = [
  {
    title: "Curl HTTP/2 optimization",
    description:
      "A patch for Curl that improves HTTP/2 performance by reducing the number of TLS records and TCP packets sent.",
    tech: ["C", "nghttp2"],
    links: [
      { name: "GitHub", href: "https://github.com/curl/curl/pull/11420" },
    ],
  },
  {
    title: "http2-client",
    description:
      "A HTTP/2 client built with asynchronous I/O and C++20-style Coroutines with support for SSL/TLS.",
    tech: ["C++", "Boost.Asio", "nghttp2", "OpenSSL"],
    links: [
      { name: "GitHub", href: "https://github.com/peppapighs/http2-client" },
    ],
  },
  {
    title: "OpenSSL scatter/gather I/O",
    description:
      "An implementation of writev for OpenSSL that allows writing to multiple buffers in a single call to reduce overhead from constructing multiple TLS records.",
    tech: ["C", "OpenSSL"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/peppapighs/openssl/tree/writev",
      },
      {
        name: "Benchmark",
        href: "https://github.com/peppapighs/ssl-writev-benchmark",
      },
    ],
  },
  {
    title: "breakthrough-gui",
    description:
      "A web application for playing Breakthrough, a two-player abstract strategy game. The application allows users to upload their own AI and play against other users.",
    tech: ["TypeScript", "React", "Next.js", "TailwindCSS", "Ably"],
    links: [
      { name: "Website", href: "https://break.prasertsuk.com/" },
      {
        name: "GitHub",
        href: "https://github.com/peppapighs/breakthrough-gui",
      },
    ],
  },
  {
    title: "auto-clicker",
    description:
      "A GUI application for automating mouse clicks. The application sends mouse clicks to inactive windows without stealing focus.",
    tech: ["C#", ".NET", "Windows API"],
    links: [
      { name: "GitHub", href: "https://github.com/peppapighs/auto-clicker" },
    ],
  },
  {
    title: "submissions",
    description:
      "A repository for my competitive programming solutions of over 800 Olympiad-level problems from my high school years.",
    tech: ["C++"],
    links: [
      { name: "GitHub", href: "https://github.com/peppapighs/submissions" },
    ],
  },
];
