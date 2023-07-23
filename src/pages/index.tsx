import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Sidebar } from "~/components/sidebar";
import { api } from "~/utils/api";
import { Content } from "~/components/content";

export default function Home() {

  return (
    <>
      <div>
        <Content />
      </div>
    </>
  );
}
