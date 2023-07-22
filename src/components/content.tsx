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
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { api } from "~/utils/api";

function Content() {
  const user = useUser();
  const { data } = api.leave.getAll.useQuery();

  return (
    <div>
      <div>
        <div>
          <div className="bg-white-50 mb-4 flex h-24 flex-col p-6">
            <div className="text-black-400 dark:text-white-500 text-lg font-semibold md:text-2xl">
              Hello {user.user?.emailAddresses[0]?.emailAddress}
            </div>
            <div className="text-sm text-gray-400 dark:text-gray-500">
              Today is 19/07/2023
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
            <Overview />
          </div>
          <div className="">
            <Table>
              <TableCaption>A list of your recent leaves.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Id</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead className="text-right">Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((leave) => (
                  <TableRow>
                    <TableCell className="font-medium">{leave.id}</TableCell>
                    <TableCell>
                      {leave.startDate.toLocaleDateString()}
                    </TableCell>
                    <TableCell>{leave.endDate.toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">{leave.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* end of content */}
        </div>
      </div>
    </div>
  );
}

export { Content };
