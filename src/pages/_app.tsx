import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-base-300 ">
      <div className="flex justify-center">
        <ul className="menu m-5 menu-horizontal bg-base-200 rounded-box">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
