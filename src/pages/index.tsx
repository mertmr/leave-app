import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Sidebar } from "~/components/sidebar";
import { api } from "~/utils/api";
import { Content } from "~/components/content";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const user = useUser();

  return (
    <>
      <div>{user.isSignedIn && <Content />}</div>
      <div>{!user.isSignedIn && <div>Please sign in usign left sidebar</div>}</div>
    </>
  );
}
