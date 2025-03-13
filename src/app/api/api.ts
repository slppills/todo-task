import { Todo } from "@/types/todo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (title: string) => {
      await axios.post("http://localhost:3000/todos", {
        title,
        completed: false
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  });
};

const fetchTodos = async () => {
  const { data } = await axios.get("http://localhost:3000/todos");
  return data;
};

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (todos) => todos.filter((todo: Todo) => !todo.completed)
  });
};

export const useDone = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (todos) => todos.filter((todo: Todo) => todo.completed)
  });
};

export const useCompleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await axios.patch(`http://localhost:3000/todos/${id}`, { completed: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`http://localhost:3000/todos/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  });
};
