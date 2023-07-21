import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { useUser } from "@clerk/nextjs";
import { Overview } from "./chart";

function Content() {
  const user = useUser();
  
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div>
          <div className="bg-white-50 flex h-24 flex-col mb-4 p-6">
            <div className="text-black-400 font-semibold text-lg md:text-2xl dark:text-white-500">
              Hello {user.user?.emailAddresses[0]?.emailAddress}
            </div>
            <div className="text-sm text-gray-400 dark:text-gray-500">
              Today is 19/07/2023
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div>
              <Card className="bg-gray-50 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-black-400 dark:text-black-500">
                    Total Leave
                  </CardTitle>
                  <CardDescription className="dark:text-black-500 text-gray-400">
                    Your total leave remaining in days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>16 Days</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="bg-gray-50 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-black-400 dark:text-black-500">
                    Total Leave
                  </CardTitle>
                  <CardDescription className="text-gray-400 dark:text-gray-500">
                    Your total leave remaining in hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>16 Days</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4">
            <Overview/>
          </div>
          {/* end of content */}
        </div>
      </div>
    </div>
  );
}

export { Content };
