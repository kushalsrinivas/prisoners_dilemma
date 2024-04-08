import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="flex justify-center">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
