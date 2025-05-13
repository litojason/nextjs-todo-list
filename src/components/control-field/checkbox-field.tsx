/* eslint-disable @typescript-eslint/no-explicit-any */

import { Control } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";

type InputFieldProps = {
  control: Control<any>;
  name: string;
  label: string;
};

export default function CheckboxField({
  control,
  name,
  label,
}: InputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex items-center">
          <FormControl>
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormLabel htmlFor={name}>{label}</FormLabel>
        </FormItem>
      )}
    />
  );
}
