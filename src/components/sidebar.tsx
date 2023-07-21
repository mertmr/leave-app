"use client";

import * as React from "react";
import { ModeToggle } from "./mode-toggle";
import { RefObject, useEffect, useRef, useState } from "react";
import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function useOutsideAlerter(ref: RefObject<HTMLDivElement>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsSidebarOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const user = useUser();

  return (
    <div>
      <div className="flex justify-between">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          onClick={toggleSidebar}
          className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div></div>
        <div className="flex flex-row">
          <div className="mr-3 mt-2 ">
            <ModeToggle />
          </div>
          {user.isSignedIn && (
            <div className="mr-3 mt-2 flex items-center justify-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </div>
      <aside
        id="default-sidebar"
        ref={wrapperRef}
        className={`fixed left-0 top-0 z-40 h-screen w-64 ${
          isSidebarOpen ? "block" : "hidden md:block"
        } `}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
          <div className="flex flex-row">
            <div className="pt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64px"
                height="64px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
              >
                <path
                  d="M182.067 383.79h664.916v473.911H182.067z"
                  fill="#FCE3C3"
                />
                <path
                  d="M846.983 857.701H170.007V401.632h676.976v456.069zM189.428 838.28h638.134V421.053H189.428V838.28z"
                  fill="#300604"
                />
                <path
                  d="M850.483 861.201H166.507V398.132h683.977v463.069z m-676.976-7h669.977V405.132H173.507v449.069z m657.555-12.421H185.929V417.553h645.134V841.78z m-638.133-7h631.134V424.553H192.929V834.78z"
                  fill="#300604"
                />
                <path
                  d="M179.718 273.282h657.556v138.061H179.718z"
                  fill="#300604"
                />
                <path
                  d="M840.774 414.844H176.219V269.782h664.556v145.062z m-657.555-7h650.556V276.782H183.219v131.062z"
                  fill="#300604"
                />
                <path
                  d="M846.983 421.053H170.007V263.572h676.976v157.481z m-657.555-19.421h638.134V282.994H189.428v118.638z"
                  fill="#300604"
                />
                <path
                  d="M850.483 424.553H166.507v-164.48h683.977v164.48z m-676.976-7h669.977v-150.48H173.507v150.48z m657.555-12.421H185.929V279.494h645.134v125.638z m-638.133-7h631.134V286.494H192.929v111.638z"
                  fill="#300604"
                />
                <path
                  d="M672.215 190.225h63.426v162.87h-63.426z"
                  fill="#ED8F27"
                />
                <path
                  d="M745.351 362.806h-82.847V180.514h82.847v182.292z m-63.426-19.421h44.005v-143.45h-44.005v143.45z"
                  fill="#300604"
                />
                <path
                  d="M281.351 190.225h63.426v162.87h-63.426z"
                  fill="#ED8F27"
                />
                <path
                  d="M354.487 362.806H271.64V180.514h82.847v182.292z m-63.426-19.421h44.005v-143.45h-44.005v143.45z"
                  fill="#300604"
                />
                <path
                  d="M688.071 468.427h66.597v66.597h-66.597z"
                  fill="#B12800"
                />
                <path
                  d="M688.071 596.369h66.597v66.597h-66.597zM688.071 724.31h66.597v66.598h-66.597zM546.156 468.427h66.597v66.597h-66.597z"
                  fill="#228E9D"
                />
                <path
                  d="M546.156 596.369h66.597v66.597h-66.597z"
                  fill="#B12800"
                />
                <path
                  d="M546.156 724.31h66.597v66.598h-66.597zM404.239 468.427h66.598v66.597h-66.598z"
                  fill="#228E9D"
                />
                <path
                  d="M404.239 596.369h66.598v66.597h-66.598z"
                  fill="#B12800"
                />
                <path
                  d="M404.239 724.31h66.598v66.598h-66.598zM262.323 596.369h66.598v66.597h-66.598z"
                  fill="#228E9D"
                />
                <path
                  d="M262.323 724.31h66.598v66.598h-66.598z"
                  fill="#B12800"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between gap-2 pl-6 pt-6 text-2xl font-semibold">
              LASS
            </div>
          </div>
          <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">
                  Request For a Leave
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">
                  Notifications
                </span>
                <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            {!user.isSignedIn && (
              <li>
                <a
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    <div>{!user.isSignedIn && <SignInButton />}</div>
                  </span>
                  <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </aside>
      {/* )} */}
    </div>
  );
}

export { Sidebar };
