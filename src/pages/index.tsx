import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUp,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Sidebar } from "~/components/sidebar";
import { api } from "~/utils/api";
import { Content } from "~/components/content";

export default function Home() {
  const { data } = api.leave.getAll.useQuery();
  console.log(data);

  return (
    <>
      <div>
        <Content />
      </div>
    </>
  );
}
