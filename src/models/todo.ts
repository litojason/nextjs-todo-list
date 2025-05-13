import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const todoSchema = z.object({
  id: z.number(),
  title: z.string().trim().nonempty({
    message: "Title is required.",
  }),
  description: z.string().trim().nonempty({
    message: "Description is required.",
  }),
  isCompleted: z.boolean(),
});
export const todoResolver = zodResolver(todoSchema);
export type Todo = z.infer<typeof todoSchema>;

const todoFormSchema = todoSchema.omit({ id: true });
export const todoFormResolver = zodResolver(todoFormSchema);
export type TodoFormData = z.infer<typeof todoFormSchema>;
