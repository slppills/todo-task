"use client";

import { useState } from "react";
import TodoList from "../TodoList/TodoList";
import DoneList from "../DoneList/DoneList";
import { useCreateTodo } from "@/app/api/api";

const TodoComponent = () => {
  const [inputTodo, setInputTodo] = useState<string>("");
  const { mutate: addTodo } = useCreateTodo();

  const handleAddTodo = () => {
    alert("할 일이 추가되었습니다.");
    addTodo(inputTodo);
    setInputTodo("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-r from-[#9EC5FC] to-[#D7C3FC]">
      <div className="w-[60%] max-w-[1100px] min-w-[280px] overflow-hidden rounded-md bg-white p-4">
        <div className="flex flex-col items-center">
          <p className="xxl:text-[1.5rem] font-bold text-[#7A90E2] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem]">
            오늘의 할 일
          </p>
          <div className="mt-5 mb-10 flex gap-6">
            <input
              className="w-[150px] border-b border-black md:w-[200px] lg:w-[250px] xl:w-[300px]"
              type="text"
              value={inputTodo}
              onChange={(e) => setInputTodo(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleAddTodo} className="rounded-sm bg-[#7A90E2] px-2 py-1 text-[0.875rem] text-white">
              추가
            </button>
          </div>
          <div className="flex w-full flex-col gap-5 md:flex-row">
            <TodoList />
            <DoneList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
