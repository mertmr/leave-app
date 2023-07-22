import { useState, useEffect } from "react";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "~/components/ui/auto-form";
import { DateRangePicker } from "~/components/ui/date-range-picker";
import { toast } from "~/components/ui/use-toast";

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

export default function Index() {
  const [values, setValues] = useState<Partial<z.infer<typeof formSchema>>>({});

  useEffect(() => {
    console.log("Values", values);
  }, [values]);

  function onSubmit(data: z.infer<typeof formSchema>) {
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
    <>
      <div>
        <DateRangePicker
          onUpdate={(values) => console.log(values)}
          initialDateFrom={new Date()}
          initialDateTo={(new Date())}
          align="start"
          locale="en-GB"
          showCompare={false}
        />
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
    </>
  );
}
