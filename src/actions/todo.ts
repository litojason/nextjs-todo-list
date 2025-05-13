"use server";

import { revalidatePath } from "next/cache";

import client, { ClientError } from "@/lib/client";
import { Todo, TodoFormData } from "@/models/todo";

type GetTodosResponse = {
  message: string;
  todos: Todo[];
};
export const getTodos = async () => {
  try {
    const resData = await client.get<GetTodosResponse>("/todos");

    return resData.todos;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

type GetTodoByIdResponse = {
  message: string;
  todo: Todo;
};
export const getTodoById = async (id: number) => {
  try {
    const resData = await client.get<GetTodoByIdResponse>(`/todos/${id}`);

    return resData.todo;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

type AddTodoResponse = {
  message: string;
  todo: Todo;
};
export const addTodo = async (data: TodoFormData) => {
  try {
    await client.post<TodoFormData, AddTodoResponse>("/todos", data);
  } catch (error) {
    throw (error as ClientError).message;
  }

  revalidatePath("/todo");
};

export const updateTodo = async (id: number, data: TodoFormData) => {
  try {
    await client.put(`/todos/${id}`, data);
  } catch (error) {
    throw (error as ClientError).message;
  }

  revalidatePath("/todo");
};

export const deleteTodo = async (id: number) => {
  try {
    await client.delete(`/todos/${id}`);
  } catch (error) {
    throw (error as ClientError).message;
  }

  revalidatePath("/todo");
};

type CompleteTodoResponse = {
  message: string;
  todo: Todo;
};
export const completeTodo = async (
  id: number,
  isCompleted: TodoFormData["isCompleted"]
) => {
  try {
    await client.put<
      { isCompleted: TodoFormData["isCompleted"] },
      CompleteTodoResponse
    >(`/todos/complete/${id}`, { isCompleted });
  } catch (error) {
    throw (error as ClientError).message;
  }
};
