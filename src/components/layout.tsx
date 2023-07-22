import Head from "next/head";
import { Sidebar } from "./sidebar";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Leave Application</title>
        <meta name="description" content="Leave Application Presentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main className="p-4 sm:ml-64">{children}</main>
    </>
  );
}
