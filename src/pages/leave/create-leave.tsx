import { useUser } from "@clerk/nextjs";
import * as React from "react";
import { useState } from "react";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "~/components/ui/auto-form";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "~/components/ui/table";
import { toast } from "~/components/ui/use-toast";

import { api } from "~/utils/api";

const formSchema = z.object({
  reason: z
    .string({
      required_error: "Reason is required.",
    })
    .min(2, {
      message: "Reason must be at least 5 characters.",
    }),

  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export  function CreateLeave() {
  const [values, setValues] = useState<Partial<z.infer<typeof formSchema>>>({});
  const { data } = api.leave.getAll.useQuery();
  const ctx = api.useContext();
  const user = useUser();
  const createLeaveMutation = api.leave.create.useMutation({
    onSuccess: () => {
      ctx.leave.getAll.invalidate();
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    createLeaveMutation.mutate({
      startDate: data.startDate,
      endDate: data.endDate,
      reason: data.reason,
      userId: user.user!.id,
    });
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div>
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
              <TableRow key={leave.id}>
                <TableCell className="font-medium">{leave.id}</TableCell>
                <TableCell>{leave.startDate.toLocaleDateString()}</TableCell>
                <TableCell>{leave.endDate.toLocaleDateString()}</TableCell>
                <TableCell className="text-right">{leave.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <AutoForm
        formSchema={formSchema}
        values={values}
        onSubmit={(data) => onSubmit(data)}
        onValuesChange={setValues}
        fieldConfig={{}}
      >
        <AutoFormSubmit>Send now</AutoFormSubmit>
      </AutoForm>
    </div>
  );
}
