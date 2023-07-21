import Head from "next/head";
import { Sidebar } from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Leave Application</title>
        <meta name="description" content="Leave Application Presentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
