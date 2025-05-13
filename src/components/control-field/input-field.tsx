/* eslint-disable @typescript-eslint/no-explicit-any */

import { HTMLInputTypeAttribute } from "react";
import { Control } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type InputFieldProps = {
  control: Control<any>;
  type?: HTMLInputTypeAttribute;
  name: string;
  label: string;
  placeholder: string;
  description?: string;
};

export default function InputField({
  control,
  type,
  name,
  label,
  placeholder,
  description,
}: InputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name}>{label}</FormLabel>

          <FormControl>
            <Input id={name} placeholder={placeholder} type={type} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
