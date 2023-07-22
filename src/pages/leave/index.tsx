import { useState, useEffect } from "react";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "~/components/ui/auto-form";

const formSchema = z.object({
  username: z
    .string({
      required_error: "Username is required.",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),

  password: z
    .string({
      required_error: "Password is required.",
    })
    .describe("Your secure password")
    .min(8, {
      message: "Password must be at least 8 characters.",
    }),

  favouriteNumber: z.coerce
    .number({
      invalid_type_error: "Favourite number must be a number.",
    })
    .min(1, {
      message: "Favourite number must be at least 1.",
    })
    .max(10, {
      message: "Favourite number must be at most 10.",
    })
    .default(1)
    .optional(),

  acceptTerms: z
    .boolean()
    .describe("Accept terms and conditions.")
    .refine((value) => value, {
      message: "You must accept the terms and conditions.",
      path: ["acceptTerms"],
    }),

  sendMeMails: z.boolean().optional(),

  birthday: z.coerce.date().optional(),

  color: z.enum(["red", "green", "blue"]),
});

export default function Index() {
  const [values, setValues] = useState<Partial<z.infer<typeof formSchema>>>({});

  useEffect(() => {
    console.log("Values", values);
  }, [values]);
  
  return (
  <>
    <div>
      <AutoForm
        formSchema={formSchema}
        values={values}
        onValuesChange={setValues}
        fieldConfig={{
          password: {
            inputProps: {
              type: "password",
              placeholder: "••••••••",
            },
          },
          favouriteNumber: {
            description: "Your favourite number between 1 and 10.",
            inputProps: {
              type: "number",
            },
          },
          acceptTerms: {
            inputProps: {
              required: true,
            },
            description: (
              <>
                I agree to the{" "}
                <a
                  href="#"
                  className="text-primary underline"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Terms and conditions clicked.");
                  }}
                >
                  terms and conditions
                </a>
                .
              </>
            ),
          },

          birthday: {
            description: "We need your birthday to send you a gift.",
          },

          sendMeMails: {
            fieldType: "switch",
          },
        }}
      >
        <AutoFormSubmit>Send now</AutoFormSubmit>
      </AutoForm>
    </div>
  </>);
}
